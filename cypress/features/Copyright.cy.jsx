import Copyright from '../../src/features/footer/Copyright/Copyright'

describe('Компонент Copyright', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити контейнер copyright', () => {
      cy.mount(<Copyright />)
      cy.get('[class*="copyright"]').should('exist')
    })

    it('повинен містити символ копіювання', () => {
      cy.mount(<Copyright />)
      cy.contains('©').should('exist')
    })

    it('повинен містити назву бренду', () => {
      cy.mount(<Copyright />)
      cy.contains('WILDBLOOM').should('exist')
    })
  })

  describe('Рік', () => {
    it('повинен містити поточний рік', () => {
      const currentYear = new Date().getFullYear()
      cy.mount(<Copyright />)
      cy.contains(currentYear.toString()).should('exist')
    })

    it('повинен містити текст про права', () => {
      cy.mount(<Copyright />)
      cy.contains('ВСІ ПРАВА ЗАХИЩЕНІ').should('exist')
    })
  })

  describe('Структура', () => {
    it('повинен мати p елемент', () => {
      cy.mount(<Copyright />)
      cy.get('p').should('exist')
    })

    it('текст повинен бути на українській мові', () => {
      cy.mount(<Copyright />)
      cy.get('p').then(($el) => {
        const text = $el.text()
        expect(text).to.include('©')
        expect(text).to.include('WILDBLOOM')
        expect(text).to.include('ПРАВА')
      })
    })
  })

  describe('Доступність', () => {
    it('повинен бути видимим', () => {
      cy.mount(<Copyright />)
      cy.get('p').should('be.visible')
    })

    it('інформація про авторські права повинна бути доступна', () => {
      cy.mount(<Copyright />)
      cy.contains('WILDBLOOM').should('be.visible')
    })
  })
})
