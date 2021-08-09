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

import Proj1 from "../../Assets/Images/Proj1.png";
import Proj2 from "../../Assets/Images/Proj2.png";
import Proj3 from "../../Assets/Images/Proj3.png";
import Proj4 from "../../Assets/Images/Proj4.png";

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
            <span className="line" />
          </Tab>

          <ProductsBox>
            <div className="DivTextos">
              <h3>Projetos</h3>
              <h4>
                Total de projetos: <label>{4}</label>
              </h4>
            </div>

            <div className="DivProdutos">
              <ProductsData
                key={4}
                idProd={4}
                nameProd={"Projetos com Double Diamond"}
                imgProd={Proj4}
                linkWork={
                  "www.behance.net/gallery/125011195/Organizando-Projetos-com-Double-Diamond"
                }
              />

              <ProductsData
                key={2}
                idProd={2}
                nameProd={"Social Media - Mister Gesso"}
                imgProd={Proj2}
                linkWork={
                  "https://www.behance.net/gallery/124703391/Social-Media-Mister-Gesso"
                }
              />

              <ProductsData
                key={3}
                idProd={3}
                nameProd={"UI - TodaObra"}
                imgProd={Proj3}
                linkWork={
                  "https://www.behance.net/gallery/124650063/UI-Design-TodaObra"
                }
              />

              <ProductsData
                key={1}
                idProd={1}
                nameProd={"Social Media - Batatas Marvel"}
                imgProd={Proj1}
                linkWork={
                  "https://www.behance.net/gallery/124630377/Social-Media-Batatas-Marvel"
                }
              />
            </div>
          </ProductsBox>
        </RightSide>
      </Main>
    </Container>
  );
};

export default PageProduct;
