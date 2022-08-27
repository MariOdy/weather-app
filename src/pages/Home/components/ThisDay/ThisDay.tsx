import React from "react";
import { Bottom, ThisDayWrapper, Top } from "./style";

const ThisDay: React.FC = () => {
  return (
    <ThisDayWrapper>
      <Top>
        <div>
          <h2>20°</h2>
          <h3>Сегодня</h3>
        </div>
        <img src="./images/sun.svg" alt="" />
      </Top>
      <Bottom>
        <div>Время: 21:54</div>
        <div>Город: Санкт-Петербург</div>
      </Bottom>
    </ThisDayWrapper>
  );
};

export default ThisDay;
