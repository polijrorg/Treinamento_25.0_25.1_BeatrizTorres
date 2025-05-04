import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    padding: 2.5vh 1vw;
    flex-direction: column;
    align-items: flex-start;
    gap: 2vh;
    background: #1a1d1e;
    border-left: 0.15vw solid #4c5155;
    border-right: 0.15vw solid #4c5155;
    color: white;
    width: 23vw;
    min-width: 200px;
    height: 100vh;
`;

export const Item = styled.div`
    margin: 1vh 0;
    cursor: pointer;
    font-size: clamp(12px, 1.2vw, 18px);

    &:hover {
        color: #58a6ff;
    }
`;
