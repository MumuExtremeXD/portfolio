import styled from "styled-components";

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(verticalPadding) var(--horizontalPadding);
  overflow: hidden;

  background-color: var(--white);

  > .backgroundStyle {
    padding-top: 10px;
    padding-bottom: 15px;
    background-color: var(--blue);

    @media (max-width: 767px) {
      min-height: 15px;
      background-color: var(--white);
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto 40px auto;

  max-width: 1440px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0px;
  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const ProductsBox = styled.div`
  margin-top: var(--verticalPadding);
  padding: 0 var(--horizontalPadding);

  > .DivTextos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 0px;

    > h3 {
      font-size: 20px;
      font-weight: 500;
      color: var(--black);
    }

    > h4 {
      font-weight: normal;
      color: var(--black);

      > label {
        font-weight: 800;
      }
    }
  }

  > .DivProdutos {
    display: grid;
    grid-gap: 6px;

    grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));

    @media (min-width: 767px) {
      grid-auto-rows: minmax(min-content, max-content);
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    }

    @media (max-width: 550px) {
      min-width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const Tab = styled.div`
  .content {
    display: flex;
    align-items: center;

    width: min-content;

    padding: 14px 15px 14px 0px;

    :first-child {
      padding: 14px 0;
    }

    .active {
      border-bottom: 2px solid var(--yellow);
      font-weight: 500;
    }

    a,
    a:active {
      font-size: 18px;

      cursor: pointer;
      color: var(--white);
    }

    .label {
      color: var(--white);
      font-size: 16px;
      margin: 0 10px;
      padding: 0px;

      z-index: 5;

      transition: all 0.4s;

      :hover {
        transform: scale(1.1);
      }

      @media (max-width: 425px) {
        font-size: 14px;
      }
    }

    .label:first-child {
      margin: 0px 10px 0px 0px;
    }
  }

  &.mobile {
    margin-top: 35px;
    background-color: var(--blue);
    .content {
      margin: 0 auto;

      > span > a {
        font-size: 1rem;
      }
    }

    @media (min-width: 767px) {
      display: none;
    }
  }

  &.desktop {
    display: none;

    @media (min-width: 767px) {
      display: unset;

      .wrapper {
        position: relative;
        display: flex;
        margin: 0 auto;

        .content {
          > span > i {
            display: none;
          }
        }

        max-width: 1440px;
      }

      .offset {
        width: 25%;

        margin-right: var(--horizontalPadding);
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15% 55% 25% 20%;

  > svg {
    width: 100%;
  }

  @media (max-width: 1440px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 425px) {
    align-items: center;
    justify-content: center;

    margin: 0;
  }
`;
