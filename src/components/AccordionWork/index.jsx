import { useState } from "react";
import styled from "styled-components";
import Plus from "../../assets/imgs/plus-icon.png";
import Minus from "../../assets/imgs/minus-icon.png";

const AccordionWork = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prevState) => !prevState);

  return (
    <Accordion open={open}>
      <Header onClick={handleClick}>
        <p>0{data.id}</p>
        <h3>{data.title}</h3>
        <Button>
          <img src={open ? Minus : Plus} alt="" />
        </Button>
      </Header>
      {open && (
        <Content>
          <p>{data.desc}</p>
        </Content>
      )}
    </Accordion>
  );
};

const Accordion = styled.li`
  background: ${({ theme, open }) =>
    open === true ? theme.colors.secondaryColor : theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};
  padding: 4rem 6rem;

  @media screen and (max-width: 425px) {
    padding: 4rem 4rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  p,
  h3 {
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    font-weight: 500;
  }

  h3 {
    font-size: 3rem;
    margin-left: 2.5rem;
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.6rem;
    }
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  margin-left: auto;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #000;
`;

export default AccordionWork;
