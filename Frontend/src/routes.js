import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Feed from './pages/Feed';

/*
    Switch garante que apenas uma rota seja chamada 
    a cada url que o usuário acessar.
    Ver mais detalhes em:
    https://reacttraining.com/react-router/web/api/Route
*/

function Routes() {
    return(
        
        <Switch>
            <Route path="/" exact component={Feed} />
        </Switch>
        
    );
}

export default Routes;
