import { Circle } from "rc-progress";

export const ProgressBar = ({ progress }) => {
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
