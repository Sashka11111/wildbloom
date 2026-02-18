describe('Авторизація', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Форма авторизації повинна завантажитися', () => {
    cy.contains('h2', 'Авторизація').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('Повинна введеня email та пароль', () => {
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')

    cy.get('input[type="email"]').should('have.value', 'test@example.com')
    cy.get('input[type="password"]').should('have.value', 'password123')
  })

  it('Checkboxе "Запам\'ятати" повинна працювати', () => {
    cy.get('input[type="checkbox"]').should('exist')
    cy.get('input[type="checkbox"]').click()
    cy.get('input[type="checkbox"]').should('be.checked')
  })

  it('Посилання на забутий пароль повинно існувати', () => {
    cy.contains('a', 'Забули пароль?').should('be.visible')
    cy.contains('a', 'Забули пароль?').should('have.attr', 'href')
  })
})
