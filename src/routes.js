import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App.js';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import Intro from './components/Intro';

const routes = (
    <div>
        <Route path="/" component={ App } />
        <Route exact path="/" component={ Intro } />
        <Route path="/projects" component={ ProjectGrid } />
        <Route path="/contact" component={ Contact } />
    </div>
);

export default routes;