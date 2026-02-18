import SectionTitle from '../../src/components/SectionTitle/SectionTitle'

describe('Компонент SectionTitle', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити h2 елемент', () => {
      cy.mount(<SectionTitle>Назва тесту</SectionTitle>)
      cy.get('h2').should('exist')
    })

    it('повинен відображати текст дітей', () => {
      cy.mount(<SectionTitle>Моя назва секції</SectionTitle>)
      cy.get('h2').should('contain', 'Моя назва секції')
    })
  })

  describe('Вміст', () => {
    it('повинен рендерити з різним текстовим вмістом', () => {
      cy.mount(<SectionTitle>Товари</SectionTitle>)
      cy.get('h2').should('contain', 'Товари')
    })

    it('повинен рендерити з unicode текстом', () => {
      cy.mount(<SectionTitle>Новинки товарів</SectionTitle>)
      cy.get('h2').should('contain', 'Новинки товарів')
    })

    it('повинен обробляти спеціальні символи', () => {
      cy.mount(<SectionTitle>50% знижки!</SectionTitle>)
      cy.get('h2').should('contain', '50% знижки!')
    })
  })

  describe('Доступність', () => {
    it('повинен бути читаним програмами читання екрану', () => {
      cy.mount(<SectionTitle>Тест для програм</SectionTitle>)
      cy.get('h2').should('be.visible').should('contain', 'Тест для програм')
    })
  })
})
