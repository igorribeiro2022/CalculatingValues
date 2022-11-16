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

  .title {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 20px;
  border-radius: 20px;
  color: var(--gray-0);
  background-color: ${props => props.isOnline ? "var(--sucess)" : "var(--negative)"};
  font-size: 0.8rem;
`