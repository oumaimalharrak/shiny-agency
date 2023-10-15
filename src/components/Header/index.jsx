import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/Style/Colors";
import darkLogo from "../../assets/dark-logo.png";


const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color:${colors.primary}`}
`;
const StyledNav = styled.nav`
  padding: 30px;
  margin: -2px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleLogo = styled.img`
  height: 70px;
`;

const Header = () => {
  return (
    <>
      <StyledNav>
        <Link>
          <StyleLogo src={darkLogo} />
        </Link>

        <div>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="survey/1">Questionnaire</StyledLink>
          <StyledLink to="freelances" $isFullLink>
            Faire le test
          </StyledLink>
        </div>
      </StyledNav>
    </>
  );
};

export default Header;
