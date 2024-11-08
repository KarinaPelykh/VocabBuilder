import Image from "next/image";
import { Button } from "../Button/Button";

import fileX2 from "../../images/img-2@/file_desk@2x.png";
export const Grating = ({ onClick }) => {
  return (
    <section className="flex  mt-[75px]  md:mt-[140px] xl:mt-[193px]">
      <div className="mx-[auto]  md:py-[17px] md:px-[24px] md:w-[902px]  xl:flex md:justify-between xl:items-center xl:flex-row-reverse">
        <Image
          src={fileX2}
          alt="file"
          className="w-[144px] h-[166px] mx-[auto] md:w-[205px] md:h-[230px]"
        />

        <div className="md:w-[581px] md:h-[254px] ">
          <h1 className=" text-black text-[16px] leading-[1.5] font-fixelMedium mb-[16px] md:text-[20px] md:mb-[32px]">
            You don&#39;t have a single word to learn right now.{" "}
          </h1>
          <p className=" text-black text-[14px] leading-[1.5] font-fixelRegular mb-[132px]  md:text-[16px] md:mb-[64px]">
            Please create or add a word to start the workout. We want to improve
            your vocabulary and develop your knowledge, so please share the
            words you are interested in adding to your study.
          </p>
          <div className=" md:flex ">
            <Button
              onClick={onClick}
              svg="hidden"
              text="Add word"
              type="button"
              className=" mr-[8px] flex text-[#fff] text-[18px] w-[100%] bg-green rounded-[30px] py-[14px]  md:w-[203px] md:h-[56px] xl:mr-[10px]"
            />
            <Button
              svg="hidden"
              text="Cancel"
              type="button"
              className=" text-gray md:text-green bg-[transparent] w-[100%] md:border  text-[18px] md:border-[#85aa9f] rounded-[30px] px-[64px] py-[14px] md:w-[203px] md:h-[56px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
