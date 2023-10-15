import colors from "../../utils/Style/Colors";
import HomeIllustration from "../../assets/home-illustration.svg";
import styled from "styled-components";
import { StyledLink } from "../../utils/Style/Atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const HomeContainer = styled.div`
  max-width: 1200px;
  background: ${colors.backgroundLight};
  margin: 10px;
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
`;
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink}{
    max-width:250px
  }
`;
const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 320px;
  line-height: 50px;
  font-size:30px
`;

const Illustration = styled.img`
  flex: 1;
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <HomeContainer>
          <LeftCol>
            <StyledTitle>
              Repererz vos besoins, on soccupe du reste, avec les meilleurs
              talents
            </StyledTitle>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            
          </LeftCol>
          <Illustration src={HomeIllustration} />
        </HomeContainer>
      </Wrapper>
    </>
  );
};

export default Home;
