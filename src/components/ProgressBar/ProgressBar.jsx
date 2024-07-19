"use client";
import { Circle } from "rc-progress";
import { useSelector } from "react-redux";
import { TasksSelect } from "../../redux/words/selector";

export const ProgressBar = ({ progress, lengthTasks = 0 }) => {
  // const doneTask = useSelector(TasksSelect);
  // const answeredTasks = doneTask?.tasks?.length || 0;
  // const progressUser = (answeredTasks / lengthTasks) * 100;
  // console.log(progressUser);
  return (
    <div className="flex">
      {progress}%
      <Circle
        className="w-[26px] h-[26px] ml-[16px] "
        strokeWidth={15}
        percent={progress}
        strokeColor="#2BD627"
        trailColor="#D4F8D3"
        trailWidth={15}
      />
    </div>
  );
};
