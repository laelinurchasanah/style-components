import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Logo, Nav, Image } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" />
          <div>
            <Button color="rgb(255, 170, 0)">Explore Property</Button>
            <Button bg="rgb(255, 170, 0)">Contact Us</Button>
          </div>
        </Nav>
        <Flex>
          <div>
            <h1>El Bright Development</h1>
            <p>
              Investing in real estate has never been easier. EL Bright
              development takes the guesswork out of finding your dream home or
              investment property. Our meticulously planned communities are
              designed to maximize value and elevate your lifestyle.
            </p>
            <Button bg="rgb(255, 170, 0)">More About Us</Button>
          </div>
          <Image src="./images/image.png" alt="hero" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
