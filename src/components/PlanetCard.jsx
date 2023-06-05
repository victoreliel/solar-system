import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const imgAlt = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planetCard">
        <p data-testid="planet-name">{ planetName }</p>
        <div className="img">
          <img src={ planetImage } alt={ imgAlt } className={ planetName } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
