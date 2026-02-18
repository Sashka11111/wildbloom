import ContactInfo from '../../src/features/footer/ContactInfo/ContactInfo'

describe('Компонент ContactInfo', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити контейнер контактів', () => {
      cy.mount(<ContactInfo />)
      cy.get('[class*="contacts"]').should('exist')
    })

    it('повинен відображати адресу', () => {
      cy.mount(<ContactInfo />)
      cy.contains('м. Ужгород, Українська 1, 88000').should('exist')
    })

    it('повинен відображати номер телефону', () => {
      cy.mount(<ContactInfo />)
      cy.contains('(096) 889-3566').should('exist')
    })

    it('повинен відображати email', () => {
      cy.mount(<ContactInfo />)
      cy.contains('contact@wildbloom.com').should('exist')
    })
  })

  describe('Посилання', () => {
    it('повинен мати посилання на телефон', () => {
      cy.mount(<ContactInfo />)
      cy.get('a[href="tel:0968893566"]').should('exist')
      cy.get('a[href="tel:0968893566"]').should('contain', '(096) 889-3566')
    })

    it('повинен мати посилання на email', () => {
      cy.mount(<ContactInfo />)
      cy.get('a[href="mailto:contact@wildbloom.com"]').should('exist')
      cy.get('a[href="mailto:contact@wildbloom.com"]').should('contain', 'contact@wildbloom.com')
    })
  })

  describe('Структура', () => {
    it('повинен мати p елемент для адреси', () => {
      cy.mount(<ContactInfo />)
      cy.get('p').should('contain', 'м. Ужгород')
    })

    it('повинен мати два посилання', () => {
      cy.mount(<ContactInfo />)
      cy.get('a').should('have.length', 2)
    })
  })

  describe('Доступність', () => {
    it('контакти повинні бути видимими', () => {
      cy.mount(<ContactInfo />)
      cy.get('[class*="contacts"]').should('be.visible')
    })

    it('посилання повинні бути інтерактивними', () => {
      cy.mount(<ContactInfo />)
      cy.get('a').each(($link) => {
        cy.wrap($link).should('be.visible')
      })
    })
  })
})
