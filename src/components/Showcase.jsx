/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import MainPanel from './MainPanel';

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

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

// =========
const GridContainer = styled.div`
  display: grid;
  border: 10px solid black;
  grid-template-rows: auto;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  justify-items: center;

  margin-top: 30px;
  margin-bottom: 30px;
`;

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
            <ShowcaseWrapper>
              <Gutter>
                <GridContainer>{this.props.mainContent}</GridContainer>
              </Gutter>
            </ShowcaseWrapper>
          </FlexContainer>
        </GridWrapper>
      </Router>
      // );
    );
  }
}
export default Showcase;
