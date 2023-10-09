import styled from "styled-components";
import { BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import Logo from "../../assets/imgs/logo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <Socials>
        <img src={Logo} alt="logo suprema" />
        <ul>
          <li>
            <a href="">
              <BiLogoLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/supremacompany/" target="_blank">
              <BiLogoInstagram size={30} />
            </a>
          </li>
        </ul>
      </Socials>
      <Contact>
        <h4>Fale com a gente</h4>
        <p>Email: info@positivus.com</p>
        <p>Whatsapp: 555-567-8901</p>
      </Contact>
      <Rights>
        <p>© 2023 Suprema company. todos os direitos reservados</p>
        <a href="">Política de privacidade </a>
      </Rights>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: 457px;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5.4rem;

  img {
    width: 144px;
  }

  ul {
    display: flex;
    gap: 2rem;

    a {
      padding: 0.5rem;
      width: 40px;
      height: 40px;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
    }
  }
`;

const Contact = styled.div`
  text-align: center;
  padding-bottom: 5.4rem;

  h4 {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    background: ${({ theme }) => theme.colors.secondaryColor};
    font-size: 2rem;
    font-weight: 500;
    width: fit-content;
    margin: 0 auto;
    padding: 0 0.7rem;
    border-radius: 0.7rem;
    margin-bottom: 2.7rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    font-size: 1.8rem;
    font-weight: 400;
    margin: 2rem;
  }
`;

const Rights = styled.div`
  padding-top: 5.4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  p,
  a {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
  }

  a {
    display: block;
    margin-top: 4rem;
  }
`;

export default Footer;
