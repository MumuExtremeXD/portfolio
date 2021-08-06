/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";

import { Container, Flex, Avatar, Column } from "./styles";

import Perfil from "../../Assets/Images/pp.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

interface Props {
  nameC?: string;
  description?: string;
  img?: string;
  district?: string;
  street?: string;
  face?: string;
  insta?: string;
  site?: string;
  email?: string;
  phone?: string;
  openingHoursProd?: string;
}

const CompanyData: React.FC<Props> = ({
  nameC,
  description,
  img,
  district,
  street,
  face,
  insta,
  site,
  email,
  phone,
  openingHoursProd,
}) => {
  return (
    <Container>
      <Flex>
        <Link to="#" target={"_blank"}>
          <Avatar src={Perfil} alt={img} />
        </Link>

        <div>
          <h1>{nameC}</h1>
          <h2>{description}</h2>
        </div>
        <a
          href={`https://api.whatsapp.com/send?1=pt_BR&phone=55${phone}/`}
          target="_blank"
        >
          <button>Contrate-me</button>
        </a>
      </Flex>

      <Column>
        {district && (
          <li>
            <span>
              <p>
                <LocationOnIcon />
                {district}
                <br />
                {street}
              </p>
            </span>
          </li>
        )}

        {email && (
          <li>
            <span>
              <a href={`mailto:${email}`} target="_blank">
                <EmailIcon /> {email}
              </a>
            </span>
          </li>
        )}

        {face && (
          <li>
            <span>
              <a
                href={`https://www.facebook.com/profile.php?id=100010524390064`}
                target="_blank"
              >
                <FacebookIcon /> /{face}
              </a>
            </span>
          </li>
        )}

        {insta && (
          <li>
            <span>
              <a href={`https://www.instagram.com/${insta}/`} target="_blank">
                <InstagramIcon />
                {insta}
              </a>
            </span>
          </li>
        )}

        {site && (
          <li>
            <span>
              <a href={`https://github.com/MumuExtremeXD`} target="_blank">
                <GitHubIcon />
                {"MumuExtremeXD"}
              </a>
            </span>
          </li>
        )}

        {openingHoursProd && (
          <li>
            <span>
              <a
                href={`https://www.linkedin.com/in/matheus-souza-lima-3ab5221a2/`}
                target="_blank"
              >
                <LinkedInIcon />
                {openingHoursProd}
              </a>
            </span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default CompanyData;
