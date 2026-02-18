import BannerText from '../../src/components/banner/BannerText/BannerText'

describe('Компонент BannerText', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      title: 'Ласкаво просимо',
      description: 'Перегляньте нашу чудову колекцію',
      buttonText: 'Купити зараз',
      onButtonClick: cy.spy(),
    }
  })

  describe('Рендеринг', () => {
    it('повинен рендерити компонент назви', () => {
      cy.mount(<BannerText {...defaultProps} />)
      cy.get('h1').should('contain', 'Ласкаво просимо')
    })
  })

  describe('Параметри', () => {
    it('повинен відображати параметр title', () => {
      cy.mount(<BannerText {...defaultProps} title="Спеціальна пропозиція" />)
      cy.get('h1').should('contain', 'Спеціальна пропозиція')
    })

    it('не повинен рендерити кнопку коли buttonText порожній', () => {
      cy.mount(<BannerText title="Назва" description="Опис" buttonText="" />)
      cy.get('button').should('not.exist')
    })
  })
})
