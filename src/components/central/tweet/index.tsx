import React, { useState } from 'react';
import * as S from './styles';

interface Tweet {
    id: number;
    nome: string;
    username: string;
    mensagem: string;
    fotoPerfil: string;
    reactions: { [key: string]: boolean };
}

const TweetComponent = () => {
    const [tweets, setTweets] = useState<Tweet[]>([
        {
            id: 1,
            nome: 'Dr. Davi Brito',
            username: '@davibrito.ofc',
            mensagem: 'site de guê?',
            fotoPerfil: 'assets/images/davi.jpg',
            reactions: { arrow: false, heart: false, comment: false }
        },
        {
            id: 2,
            nome: 'Monica TrinTin',
            username: '@monica.trintin1',
            mensagem: 'Eu na antena parabólica',
            fotoPerfil: 'assets/images/antena.jpg',
            reactions: { arrow: false, heart: false, comment: false }
        },
        {
            id: 3,
            nome: 'Nat jurídico turma da mônica',
            username: '@its_nyat',
            mensagem: 'quadrinhos da turma da monica',
            fotoPerfil: 'assets/images/monica.jpg',
            reactions: { arrow: false, heart: false, comment: false }
        },
        {
            id: 4,
            nome: 'Agata Nunes',
            username: '@aghata.nunes',
            mensagem: 'onde a Aghata Nunes for vão ter Aghaters vey',
            fotoPerfil: 'assets/images/aghata.jpg',
            reactions: { arrow: false, heart: false, comment: false }
        }
    ]);

    const handleDelete = (id: number) => {
        setTweets((prev) => prev.filter((tweet) => tweet.id !== id));
    };

    const toggleReaction = (tweetId: number, reactionType: string) => {
        setTweets((prev) =>
            prev.map((tweet) =>
                tweet.id === tweetId
                    ? {
                          ...tweet,
                          reactions: {
                              ...tweet.reactions,
                              [reactionType]: !tweet.reactions[reactionType]
                          }
                      }
                    : tweet
            )
        );
    };

    return (
        <>
            {tweets.map((tweet) => (
                <S.ContainerTweet key={tweet.id}>
                    {tweet.username === '@davibrito.ofc' && (
                        <S.TrashIcon
                            src="assets/images/Trash_Full.png"
                            alt="Excluir tweet"
                            onClick={() => handleDelete(tweet.id)}
                        />
                    )}
                    <S.ContainerB>
                        <S.Borda>
                            <S.FotoPerfil src={tweet.fotoPerfil} />
                        </S.Borda>
                        <S.ContainerA>
                            <S.Nome>{tweet.nome}</S.Nome>
                            <S.Username>{tweet.username}</S.Username>
                        </S.ContainerA>
                    </S.ContainerB>
                    <S.Mensagem>{tweet.mensagem}</S.Mensagem>
                    <S.ContainerC>
                        <S.Arrow
                            src="assets/images/Arrow_Reload_02.png"
                            $liked={tweet.reactions.arrow}
                            onClick={() => toggleReaction(tweet.id, 'arrow')}
                        />
                        <S.Hurt
                            src="assets/images/Heart_02.png"
                            $liked={tweet.reactions.heart}
                            onClick={() => toggleReaction(tweet.id, 'heart')}
                        />
                        <S.Comentario
                            src="assets/images/Chat_Circle.png"
                            $liked={tweet.reactions.comment}
                            onClick={() => toggleReaction(tweet.id, 'comment')}
                        />
                    </S.ContainerC>
                </S.ContainerTweet>
            ))}
        </>
    );
};

export default TweetComponent;
