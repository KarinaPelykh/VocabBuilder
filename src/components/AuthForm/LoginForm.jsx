"use client";
import { useState } from "react";
import { Error, Success } from "./Message";
import clsx from "clsx";
import { userSignIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useValidateLogin } from "./hook";
import { Button, ReusableLink } from "@/components/ui";
import { HideButton } from "./HideButton";
import { LabelInput } from "./LableInput";

export const LoginForm = () => {
  const [isShow, setIsShow] = useState(false);

  const [password, setPassword] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useValidateLogin();

  const onSubmit = (data) => {
    dispatch(userSignIn(data))
      .unwrap()
      .then(() => {
        router.push("/dictionary");
        toast.success("you sing in");
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
      className="rounded-t-[30px] px-[16px] pt-[32px] pb-[57px] md:mb-[172px] md:mt-[140px] xl:m-0 md:w-[628px] md:h-[518px] md:rounded-[30px] bg-[#85aa9f19] md:px-[64px] md:py-[48px] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text:black  font-fixelBold  text-[30px] leading-[1,07] mb-[16px]  md:text-[40px]  md:leading-[1,02] mb:mb-[20px] ">
        Login
      </h1>
      <p className="font-fixelRegular text-[#121417cc]  leading-[1,05] text-[16px ] mb-[40px]   md:text-[20px]    md:mb-[32px]">
        Please enter your login details to continue using our service:
      </p>
      <div className="flex flex-col mb-8">
        <LabelInput
          register={{ ...register("email") }}
          name="email"
          type="email"
          placeholder="Email"
          errors={errors}
        />

        <LabelInput
          register={{ ...register("password") }}
          name="password"
          type={isShow ? "text" : "password"}
          placeholder="Password"
          errors={errors}
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
        className="w-[100%] text-white py-[16px] rounded-x bg-green mb-[16px] text-[18px] font-bold"
        type="submit"
      >
        Login
      </Button>
      <ReusableLink
        className="text-gray underline flex justify-center text-[16px] font-bold"
        href="/"
      >
        Register
      </ReusableLink>
    </form>
  );
};
