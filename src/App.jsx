import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body{
      margin:0
    }
`
function App() {
  return (
    <>
    <GlobalStyle/>
      <Header /> 
      <Outlet />
    </>
  );
}

export default App;
