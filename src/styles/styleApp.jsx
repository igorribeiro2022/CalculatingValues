import styled from "styled-components";

export const AppDiv = styled.div`
  background-color: var(--gray-1);
  width: 60vw;
  max-width: 1330px;
  gap: 20px;
  
  height: 90vh;
  max-height: 720px;
  margin: auto;

  padding: 50px;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    width: 100%;
  }
`;
