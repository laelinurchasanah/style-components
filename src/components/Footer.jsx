import SocialIcons from './SocialIcons';
import Container from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import StyledFooter from './styles/Footer.styled';
import { Logo } from './styles/Header.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <Logo src="./images/logo-footer.png" alt="" />
        </Flex>
        <Flex>
          <ul>
            <li>Mars Street No. 46, Mars, EL Universe</li>
            <li> +31 8888 77 405</li>
            <li>weird@elbright.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Property</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Big Sale</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  );
}
