import { Icon } from "../Icon";
import { Button } from "../Button/Button";
export const FormForTranslate = ({
  trainTasks,
  word,
  handelGetWord,
  learnedWords,
  tasks,
  handelSaveAnswer,
  handelNextWord,
}) => {
  return (
    <form onSubmit={handelSaveAnswer}>
      <div className="mt-[16px] mb-[80px] bg-[#fff] w-[100%] h-[338px] px-[18px] py-[18px]  rounded-[15px]">
        {trainTasks &&
          trainTasks.map(({ en, ua, _id, task }) => (
            <div key={_id} className="flex h-[100%]">
              <div className="bg-[#FCFCFC] w-[100%] h-[auto] border-r border-[#DBDBDB] rounded-tl-[15px] rounded-bl-[15px]   px-[22px] py-[22px]">
                <div className="flex justify-between mb-[204px] ">
                  <input
                    className="outline-none w-[100%] px-[20px]"
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
                      {task
                        ? task === "ua"
                          ? "Ukrainian"
                          : "English"
                        : "English"}
                    </p>
                  </div>
                </div>
                {learnedWords.length === tasks.length ? null : (
                  <Button
                    onClick={() => handelNextWord(en)}
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
          onClick={handelSaveAnswer}
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
  );
};
