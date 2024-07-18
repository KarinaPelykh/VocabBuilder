"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllTasks } from "../../redux/words/operations";
import { Grating } from "../../components/UI/Grating";
import { TasksSelect } from "../../redux/words/selector";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";
export const TrainingRoom = () => {
  const [word, setWord] = useState("");
  const [learnedWords, setLearnedWords] = useState([]);
  const [arr, setArr] = useState([]);
  const [numberTask2, setNumberTask2] = useState(0);
  const [numberTask, setNumberTask] = useState(1);

  const { tasks } = useSelector(TasksSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllTasks());
  }, [dispatch]);

  const trainTasks = tasks?.slice(numberTask2, numberTask);

  const handelGetWord = (e) => setWord(e.target.value.trim());

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
          [item.task === "ua" ? "en" : "ua"]: word,
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

    console.log(madeNormalArray);
  };

  return (
    <>
      {tasks ? (
        <form onSubmit={handelSaveAnswer}>
          <div className="mt-[136px] mb-[80px] bg-[#fff] w-[100%] h-[338px] px-[18px] py-[18px]  rounded-[15px]">
            {trainTasks.map(({ en, ua, _id, task }) => (
              <div key={_id} className="flex h-[100%]">
                <div className="bg-[#FCFCFC] w-[100%] h-[auto] border-r border-[#DBDBDB] rounded-tl-[15px] rounded-bl-[15px]   px-[22px] py-[22px]">
                  <div className="flex justify-between mb-[204px] ">
                    <input
                      value={word}
                      onChange={handelGetWord}
                      placeholder="Введіть переклад"
                    />
                    <div className=" flex items-center">
                      <Icon
                        width="32"
                        height="32"
                        name={
                          task === "ua" ? "icon-ukraine" : "icon-united-kingdom"
                        }
                        className="mr-[8px]"
                      />
                      <p className="ml-[8px]">
                        {task === "ua" ? "Ukrainian" : "English"}
                      </p>
                    </div>
                  </div>
                  {numberTask === tasks.length ? null : (
                    <Button
                      onClick={handelNextWord}
                      svg="stroke-grey"
                      text="Next"
                      type="button"
                      className="bg-[transparent] text-gray"
                    />
                  )}
                </div>
                <div className="bg-[#FCFCFC]  w-[100%] h-[auto] rounded-tr-[15px] rounded-br-[15px]   px-[22px] py-[22px]">
                  <div className="flex justify-between mb-[204px] ">
                    <p> {task === "en" ? ua : en}</p>

                    <div className=" flex items-center">
                      <Icon
                        width="32"
                        height="32"
                        name={
                          task === "ua" ? "icon-united-kingdom" : "icon-ukraine"
                        }
                        className="mr-[8px]"
                      />
                      <p className="ml-[8px]">
                        {task === "ua" ? "English" : "Ukrainian"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex  ">
            <Button
              svg="hidden"
              text="Save"
              type="submit"
              className=" flex text-[#fff] text-[18px] bg-green rounded-[30px] py-[14px] w-[203px] h-[56px]"
            />
            <Button
              svg="hidden"
              text="Cancel"
              type="button"
              className="text-green bg-[transparent] border  text-[18px] border-[#85aa9f] rounded-[30px] px-[64px] py-[14px] w-[203px] h-[56px]"
            />
          </div>
        </form>
      ) : (
        <Grating />
      )}
    </>
  );
};
