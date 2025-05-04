import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    width: 18vw;
    flex-direction: column;
    align-items: flex-start;
    gap: 4vh;
    border-left: 0.1vw solid #4c5155;
    background: #1a1d1e;
    color: white;
    height: 100vh;
`;

// Área com scroll para as notícias
export const ScrollArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    max-height: 70vh;
    overflow-y: auto;
    width: 100%;
    padding-right: 0.3vw;

    scrollbar-width: thin;
    scrollbar-color: #555 transparent;

    &::-webkit-scrollbar {
        width: 0.4vw;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 0.3vw;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const FeedItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1vw;
    border-bottom: 0.1vh solid #333;
    padding-bottom: 1vh;
`;

export const Imagem = styled.img`
    width: 8vw;
    height: 8vw;
    max-width: 112px;
    max-height: 112px;
    flex-shrink: 0;
    object-fit: cover;
`;

export const Textos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vh;
`;

export const Titulo = styled.span`
    font-weight: bold;
    font-size: 0.9vw;
    color: #ffffff;
`;

export const Texto = styled.span`
    font-size: 0.85vw;
    color: #cccccc;
`;
