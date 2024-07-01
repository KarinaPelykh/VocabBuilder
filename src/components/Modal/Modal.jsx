"use client";
export const Modal = ({ children, onClick, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className=" bg-[#12141733] w-[100%] h-[100%] fixed top-0 left-0 z-10 flex justify-center items-center">
          <div className="bg-green w-[628px]   absolute rounded-[30px] p-[64px]">
            <button
              onClick={onClick}
              className="absolute top-[20px] right-[20px] "
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="#FCFCFC"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="#FCFCFC"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
