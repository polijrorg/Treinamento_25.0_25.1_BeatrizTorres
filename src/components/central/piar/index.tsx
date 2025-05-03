import React from 'react';
import * as S from './styles';

const Piar = () => {
    return (
        <S.Container>
            <S.StyledInput placeholder="Dar um piu..." />
            <S.ContainerC>
                <S.ContainerB>
                    <S.Fotinha src="assets/images/fotinha.png" />
                    <S.Video src="assets/images/Video.png" />
                    <S.Emoji src="assets/images/emoji.png" />
                    <S.Tag src="assets/images/tag.png" />
                    <S.Gif src="assets/images/gif.png" />
                </S.ContainerB>
                <S.Postar src="assets/images/Paper_Plane.png" />
            </S.ContainerC>
        </S.Container>
    );
};

export default Piar;
