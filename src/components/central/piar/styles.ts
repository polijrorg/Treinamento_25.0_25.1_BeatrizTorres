import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-8, #4c5155);
`;

export const StyledInput = styled.input`
    display: flex;
    height: 24px;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: #4c5155;
    border: none;
    color: white;
    width: 153px;

    ::placeholder {
        color: #ecedee;
        text-align: center;
        border: none;

        font-family: Nunito;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const ContainerB = styled.main`
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 8px;
`;

export const Fotinha = styled.img`
    width: 20px;
    height: 20px;
`;

export const Video = styled.img`
    width: 20px;
    height: 20px;
`;

export const Emoji = styled.img`
    width: 20px;
    height: 20px;
`;

export const Tag = styled.img`
    width: 20px;
    height: 20px;
`;

export const Gif = styled.img`
    width: 20px;
    height: 20px;
`;

export const ContainerC = styled.main`
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 500px;
`;

export const Postar = styled.img`
    width: 20px;
    height: 20px;
`;
