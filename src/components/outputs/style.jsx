import styled from "styled-components";

export const Response = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: var(--blue-1);
    width: 30%;

    h2 {
        text-transform: uppercase;
        font-size: 1.1rem;
        font-style: italic;
        border-bottom: 1px solid var(--blue-1);
    }
    
    p {
        font-weight: 100;
        font-style: italic;
    }
    
    span {
        font-weight: 600;
    }

    @media (max-width: 550px) {
        width: 100%;
        margin-top: 30px;
    }

`