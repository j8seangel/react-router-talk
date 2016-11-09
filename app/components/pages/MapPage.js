import React from 'react';

class PeoplePage extends React.Component {

  randomName() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i ++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  updateMapParams() {
    this.props.updateMapURL({
      zoom: Math.round(Math.random() * 10) + 1,
      lat: 12,
      lng: 23
    });
  }

  updateTeamURL() {
    this.props.updateTeamURL([this.randomName(), this.randomName()]);
  }

  btnClick() {
    this.updateMapParams();
    this.updateTeamURL();
  }

  render() {
    return (
      <div className="row">
        <div className="column">
          <button style={{ display: 'block' }} onClick={() => this.updateMapParams()}> Update map params</button>
          <button style={{ display: 'block' }} onClick={() => this.updateTeamURL()}> Update team</button>
          <button style={{ display: 'block' }} onClick={() => this.btnClick()}> Update all the fucking shit</button>
        </div>
      </div>
    );
  }
}

export default PeoplePage;
