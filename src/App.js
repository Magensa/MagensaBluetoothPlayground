import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import playgroundStore from './redux/playgroundStore';
import { LandingPage } from './components/views/landingPage';


const App = _ =>
    <Provider store={ playgroundStore }>
        <Router>
            <LandingPage />
        </Router>
    </Provider>

export default App;
