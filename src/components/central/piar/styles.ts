import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    padding: 2vh 3vw;
    flex-direction: column;
    align-items: flex-start;
    gap: 3vh;
    align-self: stretch;
    border-radius: 1vw;
    background: #4c5155;
`;

export const StyledInput = styled.input`
    display: flex;
    height: 5vh;
    padding: 1vh;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0.5vw;
    background: #4c5155;
    border: none;
    color: #ecedee;
    width: 153px;
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    ::placeholder {
        color: #ecedee;
        text-align: center;
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
    gap: 1.5vw;
    position: relative;
    width: 100%;
`;

export const Fotinha = styled.img`
    width: 6vw;
    height: 6vw;
    max-width: 24px;
    max-height: 24px;
    cursor: pointer;
`;

export const Video = styled.img`
    width: 6vw;
    height: 6vw;
    max-width: 24px;
    max-height: 24px;
    cursor: pointer;
`;

export const Emoji = styled.img`
    width: 6vw;
    height: 6vw;
    max-width: 24px;
    max-height: 24px;
    cursor: pointer;
`;

export const Tag = styled.img`
    width: 6vw;
    height: 6vw;
    max-width: 24px;
    max-height: 24px;
    cursor: pointer;
`;

export const Gif = styled.img`
    width: 6vw;
    height: 6vw;
    max-width: 24px;
    max-height: 24px;
    cursor: pointer;
`;

export const ContainerC = styled.main`
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: space-between;
    position: relative;
    width: 100%;
`;

export const Postar = styled.img`
    width: 6vw;
    height: 6vw;
    max-width: 24px;
    max-height: 24px;
    cursor: pointer;
`;

export const PiText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-family: Nunito;
    font-size: 1.5vw;
    font-weight: bold;
    color: #ecedee;
    text-align: left;
    z-index: 1;
    margin: 0;
`;

export const TextArea = styled.textarea`
    width: 80vw; /* Largura proporcional */
    height: 6vh; /* Altura proporcional */
    padding: 1vh;
    border-radius: 0.5vw;
    background: #4c5155;
    border: none;
    color: white;
    font-size: 2vw; /* Tamanho de fonte proporcional */
    font-family: Nunito;
    line-height: normal;
    resize: none;

    &::placeholder {
        color: #ecedee;
        text-align: left;
        font-family: Nunito;
        font-size: 2vw;
    }
`;
