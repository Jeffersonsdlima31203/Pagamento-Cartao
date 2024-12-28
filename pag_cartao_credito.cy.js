describe('Tenda - produtos', () => {
  it('Pagamento Cartão', () => {
    cy.visit('https://marketplace-alpha.tendaatacado.com.br/')
    cy.get('.ButtonClose > .svgIcon').click()
    cy.get('.disclaimer-container > [data-cy="btn-"]').click()
   
    cy.get('.text-hello').click()
    cy.get('#login').type('jeffpaydev@gmail.com')
    cy.get('#password').type('8H1EAiTrgy*')
    cy.get('.row_action_login > [data-cy="btn-"]').click()
    cy.wait(6000)
    cy.get('.hot-link-name').click()
    cy.wait(5000)

    cy.get('.LogoComponent > .svgIcon').click()
    //cy.get('#shipping-cep').type('14150000')
    

    cy.get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click()
    cy.wait(10000)

    
    cy.contains('button','Adicionar').click()
    cy.wait(11000)

    cy.get('.icon-cart-ball > .svgIcon').click()

    cy.get('.resume-buttons > .btn')
    cy.get('.resume-buttons > .btn').click({force: true})
    cy.get('.btn.btn-finish-order.btn-block').trigger('click')

    cy.wait(10000)

    
   
// Após o carregamento, clique no ícone
cy.get('img.svgIcon.svg-ico_credit_card').should('be.visible').click({ force: true }).dblclick({ force: true })

cy.get('#number').type('4000000000000010')

cy.get('#month > .react-select__control > .react-select__value-container')

// Força o estilo para garantir visibilidade
cy.get('#month')
  .parent()
  .invoke('remove','attr', 'style', 'display: block !important;')
  .then(() => {
    cy.get('#month > .react-select__control')
      .click({ force: true })

    cy.get('.react-select__menu')
      .contains('02')
      .click({ force: true })
  })

// (Opcional) Validar que o mês foi selecionado corretamente

cy.get('#month > .react-select__control > .react-select__value-container')
  .should('contain', '02'); // Valida o valor

  cy.get('#year > .react-select__control > .react-select__value-container')

  cy.get('#year')
  .parent()
  .invoke('remove', 'attr', 'style', 'display: block !important;')
  .then(() => {
    cy.get('#year > .react-select_control')
    .click({force: true})

    cy.get('react-select_menu')
    .contains('2035')
    .click({force: true})

    cy.get('#year > .react-select__control > .react-select__value-container')
    .should('contain', '2035');


  })

    
    cy.get('#cvv').type('352')
    cy.get('#name').type('Jefferon Silva de Lima')
    cy.get('#cpf').type('35275647808')
    cy.get('.CreditCardComponent > [data-cy="btn-"]').click()
    cy.wait(6000)
    

    cy.contains('button', 'Finalizar compra').click({force: true})
    cy.wait(6000)





    

  })
})
