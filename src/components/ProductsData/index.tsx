/* eslint-disable react/prop-types */
import React from "react";
import {
  Container,
  ModalBox,
  InfoBox,
  ContainerModal,
  ContainerExpanded,
  TextExpanded,
  DescriptionExpanded,
} from "./styles";

import { Modal } from "@material-ui/core";

interface PropsProd {
  id?: number;
  idProd?: number;
  nameProd?: string;
  imgProd?: string;
  dataWork?: string;
  description?: string;
}

const ProductsData: React.FC<PropsProd> = ({
  id,
  idProd,
  nameProd,
  imgProd,
  dataWork,
  description,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    console.log(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validadNumber = (num: any) => {
    num = num.toString();

    return (num = parseFloat(num));
  };

  return (
    <>
      <Container className={`XD-${idProd}`} key={id} onClick={handleOpen}>
        <img src={imgProd} alt={imgProd} />

        <InfoBox>
          <h2>{nameProd}</h2>
          <p>{dataWork}</p>

          {console.log(validadNumber(dataWork))}
        </InfoBox>
      </Container>

      <ModalBox>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ContainerModal>
            <ContainerExpanded key={id} onClick={handleOpen}>
              <img src={imgProd} alt={imgProd} />

              <TextExpanded>
                <h2>{nameProd}</h2>
                <p>{dataWork}</p>
              </TextExpanded>
              <DescriptionExpanded>
                <p>{description}</p>
              </DescriptionExpanded>
            </ContainerExpanded>
          </ContainerModal>
        </Modal>
      </ModalBox>
    </>
  );
};

export default ProductsData;
