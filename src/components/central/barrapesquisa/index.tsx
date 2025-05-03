import React from 'react';
import * as S from './styles';

const BarraPesquisa = () => {
    return (
        <S.Container>
            <S.StyledInput placeholder="Ouvir um piu..." />
            <S.Lupa src="assets/images/ci_search.png" />
        </S.Container>
    );
};

export default BarraPesquisa;
