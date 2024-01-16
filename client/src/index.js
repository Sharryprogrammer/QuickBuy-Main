import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import dotenv from "dotenv"
dotenv.config({
    path:'./.env'
})

ReactDOM.render(<Routes />, document.getElementById('root'));
