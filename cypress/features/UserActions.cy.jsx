import UserActions from '../../src/features/header/UserActions/UserActions'
import { BrowserRouter } from 'react-router-dom'

describe('Компонент UserActions', () => {
  const mountComponent = () => {
    cy.mount(
      <BrowserRouter>
        <UserActions />
      </BrowserRouter>,
    )
  }

  describe('Рендеринг', () => {
    it('повинен рендерити контейнер', () => {
      mountComponent()
      cy.get('[class*="container"]').should('exist')
    })

    it('повинен містити три кнопки/посилання', () => {
      mountComponent()
      cy.get('button').should('have.length', 2)
      cy.get('a').should('have.length', 1)
    })

    it('кожна дія повинна мати SVG іконку', () => {
      mountComponent()
      cy.get('svg').should('have.length', 3)
    })
  })

  describe('Кнопки дій', () => {
    it('повинен мати кнопку пошуку', () => {
      mountComponent()
      cy.get('button').first().find('svg').should('exist')
    })

    it('повинен мати посилання на вхід', () => {
      mountComponent()
      cy.get('a[href="/login"]').should('exist')
    })

    it('повинен мати кнопку кошика', () => {
      mountComponent()
      cy.get('button').last().find('svg').should('exist')
    })
  })

  describe('Стилі', () => {
    it('всі іконки повинні мати клас iconButton', () => {
      mountComponent()
      cy.get('[class*="iconButton"]').should('have.length.at.least', 2)
    })

    it('кнопки повинні мати розмір 20px', () => {
      mountComponent()
      cy.get('svg').each(($svg) => {
        cy.wrap($svg).should('have.attr', 'width')
      })
    })
  })

  describe('Доступність', () => {
    it('кнопки повинні бути фокусованими', () => {
      mountComponent()
      cy.get('button').first().focus()
      cy.get('button').first().should('have.focus')
    })

    it('посилання повинне бути фокусованим', () => {
      mountComponent()
      cy.get('a[href="/login"]').focus()
      cy.get('a[href="/login"]').should('have.focus')
    })

    it('кнопки повинні бути видимими', () => {
      mountComponent()
      cy.get('button').each(($btn) => {
        cy.wrap($btn).should('be.visible')
      })
    })
  })
})
