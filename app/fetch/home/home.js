import { get } from '../get'

export function getNewsData() {
    const result = get('/api/homead')
    return result
}

export function getListData(college, page) {
    const result = get('/api/homelist/' + encodeURIComponent(college) + '/' + page)
    return result
}