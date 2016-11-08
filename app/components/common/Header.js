import React from 'react';
import { Link } from 'react-router';
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
    this.props.updateLang(lang.value);
  }

  render() {
    return (
      <header className="l-header">
        <div className="row align-middle c-header">
          <div className="column small-8 medium-10">
            <nav className="main-menu">
              <ul>
                <li>
                  <Link activeClassName="-current" to={`/${this.props.lang}`}>{this.context.t('home')}</Link>
                </li>
                <li>
                  <Link activeClassName="-current" to={`/${this.props.lang}/people`}>{this.context.t('people')}</Link>
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

Header.contextTypes = {
  // Define function to get the translations
  t: React.PropTypes.func.isRequired
};

Header.propTypes = {
  // Define the language selected
  lang: React.PropTypes.string.isRequired,
  // Define the function to upadate the url after language change
  updateLang: React.PropTypes.func.isRequired
};

export default Header;
