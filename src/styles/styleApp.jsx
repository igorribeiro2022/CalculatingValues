import styled from "styled-components";

export const AppDiv = styled.div`
  background-color: var(--gray-1);
  width: 60vw;
  max-width: 1330px;
  gap: 20px;
  
  height: 90vh;
  max-height: 720px;
  margin: auto;
  margin-top: 5vh;

  padding: 50px;

  display: flex;
  flex-direction: column;

  .inout {
    display: flex;
    width: 100%;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 550px) {
    width: 100vw;
    height: 100vh;
    margin-top: 0;
    overflow: auto;
  
    .title {
      h1 {
        font-size: 15px;
      }
    }

    .inout {
      flex-direction: column;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 20px;
  border-radius: 20px;
  cursor: default;
  color: var(--gray-0);
  background-color: ${props => props.isOnline ? "var(--sucess)" : "var(--negative)"};
  font-size: 0.8rem;
  
  @media (max-width: 550px) {
    padding: 0 5px;
    height: 15px;
    font-size: 0.7rem;

  }
`