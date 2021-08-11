/* eslint-disable react/prop-types */
import React from "react";
import { Container, InfoBox } from "./styles";

interface PropsProd {
  id?: number;
  nameProd?: string;
  imgProd?: string;
  linkWork?: string;
}

const ProductsData: React.FC<PropsProd> = ({
  id,
  nameProd,
  imgProd,
  linkWork,
}) => {
  return (
    <>
      <a href={linkWork} target="_blank" rel="noreferrer">
        <Container key={id}>
          <img src={imgProd} alt={imgProd} />

          <InfoBox>
            <h2>{nameProd}</h2>
            <p>Ver projeto</p>
          </InfoBox>
        </Container>
      </a>
    </>
  );
};

export default ProductsData;
