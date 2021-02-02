Cypress.Commands.add("login_get", (username, password) => {
    cy.visit("/")
    cy.get("[placeholder=请输入账号]").type(username)
    cy.get("[placeholder=请输入密码]").type(password)
    cy.get('.login > .el-form > [align="center"] > .el-form-item__content > .el-button > span').click()
})