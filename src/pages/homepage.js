import React from 'react';
import GlobalStyle from '../components/globalstyle';
import LinkButton from '../components/linkbutton';

const HomePage = () => {
  return (
      <React.Fragment>
        <GlobalStyle />
        <main>
            <title>About Me</title>
        	<h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <LinkButton to="/contact">Contact</LinkButton>
        </main>
      </React.Fragment>
  )};

export default HomePage;