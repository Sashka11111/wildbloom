import PrimaryButton from '../../src/components/PrimaryButton/PrimaryButton'

describe('Компонент PrimaryButton', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити кнопку з текстом', () => {
      cy.mount(<PrimaryButton text="Натисніть мене" />)
      cy.get('button').should('contain', 'Натисніть мене')
    })
  })

  describe('Параметри', () => {
    it('повинен відображати правильний текст', () => {
      cy.mount(<PrimaryButton text="Подати заявку" />)
      cy.get('button').should('contain', 'Подати заявку')
    })

    it('повинен обробляти різні тексти кнопки', () => {
      const texts = ['Спецпропозиції', 'Замовити', 'Скасувати', 'Зберегти']
      texts.forEach((text) => {
        cy.mount(<PrimaryButton text={text} />)
        cy.get('button').should('contain', text)
      })
    })
  })

  describe('Доступність', () => {
    it('повинен залишатися фокусованим при табуляції', () => {
      cy.mount(<PrimaryButton text="Тест" />)
      cy.get('button').focus()
      cy.get('button').should('have.focus')
    })

    it('повинен мати видимий текст', () => {
      cy.mount(<PrimaryButton text="Продовжити" />)
      cy.get('button').should('be.visible')
      cy.get('button').should('contain', 'Продовжити')
    })

    it('не повинен бути disabled за замовчуванням', () => {
      cy.mount(<PrimaryButton text="Тест" />)
      cy.get('button').should('not.be.disabled')
    })
  })
})
