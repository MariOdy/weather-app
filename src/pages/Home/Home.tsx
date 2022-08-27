import React from "react";
import AllDays from "./components/AllDays/AllDays";
import Header from "./components/Header/Header";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";

import { HomeWrapper, ThisDayBlock } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Header />
      <ThisDayBlock>
        <ThisDay />
        <ThisDayInfo />
      </ThisDayBlock>
      <AllDays />
    </HomeWrapper>
  );
};

export default Home;
