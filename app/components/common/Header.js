import React from 'react';
import NavLink from 'containers/common/NavLink';
import Select from 'react-select';
import { translations } from 'locales/translations';

class Header extends React.Component {
  constructor() {
    super();
    this.languages = Object.keys(translations).map((lang) => (
      { value: lang, label: lang.toUpperCase() }
    ));
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(lang) {
    this.props.updateLangURL(lang.value);
  }

  render() {
    return (
      <header className="l-header">
        <div className="row align-middle c-header">
          <div className="column small-8 medium-10">
            <nav className="main-menu">
              <ul>
                <li>
                  <NavLink to="/" i18nText="home" />
                </li>
                <li>
                  <NavLink to="/team" i18nText="team" />
                </li>
              </ul>
            </nav>
          </div>
          <div className="column small-4 medium-2">
            <Select
              name="language-switch"
              className="c-select -right -short"
              clearable={false}
              searchable={false}
              value={this.props.lang}
              options={this.languages}
              onChange={this.onSelectChange}
            />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  // Define the language selected
  lang: React.PropTypes.string.isRequired,
  // Define the function to upadate the url
  updateLangURL: React.PropTypes.func.isRequired
};

export default Header;
