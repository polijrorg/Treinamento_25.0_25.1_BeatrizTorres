import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    width: 272px;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
    border-left: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
    color: white;
`;

// Área com scroll para as notícias
export const ScrollArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 570px;
    overflow-y: auto;
    width: 100%;
    padding-right: 4px;

    scrollbar-width: thin;
    scrollbar-color: #555 transparent;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const FeedItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    border-bottom: 1px solid #333;
    padding-bottom: 8px;
`;

export const Imagem = styled.img`
  width: 112px;
  height: 112px;
  flex-shrink: 0;x;
  object-fit: cover;
`;

export const Textos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Titulo = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
`;

export const Texto = styled.span`
    font-size: 13px;
    color: #cccccc;
`;
