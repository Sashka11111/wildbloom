import BannerTitle from '../../src/components/banner/BannerTitle/BannerTitle'

describe('Компонент BannerTitle', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити h1 елемент', () => {
      cy.mount(<BannerTitle>Назва банера</BannerTitle>)
      cy.get('h1').should('exist')
    })

    it('повинен відображати текст дітей', () => {
      cy.mount(<BannerTitle>Ласкаво просимо</BannerTitle>)
      cy.get('h1').should('contain', 'Ласкаво просимо')
    })
  })

  describe('Вміст', () => {
    it('повинен рендерити з unicode текстом', () => {
      cy.mount(<BannerTitle>Найкращі квіти</BannerTitle>)
      cy.get('h1').should('contain', 'Найкращі квіти')
    })

    it('повинен обробляти спеціальні символи', () => {
      cy.mount(<BannerTitle>50% знижки!</BannerTitle>)
      cy.get('h1').should('contain', '50% знижки!')
    })
  })

  describe('Доступність', () => {
    it('повинен бути читаним програмами читання екрану', () => {
      cy.mount(<BannerTitle>Тест для програм</BannerTitle>)
      cy.get('h1').should('be.visible').should('contain', 'Тест для програм')
    })
  })
})
