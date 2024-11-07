"use client";

import { useValidationCredentials } from "./useValidationCredentials";

import { Button, ReusableLink } from "@/components/ui";
import { HideButton } from "./HideButton";
import { LabelInput } from "./LableInput";
import { useState } from "react";
import { Error, Success } from "../Message";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";

import { userSignUp } from "../../redux/auth/operations";
import { toast } from "react-toastify";
import clsx from "clsx";

export const RegistrationForm = () => {
  const [isShow, setIsShow] = useState(false);

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useValidationCredentials();

  const onSubmit = (data) => {
    dispatch(userSignUp(data))
      .unwrap()
      .then(() => {
        router.push("/dictionary");
        toast.success("You sing up");
      })
      .catch((error) => toast.error(error));
    reset();
  };

  const isPasswordLengthValid = () => {
    const pattern = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

    return pattern.test(password) ? true : false;
  };

  const isValid = isPasswordLengthValid();

  return (
    <form
      className="px-4 pt-8 pb-14 rounded-t-[30px]  md:px-16 md:py-12 md:w-[628px] md:h-[592px] md:mt-[140px] xl:w-[658px] xl:h-[592px] md:rounded-[30px] bg-[#85aa9f19] xl:mt-0 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-fixelBold  text:black text-[30px] leading-[1,07] mb-4 md:text-[40px]   md:leading-[1,02] md:mb-5 ">
        Register
      </h1>
      <p className="font-fixelRegular  text-[#121417cc] leading-[1,05]  text-[16px]  mb-4   md:text-[20px] md:leading-[1,05] md:mb-8">
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>
      <div className="flex flex-col mb-8">
        <LabelInput
          register={{ ...register("name") }}
          name="name"
          type="text"
          placeholder="Name"
          error={errors.name?.message}
        />

        <LabelInput
          register={{ ...register("email") }}
          name="email"
          type="email"
          placeholder="Email"
          error={errors.email?.message}
        />

        <LabelInput
          register={{ ...register("password") }}
          name="password"
          type={isShow ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className={clsx(
            " mb-0",
            !errors.password?.message && isValid
              ? "!border-[#00ff00]"
              : !isValid && password !== "" && "border-[#ff0000]"
          )}
        >
          <HideButton isShow={isShow} onClick={() => setIsShow(!isShow)} />
        </LabelInput>

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
      <Button
        type="submit"
        className="w-full text-white py-4 rounded-x bg-green mb-4 text-[18px] font-bold"
      >
        Register
      </Button>
      <ReusableLink
        className="text-gray underline flex justify-center text-[16px] font-bold"
        href="/login"
      >
        Login
      </ReusableLink>
    </form>
  );
};
