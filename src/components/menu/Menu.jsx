import React from 'react';
import './menu.css';
import { Route, Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        const menus = [
            {
                name: 'Home',
                to: '/',
                exact: true
            },
            {
                name: 'Products',
                to: '/products',
                exact: false
            }
        ]

        const MenuLink = ({ label, to, activeWhenExact }) => {
            return (
                <Route
                    path={to}
                    exact={activeWhenExact}
                    children={({ match }) => {
                        var active = match ? 'active' : ''
                        return (
                            <li className={active}>
                                <Link to={ to }>
                                    { label }
                                </Link>
                            </li>
                        )
                    }}
                />
            )
        }

        return (
            <div className="menu">
                <nav className="navbar navbar-inverse">
                    <Link className="navbar-brand" to="/">React-API</Link>
                    <ul className="nav navbar-nav">
                        {
                            menus.map( (menu, index) => {
                                return (
                                    <MenuLink 
                                        key={ index }
                                        label={menu.name}
                                        to={ menu.to }
                                        activeWhenExact={ menu.exact }
                                    />
                                )
                            })
                        }
                    </ul>
                </nav>


            </div>



        )
    }
}

export default Menu;
