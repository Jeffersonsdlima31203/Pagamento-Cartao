describe('Tenda - Produtos', () => {
  // Configurações dinâmicas
  const config = {
    baseUrl: 'https://marketplace-alpha.tendaatacado.com.br/',
    login: {
      email: 'jeffpaydev@gmail.com',
      password: '8H1EAiTrgy*'
    },
    card: {
      number: '4000000000000010',
      month: '02',
      year: '2035',
      cvv: '352',
      name: 'Jefferon Silva de Lima',
      cpf: '35275647808'
    }
  }

  // Função para realizar login
  const login = (email, password) => {
    cy.get('.text-hello').click()
    cy.get('#login').type(email)
    cy.get('#password').type(password)
    cy.get('.row_action_login > [data-cy="btn-"]').click()
    cy.wait(6000)
  }

  // Função para selecionar um valor no dropdown
  const selectDropdownValue = (selector, value) => {
    cy.get(selector)
      .parent()
      .invoke('attr', 'style', 'display: block !important') // Força visibilidade
      .then(() => {
        cy.get(`${selector} > .react-select__control`).click({ force: true })
        cy.get('.react-select__menu').contains(value).click({ force: true })
      })
  }

  it('Pagamento com Cartão', () => {
    // Visitar a página inicial
    cy.visit(config.baseUrl)
    cy.get('.ButtonClose > .svgIcon').click()
    cy.get('.disclaimer-container > [data-cy="btn-"]').click()

    // Realizar login
    login(config.login.email, config.login.password)

    // Navegar pelos produtos e adicionar ao carrinho
    cy.get('.hot-link-name').click()
    cy.wait(5000)
    cy.get('.LogoComponent > .svgIcon').click()
    cy.get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click()
    cy.wait(10000)
    cy.contains('button', 'Adicionar').click()
    cy.wait(11000)
    cy.get('.icon-cart-ball > .svgIcon').click()
    cy.get('.resume-buttons > .btn').click({ force: true })
    cy.get('.btn.btn-finish-order.btn-block').trigger('click')
    cy.wait(10000)

    // Preencher dados do cartão de crédito
    cy.get('img.svgIcon.svg-ico_credit_card').should('be.visible').click({ force: true }).dblclick({ force: true })
    cy.get('#number').type(config.card.number)
    selectDropdownValue('#month', config.card.month)
    selectDropdownValue('#year', config.card.year)
    cy.get('#cvv').type(config.card.cvv)
    cy.get('#name').type(config.card.name)
    cy.get('#cpf').type(config.card.cpf)

    // Confirmar pagamento
    cy.get('.CreditCardComponent > [data-cy="btn-"]').click()
    cy.wait(6000)
    cy.contains('button', 'Finalizar compra').click({ force: true })
    cy.wait(6000)
  })
})
