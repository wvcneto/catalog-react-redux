import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiSpartanHelmet } from 'react-icons/gi';
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';

import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';

import { Container } from './styles';

const Header: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  return (
    <Container className="header">
      <div className="logo">
        <Link to="/">
          <GiSpartanHelmet />
          HelmShop
        </Link>
      </div>
      <div className="menu">
        <Link to="/cart">
          <FiShoppingCart />
          <span>{cart.length}</span>
        </Link>
        <Link to="/">
          <FiLogIn />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
