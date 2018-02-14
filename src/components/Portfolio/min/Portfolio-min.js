import React, { Component } from 'react';
import Projects from './Projects';
import './style/main.css';
import styled from 'styled-components';

const PortHolder = styled.div`
  grid-column: 1 / 4;
  grid-row: 7 / 7;
  ms-grid-column: 1;
  ms-grid-column-span: 3;
  ms-grid-row: 7;
  ms-grid-row-span: 1;
  @media (max-width: 767px) {
    grid-column: 1 / 3;
    grid-row: 9 / 9;
    ms-grid-column: 1;
    ms-grid-column-span: 2;
    ms-grid-row: 7;
    ms-grid-row-span: 1;
  }
`;

class Portfolio extends Component {
  render() {
    const API_KEY =
      this.props.apiKey === undefined
        ? 'LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD'
        : this.props.apiKey;

    let baseUrl = `https://api.behance.net/v2/users/${this.props.user}`;
    let urlProjects = `${baseUrl}/projects?client_id=${API_KEY}`;

    return (
      <PortHolder className="Portfolio" id="design">
        <Projects url={urlProjects} showFeatured={this.props.showFeatured} />
      </PortHolder>
    );
  }
}

export default Portfolio;


