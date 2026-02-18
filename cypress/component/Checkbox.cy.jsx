import Checkbox from '../../src/components/Checkbox/Checkbox'

describe('Компонент Checkbox', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити чекбокс з мітками', () => {
      cy.mount(<Checkbox label="Погоджуюся з умовами" />)
      cy.get('label').should('contain', 'Погоджуюся з умовами')
      cy.get('input[type="checkbox"]').should('exist')
    })
  })

  describe('Параметри', () => {
    it('повинен відображати правильний текст мітки', () => {
      cy.mount(<Checkbox label="Запам'ятати мене" />)
      cy.get('label').should('contain', "Запам'ятати мене")
    })

    it('повинен приймати та обробляти атрибут checked', () => {
      cy.mount(<Checkbox label="Активно" checked={true} onChange={() => {}} />)
      cy.get('input[type="checkbox"]').should('be.checked')
    })

    it('повинен залишатися не вибраним, коли checked = false', () => {
      cy.mount(<Checkbox label="Неактивно" checked={false} onChange={() => {}} />)
      cy.get('input[type="checkbox"]').should('not.be.checked')
    })

    it('повинен передавати додаткові атрибути', () => {
      cy.mount(<Checkbox label="Тест" disabled onChange={() => {}} />)
      cy.get('input[type="checkbox"]').should('be.disabled')
    })
  })

  describe('Події', () => {
    it('повинен запустити подію onChange при кліку', () => {
      const handleChange = cy.spy()
      cy.mount(<Checkbox label="Тест" onChange={handleChange} />)
      cy.get('input[type="checkbox"]').click()
      cy.wrap(handleChange).should('be.called')
    })

    it('повинен змінювати стан при кліку', () => {
      cy.mount(<Checkbox label="Тест" onChange={() => {}} />)
      cy.get('input[type="checkbox"]').click()
      cy.get('input[type="checkbox"]').should('be.checked')
    })
  })

  describe('Доступність', () => {
    it('повинен мати правильне асоціювання мітки', () => {
      cy.mount(<Checkbox label="Електронна пошта" />)
      cy.get('label').should('exist')
      cy.get('input[type="checkbox"]').should('exist')
    })

    it('повинен залишатися фокусованим при табуляції', () => {
      cy.mount(<Checkbox label="Тест" />)
      cy.get('input[type="checkbox"]').focus()
      cy.get('input[type="checkbox"]').should('have.focus')
    })
  })
})
