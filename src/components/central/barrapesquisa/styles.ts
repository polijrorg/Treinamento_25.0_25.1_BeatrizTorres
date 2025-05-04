import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    padding: 0.5rem; /* 8px */
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    width: 48vw;
    box-sizing: border-box;
    border-radius: 8px;
    background: #4c5155;
`;

export const StyledInput = styled.input`
    flex: 1;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: #4c5155;
    border: none;
    color: white;
    font-size: 1rem;

    ::placeholder {
        color: #ecedee;
        text-align: left;
        font-family: Nunito;
        font-size: 1rem;
        line-height: 1.5rem;
        letter-spacing: 0.03rem;
    }
`;

export const Lupa = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    cursor: pointer;
`;
