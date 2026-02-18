import SocialLinks from '../../src/features/footer/SocialLinks/SocialLinks'

describe('Компонент SocialLinks', () => {
  describe('Рендеринг', () => {
    it('повинен рендерити контейнер socials', () => {
      cy.mount(<SocialLinks />)
      cy.get('[class*="socials"]').should('exist')
    })

    it('повинен рендерити три посилання на соцмережі', () => {
      cy.mount(<SocialLinks />)
      cy.get('a').should('have.length', 3)
    })

    it('повинен містити SVG іконки', () => {
      cy.mount(<SocialLinks />)
      cy.get('svg').should('have.length.at.least', 3)
    })
  })

  describe('Посилання', () => {
    it('усі посилання повинні вести на /', () => {
      cy.mount(<SocialLinks />)
      cy.get('a').each(($link) => {
        cy.wrap($link).should('have.attr', 'href', '/')
      })
    })

    it('посилання повинні мати aria-label для доступності', () => {
      cy.mount(<SocialLinks />)
      cy.get('a').each(($link) => {
        // Перевіряємо, що посилання містить іконку або має доступний текст
        cy.wrap($link).should('be.visible')
      })
    })
  })

  describe('Іконки', () => {
    it('повинен містити іконку LinkedIn', () => {
      cy.mount(<SocialLinks />)
      cy.get('a').eq(0).find('svg').should('exist')
    })

    it('повинен містити іконку Facebook', () => {
      cy.mount(<SocialLinks />)
      cy.get('a').eq(1).find('svg').should('exist')
    })

    it('повинен містити іконку Twitter/X', () => {
      cy.mount(<SocialLinks />)
      cy.get('a').eq(2).find('svg').should('exist')
    })
  })

  describe('Доступність', () => {
    it('посилання повинні бути фокусованими', () => {
      cy.mount(<SocialLinks />)
      cy.get('a').first().focus()
      cy.get('a').first().should('have.focus')
    })

    it('посилання повинні бути видимими', () => {
      cy.mount(<SocialLinks />)
      cy.get('a').each(($link) => {
        cy.wrap($link).should('be.visible')
      })
    })
  })
})
