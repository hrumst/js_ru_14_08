import React, {Component} from 'react'
import PropTypes from 'prop-types'


class SwitchLocalize extends Component {

    static propTypes = {
        lang: PropTypes.string
    };

    render() {

        const {lang} = this.props;

        return <div>
            <a onClick={this.toggleLang.bind(this)}>{lang}</a>
        </div>
    }

    toggleLang() {
        const {changeLang, lang} = this.props;
        changeLang(lang === 'en' ? 'ru' : 'en');
    }

}

export default SwitchLocalize;