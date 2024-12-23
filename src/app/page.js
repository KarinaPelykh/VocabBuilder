import { Hero, RegistrationForm } from "@/components";
import { Logo } from "@/components/ui";
export default function Registration() {
  return (
    <div className="container">
      <Logo />
      <div className="md:flex relative md:flex-col-reverse w-full  xl:flex-row-reverse items-center xl:justify-between xl:pt-16 xl:pb-20">
        {/* <div className="absolute blur-[100px] -bottom-[150px] right-[-100px]  bg-[#85aa9f] w-[693px] h-[397px] "></div> */}
        <Hero />
        <RegistrationForm />
      </div>
    </div>
  );
}

//old version

// className = "gradient";
// import { Hero } from "../components/Hero/Hero.jsx";
// import { Logo } from "../components/Logo/Logo.jsx";
// import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm.jsx";
// import { Container } from "../components/Container/Container.jsx";

// export default function Registration() {
//   return (
//     <main className="gradient">
//       <Container>
//         <Logo />
//         <div className="md:flex  md:flex-col-reverse xl:flex-row-reverse items-center xl:justify-between xl:pt-[64px] xl:pb-[80px] ">
//           <Hero />
//           <RegistrationForm />
//         </div>
//       </Container>
//     </main>
//   );
// }
