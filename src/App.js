import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes  from './Routes/MainRoutes';
import { Container, Menu, PageBody } from './AppStyled';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';


export default () => {

    return (
        <BrowserRouter>
            <Container>
                <Menu>    
                    <MenuItem title="Loja" icon='/assets/store.png' link='/' />
                    <MenuItem title="Pedidos"  icon='/assets/order.png' link='/orders' />
                    <MenuItem title="Perfil" icon='/assets/profile.png' link='/profile' />
                </Menu>
                <PageBody>
                    <Routes/>
                </PageBody>
                <Cart/>

            </Container>       
        </BrowserRouter>
    );
}