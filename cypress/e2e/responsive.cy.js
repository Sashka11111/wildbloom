describe('Адаптивність (Responsive Design)', () => {
  describe('Desktop (1280px)', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('/')
    })

    it('Всі елементи видимі на desktop', () => {
      cy.get('header').should('be.visible')
      cy.get('nav').should('be.visible')
      cy.get('main').should('be.visible')
      cy.get('footer').should('be.visible')
    })

    it('Навігація доступна на desktop', () => {
      cy.get('nav a').should('have.length.greaterThan', 0)
    })

    it('Продукти показуються в ряд', () => {
      cy.get('[class*="Card"], [class*="card"]').should('have.length.greaterThan', 0)
    })
  })

  describe('Tablet (768px)', () => {
    beforeEach(() => {
      cy.viewport('ipad-2')
      cy.visit('/')
    })

    it('Header адаптовано для tablet', () => {
      cy.get('header').should('be.visible')
    })

    it('Навігація доступна на tablet', () => {
      cy.get('nav').should('exist')
    })

    it('Можна скролити без проблем', () => {
      cy.scrollTo('bottom')
      cy.get('footer').should('be.visible')
    })
  })

  describe('Mobile (375px)', () => {
    beforeEach(() => {
      cy.viewport(375, 667)
      cy.visit('/')
    })

    it('Сторінка повинна завантажитися на мобільному', () => {
      cy.get('main').should('be.visible')
    })

    it('Header видимий на мобільному', () => {
      cy.get('header').should('be.visible')
    })

    it('Footer видимий на мобільному', () => {
      cy.scrollTo('bottom')
      cy.get('footer').should('be.visible')
    })

    it('Текст читабельний на мобільному', () => {
      cy.get('h1, h2, p').should('have.length.greaterThan', 0)
    })

    it('Кнопки доступні на мобільному', () => {
      cy.get('button').first().should('be.visible')
    })
  })

  describe('Орієнтація', () => {
    it('Portrait на мобільному', () => {
      cy.viewport('iphone-x')
      cy.visit('/')
      cy.get('main').should('be.visible')
    })

    it('Landscape на мобільному', () => {
      cy.viewport('iphone-x', { orientation: 'landscape' })
      cy.visit('/')
      cy.get('main').should('be.visible')
    })
  })

  describe('Перетворення розміру вікна', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('/')
    })

    it('Сторінка залишається функціональною при зміні розміру', () => {
      cy.viewport(768, 1024)
      cy.get('main').should('be.visible')
      cy.viewport(375, 667)
      cy.get('main').should('be.visible')
    })

    it('Текст читабельний при будь-якому розмірі', () => {
      const viewports = [
        [1920, 1080],
        [1280, 720],
        [768, 1024],
        [375, 667],
      ]

      viewports.forEach(([width, height]) => {
        cy.viewport(width, height)
        cy.visit('/')
        cy.get('p, h1, h2, h3').should('have.length.greaterThan', 0)
      })
    })
  })

  describe('Сенсорна взаємодія на мобільному', () => {
    beforeEach(() => {
      cy.viewport('iphone-x')
      cy.visit('/')
    })

    it('Кнопки можна натискати на сенсорному екрані', () => {
      cy.get('button').first().should('be.visible').click()
    })

    it('Форми працюють на мобільному', () => {
      cy.visit('/login')
      cy.get('input[type="email"]').should('be.visible').type('test@example.com')
      cy.get('input[type="password"]').should('be.visible').type('password')
    })
  })
})
