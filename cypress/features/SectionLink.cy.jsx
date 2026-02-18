import SectionLink from '../../src/components/SectionLink/SectionLink'

describe('Компонент SectionLink', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити елемент кнопки', () => {
      cy.mount(<SectionLink text="Дізнатися більше" />)
      cy.get('button').should('exist')
    })

    it('повинен відображати текстовий вміст', () => {
      cy.mount(<SectionLink text="Читати далі" />)
      cy.get('button').should('contain', 'Читати далі')
    })

    it('повинен рендерити іконку стрілки', () => {
      cy.mount(<SectionLink text="Далі" />)
      cy.get('svg').should('exist')
    })
  })

  describe('Параметри', () => {
    it('повинен відображати різні значення тексту', () => {
      cy.mount(<SectionLink text="Дослідити" />)
      cy.get('button').should('contain', 'Дослідити')
    })

    it('повинен обробляти спеціальні символи', () => {
      cy.mount(<SectionLink text="Зберегти 30%!" />)
      cy.get('button').should('contain', 'Зберегти 30%!')
    })
  })

  describe('Доступність', () => {
    it('повинен бути фокусовуваний через клавіатуру', () => {
      cy.mount(<SectionLink text="Фокус" />)
      cy.get('button').focus()
      cy.get('button').should('have.focus')
    })
  })
})
