import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import moment from 'moment'
import {connect} from 'react-redux'
import {filterArticlesByDate} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    state = {
        from: null,
        to: null
    };

    handleDayClick = (day) => {

        const {filterArticlesByDate} = this.props;

        let {from, to} = DateUtils.addDayToRange(day, this.state);

        from = moment(from).set('hour', 0).toDate();
        if (to) {
            to = moment(to).set('hour', 0).toDate();
        }

        this.setState({from, to});

        filterArticlesByDate(from, to);
    };

    render() {
        const {from, to} = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(null, {filterArticlesByDate})(DateRange)