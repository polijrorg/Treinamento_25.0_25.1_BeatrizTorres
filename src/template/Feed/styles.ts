import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center; // Alinha horizontalmente
    align-items: center; // Alinha verticalmente
    height: 100vh;

    min-height: 100vh;
    background-color: #0d1117;
`;
export const ContainerScroll = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    max-height: 100vh;
    padding-right: 8px;
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
