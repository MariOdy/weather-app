import styled from "styled-components";
import { Container } from "../../../../Container.styles";

export const AllDaysWrapper = styled(Container)`
  background: #ffffff;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  padding: 20px;
  height: 240px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  gap: 20px;
`;

export const DayWrapper = styled.div`
  background: rgba(71, 147, 255, 0.2);
  border-radius: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px;

  img {
    width: 48px;
    height: 48px;
  }

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
  h3 {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #939cb0;
  }
`;
