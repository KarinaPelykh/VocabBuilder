"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { Error } from "../Message/Error";
import { Success } from "../Message/Success";
import clsx from "clsx";
import { userSignIn } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { userIsLoggedIn } from "../../redux/auth/selector";
import { Icon } from "../Icon";

const schema = yup
  .object({
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
export const LoginForm = () => {
  const [isShow, setIsShow] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(userIsLoggedIn);
  console.log(isLoggedIn);
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
    const { email, password } = data;
    dispatch(userSignIn({ email, password }))
      .unwrap()
      .then(() => router.push("/dictionary"))
      .catch((error) => console.log(error));

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
  console.log(errors);
  return (
    <form
      className="rounded-t-[30px] px-[16px] pt-[32px] pb-[57px] md:mb-[172px] md:mt-[140px] xl:m-0 md:w-[628px] md:h-[518px] md:rounded-[30px] bg-[#85aa9f19] md:px-[64px] md:py-[48px] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text:black  font-fixelBold  text-[30px] leading-[1,07] mb-[16px]  md:text-[40px]  md:leading-[1,02] mb:mb-[20px] ">
        Login
      </h1>
      <p className="font-fixelRegular text-[#121417cc]  leading-[1,05] text-[16px ] mb-[40px]   md:text-[20px]    md:mb-[32px]">
        Please enter your login details to continue using our service:
      </p>
      <div className="flex flex-col mb-[32px]">
        <label className="relative">
          <input
            {...register("email")}
            className="w-[100%] h-[56px] py-[16px] px-[18px] border-[1px] border-[#12141719] border-solid rounded-m text-black mb-[15px] placeholder:text-black placeholder:text-[16px] outline-none bg-[#85aa9f19]"
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
              !errors.password?.message && isValid
                ? "!border-[#00ff00]"
                : !isValid && password !== "" && "border-[#ff0000]"
            )}
            name="password"
            type={isShow ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleShow}>
            {!isShow ? (
              <Icon
                width="20"
                height="20"
                name={"icon-eye-off"}
                className="fill-[#85aa9f19] stroke-black absolute bottom-[15px] right-[18px]"
              />
            ) : (
              <Icon
                width="20"
                height="20"
                name={"icon-eye"}
                className="fill-[#85aa9f19] stroke-black absolute bottom-[15px] right-[18px]"
              />
            )}
          </button>
        </label>
        <div>
          {!errors.password?.message && isValid ? (
            <Success />
          ) : (
            !isValid &&
            password !== "" && (
              <Error prop={errors.password ? errors.password?.message : true} />
            )
          )}
        </div>
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
