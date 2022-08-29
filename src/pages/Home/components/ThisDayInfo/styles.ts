import styled from "styled-components";

export const ThisDayInfoWrapper = styled.div`
  width: 750px;
  height: 300px;
  padding: 8px 20px;
  border-radius: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  display: flex;
  justify-content: space-between;
  gap: 10px;

  > div {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    padding: 8px;

    color: #494949;

    h2 {
      font-weight: 500;
      font-size: 20px;
    }
  }
  > div:nth-child(3) {
    flex: 1;

    p {
      font-weight: 300;
      font-size: 18px;
      color: #939cb0;
    }
  }

  @media (max-width: 980px) {
    max-width: 350px;
    height: fit-content;
    gap: 0;
    padding: 8px 16px;
    text-align: center;

    > div {
      justify-items: center;
      padding: 4px;
      gap: 20px;

      h2 {
        font-weight: 300;
        font-size: 14px;
      }
    }
    > div:nth-child(2) {
      flex: 1;
    }
    > div:nth-child(3) {
      p {
        font-weight: 300;
        font-size: 16px;
        color: #939cb0;
      }
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 4px;
  box-shadow: rgba(9, 30, 66, 0.2) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.02) 0px 0px 0px 1px;

  img {
    width: 25px;
    height: 25px;
  }
`;
