import { Hero } from "../../components/Hero/Hero";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../../components/Container/Container.jsx";
import { LoginForm } from "../../components/LoginForm/LoginForm.jsx";

export default function Login() {
  return (
    <main className="gradient">
      <Container>
        <Logo />
        <div className="md:flex md:flex-col-reverse xl:flex-row-reverse items-center xl:mt-[64px] xl:mb-[80px]">
          <Hero />
          <LoginForm />
        </div>
      </Container>
    </main>
  );
}
