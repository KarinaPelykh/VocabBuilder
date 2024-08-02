import { useSelector } from "react-redux";
import { TasksSelect } from "../../redux/words/selector";
import Image from "next/image";

import bookX2 from "../../images/img-2@/book_desk@2x.png";
export const WellDoneModal = () => {
  const doneTask = useSelector(TasksSelect);
  return (
    <div className="relative w-[100%] h-[100%]">
      <h1 className="text-[24px] text-[#fff] font-fixelBold text-center leading-[1.17] mb-[32px]  md:leading-[1.2] md:text-[40px]">
        Well done
      </h1>
      <div className="flex justify-start ">
        <div className="mr-[64px]">
          <h3 className="text-[rgba(252,252,252,0.5)]  font-fixelRegular text-[14px] md:text-[16px] md:leading-[1.5]">
            Сorrect answers:
          </h3>
          {doneTask.map(({ en, isDone, _id }) => {
            return isDone ? (
              <p
                className="text-[16px] text-[#fff] font-fixelMedium mb-[4px]  leading-[1.5]  md:text-[20px]"
                key={_id}
              >
                {en}
              </p>
            ) : null;
          })}
        </div>
        <div>
          <h3 className="text-[rgba(252,252,252,0.5)] text-[14px] font-fixelRegular md:text-[16px] md:leading-[1.5] ">
            Mistakes:
          </h3>
          {doneTask?.map(({ en, isDone, _id }) => {
            return isDone ? null : (
              <p
                className="text-[16px] text-[#fff] font-fixelMedium mb-[4px] leading-[1.5] md:text-[20px]"
                key={_id}
              >
                {en}
              </p>
            );
          })}
        </div>
      </div>

      <Image
        src={bookX2}
        alt="book"
        width={212}
        height={179}
        priority
        className="absolute w-[152px] h-[121px]   right-[-14px] bottom-[-16px] md:w-[212px] md:h-[179px]  md:right-[-64px] md:bottom-[-16px] "
      />
    </div>
  );
};
