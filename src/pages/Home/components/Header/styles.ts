import styled from "styled-components";
import { Container } from "src/Container.styles";

export const HeaderWrapper = styled(Container)`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  h2 {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-transform: uppercase;
    color: #4793ff;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;

  .react-select-container {
    width: 200px;
  }
  .react-select__control {
    border-radius: 20px;
  }

  .react-select__placeholder {
    color: #939cb0;
    font-weight: 300;
    font-size: 18px;
  }
  .react-select__value-container {
    padding: 4px 12px;
  }

  @media (max-width: 980px) {
    .react-select-container {
      width: 350px;
    }
  }
`;
