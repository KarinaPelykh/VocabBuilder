import Image from "next/image";
import children from "../../images/Img-webp/children_desk.webp";
export const Hero = () => {
  return  <div className="ml-[80px] relative z-10 ">
            <Image
              src={children}
              alt="children"
              width={498}
              height={435}
              priority
            />
            <p className=" text-[16px] font-fixelRegular leading-[1,05] text-center text-text1 ">
              Word · Translation · Grammar · Progress
            </p>
          </div>
  
};
