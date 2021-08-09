import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 650px;
  min-width: 200px;

  margin-top: 2px;

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  cursor: pointer;

  flex-direction: column;
  justify-content: space-evenly;

  padding: 15px 16px 20px 0px;

  > img {
    border-radius: 6px 6px 0 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    background: var(--white);
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 5px 0px 20px 0px;
  }
`;

export const InfoBox = styled.div`
  display: flex;

  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  border-radius: 0 0 6px 6px;

  padding: 13px 10px 10px 10px;

  align-items: flex-start;
  gap: 8px;
  justify-content: space-between;

  font-weight: 600;

  > h2 {
    font-size: 1rem;
    color: var(--black);
    font-weight: 500;
  }

  > p {
    font-size: 1rem;
    font-weight: normal;
    color: var(--blue);
  }
`;
