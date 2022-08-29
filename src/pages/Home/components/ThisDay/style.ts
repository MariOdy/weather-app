import styled from "styled-components";

export const ThisDayWrapper = styled.div`
  width: 400px;
  min-height: 300px;
  padding: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 65px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-weight: 400;
      font-size: 96px;
      line-height: 86px;
      color: #4793ff;
    }
    h3 {
      font-weight: 300;
      font-size: 40px;
    }
  }
`;
export const Bottom = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4px;

  font-weight: 300;
  font-size: 30px;
  line-height: 30px;
  color: #939cb0;
`;
