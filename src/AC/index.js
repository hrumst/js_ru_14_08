import {
    INCREMENT,
    DELETE_ARTICLE,
    FILTER_ARTICLES_BY_ID,
    FILTER_ARTICLES_BY_DATE
} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function filterArticlesById(ids) {
    return {
        type: FILTER_ARTICLES_BY_ID,
        payload: {ids}
    }
}

export function filterArticlesByDate(from, to) {
    return {
        type: FILTER_ARTICLES_BY_DATE,
        payload: {from, to}
    }
}