import ProductInfo from '../../src/features/home/productSection/ProductInfo/ProductInfo'

describe('Компонент ProductInfo', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити назву товару', () => {
      cy.mount(<ProductInfo name="Керамічна миска" price={150} />)
      cy.get('h3').should('contain', 'Керамічна миска')
    })

    it('повинен рендерити ціну товару', () => {
      cy.mount(<ProductInfo name="Товар" price={299.99} />)
      cy.get('p').should('contain', '299.99 ГРН')
    })
  })

  describe('Параметри', () => {
    it('повинен відображати назву з параметра', () => {
      cy.mount(<ProductInfo name="Чайна чашка" price={200} />)
      cy.get('h3').should('have.text', 'Чайна чашка')
    })

    it('повинен форматувати ціну правильно', () => {
      cy.mount(<ProductInfo name="Товар" price={100} />)
      cy.get('p').should('contain', '100.00 ГРН')
    })

    it('не повинен рендерити ціну коли вона не надана', () => {
      cy.mount(<ProductInfo name="Товар" price={undefined} />)
      cy.get('p').should('not.exist')
    })

    it('не повинен рендерити ціну коли вона null', () => {
      cy.mount(<ProductInfo name="Товар" price={null} />)
      cy.get('p').should('not.exist')
    })
  })
})
