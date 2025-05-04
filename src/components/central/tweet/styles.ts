import styled from 'styled-components';

interface ReactionIconProps {
    $liked: boolean;
}

export const ContainerTweet = styled.main`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: #202425;
    position: relative;
`;

export const Mensagem = styled.div`
    color: #ecedee;
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

export const ReactionIcon = styled.img<ReactionIconProps>`
    width: 20px;
    height: 20px;
    filter: ${({ $liked }) => ($liked ? 'grayscale(0%)' : 'grayscale(100%)')};
    transition: filter 0.3s ease;
    cursor: pointer;
`;

export const Arrow = styled(ReactionIcon)``;
export const Hurt = styled(ReactionIcon)``;
export const Comentario = styled(ReactionIcon)``;

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
    color: #e1e1e6;
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Username = styled.div`
    color: #ecedee;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
`;

export const ContainerScroll = styled.div`
    overflow-y: auto;
    max-height: calc(100vh - 100px);
    padding-right: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

/* Ícone da lixeira */
export const TrashIcon = styled.img`
    width: 18px;
    height: 18px;
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`;
