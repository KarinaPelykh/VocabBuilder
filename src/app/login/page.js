import { Hero } from "../../components/Hero/Hero";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../../components/Container/Container.jsx";
import { LoginForm } from "../../components/LoginForm/LoginForm.jsx";

export default function Login() {
  return (
    <main className="gradient">
      <Container>
        <Logo />
        <div className="md:flex md:flex-col-reverse xl:flex-row-reverse items-center xl:justify-between xl:pt-[114px] xl:pb-[104px]">
          <Hero className="!mt-0" />
          <LoginForm />
        </div>
      </Container>
    </main>
  );
}
