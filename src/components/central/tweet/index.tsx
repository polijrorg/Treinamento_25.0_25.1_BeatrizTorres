import React from 'react';
import * as S from './styles';

const Tweet = () => {
    return (
        <>
            <S.ContainerTweet>
                <S.ContainerB>
                    <S.Borda>
                        <S.FotoPerfil src="assets/images/davi.jpg" />
                    </S.Borda>
                    <S.ContainerA>
                        <S.Nome>Dr. Davi Brito</S.Nome>
                        <S.Username>@davibrito.ofc</S.Username>
                    </S.ContainerA>
                </S.ContainerB>
                <S.Mensagem>site de guê?</S.Mensagem>
                <S.ContainerC>
                    <S.Arrow src="assets/images/Arrow_Reload_02.png" />
                    <S.Hurt src="assets/images/Heart_02.png" />
                    <S.Comentario src="assets/images/Chat_Circle.png" />
                </S.ContainerC>
            </S.ContainerTweet>

            <S.ContainerTweet>
                <S.ContainerB>
                    <S.Borda>
                        <S.FotoPerfil src="assets/images/davi.jpg" />
                    </S.Borda>
                    <S.ContainerA>
                        <S.Nome>Pedro Souza</S.Nome>
                        <S.Username>@sbtosouza</S.Username>
                    </S.ContainerA>
                </S.ContainerB>
                <S.Mensagem>
                    NÃO há imoralidade em furar a fila do bandejão quem não
                    defende é porque não tem amigos
                </S.Mensagem>
                <S.ContainerC>
                    <S.Arrow src="assets/images/Arrow_Reload_02.png" />
                    <S.Hurt src="assets/images/Heart_02.png" />
                    <S.Comentario src="assets/images/Chat_Circle.png" />
                </S.ContainerC>
            </S.ContainerTweet>

            <S.ContainerTweet>
                <S.ContainerB>
                    <S.Borda>
                        <S.FotoPerfil src="assets/images/davi.jpg" />
                    </S.Borda>
                    <S.ContainerA>
                        <S.Nome>Gabriela Nunes</S.Nome>
                        <S.Username>@gabynunes</S.Username>
                    </S.ContainerA>
                </S.ContainerB>
                <S.Mensagem>
                    Acabei de perder 2 horas tentando centralizar um div{' '}
                </S.Mensagem>
                <S.ContainerC>
                    <S.Arrow src="assets/images/Arrow_Reload_02.png" />
                    <S.Hurt src="assets/images/Heart_02.png" />
                    <S.Comentario src="assets/images/Chat_Circle.png" />
                </S.ContainerC>
            </S.ContainerTweet>
            <S.ContainerTweet>
                <S.ContainerB>
                    <S.Borda>
                        <S.FotoPerfil src="assets/images/davi.jpg" />
                    </S.Borda>
                    <S.ContainerA>
                        <S.Nome>Agata Nunes</S.Nome>
                        <S.Username>@aghata.nunes</S.Username>
                    </S.ContainerA>
                </S.ContainerB>
                <S.Mensagem>
                    Acabei de perder 2 horas tentando centralizar um div{' '}
                </S.Mensagem>
                <S.ContainerC>
                    <S.Arrow src="assets/images/Arrow_Reload_02.png" />
                    <S.Hurt src="assets/images/Heart_02.png" />
                    <S.Comentario src="assets/images/Chat_Circle.png" />
                </S.ContainerC>
            </S.ContainerTweet>
        </>
    );
};

export default Tweet;
