import HeroSection from '../../src/features/home/HeroSection/HeroSection'

describe('Компонент HeroSection', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити section елемент', () => {
      cy.mount(<HeroSection />)
      cy.get('section').should('exist')
    })

    it('повинен рендерити зображення', () => {
      cy.mount(<HeroSection />)
      cy.get('img').should('exist')
    })

    it('повинен рендерити заголовок', () => {
      cy.mount(<HeroSection />)
      cy.get('h1').should('exist')
    })

    it('повинен рендерити опис', () => {
      cy.mount(<HeroSection />)
      cy.get('p').should('exist')
    })

    it('повинен рендерити кнопку', () => {
      cy.mount(<HeroSection />)
      cy.get('button').should('contain', 'КУПУЙТЕ БЕСТСЕЛЕРИ')
    })
  })

  describe('Вміст', () => {
    it('повинен мати правильний alt текст для зображення', () => {
      cy.mount(<HeroSection />)
      cy.get('img').should('have.attr', 'alt', "Керамічні горнятка на дерев'яному столі")
    })

    it('повинен мати заголовок з текстом', () => {
      cy.mount(<HeroSection />)
      cy.get('h1').should('contain', 'Створено природою')
    })

    it('повинен мати опис', () => {
      cy.mount(<HeroSection />)
      cy.get('p').should('contain', 'колекцією ручної кераміки')
    })
  })

  describe('Доступність', () => {
    it('повинен бути семантичним', () => {
      cy.mount(<HeroSection />)
      cy.get('section').should('exist')
    })
  })
})
