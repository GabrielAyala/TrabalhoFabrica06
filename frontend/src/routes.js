import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Fichas from './pages/Fichas';
import NovasFichas from './pages/NovasFichas';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro}/>

                <Route path="/fichas" exact component={Fichas} />
                <Route path="/fichas/novasFichas" exact component={NovasFichas} />
            </Switch>
        </BrowserRouter>

    );

}

export default Routes;
