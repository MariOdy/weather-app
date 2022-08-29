import React from "react";
import AllDays from "./components/AllDays/AllDays";
import Header from "./components/Header/Header";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import { AiOutlineGithub } from "react-icons/ai";

import { Git, HomeWrapper, ThisDayBlock } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Header />
      <ThisDayBlock>
        <ThisDay />
        <ThisDayInfo />
      </ThisDayBlock>
      <AllDays />
      <Git href="https://github.com/MariOdy/weather-app">
        <AiOutlineGithub />
      </Git>
    </HomeWrapper>
  );
};

export default Home;
