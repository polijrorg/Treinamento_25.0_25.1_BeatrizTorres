import styled from 'styled-components';

export const ContainerTweet = styled.main`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: #202425;
`;
export const Mensagem = styled.div`
    color: #ecedee;

    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
/* Reações */
export const ContainerC = styled.main`
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 43px;
`;

export const Arrow = styled.img`
    width: 20px;
    height: 20px;
`;

export const Hurt = styled.img`
    width: 20px;
    height: 20px;
`;

export const Comentario = styled.img`
    width: 20px;
    height: 20px;
`;

/* Perfil */
export const ContainerB = styled.main`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const Borda = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
    width: 80px;
    height: 80px;
    overflow: hidden;
`;

export const FotoPerfil = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

/* Nome e Username */
export const ContainerA = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;

export const Nome = styled.div`
    color: var(--Slate-12, #e1e1e6);
    text-align: center;

    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const Username = styled.div`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* Body/Body Normal */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const ContainerScroll = styled.div`
    overflow-y: auto;
    max-height: calc(100vh - 100px); // ajuste conforme a altura do topo
    padding-right: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
