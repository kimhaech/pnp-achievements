import React from 'react';
import { Route } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Members from './pages/Members';
import Recruit from './pages/Recruit';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';

const App = () => {
  return (
    <div>
      <Route path="/" component={Index} exact />
      <Route path="/about" component={About} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/members" component={Members} />
      <Route path="/recruit" component={Recruit} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/Blog" component={Blog} />
    </div>
  );
};

export default App;
