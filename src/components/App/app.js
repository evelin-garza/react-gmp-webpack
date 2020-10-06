import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import "./App.scss";
import Home from "../../pages/Home/Home";
import MovieDetails from "../../pages/MovieDetails/MovieDetails";
import NotFound from "../../pages/NotFound/NotFound";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Home} />
                <Route exact path="/film/:id" component={MovieDetails} />
                <Route component={NotFound} />
            </Switch>
        </Router>

    );
};

export default App;
