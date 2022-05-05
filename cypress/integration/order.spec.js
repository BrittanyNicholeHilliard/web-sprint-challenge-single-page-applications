it('sanity check', () =>{
    expect(10+20).to.equal(30)
})

describe('visit bloom eats website', ()=>{
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })
    it('visiting the website works', ()=>{
        cy.contains('Bloom Eats')
    })
    it('can order a pizza', ()=> {
        const  pizzaFormCy = cy.get(`[data-test-id="pizza-form"]`)
        expect(pizzaFormCy).to.exist
        pizzaFormCy.click()

        const pizzaHeader = cy.get('[data-test-id="pizza-form-header"]')
        pizzaHeader.contains('YAS PIZZA!')

        const submitBtn = () => cy.get(`[data-test-id="submitBtn"]`)
        submitBtn().should('be.disabled')


        const nameField = cy.get(`[data-test-id="nameField"]`)
        nameField.click()
        nameField.type(`Saiki Kusuo`)

        const pizzaSize = cy.get(`[id="size-dropdown"]`)
        pizzaSize.select('small')

       it('can check multiple boxes', () => {
        cy.get('input[type="checkbox"]')
        .as('checkboxes')
        .check()
       })

        const special = cy.get(`[data-test-id='specialrequest']`)
       special.click()
       special.type('No thank you')

       submitBtn().click()
    
    })
})