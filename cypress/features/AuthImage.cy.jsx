import AuthImage from '../../src/features/auth/AuthImage/AuthImage'

describe('Компонент AuthImage', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити контейнер зображення', () => {
      cy.mount(<AuthImage />)
      cy.get('[class*="imageContainer"]').should('exist')
    })

    it('повинен рендерити img елемент', () => {
      cy.mount(<AuthImage />)
      cy.get('img').should('exist')
    })

    it('повинен мати правильний alt текст', () => {
      cy.mount(<AuthImage />)
      cy.get('img').should('have.attr', 'alt', 'Ceramic cups')
    })
  })

  describe('Атрибути зображення', () => {
    it('повинен мати src атрибут', () => {
      cy.mount(<AuthImage />)
      cy.get('img').should('have.attr', 'src')
    })

    it('src повинен вказувати на auth-sidebar-pots.png', () => {
      cy.mount(<AuthImage />)
      cy.get('img').then(($img) => {
        const src = $img.attr('src')
        expect(src).to.include('auth-sidebar-pots')
      })
    })
  })

  describe('Доступність', () => {
    it('повинно мати описовий alt текст для програм читання', () => {
      cy.mount(<AuthImage />)
      cy.get('img').should('have.attr', 'alt')
      cy.get('img').should('not.have.attr', 'alt', '')
    })
  })
})
