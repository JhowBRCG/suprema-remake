import styled from "styled-components";
import Logo from "../../assets/imgs/logo.png";
import { CtaButton } from "../CtaButton";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="logo suprema company" />
      <CtaButton>entrar em contato</CtaButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    img {
      width: 160px;
    }
  }

  > a {
    text-align: center;
    padding: 1.4rem 5.6rem;

    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: 425px) {
      padding: 1rem 2rem;
    }
  }
`;

export default Header;
