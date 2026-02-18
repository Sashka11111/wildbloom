import AuthFooter from '../../src/features/auth/AuthFooter/AuthFooter'

describe('Компонент AuthFooter', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити контейнер footer', () => {
      cy.mount(<AuthFooter />)
      cy.get('[class*="footer"]').should('exist')
    })

    it('повинен містити текст про реєстрацію', () => {
      cy.mount(<AuthFooter />)
      cy.contains('Ще не зареєстровані?').should('exist')
    })

    it('повинен містити посилання на створення акаунту', () => {
      cy.mount(<AuthFooter />)
      cy.contains('Створити акаунт').should('exist')
    })
  })

  describe('Посилання', () => {
    it('повинен мати посилання на головну сторінку', () => {
      cy.mount(<AuthFooter />)
      cy.get('a').should('have.attr', 'href', '/')
    })

    it('посилання повинно містити текст "Створити акаунт"', () => {
      cy.mount(<AuthFooter />)
      cy.get('a').should('contain', 'Створити акаунт')
    })
  })

  describe('Структура', () => {
    it('повинен мати p елемент з класом footerText', () => {
      cy.mount(<AuthFooter />)
      cy.get('[class*="footerText"]').should('exist')
    })

    it('повинен мати один link елемент', () => {
      cy.mount(<AuthFooter />)
      cy.get('a').should('have.length', 1)
    })
  })

  describe('Доступність', () => {
    it('текст повинен бути видимим', () => {
      cy.mount(<AuthFooter />)
      cy.contains('Ще не зареєстровані?').should('be.visible')
    })

    it('посилання повинно бути інтерактивним', () => {
      cy.mount(<AuthFooter />)
      cy.get('a').should('be.visible').focus()
      cy.get('a').should('have.focus')
    })
  })
})
