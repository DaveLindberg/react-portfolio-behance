import React, { Component } from 'react';
import Projects from './Projects';
import './style/main.css';

class Portfolio extends Component {
  render() {
    const API_KEY =
      this.props.apiKey === undefined
        ? 'LDGQKFP7dsmkhIKUAGG67ChSDASj1cWD'
        : this.props.apiKey;

    let baseUrl = `https://api.behance.net/v2/users/${this.props.user}`;
    let urlProjects = `${baseUrl}/projects?client_id=${API_KEY}`;

    return (
      <div
        className="Portfolio"
        style={{
          gridColumn: `1 / 4`,
          gridRow: `7 / 7`
        }}
      >
        <Projects url={urlProjects} showFeatured={this.props.showFeatured} />
      </div>
    );
  }
}

export default Portfolio;
