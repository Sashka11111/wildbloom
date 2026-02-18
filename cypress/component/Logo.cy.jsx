import Logo from '../../src/components/Logo/Logo'

describe('Компонент Logo', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити логотип', () => {
      cy.mount(<Logo />)
      cy.get('[class*="logo"]').should('exist')
    })

    it('повинен містити текст "Wild" та "BLOOM"', () => {
      cy.mount(<Logo />)
      cy.contains('Wild').should('exist')
      cy.contains('BLOOM').should('exist')
    })
  })

  describe('Структура', () => {
    it('повинен мати дві окремі лінії для "Wild" та "BLOOM"', () => {
      cy.mount(<Logo />)
      cy.get('[class*="wild"]').should('exist')
      cy.get('[class*="bloom"]').should('exist')
    })

    it('повинен мати правильний порядок тексту', () => {
      cy.mount(<Logo />)
      cy.get('[class*="wild"]').should('contain', 'Wild')
      cy.get('[class*="bloom"]').should('contain', 'BLOOM')
    })

    it('повинен бути видимим на сторінці', () => {
      cy.mount(<Logo />)
      cy.get('[class*="logo"]').should('be.visible')
    })
  })

  describe('Доступність', () => {
    it('повинен мати семантично правильну структуру', () => {
      cy.mount(<Logo />)
      cy.get('div[class*="logo"]').should('exist')
    })

    it('текст повинен бути доступним для читання', () => {
      cy.mount(<Logo />)
      cy.get('[class*="logo"]').should('not.be.empty')
      cy.contains('Wild').should('be.visible')
      cy.contains('BLOOM').should('be.visible')
    })
  })
})
