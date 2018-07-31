import React from 'react';
import classNames from 'classnames';

import '../css/gatsby.css';

export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="___gatsby_layout">
        {this.props.children()}
      </div>
    );
  }
}
