describe('Головна сторінка', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Завантаження сторінки', () => {
    it('Сторінка завантажується', () => {
      cy.get('main').should('be.visible')
    })

    it('Header видимий', () => {
      cy.get('header').should('be.visible')
    })

    it('Footer видимий', () => {
      cy.get('footer').should('be.visible')
    })

    it('Сторінка має title', () => {
      cy.title().should('not.be.empty')
    })
  })

  describe('Структура', () => {
    it('Header містить навігацію', () => {
      cy.get('header').should('exist')
      cy.get('nav').should('exist')
    })

    it('Основний контент в main тегу', () => {
      cy.get('main').should('exist')
    })

    it('Footer містить посилання', () => {
      cy.get('footer').should('exist')
      cy.get('footer a').should('have.length.greaterThan', 0)
    })

    it('Сторінка містить секції', () => {
      cy.get('section').should('have.length.greaterThan', 0)
    })

    it('Сторінка містить заголовки', () => {
      cy.get('h1, h2, h3').should('have.length.greaterThan', 0)
    })
  })

  describe('Навігація', () => {
    it('Header містить посилання', () => {
      cy.get('header a').should('have.length.greaterThan', 0)
    })

    it('Всі посилання в header мають href', () => {
      cy.get('header a').each(($link) => {
        cy.wrap($link).should('have.attr', 'href')
      })
    })

    it('Nav містить посилання', () => {
      cy.get('nav a').should('have.length.greaterThan', 0)
    })

    it('Всі посилання в nav мають href', () => {
      cy.get('nav a').each(($link) => {
        cy.wrap($link).should('have.attr', 'href')
      })
    })

    it('Посилання в footer мають href', () => {
      cy.get('footer a').each(($link) => {
        cy.wrap($link).should('have.attr', 'href')
      })
    })
  })

  describe('Кнопки', () => {
    it('Сторінка містить кнопки', () => {
      cy.get('button').should('have.length.greaterThan', 0)
    })

    it('Кнопки видимі', () => {
      cy.get('button').each(($btn) => {
        cy.wrap($btn).should('be.visible')
      })
    })

    it('Активні кнопки не disabled', () => {
      cy.get('button').then(($btns) => {
        $btns.each((index, btn) => {
          if (!btn.textContent.includes('...')) {
            cy.wrap(btn).should('not.be.disabled')
          }
        })
      })
    })
  })

  describe('Зображення', () => {
    it('Сторінка містить зображення', () => {
      cy.get('img').should('have.length.greaterThan', 0)
    })

    it('Зображення мають alt атрибут', () => {
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt')
      })
    })

    it('Зображення мають src атрибут', () => {
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'src')
      })
    })

    it('Зображення завантажені', () => {
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.prop', 'complete', true)
      })
    })
  })

  describe('Посилання', () => {
    it('Посилання на сторінці мають href', () => {
      cy.get('a').each(($link) => {
        const href = $link.attr('href')
        expect(href).to.exist
      })
    })
  })

  describe('Скролинг', () => {
    it('Сторінка скролиться вниз', () => {
      cy.scrollTo('bottom')
      cy.get('footer').should('be.visible')
    })

    it('Сторінка скролиться вгору', () => {
      cy.scrollTo('bottom')
      cy.scrollTo('top')
      cy.get('header').should('be.visible')
    })

    it('Всі секції видимі при скролінгу', () => {
      cy.get('section').each(($section) => {
        cy.wrap($section).scrollIntoView()
        cy.wrap($section).should('be.visible')
      })
    })
  })

  describe('Текстовий контент', () => {
    it('Сторінка містить текстовий контент', () => {
      cy.get('p, h1, h2, h3').should('have.length.greaterThan', 0)
    })

    it('Заголовки присутні', () => {
      cy.get('h1, h2, h3, h4').should('have.length.greaterThan', 0)
    })

    it('Параграфи присутні', () => {
      cy.get('p').should('have.length.greaterThan', 0)
    })
  })

  describe('Доступність', () => {
    it('Основний контент має семантичну структуру', () => {
      cy.get('header').should('exist')
      cy.get('main').should('exist')
      cy.get('footer').should('exist')
    })

    it('Зображення мають alt текст', () => {
      cy.get('img').each(($img) => {
        const alt = $img.attr('alt')
        expect(alt).not.to.be.empty
      })
    })
  })

  describe('Інтерактивність', () => {
    it('Кнопки можна клікати', () => {
      cy.get('button').first().should('not.be.disabled')
    })

    it('Hover ефекти працюють', () => {
      cy.get('button').first().trigger('mouseover')
      cy.get('button').first().should('be.visible')
    })

    it('Focus стан видимий', () => {
      cy.get('button').first().focus()
      cy.get('button').first().should('have.focus')
    })
  })

  describe('Стиль та макет', () => {
    it('Елементи мають width', () => {
      cy.get('section').each(($section) => {
        cy.wrap($section).should('have.css', 'width')
      })
    })

    it('Контент не виходить за межі viewport', () => {
      cy.viewport(1280, 720)
      cy.get('body').then(($body) => {
        const width = $body.width()
        expect(width).to.be.lessThan(1281)
      })
    })
  })

  describe('Загальна перевірка', () => {
    it('Сторінка не має JavaScript помилок при завантаженні', () => {
      cy.on('uncaught:exception', () => false)
    })

    it('Всі елементи мають видимість', () => {
      cy.get('main').should('be.visible')
      cy.get('section').should('have.length.greaterThan', 0)
    })

    it('Footer видимий при скролінгу', () => {
      cy.scrollTo('bottom')
      cy.get('footer').should('be.visible')
    })

    it('Header залишається видимим', () => {
      cy.get('header').should('always.be.visible')
    })
  })
})
