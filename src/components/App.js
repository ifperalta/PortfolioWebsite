import React from "react";
import { Route, Switch, Redirect} from 'react-router-dom';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

class App extends React.Component{
    render(){
            return(
                <div className="main-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            );
    }
}

export default App;