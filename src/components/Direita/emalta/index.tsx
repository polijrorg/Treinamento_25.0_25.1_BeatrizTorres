import React from 'react';
import * as S from './styles';

const EmAlta = () => {
    return (
        <S.Container>
            <S.ScrollArea>
                <S.FeedItem>
                    <S.Imagem src="assets/images/gaga.png" />
                    <S.Textos>
                        <S.Titulo>Lady Gaga</S.Titulo>
                        <S.Texto>
                            Show no Rio tem pedidos de desculpas, luzes e dança
                            para 2,1 milhões de pessoas.
                        </S.Texto>
                    </S.Textos>
                </S.FeedItem>

                <S.FeedItem>
                    <S.Imagem src="assets/images/data.jpg" />
                    <S.Textos>
                        <S.Titulo>Precisando de mais folga?</S.Titulo>
                        <S.Texto>
                            Saiba quais são os próximos feriados de 2025.
                        </S.Texto>
                    </S.Textos>
                </S.FeedItem>

                <S.FeedItem>
                    <S.Imagem src="assets/images/Dudu.jpeg" />
                    <S.Textos>
                        <S.Titulo>Dudu</S.Titulo>
                        <S.Texto>
                            Atlético-Mg encaminha contratação do jogador
                            ex-cruzeiro.
                        </S.Texto>
                    </S.Textos>
                </S.FeedItem>

                <S.FeedItem>
                    <S.Imagem src="assets/images/novela.jpg" />
                    <S.Textos>
                        <S.Titulo>Dona de Mim</S.Titulo>
                        <S.Texto>
                            Leo é demitida após pregar peça para ajudar Sofia.
                        </S.Texto>
                    </S.Textos>
                </S.FeedItem>

                <S.FeedItem>
                    <S.Imagem src="assets/images/bomba.jpg" />
                    <S.Textos>
                        <S.Titulo>Ataque a bomba</S.Titulo>
                        <S.Texto>
                            Polícia Civil impede ataque a bomba em show de Lady
                            Gaga no Rio.
                        </S.Texto>
                    </S.Textos>
                </S.FeedItem>

                <S.FeedItem>
                    <S.Imagem src="assets/images/pizza.jpg" />
                    <S.Textos>
                        <S.Titulo>Pizzada</S.Titulo>
                        <S.Texto>
                            Teve pizza (inclusive doce) na reunião de núcleo do
                            NTec.
                        </S.Texto>
                    </S.Textos>
                </S.FeedItem>

                <S.FeedItem>
                    <S.Imagem src="assets/images/davi.jpg" />
                    <S.Textos>
                        <S.Titulo>Quem nunca?</S.Titulo>
                        <S.Texto>
                            Mesmo com dívida no Serasa, Davi Brito abre duas
                            empresas na Bahia.
                        </S.Texto>
                    </S.Textos>
                </S.FeedItem>
            </S.ScrollArea>
        </S.Container>
    );
};

export default EmAlta;
