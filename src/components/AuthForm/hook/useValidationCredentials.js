import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useValidationCredentials = () => {
  const schemaRegistration = yup
    .object({
      name: yup.string().required(),
      email: yup
        .string()
        .matches(
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          "you have mistake try again"
        )
        .required(),
      password: yup
        .string()
        .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, "Error password")
        .required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegistration),
  });
  return {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  };
};
