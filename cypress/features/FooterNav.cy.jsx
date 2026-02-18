import FooterNav from '../../src/features/footer/FooterNav/FooterNav'
import { BrowserRouter } from 'react-router-dom'

describe('Компонент FooterNav', () => {
  const mountComponent = () => {
    cy.mount(
      <BrowserRouter>
        <FooterNav />
      </BrowserRouter>,
    )
  }

  describe('Рендеринг', () => {
    it('повинен рендерити контейнер навігації', () => {
      mountComponent()
      cy.get('[class*="navGroup"]').should('exist')
    })

    it('повинен мати два списки посилань', () => {
      mountComponent()
      cy.get('[class*="list"]').should('have.length', 2)
    })

    it('повинен містити усі основні посилання', () => {
      mountComponent()
      cy.contains('ГОЛОВНА').should('exist')
      cy.contains('ПРО МАЙСТЕРНЮ').should('exist')
      cy.contains('ВІДГУКИ').should('exist')
      cy.contains('FAQ').should('exist')
    })

    it('повинен містити усі посилання політик', () => {
      mountComponent()
      cy.contains('ПОЛІТИКА ДОСТАВКИ').should('exist')
      cy.contains('ПОЛІТИКА ПОВЕРНЕННЯ').should('exist')
      cy.contains('МАТЕРІАЛ & ДОГЛЯД').should('exist')
      cy.contains('ПОЛІТИКА САЙТУ').should('exist')
    })
  })

  describe('Посилання', () => {
    it('посилання ГОЛОВНА повинне вести на /', () => {
      mountComponent()
      cy.get('a').contains('ГОЛОВНА').should('have.attr', 'href', '/')
    })

    it('посилання ПРО МАЙСТЕРНЮ повинне вести на /about', () => {
      mountComponent()
      cy.get('a').contains('ПРО МАЙСТЕРНЮ').should('have.attr', 'href', '/about')
    })

    it('посилання FAQ повинне вести на /faq', () => {
      mountComponent()
      cy.get('a').contains('FAQ').should('have.attr', 'href', '/faq')
    })

    it('всього повинно бути 8 посилань', () => {
      mountComponent()
      cy.get('a').should('have.length', 8)
    })
  })

  describe('Структура', () => {
    it('перший список повинен містити 4 елементи', () => {
      mountComponent()
      cy.get('[class*="list"]').first().find('li').should('have.length', 4)
    })

    it('другий список повинен містити 4 елементи', () => {
      mountComponent()
      cy.get('[class*="list"]').last().find('li').should('have.length', 4)
    })

    it('другий список повинен мати клас rightList', () => {
      mountComponent()
      cy.get('[class*="rightList"]').should('exist')
    })
  })

  describe('Доступність', () => {
    it('посилання повинні бути фокусованими', () => {
      mountComponent()
      cy.get('a').first().focus()
      cy.get('a').first().should('have.focus')
    })

    it('посилання повинні бути видимими', () => {
      mountComponent()
      cy.get('a').each(($link) => {
        cy.wrap($link).should('be.visible')
      })
    })

    it('список повинен мати семантичну структуру', () => {
      mountComponent()
      cy.get('ul').should('have.length', 2)
      cy.get('li').should('have.length.at.least', 8)
    })
  })
})
