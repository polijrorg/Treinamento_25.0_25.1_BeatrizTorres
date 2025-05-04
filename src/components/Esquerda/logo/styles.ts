import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
`;

export const Passaro = styled.img`
    width: 8vw;
    height: 8vw;
    min-width: 32px;
    min-height: 32px;
    max-width: 56px;
    max-height: 56px;
`;

export const Titulo = styled.div`
    color: #ecedee;
    font-family: Nunito;
    font-size: clamp(18px, 2.5vw, 28px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.3vw;
`;
