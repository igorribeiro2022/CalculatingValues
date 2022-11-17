import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--gray-1);

  polygon {
    stroke-dasharray: 17;
    animation: dashed 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  }
  
  text {
    font-family: 'Inter', sans-serif;
    font-size: 6px;
    animation: word .9s ease-in-out infinite;
  }

  @keyframes dashed {
    to {
      stroke-dashoffset: 136;
    }
  }

  @keyframes word {
    50% {
      opacity: 0;
    }
  }


`;
