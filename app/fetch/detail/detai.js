import { get } from '../get'
import { post } from '../post'


export function getInfoData(id) {
   const result = get('/api/detail/info/' + id)
   return result
}

export function getCommentData(page, id) {
    const result = get('/api/detail/comment/' + page + '/' + id)
    return result
}

export function postComment(id, comment, star) {
    const result = post('/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })
    return result
}