import { DELETE_ARTICLE, FILTER_ARTICLES_BY_ID, FILTER_ARTICLES_BY_DATE } from '../constants'
import {articles as defaultArticles} from '../fixtures'
import moment from 'moment'

export default (articles = defaultArticles, action) => {

    const { type, payload } = action;

    switch (type) {

        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id);

        case FILTER_ARTICLES_BY_ID:

            if (!Array.isArray(payload.ids) || payload.ids.length < 1) {
                return defaultArticles;
            }

            return defaultArticles.filter(article => {
                return payload.ids.indexOf(article.id) !== -1;
            });

        case FILTER_ARTICLES_BY_DATE:

            const {from, to} = payload;
            if (!to) {
                return defaultArticles;
            }

            return defaultArticles.filter(article => {
                console.log(moment(article.date).isBetween(from, to));
                return moment(article.date).isBetween(from, to);
            });
    }

    return articles
}