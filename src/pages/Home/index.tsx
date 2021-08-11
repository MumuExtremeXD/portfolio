import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  ProductsBox,
  Tab,
} from "./styles";

import CompanyData from "../../components/CompanyData";
import ProductsData from "../../components/ProductsData";

interface CompanyInfoXD {
  id: number;
  nameC: string;
  street?: string;
  profile: string;
  district?: string;
  email: string;
  phone: string;
  openingHours: string;
  face?: string;
  insta: string;
  site: string;
  description: string;
  segment: number;
}

import data from "../../Data";

const PageProduct: React.FC<CompanyInfoXD> = () => {
  return (
    <Container>
      <div className="backgroundStyle">
        <Tab className="desktop">
          <div className="wrapper">
            <span className="offset" />
            <div className="content">
              <span className="label active">
                <Link to={`../`}>Design</Link>
              </span>

              <span className="label">
                <Link to={`../Dev`}>Programação</Link>
              </span>
            </div>
          </div>
        </Tab>
      </div>

      <Main>
        <LeftSide>
          <CompanyData
            nameC={"Matheus Souza"}
            description={
              "Sou fascinado pelas mais diversas tecnologias, amo imaginar as possibilidades de coisas que podem ser feitas atráves delas e com uma perspectiva isométrica podemos chegar a qualquer lugar."
            }
            img={"Mumu XD"}
            street={"Brasil"}
            district={"Tatuí - SP"}
            face={"Matheus Souza"}
            insta={"mumuzinxd"}
            site={"Mumu XD"}
            email={"matheus.souza.lima88@gmail.com"}
            phone={"15 99691-8493"}
            openingHoursProd={"Matheus-Souza-Lima"}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <div className="content">
              <span className="label active">
                <Link to={`../`}>Design</Link>
              </span>

              <span className="label">
                <Link to={`../Dev`}>Programação</Link>
              </span>
            </div>
          </Tab>

          <ProductsBox>
            <div className="DivTextos">
              <h3>Projetos</h3>
              <h4>
                Total de projetos: <label>{data.length}</label>
              </h4>
            </div>

            <div className="DivProdutos">
              {data?.map((projeto) => (
                <>
                  <ProductsData
                    key={data.length}
                    nameProd={projeto.nameProd}
                    imgProd={projeto.imgProd}
                    linkWork={projeto.linkWork}
                  />
                </>
              ))}
            </div>
          </ProductsBox>
        </RightSide>
      </Main>
    </Container>
  );
};

export default PageProduct;
