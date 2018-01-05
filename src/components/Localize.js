"use strict";

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {en, ru} from './dictionary'

class Localize extends Component {

    static contextTypes = {
        globalLang: PropTypes.string
    };

    render() {

        const {children: textArg} = this.props;
        const {globalLang: lang} = this.context;

        const calculatedText = lang === 'en' && en[textArg] ? en[textArg] : ru[textArg];

        return <h1>{calculatedText}</h1>
    }

}

export default Localize;