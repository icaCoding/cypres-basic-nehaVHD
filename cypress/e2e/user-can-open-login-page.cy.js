describe('User can open login register', () => {
  it('User can open login page', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('h4').should('contain','Login')
  })
})

//cy visit pertama x si pengunjung website mendatangi website akan mengunjungi halaman ini
//argumen cy visit adalah "url mana nih yang mau kita buka"