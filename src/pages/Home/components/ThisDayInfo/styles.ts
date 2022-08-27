import styled from "styled-components";

export const ThisDayInfoWrapper = styled.div`
  width: 750px;
  height: 300px;
  padding: 30px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    position: relative ;
    justify-content: center;
    gap: 25px ;
    height: 100% ;
    z-index: 1 ;
  }

  > img {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0 ;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
  }
  h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    color: #939cb0;
    flex: 1 ;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    opacity: 0.88;
    flex: 3 ;
  }
`;
