import { Circle } from "rc-progress";

export const ProgressBar = ({ progress }) => {
  return (
    <td className=" flex p-[22px] border border-[#DBDBDB]">
      {progress}%
      <Circle
        className="w-[26px] h-[26px] ml-[16px] "
        strokeWidth={15}
        percent={progress}
        strokeColor="#2BD627"
        trailColor="#D4F8D3"
        trailWidth={15}
      />
    </td>
  );
};
