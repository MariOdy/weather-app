import styled from "styled-components";
import { Container } from "src/Container.styles";

export const HomeWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ThisDayBlock = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Git = styled.a`
  margin-top: 40px;
  align-self: flex-end;
  svg {
    width: 40px;
    height: 40px;
    color: black;
  }

  @media (max-width: 980px) {
    margin-top: 20px;
  }
`;
