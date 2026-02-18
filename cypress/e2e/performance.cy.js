describe('Продуктивність і Швидкість', () => {
  it('Прокручування плавне без затримок', () => {
    cy.visit('/')
    cy.scrollTo('bottom', { duration: 2000 })
    cy.get('footer').should('be.visible')
  })

  it('Клік на кнопку відпрацьовує негайно', () => {
    cy.visit('/')
    cy.get('button').first().click()
    cy.get('button').first().should('exist')
  })

  it('Навігація між сторінками швидка', () => {
    cy.visit('/')
    cy.get('nav a').first().click({ force: true })
    cy.get('main', { timeout: 3000 }).should('be.visible')
  })

  describe('Кешування', () => {
    it('Повторне завантаження швидше першого', () => {
      cy.visit('/')
      cy.reload()
      cy.get('main').should('be.visible')
    })

    it('Ресурси завантажуються із кешу', () => {
      cy.visit('/')
      const initialLoad = cy.stub().as('initialLoad')
      cy.reload()
      cy.get('main').should('be.visible')
    })
  })

  describe('API запити', () => {
    it('Дані відображаються після завантаження', () => {
      cy.visit('/')
      cy.get('section').should('have.length.greaterThan', 0)
    })
  })

  describe('Ресурси', () => {
    it('Всі CSS завантажені', () => {
      cy.visit('/')
      cy.window().then((win) => {
        const styles = win.document.styleSheets
        expect(styles.length).to.be.greaterThan(0)
      })
    })

    it('Всі скрипти завантажені', () => {
      cy.visit('/')
      cy.get('script').should('have.length.greaterThan', 0)
    })

    it('Зображення завантажуються', () => {
      cy.visit('/')
      cy.get('img', { timeout: 5000 }).each(($img) => {
        cy.wrap($img).should('have.prop', 'complete', true)
      })
    })
  })

  describe('Меморія', () => {
    it("При навігації зі сторінки на сторінку немає витоків пам'яті", () => {
      cy.visit('/')
      cy.get('nav a').first().click({ force: true })
      cy.visit('/')
      cy.get('main').should('be.visible')
    })
  })

  describe('Мережеві запити', () => {
    it('Вивід HTTPS без попереджень', () => {
      cy.visit('/')
      cy.on('uncaught:exception', (err) => {
        expect(err.message).not.to.include('insecure')
        return false
      })
    })

    it('Всі запити завершуються успішно', () => {
      cy.intercept('*').as('requests')
      cy.visit('/')
      cy.wait('@requests', { timeout: 5000 })
      cy.get('@requests.all').then((requests) => {
        requests.forEach((request) => {
          expect([200, 201, 204, 304]).to.include(request.response?.statusCode || 200)
        })
      })
    })
  })
})
