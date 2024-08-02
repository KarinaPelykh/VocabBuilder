import { usePathname } from "next/navigation";
import useSizeWindow from "../../../hooks/useSizeWindow";
import { Icon } from "../../Icon";

export const Table = ({ children }) => {
  const { size } = useSizeWindow();
  const pathname = usePathname();
  const route = pathname === "/recommend";
  return (
    <div className="flex justify-center md:bg-[#fcfcfc] md:p-[18px] md:mt-[28px] md:rounded-[15px] md:w-[704px] xl:w-[100%]">
      <table className=" w-[100%]   md:max-h-[640px] md:w[668px]  xl:w-[100%] ">
        <thead>
          <tr className=" bg-[#8bb0a519] ">
            <th className="border-r border-[#DBDBDB]  rounded-tl-[15px] font-fixelMedium text-black px-[14px] py-[16px] text-[16px]  md:p-[22px] md:text-[20px]  ">
              <div className="flex justify-between">
                <p> Word</p>
                <Icon
                  width="32"
                  height="32"
                  name="icon-united-kingdom"
                  className="hidden ml-[8px] md:flex"
                />
              </div>
            </th>
            <th className=" border-r border-[#DBDBDB] font-fixelMedium text-black px-[14px] py-[16px] text-[16px]  md:p-[22px] md:text-[20px]">
              <div className="flex justify-between">
                <p> Translation</p>
                <Icon
                  width="32"
                  height="32"
                  name="icon-ukraine"
                  className="hidden md:flex ml-[8px]"
                />
              </div>
            </th>

            {route || size >= 767 ? (
              <th className="border-r border-[#DBDBDB] font-fixelMedium text-black  px-[14px] py-[16px] text-[16px] text-start md:p-[22px] md:text-[20px] ">
                Category
              </th>
            ) : null}

            {route ? null : (
              <th className="border-r border-[#DBDBDB] font-fixelMedium text-black px-[14px] py-[16px] text-[16px]  md:p-[22px] md:text-[20px]  ">
                Progress
              </th>
            )}

            <th className="w-[50px] rounded-tr-[15px]"></th>
          </tr>
        </thead>
        <tbody className="  bg-[#fcfcfc] ">{children}</tbody>
      </table>
    </div>
  );
};
