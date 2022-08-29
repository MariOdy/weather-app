import styled from "styled-components";
import { Container } from "src/Container.styles";

export const HomeWrapper = styled.div``;

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
