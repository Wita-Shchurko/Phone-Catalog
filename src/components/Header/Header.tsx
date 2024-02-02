/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';
import { Search } from '../Search';
import { GeneralContext } from '../../helpers/GeneralContext';

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'header__link', 'header__nav-link', 'nav__link', {
    'is-active': isActive,
  },
);

const getAdditionalLinkClass
= ({ isActive }: { isActive: boolean }) => classNames(
  'header__additional-link', {
    'is-active': isActive,
  },
);

export const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const { favouritesList, cartList } = useContext(GeneralContext);
  const { pathname } = useLocation();

	const itemsNumber = cartList.reduce((acc, current) => {
		return acc + current.quantity;
	}, 0)

  return (
    <header className="header">
      <div className="header__wrapper">
				<div className="header__start">
					<NavLink
						to="/"
						className="header__nav--logo"
					>
						<img
							src={require('../../images/icons/Logo.svg').default}
							alt="Logo"
						/>
					</NavLink>

					<button
						className="header__menu-btn"
						onClick={() => setIsMenuOpen(true)}
					/>

					<nav className={classNames('header__nav', 'nav', {
						'nav__close' : !isMenuOpen,
					})}>
						<NavLink
								to="/"
								className={getLinkClass}
							>
								Home
							</NavLink>

							<NavLink
								to="/phones"
								className={getLinkClass}
							>
								Phones
							</NavLink>

							<NavLink
								to="/tablets"
								className={getLinkClass}
							>
								Tablets
							</NavLink>

							<NavLink
								to="/accessories"
								className={getLinkClass}
							>
								Accessories
							</NavLink>

							<button
								className="header__menu-close"
								onClick={() => setIsMenuOpen(false)}
							/>
					</nav>
				</div>

        <div className="header__additional-links">
          {pathname === '/phones' && <Search />}
          {pathname === '/tablets' && <Search />}
          {pathname === '/accessories' && <Search />}
          {pathname === '/favourities' && <Search />}

          <NavLink
            to="/favourities"
            className={getAdditionalLinkClass}
          >
            <img
              src={require('../../images/icons/favourities.svg').default}
              alt="Favorite"
            />

            {favouritesList.length > 0 && (
              <div className="header__counter">
                {favouritesList.length}
              </div>
            )}
          </NavLink>

          <NavLink
            to={{
              pathname: '/cart',
              search: searchParams.toString(),
            }}
            className={getAdditionalLinkClass}
          >
            <img
              src={require('../../images/icons/shopping-bag.svg').default}
              alt="Cart"
            />

            {cartList.length > 0 && (
              <div className="header__counter">
                {itemsNumber}
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};
