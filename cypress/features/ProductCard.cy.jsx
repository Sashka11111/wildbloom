import ProductCard from '../../src/features/home/productSection/ProductCard/ProductCard'

describe('Компонент ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Керамічна чашка',
    price: 299.99,
    img: 'https://via.placeholder.com/300x300',
  }

  describe('Рендеринг', () => {
    it('повинен рендерити зображення товару', () => {
      cy.mount(<ProductCard product={mockProduct} />)
      cy.get('img').should('exist')
    })

    it('повинен рендерити назву товару', () => {
      cy.mount(<ProductCard product={mockProduct} />)
      cy.get('h3').should('contain', 'Керамічна чашка')
    })

    it('повинен рендерити ціну товару', () => {
      cy.mount(<ProductCard product={mockProduct} />)
      cy.get('p').should('contain', '299.99')
    })

    it('повинен рендерити кнопку додавання в кошик', () => {
      cy.mount(<ProductCard product={mockProduct} />)
      cy.get('button').should('contain', 'ДОДАТИ В КОШИК')
    })
  })

  describe('Параметри', () => {
    it('повинен відображати правильне зображення товару', () => {
      cy.mount(<ProductCard product={mockProduct} />)
      cy.get('img').should('have.attr', 'src', mockProduct.img)
    })

    it('повинен відображати правильну назву товару', () => {
      cy.mount(<ProductCard product={mockProduct} />)
      cy.get('h3').should('have.text', 'Керамічна чашка')
    })

    it('повинен відображати правильну ціну', () => {
      cy.mount(<ProductCard product={mockProduct} />)
      cy.get('p').should('contain', '299.99 ГРН')
    })
  })

  describe('Від функціональність', () => {
    it('повинен мати функціональну кнопку', () => {
      const handleClick = cy.spy()
      cy.mount(<ProductCard product={mockProduct} />)
      cy.get('button').click()
    })
  })
})
