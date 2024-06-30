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
import { Icon } from "../Icon";
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
              <Icon
                width="20"
                height="20"
                name={"icon-eye-off"}
                className="fill-[#85aa9f19] stroke-black"
              />
            ) : (
              <Icon
                width="20"
                height="20"
                name={"icon-eye"}
                className="fill-[#85aa9f19] stroke-black"
              />
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
