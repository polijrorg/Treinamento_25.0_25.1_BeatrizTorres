import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    align-items: center;
`;
export const StyledInput = styled.input`
    display: flex;
    width: 704px;
    height: 24px;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: #4c5155;
    border: none;
    color: white;

    ::placeholder {
        color: #ecedee;
        text-align: center-start;
        font-feature-settings: 'liga' off, 'clig' off;

        /* Body/Body Normal */
        font-family: Nunito;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
        letter-spacing: 0.5px;
    }
`;

export const Lupa = styled.img`
    width: 24px;
    height: 24px;
`;
