import React from 'react';
import * as S from './styles';
import BarraPesquisa from './barrapesquisa';
import Tweet from './tweet';
import Piar from './piar';

const Feed = () => {
    return (
        <S.Container>
            <BarraPesquisa />
            <Piar />
            <Tweet />
        </S.Container>
    );
};

export default Feed;
