import PrimaryImage from '../../src/components/PrimaryImage/PrimaryImage'

describe('Компонент PrimaryImage', () => {
  const testImageUrl = 'https://via.placeholder.com/300x300'

  describe('Рендеринг', () => {
    it('повинен рендерити img елемент', () => {
      cy.mount(<PrimaryImage src={testImageUrl} alt="Тестове зображення" />)
      cy.get('img').should('exist')
    })

    it('повинен відображати зображення з параметра src', () => {
      cy.mount(<PrimaryImage src={testImageUrl} alt="Тест" />)
      cy.get('img').should('have.attr', 'src', testImageUrl)
    })
  })

  describe('Доступність', () => {
    it('повинен мати значущий alt текст', () => {
      cy.mount(<PrimaryImage src={testImageUrl} alt="Гарна троянда" />)
      cy.get('img').should('have.attr', 'alt', 'Гарна троянда')
    })
  })
})
