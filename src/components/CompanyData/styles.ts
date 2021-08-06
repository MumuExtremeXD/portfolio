import styled from "styled-components";

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  > a {
    > button {
      width: 100%;
      border: none;
      border-radius: 40px;

      color: var(--white);
      background: var(--black);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.5s ease-in-out;
      padding: 10px;
      display: flex;
      align-items: center;

      font-size: 16px;

      transition: all 0.5s ease-in-out;

      cursor: pointer;

      &:hover {
        background: var(--blue);
      }
    }
  }

  > div {
    margin-left: 24px;
    margin-top: 22px;

    > h1 {
      overflow: hidden;
      font-size: 2.1rem;
      line-height: 1.25;
      font-weight: 600;
      text-align: center;

      color: var(--black);
    }

    > h2 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 16px;

      padding: 0 20px 0 0;
      font-weight: 300;
      text-align: justify;
    }

    @media (max-width: 375px) {
      > h1 {
        margin-top: 10px;
        font-size: 20px;
      }

      > h2 {
        margin-top: 5px;
        padding: 0 10px 0 0;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin: 0;
      margin-top: 16px;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  background-color: var(--white);
  border-radius: 50%;

  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  @media (min-width: 768px) {
    margin-top: -60px;
    width: 90%;
  }

  @media (max-width: 766px) {
    margin-top: -34px;
    width: 100%;
  }

  @media (max-width: 680px) {
    margin-top: 0;
    width: 60%;
  }
`;

export const Column = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: normal;

  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > span {
      padding: 0 15px 0 0px;
      color: var(--black);
      font-weight: 550;
      font-size: 13px;
      display: inline-block;
      white-space: normal;
      word-break: break-all;

      display: flex;
      align-items: center;

      flex-wrap: wrap;

      margin-top: 14px;

      > p {
        display: flex;
        align-items: center;
        > svg {
          margin-right: 6px;
        }
      }

      > a,
      a:active {
        display: flex;
        align-items: center;
        word-break: break-all;

        color: var(--black);

        > svg {
          margin-right: 6px;
        }
      }
    }
  }

  @media (max-width: 766px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    flex-wrap: wrap;

    > li {
      margin-top: 14px;

      > span {
        padding: 0 12px;
      }
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
