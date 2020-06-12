import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Room from './main/room.view';
import Category from './main/category.view';
import Home from './main/home.view';
import Nav from './segment/Nav';
import AddRoom from './controller/addRoom';

const Routes = () => {
    return (
        <BrowserRouter>
        <Nav/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/room" exact component={Room} />
                <Route path="/room/create" exact component={AddRoom} />
                <Route path="/category" exact component={Category} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;