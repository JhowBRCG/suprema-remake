import styled from "styled-components";
import Balls from "../../assets/imgs/balls-bg.png";
import BallsBottom from "../../assets/imgs/balls-2.png";
import Arrows from "../../assets/imgs/arrows.svg";

export const Layout = styled.div`
  background: url(${Balls}) left 5%, url(${BallsBottom}) right 90%;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    background-size: 30%;
  }
  @media screen and (max-width: 425px) {
    background-size: 25%;
    /* background-position: left 5%; */
  }
`;
