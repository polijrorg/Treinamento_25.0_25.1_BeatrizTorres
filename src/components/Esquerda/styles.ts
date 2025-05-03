import styled, { css } from 'styled-components';

interface NavItemProps {
    active?: boolean;
}

export const Container = styled.aside`
    background-color: #1c1d1f;
    width: 304px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
`;

export const NavItem = styled.div<NavItemProps>`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 304px;
    padding: 0px 16px;
    margin: 6px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 0px 80px 80px 0px;

    ${({ active }) =>
        active
            ? css`
                  background: var(--Indigo-9, #3e63dd);
              `
            : css`
                  background: transparent;
              `}

    &:hover {
        background-color: ${({ active }) => (active ? '#3e63dd' : '#2c2d30')};
    }
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const NavText = styled.span`
    display: flex;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);

    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Borda = styled.div`
    margin-top: auto;
    padding: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const FotoPerfil = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

export const Sair = styled.img`
    width: 36px;
    height: 36px;
    margin: 20px auto;
    cursor: pointer;
    display: block;
`;
