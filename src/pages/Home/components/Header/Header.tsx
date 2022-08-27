import React from "react";
import Select from "react-select";

import { HeaderWrapper, Logo, SelectWrapper } from "./styles";

const Header: React.FC = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const colourStyles = {
    control: (styles: any) =>({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2);',
      width: '200px',
      height: '40px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    })
  }

  return (
    <HeaderWrapper as="header">
      <Logo>
        <img src="./images/logo.svg" alt="logo" />
        <h2>weather</h2>
      </Logo>
      <SelectWrapper>
        <img src="./images/color.svg" alt="theme-change" />
        <Select options={options} styles={colourStyles} defaultValue={options[0]}/>
      </SelectWrapper>
    </HeaderWrapper>
  );
};

export default Header;
