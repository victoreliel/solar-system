import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="titleContainer">
        <h2 className="title">{ headline }</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
}.isRequired;

export default Title;
