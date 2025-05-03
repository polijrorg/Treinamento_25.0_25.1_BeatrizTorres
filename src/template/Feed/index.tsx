import React from 'react';
import Sidebar from '../../components/Esquerda';
import Feed from '../../components/central';
import Trends from '../../components/Direita';
import * as S from './styles';

const FeedPage = () => {
    return (
        <S.Container>
            <Sidebar />
            <S.ContainerScroll>
                <Feed />
            </S.ContainerScroll>
            <Trends />
        </S.Container>
    );
};

export default FeedPage;
