import styled from "styled-components";

export const ThisDayWrapper = styled.div`
  width: 400 px;
  min-height: 300px;
  padding: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;

  display: flex ;
  flex-direction: column ;
  justify-content: space-between ;
  gap: 30px ;
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
  flex: 1 ;
  flex-direction: column;
  justify-content: center;
  gap: 14px ;

  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: #939cb0;
`;
