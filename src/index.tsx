import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

import VhfPage from './pages/VhfPage';
import SqwkPage from './pages/SqwkPage';

const RMP = () => (
    <Router>
        <Route path={"/vhs"} component={VhfPage}/>
        <Route path={"/sqwk"} component={SqwkPage}/>
    </Router>
)

render(<RMP/>, document.getElementById("root"));