describe('test auto', () => {
    it('login', () => {
        //login
        cy.visit('http://localhost/SalesNet.Website/Home/SignIn?ReturnUrl=%2fSalesNet.Website%2f') 
        //input user name
        cy.findByRole('textbox', {  name: /email address/i}).type('LefeiZ@apparel21.com')
        //input pwd
        cy.findByLabelText(/password/i).type('123')
        //click button
        cy.findByRole('button', { name: /log in/i }).click()
    })
})