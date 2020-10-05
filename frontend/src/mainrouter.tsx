import { BASE_HREF } from 'config.json';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Home } from './component/home';
import { Owner } from './component/owner';
import { Product } from './component/product';



interface Props { }
interface State { }

export class MainRouter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    public render() {

        return < BrowserRouter basename={BASE_HREF}>
            <Link to='/home'>Accueil</Link>
            <Link to='/owner'>Owner</Link>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/owner' component={Owner} />
                <Route path='/product' component={Product} />

            </Switch>
        </ BrowserRouter>;
    }
};
