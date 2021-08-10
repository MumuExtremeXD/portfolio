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

  .ImgBuild {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 35px;
    padding: 40px;

    max-width: 750px;
    min-width: 300px;

    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.05);
    }

    > img {
      width: 100%;
    }

    @media (max-width: 630px) {
      padding: 20px;
      width: 100%;
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
