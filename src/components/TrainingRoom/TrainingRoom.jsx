"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import useToggle from "../../hooks/useToggle";
import { TasksSelect } from "../../redux/words/selector";
import { AddMadeTasks, AllTasks } from "../../redux/words/operations";

import { Grating } from "../../components/UI/Grating";
import { WellDoneModal } from "../Modal/WellDoneModal";
import { Modal } from "../Modal/Modal";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { FormForTranslate } from "./FormForTranslate";

export const TrainingRoom = () => {
  const { open, close, isOpen } = useToggle();
  const [word, setWord] = useState("");
  const [learnedWords, setLearnedWords] = useState([]);
  const [arr, setArr] = useState([]);
  const [numberTask2, setNumberTask2] = useState(0);
  const [numberTask, setNumberTask] = useState(1);
  const { tasks } = useSelector(TasksSelect);

  const router = useRouter();
  const dispatch = useDispatch();

  const doneTasks = learnedWords?.length;
  const generalAmountTasks = tasks?.length;

  useEffect(() => {
    dispatch(AllTasks());
  }, [dispatch]);

  const trainTasks = tasks?.slice(numberTask2, numberTask);

  const handelGetWord = (e) => setWord(e.target.value);

  const handelNextWord = () => {
    if (word !== "") {
      setLearnedWords((prevState) => [...prevState, word]);
      setWord("");
    }
    setNumberTask((prev) => prev + 1);
    setNumberTask2((prev) => prev + 1);

    const finishedTask = trainTasks.reduce((acc, item = null) => {
      if (word !== "") {
        const updateTask = {
          ...item,
          [item.task === "ua" ? "ua" : "en"]: word,
        };
        acc.push(updateTask);
      }
      return acc;
    }, []);
    setArr((p) => [...p, finishedTask]);
  };
  const madeNormalArray = arr.flatMap((item) => item);

  const handelSaveAnswer = (e) => {
    e.preventDefault();
    dispatch(AddMadeTasks({ madeTask: madeNormalArray }))
      .unwrap()
      .then(() => {
        open();
      })
      .catch((error) => toast.error(error));
  };

  const handelRelocation = () => {
    close();
    router.push("/dictionary");
  };

  const handelAddWord = () => {
    router.push("/dictionary");
  };
  return (
    <>
      {tasks && tasks.length !== 0 ? (
        <>
          <ProgressBar
            doneTasks={doneTasks}
            generalAmountTasks={generalAmountTasks}
            className="w-[58px] h-[58px]  mt-[24px] md:mt-[62px]"
            variant=" justify-end"
          />
          <FormForTranslate
            trainTasks={trainTasks}
            word={word}
            handelGetWord={handelGetWord}
            learnedWords={learnedWords}
            tasks={tasks}
            handelSaveAnswer={handelSaveAnswer}
            handelNextWord={handelNextWord}
          />
        </>
      ) : (
        <Grating onClick={handelAddWord} />
      )}
      <Modal
        onClick={handelRelocation}
        isOpen={isOpen}
        className="w-[342px] h-[458px] py-[48px] px-[16px] rounded-[15px] md:w-[528px] md:h-[520px] md:px-[64px] md:py-[48px] md:rounded-[30px]"
      >
        <WellDoneModal />
      </Modal>
    </>
  );
};
