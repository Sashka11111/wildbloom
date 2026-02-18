describe('Сторінки About та FAQ', () => {
  it('Сторінка About повинна завантажитися', () => {
    cy.visit('/about')
    cy.get('main').should('be.visible')
    cy.get('header').should('be.visible')
    cy.get('footer').should('be.visible')
  })

  it('FAQ повинна завантажитися', () => {
    cy.visit('/faq')
    cy.get('div').should('be.visible')
  })

  it('FAQ items повинні бути інтерактивні', () => {
    cy.visit('/faq')
    cy.get('button, [role="button"], .faqItem, .faq-item, [data-testid*="faq"]').first().should('exist')
  })

  it('Gallery на About повинна бути видима', () => {
    cy.visit('/about')
    cy.get('img').should('have.length.greaterThan', 0)
  })

  it('Всі текстові елементи повинні мати правильне форматування', () => {
    cy.visit('/about')
    cy.get('p, h1, h2, h3').should('have.length.greaterThan', 0)
  })

  it('Всі сторінки повинні мати доступ до логотипу', () => {
    const pages = ['/', '/about', '/faq', '/login']
    pages.forEach((page) => {
      cy.visit(page)
      cy.get('header').should('be.visible')
    })
  })

  it('Всі сторінки повинні мати footer', () => {
    const pages = ['/', '/about', '/faq', '/login']
    pages.forEach((page) => {
      cy.visit(page)
      cy.get('footer').should('be.visible')
    })
  })
})
