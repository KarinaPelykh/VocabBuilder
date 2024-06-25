"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { Error } from "../Message/Error";
import { Success } from "../Message/Success";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import { userIsLoggedIn } from "../../redux/auth/selector";
import { userSignUp } from "../../redux/auth/operations";
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup
      .string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "you have mistake try again")
      .required(),
    password: yup
      .string()
      .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, "Error password")
      .required(),
  })
  .required();
export const RegistrationForm = () => {
  const [isShow, setIsShow] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(userIsLoggedIn);
  const router = useRouter();
  const handleShow = () => {
    setIsShow(!isShow);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { name, email, password } = data;
    dispatch(userSignUp({ name, email, password }))
      .unwrap()
      .then(() => router.push("/dictionary"));
    reset();
  };

  const isPasswordLengthValid = () => {
    const pattern = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;
    if (pattern.test(password) && password !== "") {
      return true;
    } else {
      return false;
    }
  };
  const isValid = isPasswordLengthValid();

  return (
    <form
      className="xl:w-[658px] xl:h-[592px] rounded-[30px] bg-[#85aa9f19] px-[64px] py-[48px] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-[40px] font font-fixelBold leading-[1,02] mb-[20px] text:black">
        Register
      </h1>
      <p className="text-[20px] font-fixelRegular leading-[1,05] text-[#121417cc] mb-[32px]">
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>
      <div className="flex flex-col mb-[32px]">
        <label className="relative">
          <input
            {...register("name")}
            className="w-[100%] h-[56px] py-[16px] px-[18px] border-[1px] border-[#12141719] border-solid rounded-m text-black mb-[15px] placeholder:text-black placeholder:text-[16px] outline-none bg-[#85aa9f19]"
            name="name"
            type="text"
            placeholder="Name"
          />
          <p className=" text-[12px] leading-[1,05] font-fixelRegular  absolute top-[55px]">
            {errors.name?.message}
          </p>
        </label>

        <label className="relative">
          <input
            {...register("email")}
            className="  w-[100%] h-[56px] py-[16px] px-[18px] border-[1px] border-[#12141719] border-solid rounded-m text-black mb-[15px] placeholder:text-black placeholder:text-[16px] outline-none bg-[#85aa9f19]"
            name="email"
            type="email"
            placeholder="Email"
          />
          <p className="] text-[12px] leading-[1,05] font-fixelRegular absolute top-[55px] ">
            {errors.email?.message}
          </p>
        </label>

        <label className="relative">
          <input
            {...register("password")}
            className={clsx(
              "relative w-[100%] h-[56px] py-[16px] px-[18px] border-[1px] border-[#12141719] border-solid rounded-m text-black placeholder:text-black placeholder:text-[16px] outline-none bg-[#85aa9f19]",
              errors.password?.message
                ? "border-[#ff0000]"
                : isValid && "border-[#00ff00]"
            )}
            name="password"
            type={isShow ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="absolute bottom-[15px] right-[18px]"
            type="button"
            onClick={handleShow}
          >
            {!isShow ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_83_22606)">
                  <path
                    d="M14.9499 14.95C13.5254 16.0358 11.7908 16.6374 9.99992 16.6667C4.16659 16.6667 0.833252 10 0.833252 10C1.86983 8.06825 3.30753 6.38051 5.04992 5.05M8.24992 3.53333C8.82353 3.39907 9.41081 3.33195 9.99992 3.33333C15.8333 3.33333 19.1666 10 19.1666 10C18.6607 10.9463 18.0575 11.8373 17.3666 12.6583M11.7666 11.7667C11.5377 12.0123 11.2617 12.2093 10.955 12.3459C10.6484 12.4826 10.3173 12.556 9.98166 12.562C9.64599 12.5679 9.31256 12.5061 9.00126 12.3804C8.68997 12.2547 8.40719 12.0675 8.16979 11.8301C7.9324 11.5927 7.74525 11.31 7.61951 10.9987C7.49377 10.6874 7.43202 10.3539 7.43795 10.0183C7.44387 9.68258 7.51734 9.35154 7.65398 9.04487C7.79062 8.73821 7.98763 8.46221 8.23325 8.23333"
                    stroke="#121417"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.833252 0.833336L19.1666 19.1667"
                    stroke="#121417"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_83_22606">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_83_22633)">
                  <path
                    d="M0.833252 10C0.833252 10 4.16659 3.33333 9.99992 3.33333C15.8333 3.33333 19.1666 10 19.1666 10C19.1666 10 15.8333 16.6667 9.99992 16.6667C4.16659 16.6667 0.833252 10 0.833252 10Z"
                    stroke="#121417"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                    stroke="#121417"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_83_22633">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </button>
        </label>
        <div>
          {errors.password?.message ? (
            <Error prop={errors.password?.message} />
          ) : isValid ? (
            <Success />
          ) : null}
        </div>
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
