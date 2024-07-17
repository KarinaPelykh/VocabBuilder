"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllTasks } from "../../redux/words/operations";
import { Grating } from "../../components/UI/Grating";
import { TasksSelect } from "../../redux/words/selector";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";
export const TrainingRoom = () => {
  const [learned, setLearned] = useState([]);
  const tasks = useSelector(TasksSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllTasks());
  }, [dispatch]);
  const handelNextWord = () => {
    setLearned;
  };
  return (
    <>
      {tasks ? (
        <>
          <div className="mt-[136px] mb-[80px] bg-[#fff] w-[100%] h-[338px] px-[18px] py-[18px] flex rounded-[15px]">
            <div className="bg-[#FCFCFC] w-[100%] h-[auto] border-r border-[#DBDBDB] rounded-tl-[15px] rounded-bl-[15px]   px-[22px] py-[22px]">
              <div className="flex justify-between mb-[204px] ">
                <input placeholder="Введіть переклад" />
                <div className=" flex items-center">
                  <Icon
                    width="32"
                    height="32"
                    name="icon-ukraine"
                    className="mr-[8px]"
                  />
                  <p className="ml-[8px]">Ukrainian</p>
                </div>
              </div>

              <Button
                onClick={handelNextWord}
                svg="stroke-grey"
                text="Next"
                type="button"
                className="bg-[transparent] text-gray"
              />
            </div>
            <div className="bg-[#FCFCFC]  w-[100%] h-[auto] rounded-tr-[15px] rounded-br-[15px]   px-[22px] py-[22px]">
              <div className="flex justify-between mb-[204px] ">
                <p> {tasks.tasks[0].task}</p>
                <div className=" flex items-center">
                  <Icon
                    width="32"
                    height="32"
                    name="icon-united-kingdom"
                    className="mr-[8px]"
                  />
                  <p className="ml-[8px]">English</p>
                </div>
              </div>
            </div>
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
        </>
      ) : (
        <Grating />
      )}
    </>
  );
};
