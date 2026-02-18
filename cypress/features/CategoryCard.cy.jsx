import CategoryCard from '../../src/features/home/categorySection/CategoryCard/CategoryCard'

describe('Компонент CategoryCard', () => {
  const mockCategory = {
    id: 1,
    name: 'Посуд',
    img: 'https://via.placeholder.com/300x300',
  }

  describe('Рендеринг', () => {
    it('повинен рендерити зображення категорії', () => {
      cy.mount(<CategoryCard category={mockCategory} />)
      cy.get('img').should('exist')
    })

    it('повинен рендерити назву категорії', () => {
      cy.mount(<CategoryCard category={mockCategory} />)
      cy.get('h3').should('contain', 'Посуд')
    })

    it('повинен рендерити кнопку переглядання', () => {
      cy.mount(<CategoryCard category={mockCategory} />)
      cy.get('button').should('contain', 'Переглянути більше')
    })

    it('повинен рендерити іконку стрілки', () => {
      cy.mount(<CategoryCard category={mockCategory} />)
      cy.get('svg').should('exist')
    })
  })

  describe('Параметри', () => {
    it('повинен відображати правильну назву категорії', () => {
      cy.mount(<CategoryCard category={mockCategory} />)
      cy.get('h3').should('have.text', 'Посуд')
    })

    it('повинен відображати правильне зображення', () => {
      cy.mount(<CategoryCard category={mockCategory} />)
      cy.get('img').should('have.attr', 'src', mockCategory.img)
    })

    it('повинен мати alt текст для зображення', () => {
      cy.mount(<CategoryCard category={mockCategory} />)
      cy.get('img').should('have.attr', 'alt', 'Посуд')
    })
  })

  describe('Функціональність', () => {
    it('повинен мати функціональну кнопку', () => {
      cy.mount(<CategoryCard category={mockCategory} />)
      cy.get('button').click()
    })
  })
})
