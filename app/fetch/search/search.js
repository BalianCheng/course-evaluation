import { get } from '../get'

export function getSearchData(page, collegeName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get('/api/search/' + page + '/' + collegeName + '/' + category + keywordStr)
    return result
}