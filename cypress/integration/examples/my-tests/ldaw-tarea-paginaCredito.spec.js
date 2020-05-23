

describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', ()=>{
    describe('La prueba ingresa a la página', ()=>{
        it('La prueba ingresa a la página CYPRESS',()=>{
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')
        })
    })
})



describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', ()=>{
    describe('La prueba ingresa los input de tipo texto (Fecha de disposición, Monto del Crédito, Interés)', ()=>{
        it('La prueba ingresa los input de tipo texto (Fecha de disposición, Monto del Crédito, Interés) CYPRESS',()=>{
            
            //cy.get("#dispDate").clear().type("05/05/2020");
            cy.get("#fechaDisposicion input").clear().type("05/05/2020");
            //salir de la ventana que se habre del form
            cy.get("body").click();
            cy.get('#creditAmount').clear().type('20000');
            cy.get('#rate').clear().type('15');
        })
    })
})




describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', ()=>{
    describe('La prueba ingresa los input de tipo “select” (Forma de pago, Plazo)', ()=>{
        it('La prueba ingresa los input de tipo “select” (Forma de pago, Plazo) CYPRESS',()=>{
            
            cy.get("#paymentMethod").select('1');
            cy.get("#period").select('2');
            
        })
    })
})

describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', ()=>{
    describe('La prueba hace el click del botón “Calcular”', ()=>{
        it('La prueba hace el click del botón “Calcular” CYPRESS',()=>{
            
            cy.contains("Calcular").click();
            cy.contains("Ahora no").click();

        })
    })
})

describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', ()=>{
    describe('La prueba verifica que la prueba tenga las filas correctas', ()=>{
        it('La prueba verifica que la prueba tenga las filas correctas CYPRESS',()=>{
            

            //https://stackoverflow.com/questions/46850694/in-cypress-how-to-count-a-selection-of-items-and-get-the-length
            //cy.get('.datatable').find('tr').should('have.length', 4)
            //24 + 1(titulos/headers)
            cy.get('#resultadosSimulador').find('tr').should('have.length', 25);


        })
    })
})
