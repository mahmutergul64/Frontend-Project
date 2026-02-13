describe('Kişisel Web Sitesi Testleri', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 
  })
  it('1. Site Başarıyla Açılıyor ve İsim Görünüyor', () => {
    cy.contains('Mahmut Enes').should('be.visible')
    cy.contains('Yaratıcı düşünür').should('be.visible')
  })
  it('2. Dil Değiştirme Butonu Çalışıyor', () => {
    cy.contains('Projeler').should('be.visible')
    cy.contains('SWITCH').click()
    cy.contains('Projects').should('be.visible')
  })
  it('3. Dark Mode Çalışıyor', () => {
    cy.get('html').should('not.have.class', 'dark')
    cy.contains('LIGHT MODE').click()
    cy.get('html').should('have.class', 'dark')
    cy.contains('DARK MODE').should('be.visible')
  })
})