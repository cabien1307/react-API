import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu.jsx'
import routes from './routes/routes'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Menu />

                <div className="container">
                    <div className="row">
                        <Switch>
                            {routes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                )
                            })}
                        </Switch>

                    </div>
                </div>
            </Router>

        )
    }
}

export default App;
