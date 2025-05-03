import React, { useState } from 'react';
import * as S from './styles';
import Logo from './logo';

// Mapeamento de ícones por item
const icons: { [key: string]: string } = {
    'Página Inicial': 'assets/images/bx_home.png',
    Notificações: 'assets/images/ic_outline-notifications.png',
    Mensagens: 'assets/images/jam_messages-alt.png',
    Salvos: 'assets/images/Cloud_Check.png',
    Perfil: 'assets/images/pajamas_profile.png',
    Configurações: 'assets/images/akar-icons_gear.png'
};

const Sidebar = () => {
    const [active, setActive] = useState('Página Inicial');

    const navItems = [
        'Página Inicial',
        'Notificações',
        'Mensagens',
        'Salvos',
        'Perfil',
        'Configurações'
    ];

    return (
        <S.Container>
            <Logo />
            <nav>
                {navItems.map((item) => (
                    <S.NavItem
                        key={item}
                        active={active === item}
                        onClick={() => setActive(item)}
                    >
                        <S.Icon src={icons[item]} alt={item} />
                        <S.NavText>{item}</S.NavText>
                    </S.NavItem>
                ))}
            </nav>
            <S.Borda>
                <S.FotoPerfil src="assets/images/davi.jpg" />
            </S.Borda>
            <S.Sair src="assets/images/Log_Out.png" />
        </S.Container>
    );
};

export default Sidebar;
