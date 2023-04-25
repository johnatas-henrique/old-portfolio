import React, { useContext, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './css/global';
import theme from './css/theme';
import { PortfolioContext } from './context/Portfolio';
import { Burger, Menu, Dock } from './components';
import useOnClickOutside from './hooks';
import {
  Main, About, Contact, Projects, Skills, NotFound,
} from './pages';

const App = () => {
  const { openBurger, setOpenBurger } = useContext(PortfolioContext);
  const node = useRef();
  useOnClickOutside(node, () => setOpenBurger(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Menu openBurger={openBurger} setOpenBurger={setOpenBurger} />
          <Burger openBurger={openBurger} setOpenBurger={setOpenBurger} />
        </div>
        <Switch>
          <Route path="/old-portfolio/about" component={About} />
          <Route path="/old-portfolio/contact" component={Contact} />
          <Route path="/old-portfolio/projects" component={Projects} />
          <Route path="/old-portfolio/skills" component={Skills} />
          <Route exact path="/old-portfolio" component={Main} />
          <Route component={NotFound} />
        </Switch>
        <Dock />
      </>
    </ThemeProvider>
  );
};

export default App;
