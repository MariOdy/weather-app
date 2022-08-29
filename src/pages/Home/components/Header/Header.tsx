import React from "react";
import { Link } from "react-router-dom";
import CitySelect from "./CitySelect/CitySelect";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper as="header">
      <Logo>
        <Link to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
        <h2>weather</h2>
      </Logo>
      <CitySelect />
    </HeaderWrapper>
  );
};

export default Header;
