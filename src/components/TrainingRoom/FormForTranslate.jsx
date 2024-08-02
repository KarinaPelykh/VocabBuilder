import { Icon } from "../Icon";
import { Button } from "../Button/Button";
import clsx from "clsx";
export const FormForTranslate = ({
  trainTasks,
  word,
  handelGetWord,
  learnedWords,
  tasks,
  handelSaveAnswer,
  handelNextWord,
}) => {
  const defaultTasks = [
    {
      en: "Goodbye",
      ua: "До побачення",
      _id: "2",
      task: "en",
    },
  ];

  const defaultOrTrainTasks = trainTasks.length > 0 ? trainTasks : defaultTasks;

  return (
    <form className="" onSubmit={handelSaveAnswer}>
      <div className="mb-[116px] mt-[8px] md:mt-[16px] md:mb-[40px] md:bg-[#fff] md:w-[100%]   md:p-[18px]  md:rounded-[15px] xl:h-[338px]   xl:mb-[80px]">
        {defaultOrTrainTasks &&
          defaultOrTrainTasks.map(({ en, ua, _id, task }) => (
            <div key={_id} className="h-[100%] xl:flex ">
              <div className="w-[100%] h-[195px] p-[22px] bg-[#FCFCFC] border-[#DBDBDB] border-b     rounded-tl-[15px] rounded-tr-[15px]  md:relative  md:h-[282px] xl:border-b-0  xl:border-r   xl:rounded-tl-[15px] xl:rounded-bl-[15px] xl:rounded-tr-[0px] xl:h-[100%] ">
                <div className="flex justify-between flex-col md:flex-row  ">
                  <input
                    className={clsx(
                      "outline-none w-[100%] placeholder:text-[16px] font-fixelMedium text-[16px] xl:text-[20px] placeholder:text-black placeholder:font-fixelMedium  md:placeholder:text-[20px] md:placeholder:leading-[1.5]",
                      learnedWords.length === tasks.length
                        ? "placeholder:text-[#858383]"
                        : null
                    )}
                    value={word}
                    onChange={handelGetWord}
                    placeholder="Введіть переклад"
                    disabled={learnedWords.length === tasks.length}
                  />
                  <div className="flex   mt-[104px]  flex-row-reverse  md:block md:mt-0">
                    <div className="flex items-center">
                      <Icon
                        name={
                          task === "ua" ? "icon-ukraine" : "icon-united-kingdom"
                        }
                        className="mr-[8px] w-[28px] h-[28px]   md:w-[32px]
                      md:h-[32px]"
                      />
                      <p className=" text-[14px] font-fixelMedium md:text-[16px] md:leading-[1.5]">
                        {task
                          ? task === "ua"
                            ? "Ukrainian"
                            : "English"
                          : "English"}
                      </p>
                    </div>
                    {learnedWords.length === tasks.length ? null : (
                      <Button
                        onClick={() => handelNextWord(en)}
                        svg="stroke-grey"
                        text="Next"
                        type="button"
                        className="bg-[transparent] text-gray mr-[auto] md:mr-0 md:absolute md:bottom-[22px] md:left-[22px] md:flex"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-[#FCFCFC]  w-[100%]  h-[195px]  p-[22px] rounded-br-[15px] rounded-bl-[15px] md:h-[282px] md:rounded-tr-[15px] md:rounded-br-[15px]  xl:h-[100%]  ">
                <div className="flex justify-between flex-col  md:flex-row ">
                  <p className="text-[16px] font-fixelMedium leading-[1.5] md:text-[20px]">
                    {task === "en" ? ua : en}
                  </p>

                  <div className=" flex items-center mt-[104px] justify-end md:mt-0 md:justify-normal">
                    <Icon
                      name={
                        task === "ua" ? "icon-united-kingdom" : "icon-ukraine"
                      }
                      className="mr-[8px] w-[28px] h-[28px] md:w-[32px] md:h-[32px]"
                    />
                    <p className=" text-[14px] font-fixelMedium md:text-[16px] md:leading-[1.5]">
                      {task === "ua" ? "English" : "Ukrainian"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="md:flex  ">
        <Button
          onClick={handelSaveAnswer}
          svg="hidden"
          text="Save"
          type="submit"
          className=" flex text-[#fff] w-[100%] text-[18px] bg-green rounded-[30px] py-[14px] md:w-[203px] md:h-[56px] md:mr-[8px]"
        />
        <Button
          svg="hidden"
          text="Cancel"
          type="button"
          className=" text-gray md:text-green bg-[transparent] md:border w-[100%] text-[18px] md:border-[#85aa9f] rounded-[30px] px-[64px] py-[14px] md:w-[203px] md:h-[56px]"
        />
      </div>
    </form>
  );
};
