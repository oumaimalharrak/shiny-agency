import colors from "../../utils/style/colors";
import styled from "styled-components";
import Ereur from "../../assets/404.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  background-color: ${colors.backgroundLight};
`;
const ErrorTitle = styled.h1`
  font-weight: 300;
`;
const ErrorSubtitle = styled.h2`
  font-weight: 500;
  color:${colors.primary}
`;

const ErrorIll = styled.img`
max-width:800px
`

const Error = () => {
  return (
    <>
      <Container>
        <ErrorTitle>Oups...</ErrorTitle>
        <ErrorIll src={Ereur} />
        <ErrorSubtitle>
          Il semblerait que la page que vous cherchez n’existe pas
        </ErrorSubtitle>
      </Container>
    </>
  );
};

export default Error;
