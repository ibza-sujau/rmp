import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

import VhfPage from './pages/VhfPage';
import SqwkPage from './pages/SqwkPage';
import { Redirect } from 'react-router';

//ANOTHER NOTE FOR ALL PROPS YOU PARSE:
//YOU CAN TYPE prop='thing' INSTEAD OF prop={'thing'} however this is purely preference about code style

const RMP = () => (
    <Router>
        {/* Could add a redirect so people dont need to type in /vhs */}
        <Route path='/'>
            <Redirect to='/vhs'/>
        </Route>
        <Route path={"/vhs"} component={VhfPage}/>
        <Route path={"/sqwk"} component={SqwkPage}/>
    </Router>
)

render(<RMP/>, document.getElementById("root"));