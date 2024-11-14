import Image from "next/image";
export const Invitation = () => {
  return (
    <div className=" flex justify-center items-center flex-col my-auto">
      <p className=" text-[16px] xl:text-[20px] font-fixelBold text-green ">
        Add new word for starting learn
      </p>
      <Image
        src={"/hero/children_desk.png"}
        alt="children"
        width={300}
        height={250}
      />
    </div>
  );
};
