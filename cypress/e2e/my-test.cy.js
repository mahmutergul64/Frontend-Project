describe('Kişisel Web Sitesi Testleri', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 
  })

  it('1. Site Başarıyla Açılıyor ve İsim Görünüyor', () => {
    cy.contains('Mahmut Enes').should('be.visible')
    cy.contains('Yaratıcı düşünür').should('be.visible')
  })

  it('2. Dil Değiştirme Butonu Çalışıyor (TR -> EN)', () => {
    cy.contains('Projeler').should('be.visible')

    cy.get('button').contains('SWITCH').click()

    cy.contains('Projects').should('be.visible')
    
    cy.get('button').contains("YE GEÇ").click()
    cy.contains('Projeler').should('be.visible')
  })

  it('3. Dark Mode Çalışıyor', () => {
    cy.get('html').should('not.have.class', 'dark')

    cy.contains('DARK MODE').click()

    cy.get('html').should('have.class', 'dark')
  })

})