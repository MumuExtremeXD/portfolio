import React from "react";
import { Link } from "react-router-dom";

import { Container, Main, LeftSide, RightSide, Tab } from "./styles";

import CompanyData from "../../components/CompanyData";

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

import Build from "../../Assets/Images/Build.png";

const PageProduct: React.FC<CompanyInfoXD> = () => {
  return (
    <Container>
      <div className="backgroundStyle">
        <Tab className="desktop">
          <div className="wrapper">
            <span className="offset" />
            <div className="content">
              <span className="label">
                <Link to={`../`}>Design</Link>
              </span>

              <span className="label active">
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
              <span className="label">
                <Link to={`../`}>Design</Link>
              </span>

              <span className="label active">
                <Link to={`../Dev`}>Programação</Link>
              </span>
            </div>
          </Tab>

          <div className="ImgBuild">
            <img src={Build} alt="" />
          </div>
        </RightSide>
      </Main>
    </Container>
  );
};

export default PageProduct;
