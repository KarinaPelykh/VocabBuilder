import Image from "next/image";
import children from "../../images/Img-webp/children_desk.webp";
import { Logo } from "../Logo/Logo";
import Link from "next/link";
import { Container } from "../Container/Container";
export const Home = () => {
  return (
    <Container>
      <section>
        <Logo />

        <div className=" flex  items-center">
          <form className="w-[658px] rounded-[30px] bg-[#85AA9F] px-[64px] py-[48px] ">
            <h1>Register</h1>
            <p>
              To start using our services, please fill out the registration form
              below. All fields are mandatory:
            </p>
            <div className="flex flex-col">
              <input name="name" type="text" placeholder="Name" />
              <input name="email" type="email" placeholder="Email" />
              <input name="password" type="password" placeholder="Password" />
            </div>

            <button type="submit">Register</button>
            <Link href="">Login</Link>
          </form>

          <div className="ml-[80px]">
            <Image
              src={children}
              alt="children"
              width={498}
              height={435}
              priority
            />
            <p>Word · Translation · Grammar · Progress</p>
          </div>
        </div>
      </section>
    </Container>
  );
};
