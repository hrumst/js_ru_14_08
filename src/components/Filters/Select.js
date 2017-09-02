import React, {Component, PropTypes} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterArticlesById} from '../../AC'


import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        options: this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        })),
        selected: null
    };

    handleSelectionChange = selected => {

        const
            {filterArticlesById} = this.props,
            selectedIds = selected.map(selectedArticle => {
                return selectedArticle.value;
            });

        this.setState({selected});

        filterArticlesById(selectedIds);
    };

    render() {
        const {articles} = this.props;

        return <Select
            options={this.state.options}
            value={this.state.selected}
            onChange={this.handleSelectionChange}
            multi
        />
    }
}

export default connect(
    state => ({articles: state.articles}),
    {filterArticlesById}
)(SelectFilter)