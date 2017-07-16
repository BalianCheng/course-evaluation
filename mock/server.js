var app = require('koa')();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 华大新闻
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    console.log('华大新闻')

    this.body = homeAdData
});

// 首页 —— 课程列表
var homeListData = require('./home/list.js')
router.get('/api/homelist/:college/:page', function *(next) {
    console.log('课程列表')

    // 参数
    const params = this.params
    const paramsCollege = params.college
    const paramsPage = params.page

    console.log('用户学院：' + paramsCollege)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:college/:category/:keyword', function *(next) {
    console.log('搜索结果页 - 搜索结果')

    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCollege = params.college
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('用户学院：' + paramsCollege)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    this.body = searchListData
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:college/:category', function *(next) {
    console.log('搜索结果页 - 搜索结果')

    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCollege = params.college
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('用户学院：' + paramsCollege)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})

// 详情页 - 课程信息
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next) {
    console.log('详情页 - 课程信息')

    const params = this.params
    const id = params.id

    console.log('课程id: ' + id)

    this.body = detailInfo
})
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('详情页 - 用户点评')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('课程id: ' + id)
    console.log('当前页数: ' + page)

    this.body = detailComment
})


// 提交评论
router.post('/api/submitComment', function *(next) {
    console.log('提交评论')

    // 获取参数

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
