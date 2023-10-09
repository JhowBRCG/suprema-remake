import styled from "styled-components";
import { CtaButton } from "../CtaButton";
import Img from "../../assets/imgs/budget.png";

const Budget = () => {
  return (
    <Section>
      <Content>
        <h3>Vamos fazer isso acontecer</h3>
        <p>
          Contate-nos hoje para saber mais sobre como nossos serviços de
          marketing digital podem ajudar sua empresa a crescer e ter sucesso
          online.
        </p>
        <CtaButton>orçamento gratuito</CtaButton>
      </Content>
      <Image>
        <img src={Img} />
      </Image>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};
  margin-block: 200px;
  margin-inline: auto;
  max-width: 1148px;
  height: 347px;
  padding: 6rem;

  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    gap: 1rem;
    height: auto;
  }
`;

const Content = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 2.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.tertiaryFont};
    font-size: 1.8rem;
    font-weight: 400;
    max-width: 500px;
    margin-bottom: 2.6rem;
  }

  a {
    padding: 2rem 5.6rem;
    font-weight: 400;
  }
`;

const Image = styled.div`
  img {
    width: 100%;
  }
`;

export default Budget;
