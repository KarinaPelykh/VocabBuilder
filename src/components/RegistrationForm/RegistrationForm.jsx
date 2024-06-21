import Link from "next/link";

export const RegistrationForm = () => {
  return (
    <form className="xl:w-[658px] xl:h-[592px] rounded-[30px] bg-[#85aa9f19] px-[64px] py-[48px] ">
      <h1 className="text-[40px] font font-fixelBold leading-[1,02] mb-[20px] text:black">
        Register
      </h1>
      <p className="text-[20px] font-fixelRegular leading-[1,05] text-[#121417cc] mb-[32px]">
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>
      <div className="flex flex-col mb-[32px]">
        <input
          className="w-[100%] h-[56px] py-[16px] px-[18px] border-[1px] border-[#12141719] border-solid rounded-m text-black mb-[15px] placeholder:text-black placeholder:text-[16px] outline-none bg-[#85aa9f19]"
          name="name"
          type="text"
          placeholder="Name"
        />
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
        Register
      </button>
      <Link
        className="text-gray underline flex justify-center text-[16px] font-bold"
        href="/login"
      >
        Login
      </Link>
    </form>
  );
};
