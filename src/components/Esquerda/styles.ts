import styled from 'styled-components';

interface NavItemProps {
    active?: boolean;
}

export const Container = styled.aside`
    background-color: #1c1d1f;
    width: 23vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2vh;
    min-width: 220px;
`;

export const NavItem = styled.div<NavItemProps>`
    display: flex;
    align-items: center;
    gap: 1vw;
    width: 100%;
    padding: 1.2vh 2vw;
    margin: 0.8vh 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 0 4vw 4vw 0;
    background: ${({ active }) =>
        active ? 'var(--Indigo-9, #3e63dd)' : 'transparent'};

    &:hover {
        background-color: ${({ active }) => (active ? '#3e63dd' : '#2c2d30')};
    }
`;

export const Icon = styled.img`
    width: 2.3vw;
    height: 2.3vw;
    flex-shrink: 0;
`;

export const NavText = styled.span`
    flex: 1;
    color: var(--Slate-12, #ecedee);
    font-family: 'Nunito', sans-serif;
    font-size: clamp(14px, 1.1vw, 20px);
    font-weight: 700;
    line-height: normal;
`;

export const Borda = styled.div`
    margin-top: auto;
    padding: 2vh;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const FotoPerfil = styled.img`
    width: 4vw;
    height: 4vw;
    min-width: 40px;
    min-height: 40px;
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
`;

export const Sair = styled.img`
    width: 2.5vw;
    height: 2.5vw;
    min-width: 24px;
    min-height: 24px;
    max-width: 36px;
    max-height: 36px;
    margin: 2vh auto;
    cursor: pointer;
    display: block;
`;
