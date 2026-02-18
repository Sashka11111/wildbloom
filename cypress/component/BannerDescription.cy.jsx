import BannerDescription from '../../src/components/banner/BannerDescription/BannerDescription'

describe('Компонент BannerDescription', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити елемент p', () => {
      cy.mount(<BannerDescription>Тестовий опис</BannerDescription>)
      cy.get('p').should('exist')
    })

    it('повинен відображати текст дітей', () => {
      cy.mount(<BannerDescription>Це тестовий опис</BannerDescription>)
      cy.get('p').should('contain', 'Це тестовий опис')
    })
  })

  describe('Вміст', () => {
    it('повинен рендерити з unicode текстом', () => {
      cy.mount(<BannerDescription>Найпрекрасніші квіти</BannerDescription>)
      cy.get('p').should('contain', 'Найпрекрасніші квіти')
    })

    it('повинен обробляти спеціальні символи', () => {
      cy.mount(<BannerDescription>50% знижки сьогодні!</BannerDescription>)
      cy.get('p').should('contain', '50% знижки')
    })
  })

  describe('Параметри та дітей', () => {
    it('повинен рендерити React елементи як дітей', () => {
      cy.mount(
        <BannerDescription>
          Перегляньте нашу <strong>виключну</strong> колекцію
        </BannerDescription>,
      )
      cy.get('p strong').should('contain', 'виключну')
    })
  })

  describe('Доступність', () => {
    it('повинен бути видимим для програм читання екрану', () => {
      cy.mount(<BannerDescription>Тест для програм</BannerDescription>)
      cy.get('p').should('be.visible').should('contain', 'Тест для програм')
    })
  })
})
