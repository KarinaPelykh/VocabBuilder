import Link from "next/link";

export const LoginForm = () => {
  return (
    <form className="xl:w-[628px] xl:h-[518px] rounded-[30px] bg-[#85aa9f19] px-[64px] py-[48px] ">
      <h1 className="text-[40px] font font-fixelBold leading-[1,02] mb-[20px] text:black">
        Login
      </h1>
      <p className="text-[20px] font-fixelRegular leading-[1,05] text-[#121417cc] mb-[32px]">
        Please enter your login details to continue using our service:
      </p>
      <div className="flex flex-col mb-[32px]">
        <input
          className="w-[100%] h-[56px] py-[16px] px-[18px] border-[1px] border-[#12141719] border-solid rounded-m text-black mb-[15px] placeholder:text-black placeholder:text-[16px] outline-none bg-[#85aa9f19]"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-[100%] h-[56px] py-[16px] px-[18px] border-[1px] border-[#12141719] border-solid rounded-m text-black placeholder:text-black placeholder:text-[16px] outline-none bg-[#85aa9f19]"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>

      <button
        className="w-[100%] text-white py-[16px] rounded-x bg-green mb-[16px] text-[18px] font-bold"
        type="submit"
      >
        Login
      </button>
      <Link
        className="text-gray underline flex justify-center text-[16px] font-bold"
        href="/registration"
      >
        Register
      </Link>
    </form>
  );
};
