import styled from "styled-components";
import Header from "../Header";
import { CtaButton } from "../CtaButton";
import HeroImg from "../../assets/imgs/hero-illustration.svg";
import Arrows from "../../assets/imgs/arrows.svg";
import ArrowDown from "../../assets/imgs/arrow-down-circle.svg";

const Hero = () => {
  return (
    <>
      <Header />
      <HeroSection>
        <Content>
          <h1>
            A <span>melhor solução</span> para o seu negócio crescer
          </h1>
          <p>Aumente suas vendas e tenha mais sucesso</p>
          <CtaButton>Começar agora</CtaButton>
        </Content>
        <HeroImage>
          <img src={HeroImg} />
        </HeroImage>
      </HeroSection>
    </>
  );
};

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    background: url(${ArrowDown}) no-repeat;
    width: 34px;
    height: 34px;
    position: absolute;
    inset: 0;
    margin: auto auto -30px auto;

    @media screen and (max-width: 425px) {
      margin: auto auto -100px auto;
    }
  }

  @media screen and (max-width: 1024px) {
    min-height: 75vh;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    min-height: auto;
  }

  @media screen and (max-width: 425px) {
    margin-top: 3rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6rem;

  h1,
  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 4.8rem;
    font-weight: 700;
    max-width: 536px;

    @media screen and (max-width: 1024px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
      font-size: 3rem;
      text-align: center;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;
    font-weight: 400;

    @media screen and (max-width: 1024px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 425px) {
      font-size: 1.6rem;
      margin: 0 auto;
    }
  }

  a {
    font-weight: 400;
    padding: 1.4rem 5.6rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -42px;
      right: 50%;
      transform: translateX(50%);
      width: 60px;
      height: 2px;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
    }

    @media screen and (max-width: 425px) {
      margin: 0 auto;
    }
  }
`;

const HeroImage = styled.div`
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  img {
    width: 100%;
  }
`;

export default Hero;
