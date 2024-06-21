import { Hero } from "@/components/Hero/Hero";
import { Logo } from "@/components/Logo/Logo";
import { Container } from "../../components/Container/Container.jsx";
import { LoginForm } from "@/components/LoginForm/LoginForm.jsx";

export default function Login() {
  return (
    <section className="gradient">
      <Container>
        <Logo />
        <div className=" xl:flex xl:flex-row-reverse items-center mt-[64px] mb-[80px]">
          <Hero />
          <LoginForm />
        </div>
      </Container>
    </section>
  );
}
