import PhotoGallery from '../../src/components/PhotoGallery/PhotoGallery'

describe('Компонент PhotoGallery', () => {
  const mockImages = [
    'https://via.placeholder.com/150x150?text=Image+1',
    'https://via.placeholder.com/150x150?text=Image+2',
    'https://via.placeholder.com/150x150?text=Image+3',
  ]

  describe('Рендеринг', () => {
    it('повинен рендерити правильну кількість мініатюр', () => {
      cy.mount(<PhotoGallery images={mockImages} />)
      cy.get('img').should('have.length', 3)
    })

    it('повинен відображати зображення з правильним src', () => {
      cy.mount(<PhotoGallery images={mockImages} />)
      cy.get('img').eq(0).should('have.attr', 'src', mockImages[0])
    })
  })

  describe('Параметри', () => {
    it('повинен обробляти порожній масив зображень', () => {
      cy.mount(<PhotoGallery images={[]} />)
      cy.get('img').should('have.length', 0)
    })

    it('повинен обробляти одне зображення', () => {
      cy.mount(<PhotoGallery images={['https://via.placeholder.com/150x150']} />)
      cy.get('img').should('have.length', 1)
    })

    it('повинен обробляти декілька зображень', () => {
      const manyImages = Array.from({ length: 10 }, (_, i) => `https://via.placeholder.com/150x150?text=Image+${i + 1}`)
      cy.mount(<PhotoGallery images={manyImages} />)
      cy.get('img').should('have.length', 10)
    })
  })

  describe('Атрибути зображень', () => {
    it('повинен мати alt текст для кожного зображення', () => {
      cy.mount(<PhotoGallery images={mockImages} />)
      cy.get('img').eq(0).should('have.attr', 'alt', 'Gallery 0')
    })
  })

  describe('Доступність', () => {
    it('повинен мати описовий alt текст', () => {
      cy.mount(<PhotoGallery images={mockImages} />)
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt').and('not.be.empty')
      })
    })
  })
})
