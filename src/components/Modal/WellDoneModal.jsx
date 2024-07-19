import { useSelector } from "react-redux";
import { TasksSelect } from "../../redux/words/selector";
import Image from "next/image";
import book from "../../images/book.png";
export const WellDoneModal = () => {
  const doneTask = useSelector(TasksSelect);
  return (
    <div className="relative w-[100%] h-[100%]">
      <h1 className="text-[40px] text-[#fff] font-fixelBold text-center leading-[1.2]">
        Well done
      </h1>
      <div className="flex justify-start ">
        <div className="mr-[64px]">
          <h3 className="text-[rgba(252,252,252,0.5)] text-[16px] leading-[1.5] font-fixelRegular">
            Сorrect answers:
          </h3>
          {doneTask.map(({ en, isDone, _id }) => {
            return isDone ? (
              <p
                className="text-[20px] text-[#fff] font-fixelMedium mb-[4px]"
                key={_id}
              >
                {en}
              </p>
            ) : null;
          })}
        </div>
        <div>
          <h3 className="text-[rgba(252,252,252,0.5)] text-[16px] leading-[1.5] font-fixelRegular">
            Mistakes:
          </h3>
          {doneTask.map(({ en, isDone, _id }) => {
            return isDone ? null : (
              <p
                className="text-[20px] text-[#fff] font-fixelMedium mb-[4px]"
                key={_id}
              >
                {en}
              </p>
            );
          })}
        </div>
      </div>
      <Image
        src={book}
        alt="book"
        width={212}
        height={179}
        priority
        className="absolute  right-[-64px] bottom-[-16px] "
      />
    </div>
  );
};
