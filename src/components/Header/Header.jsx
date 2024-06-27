import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { User } from "../User/User";

export const Header = () => {
  return (
    <header className="bg-[#fff] ">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <Nav />
          <User />
        </div>
      </Container>
    </header>
  );
};
