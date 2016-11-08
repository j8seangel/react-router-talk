import React from 'react';

class PeoplePage extends React.Component {
  componentWillMount() {
    if (!this.props.people.length) {
      this.props.getPeopleList();
    }
  }
  render() {
    return (
      <div className="row">
        <div className="column">
          <h2>{this.context.t('people')}</h2>

          {this.props.people.length > 0 &&
            this.props.people.map((item, index) => (
              <li key={index}>
                <p>{item.name}</p>
              </li>
            ))
          }
        </div>
      </div>
    );
  }
}

PeoplePage.contextTypes = {
  t: React.PropTypes.func.isRequired
};

PeoplePage.propTypes = {
  getPeopleList: React.PropTypes.func.isRequired,
  people: React.PropTypes.array
};

export default PeoplePage;
