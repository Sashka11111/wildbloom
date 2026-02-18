import QuoteDivider from '../../src/features/home/QuoteDivider/QuoteDivider'

describe('Компонент QuoteDivider', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити контейнер divider', () => {
      cy.mount(<QuoteDivider />)
      cy.get('[class*="divider"]').should('exist')
    })

    it('повинен містити цитату про кераміку', () => {
      cy.mount(<QuoteDivider />)
      cy.contains('Кераміка, що зберігає тепло рук та затишок вашої оселі.').should('exist')
    })
  })

  describe('Вміст', () => {
    it('повинен мати p елемент з текстом', () => {
      cy.mount(<QuoteDivider />)
      cy.get('p').should('contain', 'Кераміка, що зберігає тепло рук та затишок вашої оселі.')
    })

    it('повинен мати правильний клас для тексту', () => {
      cy.mount(<QuoteDivider />)
      cy.get('[class*="text"]').should('exist')
    })
  })

  describe('Доступність', () => {
    it('повинен відображати текст видимо', () => {
      cy.mount(<QuoteDivider />)
      cy.get('p').should('be.visible')
      cy.get('p').should('contain', 'Кераміка')
    })

    it('текст повинен бути доступний для читання', () => {
      cy.mount(<QuoteDivider />)
      cy.contains('затишок').should('be.visible')
    })
  })
})
