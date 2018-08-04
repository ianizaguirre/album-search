/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import MainPanel from './MainPanel';
// import HeroPanel from './HeroPanel';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'sidePanel content-main-1 content-main-2';
`;

const SidePanelWrapper = styled.div`
  background: ${props => props.theme.primaryYellow};
  grid-column: sidePanel;
`;

const FlexContainer = styled.div`
  grid-column-start: content-main-1;
  grid-column-end: content-main-2;

  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ShowcaseWrapper = styled.div`
  grid-column-start: content-main-1;
  grid-column-end: content-main-2;

  overflow: auto;
  height: 100vh;
`;

// =====================

// const Showcase = props => (
class Showcase extends React.Component {
  render() {
    console.log('------ inside Showcase.jsx -------');
    console.log(`API KEY from .ENV ===👻👻👻👻👻👻===> ${process.env.API_KEY}`);
    // console.log(this.props.history);
    return (
      <Router>
        <GridWrapper>
          <SidePanelWrapper>{this.props.sidePanel}</SidePanelWrapper>
          <FlexContainer>
            <MainPanel />
            <ShowcaseWrapper>{this.props.mainContent}</ShowcaseWrapper>
          </FlexContainer>
        </GridWrapper>
      </Router>
      // );
    );
  }
}
export default Showcase;
