import { DELETE_ARTICLE, FILTER_ARTICLES_BY_ID } from '../constants'
import {articles as defaultArticles} from '../fixtures'

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

    }

    return articles
}