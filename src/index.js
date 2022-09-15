import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; 
import App from "./components/App";

import "./components/common/custom.css";
import "./components/common/style.css";

render(<Router>
        <App />
        </Router>, 
        document.getElementById("portfolio")
);