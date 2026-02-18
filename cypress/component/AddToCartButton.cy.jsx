import AddToCartButton from '../../src/components/AddToCartButton/AddToCartButton'

describe('Компонент AddToCartButton', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити елемент кнопки', () => {
      cy.mount(<AddToCartButton />)
      cy.get('button').should('exist')
    })

    it('повинен відображати правильний текст кнопки', () => {
      cy.mount(<AddToCartButton />)
      cy.get('button').should('contain', 'ДОДАТИ В КОШИК')
    })
  })

  describe('Доступність', () => {
    it('повинен бути фокусовуваний через клавіатуру', () => {
      cy.mount(<AddToCartButton />)
      cy.get('button').focus()
      cy.get('button').should('have.focus')
    })
  })
})
