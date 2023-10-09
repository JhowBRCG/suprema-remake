import styled from "styled-components";
import Person from "../../assets/imgs/person.jpg";
import Quotes from "../../assets/imgs/quote-icon.svg";

const FeedbackCard = () => {
  return (
    <Article>
      <Photo>
        <img src={Person} alt="" />
      </Photo>
      <Content>
        <img src={Quotes} />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo
        </p>
        <small>Dylan Shaw</small>
      </Content>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: 5rem 1rem;
  border-radius: ${({ theme }) => theme.radius.default};
  min-height: 500px;
  margin-top: 6.5rem;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const Photo = styled.div`
  img {
    width: 353px;
    height: 400px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #bcbcbc;

    @media screen and (max-width: 425px) {
      width: 300px;
      height: 300px;
    }
  }
`;

const Content = styled.div`
  max-width: 418px;

  img {
    margin-bottom: 2rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.tertiaryFont};
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 3.2rem;
    margin-bottom: 4rem;
  }

  small {
    font-size: 1.8rem;
    font-weight: 400;
    opacity: 0.5;
  }
`;

export default FeedbackCard;
