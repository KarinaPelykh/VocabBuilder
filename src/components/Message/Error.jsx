export const Error = ({ prop }) => {
  return (
    <div className="flex">
      {prop && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4548_1210)">
            <path
              d="M7.99992 14.6667C4.31792 14.6667 1.33325 11.682 1.33325 8C1.33325 4.318 4.31792 1.33333 7.99992 1.33333C11.6819 1.33333 14.6666 4.318 14.6666 8C14.6666 11.682 11.6819 14.6667 7.99992 14.6667ZM7.33325 10V11.3333H8.66659V10H7.33325ZM7.33325 4.66667V8.66667H8.66659V4.66667H7.33325Z"
              fill="#D80027"
            />
          </g>
          <defs>
            <clipPath id="clip0_4548_1210">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      <p className="ml-[4px] text-[12px] leading-[1,05] font-fixelRegular text-[#ff0000]">
        {prop}
      </p>
    </div>
  );
};
