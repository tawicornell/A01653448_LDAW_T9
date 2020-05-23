describe('https://acid.com.mx/', ()=>{
    describe('Page loads', ()=>{
        it('should load the page',()=>{
            cy.visit('https://acid.com.mx/')
        })
    })
})

describe('Productos destacados',()=>{
    it('It should have "Productos destacados"',()=>{
        cy.visit('https://acid.com.mx/')

        cy.contains('PRODUCTOS DESTACADOS')
    })
})


describe('Descuentos',()=>{
    it('It should have "Descuentos"',()=>{
        cy.visit('https://acid.com.mx/')

        cy.contains('Descuentos').click()
        cy.url().should('include', '/descuentos')
    })
})

