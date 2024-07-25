import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { User } from "../User/User";

export const Header = () => {
  return (
    <header className="bg-[#fff] ">
      <Container>
        <div className="flex justify-between items-center py-[16px] md:py-[24] md:px-[32] xl:py-[20] ">
          <Logo />
          <Nav />
          <User />
        </div>
      </Container>
    </header>
  );
};
