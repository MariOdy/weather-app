import styled from "styled-components";
import { Container } from "src/Container.styles";

export const AllDaysWrapper = styled(Container)`
  background: #ffffff;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  padding: 20px;
  height: 170px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
  padding: 12px;
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between ;
    gap: 10px;
    flex: 1 ;
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 22px;
    }
    h3 {
      font-weight: 300;
      font-size: 20px;
    }
  }

  img {
    width: 48px;
    height: 48px;
  }
`;
export const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2{
    font-weight: 400;
      font-size: 30px;
      line-height: 22px;
  }

  h3 {
    font-weight: 400;
    font-size: 24px;
    line-height: 16px;
    color: #939cb0;
  }
`;
