import { Icon } from "../ui/Icon";

export const Success = () => {
  return (
    <div className="flex">
      {/* <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4548_1201)">
          <path
            d="M7.99992 14.6667C4.31792 14.6667 1.33325 11.682 1.33325 8C1.33325 4.318 4.31792 1.33333 7.99992 1.33333C11.6819 1.33333 14.6666 4.318 14.6666 8C14.6666 11.682 11.6819 14.6667 7.99992 14.6667ZM7.22925 10.99L11.9426 6.276L10.9999 5.33333L7.22925 9.10467L5.34325 7.21867L4.40058 8.16133L7.22925 10.99Z"
            fill="#3CBF61"
          />
        </g>
        <defs>
          <clipPath id="clip0_4548_1201">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg> */}
      <Icon name="checkbox-succsus" width="16" height="16" />
      <p className=" ml-[4px] text-[12px] leading-[1,05] font-fixelRegular text-[#00ff00]">
        Success password
      </p>
    </div>
  );
};
