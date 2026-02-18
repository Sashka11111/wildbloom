import FaqItem from '../../src/features/faq/FaqItem/FaqItem'

describe('Компонент FaqItem', () => {
  const mockQuestion = 'Як оформити замовлення?'
  const mockAnswer = 'Виберіть товари в каталозі та натисніть "Замовити". Далі слідуйте інструкціям.'

  describe('Рендеринг', () => {
    it('повинен рендерити контейнер faqItem', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('[class*="faqItem"]').should('exist')
    })

    it('повинен відображати питання', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.contains(mockQuestion).should('exist')
    })

    it('повинен мати кнопку з питанням', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('button').should('contain', mockQuestion)
    })

    it('повинен містити іконку chevron', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('svg').should('exist')
    })
  })

  describe('Розширювання/Збиття', () => {
    it('повинен мати aria-expanded=false за замовчуванням', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('button').should('have.attr', 'aria-expanded', 'false')
    })

    it('повинен розширюватися при натисканні', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('button').click()
      cy.get('button').should('have.attr', 'aria-expanded', 'true')
    })

    it('повинен показувати відповідь при розширенні', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.contains(mockAnswer).should('exist')
    })
  })

  describe('Багаторазове розширювання', () => {
    it('повинен мати можливість закритися після розширення', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('button').click()
      cy.get('button').should('have.attr', 'aria-expanded', 'true')
      cy.get('button').click()
      cy.get('button').should('have.attr', 'aria-expanded', 'false')
    })
  })

  describe('Вміст', () => {
    it('повинен відображати відповідь з правильним текстом', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('p').last().should('contain', mockAnswer)
    })

    it('повинен обробляти різні питання та відповіді', () => {
      const question2 = 'Як отримати посилку?'
      const answer2 = 'Ми доставляємо протягом 2-3 днів.'
      cy.mount(<FaqItem question={question2} answer={answer2} />)
      cy.contains(question2).should('exist')
      cy.contains(answer2).should('exist')
    })
  })

  describe('Доступність', () => {
    it('кнопка повинна бути фокусованою', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('button').focus()
      cy.get('button').should('have.focus')
    })

    it('повинен мати aria-expanded для доступності', () => {
      cy.mount(<FaqItem question={mockQuestion} answer={mockAnswer} />)
      cy.get('button').should('have.attr', 'aria-expanded')
    })
  })
})
