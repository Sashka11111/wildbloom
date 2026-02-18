import InputField from '../../src/components/InputField/InputField'

describe('Компонент InputField', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити поле введення з мітками', () => {
      cy.mount(<InputField label="Електронна пошта" type="text" placeholder="Введіть" />)
      cy.get('label').should('contain', 'Електронна пошта')
      cy.get('input').should('exist')
    })
  })

  describe('Параметри', () => {
    it('повинен відображати правильний текст мітки', () => {
      cy.mount(<InputField label="Користувач" type="text" placeholder="Введіть" />)
      cy.get('label').should('contain', 'Користувач')
    })

    it('повинен обробляти різні типи введення', () => {
      const types = ['text', 'email', 'password', 'number']
      types.forEach((type) => {
        cy.mount(<InputField label="Тест" type={type} placeholder="Тест" />)
        cy.get('input').should('have.attr', 'type', type)
      })
    })

    it('повинен обробляти значення поля', () => {
      cy.mount(<InputField label="Ім'я" type="text" value="Іван" onChange={() => {}} />)
      cy.get('input').should('have.value', 'Іван')
    })
  })

  describe('Події', () => {
    it('повинен запустити подію onChange при введенні', () => {
      const handleChange = cy.spy()
      cy.mount(<InputField label="Тест" type="text" onChange={handleChange} value="" />)
      cy.get('input').type('привіт')
      cy.wrap(handleChange).should('be.called')
    })
  })

  describe('Доступність', () => {
    it('повинен мати правильне асоціювання мітки', () => {
      cy.mount(<InputField label="Електронна пошта" type="email" placeholder="Введіть" />)
      cy.get('label').should('exist')
      cy.get('input').should('exist')
    })
  })
})
