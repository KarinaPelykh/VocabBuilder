import { Hero } from "../../components/Hero/Hero";
import { Logo } from "../../components/Logo/Logo";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { Container } from "../../components/Container/Container.jsx";

export default function Registration() {
  return (
    <section className="gradient">
      <Container>
        <Logo />
        <div className=" xl:flex xl:flex-row-reverse items-center mt-[64px] mb-[80px]">
          <Hero />
          <RegistrationForm />
        </div>
      </Container>
    </section>
  );
}
