describe('测试项目', function () {
    var LoginUrl
    var LoginMethod
    var LoginHeaders
    var LoginBody
    var LoginName
    var LoginPassWord
    // // 该方法通过接口进行登录，暂未解决token登录状态问题，先走GUI登录
    // before(() => {
    //      cy.fixture('login').then((login) => {
    //         LoginUrl = login.url
    //         LoginMethod = login.method
    //         LoginHeaders = login.headers
    //         LoginBody = login.body
    //          cy.log(LoginHeaders)
    //
    //          cy.login_request(LoginUrl, LoginMethod, LoginHeaders, LoginBody)
    //     })
    //
    // })
    before(() => {
         cy.fixture('login').then((login) => {
            LoginBody = login.body
             LoginName = LoginBody.userName
             LoginPassWord = '123456'
             cy.login_get(LoginName, LoginPassWord)
        })


    });
    it('进入客户列表', function () {
        cy.log("2222")
        cy.get(".layout-menu-icon").click()
        cy.get("[title=客户管理]").click()
        cy.get("[title=客户列表]").click()
    })
    it('销售管理', function () {
        cy.get(':nth-child(5) > .el-submenu > .el-submenu__title').click()
        cy.get('[title=经营报表]').click()
    });
})