describe('Навігація додатку', () => {
  describe('Завантаження сторінок', () => {
    it('Головна сторінка завантажується', () => {
      cy.visit('/')
      cy.get('main').should('be.visible')
    })

    it('Сторінка About завантажується', () => {
      cy.visit('/about')
      cy.get('main').should('be.visible')
    })

    it('Сторінка FAQ завантажується', () => {
      cy.visit('/faq')
      cy.get('div').should('be.visible')
    })

    it('Сторінка Login завантажується', () => {
      cy.visit('/login')
      cy.get('main').should('be.visible')
    })
  })

  describe('Навігаційні посилання', () => {
    it('Header присутній на всіх сторінках', () => {
      const pages = ['/', '/about', '/faq', '/login']

      pages.forEach((page) => {
        cy.visit(page)
        cy.get('header').should('exist')
        cy.get('nav').should('exist')
      })
    })

    it('Посилання в nav працюють', () => {
      cy.visit('/')

      cy.get('nav a').should('have.length.greaterThan', 0)
      cy.get('nav a').each(($link) => {
        cy.wrap($link).should('have.attr', 'href')
      })
    })
  })

  describe('Логотип', () => {
    it('Логотип присутній в header', () => {
      cy.visit('/')

      cy.get('header').within(() => {
        cy.get('a').first().should('exist')
      })
    })

    it('Логотип має href атрибут', () => {
      cy.visit('/')

      cy.get('header a').first().should('have.attr', 'href')
    })
  })

  describe('Footer', () => {
    it('Footer присутній на всіх сторінках', () => {
      const pages = ['/', '/about', '/faq', '/login']

      pages.forEach((page) => {
        cy.visit(page)
        cy.get('footer').should('exist')
      })
    })

    it('Footer видимий при скролінгу вниз', () => {
      cy.visit('/')

      cy.scrollTo('bottom')
      cy.get('footer').should('be.visible')
    })

    it('Посилання в footer мають href', () => {
      cy.visit('/')

      cy.scrollTo('bottom')
      cy.get('footer a').each(($link) => {
        cy.wrap($link).should('have.attr', 'href')
      })
    })
  })

  describe('URL правильність', () => {
    it('Правильний URL на головній', () => {
      cy.visit('/')
      cy.url().should('eq', 'http://localhost:5173/')
    })

    it('Правильний URL на About', () => {
      cy.visit('/about')
      cy.url().should('include', '/about')
    })

    it('Правильний URL на FAQ', () => {
      cy.visit('/faq')
      cy.url().should('include', '/faq')
    })

    it('Правильний URL на Login', () => {
      cy.visit('/login')
      cy.url().should('include', '/login')
    })
  })

  describe('Невалідні маршрути', () => {
    it('Невалідний маршрут не призводить до краху', () => {
      cy.visit('/nonexistent', { failOnStatusCode: false })
      // Браузер не повинен упасти
      cy.get('body').should('exist')
    })
  })
})
