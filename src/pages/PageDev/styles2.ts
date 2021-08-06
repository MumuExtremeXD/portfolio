import styled from "styled-components";

import FundoTeste from "../../Assets/Images/FundoTeste.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background: url(${FundoTeste}) no-repeat center center;
  background-size: cover;

  .Right {
    &:hover {
      z-index: 1;

      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  .Left {
    &:hover {
      z-index: 1;

      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
`;

export const Right = styled.div`
  transition: all 0.6s ease-in-out;

  > img {
    max-width: 450px;
  }
`;

export const Left = styled.div`
  transition: all 0.6s ease-in-out;

  > img {
    max-width: 450px;
  }
`;
