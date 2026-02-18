import NavLinks from '../../src/features/header/NavLinks/NavLinks'
import { BrowserRouter } from 'react-router-dom'

describe('Компонент NavLinks', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити три пункти меню', () => {
      cy.mount(
        <BrowserRouter>
          <NavLinks />
        </BrowserRouter>,
      )
      cy.get('li').should('have.length', 3)
    })

    it('повинен рендерити три посилання', () => {
      cy.mount(
        <BrowserRouter>
          <NavLinks />
        </BrowserRouter>,
      )
      cy.get('a').should('have.length', 3)
    })
  })

  describe('Посилання навігації', () => {
    it('повинен мати посилання на головну сторінку', () => {
      cy.mount(
        <BrowserRouter>
          <NavLinks />
        </BrowserRouter>,
      )
      cy.get('a').first().should('have.attr', 'href', '/')
    })

    it('повинен мати посилання на сторінку про', () => {
      cy.mount(
        <BrowserRouter>
          <NavLinks />
        </BrowserRouter>,
      )
      cy.get('a').eq(1).should('have.attr', 'href', '/about')
    })

    it('повинен мати посилання на FAQ', () => {
      cy.mount(
        <BrowserRouter>
          <NavLinks />
        </BrowserRouter>,
      )
      cy.get('a').eq(2).should('have.attr', 'href', '/faq')
    })
  })

  describe('Текст посилань', () => {
    it('повинен мати текст ГОЛОВНА', () => {
      cy.mount(
        <BrowserRouter>
          <NavLinks />
        </BrowserRouter>,
      )
      cy.get('a').first().should('contain', 'ГОЛОВНА')
    })

    it('повинен мати текст ПРО МАЙСТЕРНЮ', () => {
      cy.mount(
        <BrowserRouter>
          <NavLinks />
        </BrowserRouter>,
      )
      cy.get('a').eq(1).should('contain', 'ПРО МАЙСТЕРНЮ')
    })

    it('повинен мати текст FAQ', () => {
      cy.mount(
        <BrowserRouter>
          <NavLinks />
        </BrowserRouter>,
      )
      cy.get('a').eq(2).should('contain', 'FAQ')
    })
  })
})
