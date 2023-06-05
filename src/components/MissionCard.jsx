import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionCard">
        <h3 data-testid="mission-name">{ name }</h3>
        <hr />
        <div className="missionContent">
          <p data-testid="mission-year">{ year }</p>
          <p data-testid="mission-country">{ country }</p>
          <p data-testid="mission-destination">{ destination }</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
