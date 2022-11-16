import styled from "styled-components";

export const Request = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;

        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 40px;
            width: 70%;
            padding: 0 15px;
            border: none;
            border-radius: 5px;
            background-color: var(--gray-0);

            input {
                border: none;
                -moz-appearance: textfield;
                font-size: 0.9rem;
                width: 90%;
                ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }

            :focus {
                border: solid 1px;
                border-color: var(--blue-1);
            }
        }
    }

    button {
        height: 40px;
        width: 70%;

        padding: 0 15px;
        border: none;
        border-radius: 5px;
    }
    
    p {
        font-size: 0.8rem;
        font-weight: 100;
        span {
            color: var(--negative);
            font-size: 0.7rem;
        }
    }
`