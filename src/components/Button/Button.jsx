import clsx from "clsx";

export const Button = ({ text, onClick, children, className, svg }) => {
  return (
    <button
      className={clsx(
        "ml-[16px] text-[16px] font-fixelMedium leading-[1,05] flex justify-center items-center",
        className
      )}
      onClick={onClick}
    >
      {text}
      <svg
        className={clsx(" ml-[6px] flex", className, svg)}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.93335 8H13.7333"
          stroke="#121417"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.59998 3.33337L14.2666 8.00004L9.59998 12.6667"
          stroke="#121417"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {children}
    </button>
  );
};
