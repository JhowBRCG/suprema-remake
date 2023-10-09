import styled from "styled-components";

const ServicesCard = ({ data }) => {
  return (
    <Card>
      <h3>{data.title}</h3>
      <img src={data.image} />
      <p>{data.desc}</p>
    </Card>
  );
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};
  width: 496px;
  height: 587px;
  padding: 5rem;

  &:nth-child(2) {
    background: ${({ theme }) => theme.colors.secondaryColor};
  }

  &:nth-child(3) {
    background: ${({ theme }) => theme.colors.primaryColor};

    h3 {
      background: ${({ theme }) => theme.colors.white};
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    background: ${({ theme }) => theme.colors.primaryColor};
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    padding-inline: 1rem;
    border-radius: 10px;

    @media screen and (max-width: 425px) {
      font-size: 2rem;
    }
  }

  p {
    font-family: ${({ theme }) => theme.colors.tertiaryColor};
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 2.8rem;

    @media screen and (max-width: 425px) {
      font-size: 2rem;
    }
  }

  img {
  }
`;

export default ServicesCard;
