import styled from "styled-components";
import { Container } from "../../../../Container.styles";

export const HeaderWrapper = styled(Container)`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

`;
