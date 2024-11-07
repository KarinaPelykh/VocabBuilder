import { Hero, LoginForm } from "@/components";
import { Logo } from "@/components/ui";
export default function Login() {
  return (
    <>
      <Logo />
      <div className="md:flex md:flex-col-reverse xl:flex-row-reverse items-center xl:justify-between xl:pt-[114px] xl:pb-[104px]">
        <Hero className="!mt-0" />
        <LoginForm />
      </div>
    </>
  );
}
