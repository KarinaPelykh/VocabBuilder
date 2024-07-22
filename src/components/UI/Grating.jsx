import Image from "next/image";
import { Button } from "../Button/Button";
import file from "../../images/img-1@/file_desk@1x.png";
export const Grating = ({ onClick }) => {
  return (
    <section className="flex">
      <div className="mx-[auto] mt-[193px]  flex py-[17px] px-[24px] w-[902px] justify-between items-center">
        <div className="w-[581px] h-[254px] ">
          <h1 className=" text-black text-[20px] leading-[1,05] fontWeight-fixelMedium mb-[32px]">
            You don&#39;t have a single word to learn right now.{" "}
          </h1>
          <p className=" text-black text-[16px] leading-[1,05] fontWeight-fixelRegular mb-[64px]">
            Please create or add a word to start the workout. We want to improve
            your vocabulary and develop your knowledge, so please share the
            words you are interested in adding to your study.
          </p>
          <div className=" flex justify-between">
            <Button
              onClick={onClick}
              svg="hidden"
              text="Add word"
              type="button"
              className=" flex text-[#fff] text-[18px] bg-green rounded-[30px] py-[14px] w-[203px] h-[56px]"
            />
            <Button
              svg="hidden"
              text="Cancel"
              type="button"
              className="text-green bg-[transparent] border  text-[18px] border-[#85aa9f] rounded-[30px] px-[64px] py-[14px] w-[203px] h-[56px]"
            />
          </div>
        </div>
        <Image src={file} alt="file" />
      </div>
    </section>
  );
};
