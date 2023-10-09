import styled from "styled-components";

export const CtaButton = styled.a`
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
  border-radius: ${({ theme }) => theme.radius.cta};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-weight: 600;
  cursor: pointer;
`;
