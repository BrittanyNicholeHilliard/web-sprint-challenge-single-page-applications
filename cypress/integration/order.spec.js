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
        const  pizzaFormCy = cy.get(`[data-test-id="animeGirl"]`)
        expect(pizzaFormCy).to.exist
    })
})