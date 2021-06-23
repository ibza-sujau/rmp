import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import VhsPage from './pages/VhsPage';
import SqwkPage from './pages/SqwkPage';

const RMP = () => (
    <Router>
        <Route path={"/vhs"} component={VhsPage}/>
        <Route path={"/sqwk"} component={SqwkPage}/>
    </Router>
)

render(<RMP/>, document.getElementById("root"));