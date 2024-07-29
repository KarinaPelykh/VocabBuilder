import { Hero } from "../components/Hero/Hero.jsx";
import { Logo } from "../components/Logo/Logo.jsx";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm.jsx";
import { Container } from "../components/Container/Container.jsx";

export default function Registration() {
  return (
    <main className="gradient">
      <Container>
        <Logo />
        <div className=" md:flex  md:flex-col-reverse xl:flex-row-reverse items-center xl:mt-[64px] xl:mb-[80px]">
          <Hero />
          <RegistrationForm />
        </div>
      </Container>
    </main>
  );
}
