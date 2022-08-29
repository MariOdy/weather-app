import React from "react";
import CitySelect from "./CitySelect/CitySelect";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper as="header">
      <Logo>
        <img src="./images/logo.svg" alt="logo" />
        <h2>weather</h2>
      </Logo>
      <CitySelect />
    </HeaderWrapper>
  );
};

export default Header;
