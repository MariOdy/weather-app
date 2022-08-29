import styled from "styled-components";
import { Container } from "src/Container.styles";

export const AllDaysWrapper = styled(Container)`
  border-radius: 20px;
  padding: 20px;
  min-height: 170px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 20px;

  @media (max-width: 980px) {
    width: 350px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const DayWrapper = styled.div`
  background: rgba(71, 147, 255, 0.2);
  border-radius: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;

  @media (max-width: 980px) {
    gap: 20px;
  }
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    flex: 1;
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

  @media (max-width: 980px) {
    > div {
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 16px;
      }
    }
  }
  img {
    width: 55px;
    height: 55px;
  }
`;
export const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
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
