import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    width: 304px;
    padding: 32px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    background: #1a1d1e;
    border-left: 1px solid #4c5155;
    border-right: 1px solid #4c5155;
    color: white;
`;

export const Item = styled.div`
    margin: 10px 0;
    cursor: pointer;

    &:hover {
        color: #58a6ff;
    }
`;
