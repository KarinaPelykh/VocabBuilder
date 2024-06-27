"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/words/operations";

export const WordsTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="bg-[#fcfcfc] p-[18px] mt-[28px] rounded-[15px]">
      <table className="w-[100%]">
        <thead>
          <tr className=" bg-[#8bb0a519;]  ">
            <th className=" border-r border-[#DBDBDB]  rounded-tl-[15px] p-[22px] text-[20px] font-fixelMedium text-black ">
              Word
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_92_1587)">
                  <path
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                    fill="#F0F0F0"
                  />
                  <path
                    d="M3.30749 6.25891C2.05068 7.8941 1.10299 9.77879 0.551178 11.8262H8.8748L3.30749 6.25891Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M31.4488 11.8262C30.897 9.77885 29.9492 7.89416 28.6925 6.25897L23.1253 11.8262H31.4488Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M0.551178 20.174C1.10305 22.2214 2.05074 24.1061 3.30749 25.7412L8.87462 20.174H0.551178Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M25.7411 3.30758C24.1059 2.05077 22.2213 1.10308 20.1739 0.551208V8.87477L25.7411 3.30758Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M6.25885 28.6924C7.89404 29.9492 9.77873 30.8969 11.8261 31.4488V23.1253L6.25885 28.6924Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M11.826 0.551208C9.77866 1.10308 7.89398 2.05077 6.25885 3.30752L11.826 8.87471V0.551208Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M20.1739 31.4488C22.2213 30.8969 24.106 29.9492 25.7411 28.6925L20.1739 23.1253V31.4488Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M23.1253 20.174L28.6925 25.7413C29.9492 24.1061 30.897 22.2214 31.4488 20.174H23.1253Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M31.8646 13.9131H18.0871H18.087V0.135438C17.4038 0.0465 16.7073 0 16 0C15.2926 0 14.5962 0.0465 13.9131 0.135438V13.9129V13.913H0.135438C0.0465 14.5962 0 15.2927 0 16C0 16.7074 0.0465 17.4038 0.135438 18.0869H13.9129H13.913V31.8646C14.5962 31.9535 15.2926 32 16 32C16.7073 32 17.4038 31.9536 18.0869 31.8646V18.0871V18.087H31.8646C31.9535 17.4038 32 16.7074 32 16C32 15.2927 31.9535 14.5962 31.8646 13.9131Z"
                    fill="#D80027"
                  />
                  <path
                    d="M20.174 20.174L27.3137 27.3138C27.6421 26.9855 27.9553 26.6423 28.2542 26.2866L22.1416 20.174H20.174V20.174Z"
                    fill="#D80027"
                  />
                  <path
                    d="M11.8261 20.174H11.8259L4.68625 27.3137C5.0145 27.6421 5.35769 27.9553 5.71344 28.2542L11.8261 22.1414V20.174Z"
                    fill="#D80027"
                  />
                  <path
                    d="M11.8261 11.8262V11.8261L4.68632 4.68628C4.35794 5.01453 4.04469 5.35772 3.74582 5.71347L9.85851 11.8262H11.8261V11.8262Z"
                    fill="#D80027"
                  />
                  <path
                    d="M20.174 11.8262L27.3138 4.68629C26.9855 4.35791 26.6423 4.04466 26.2866 3.74585L20.174 9.85854V11.8262Z"
                    fill="#D80027"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_92_1587">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
            <th className="border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
              Translation
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_92_1606)">
                  <path
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                    fill="#FFDA44"
                  />
                  <path
                    d="M0 16C0 7.1635 7.1635 0 16 0C24.8365 0 32 7.1635 32 16"
                    fill="#338AF3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_92_1606">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
            <th className="border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
              Category
            </th>
            <th className="border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
              Progress
            </th>
            <th className=" rounded-tr-[15px]"></th>
          </tr>
        </thead>
        <tbody className="bg-[#fcfcf] ">
          <tr>
            <td className="p-[22px] border border-[#DBDBDB] border-l-0 ">
              vzvcvzcz
            </td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB] border-r-0">...</td>
          </tr>
          <tr>
            <td className="p-[22px] border border-[#DBDBDB] border-l-0  ">
              vzvcvzcz
            </td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]  border-r-0">
              ...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
