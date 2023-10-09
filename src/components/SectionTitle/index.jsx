import styled from "styled-components";

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 4.8rem;
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 4.8rem;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;

    span {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 2rem;

    span {
      font-size: 2rem;
    }
  }
`;
