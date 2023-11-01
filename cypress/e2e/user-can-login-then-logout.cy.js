describe('User can login to system', () => {
  //positive test case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    cy.get('[data-id="email"]').type('superadmin@gmail.com')
    cy.get('[data-id="password"]').type('password')
    cy.get('[data-id="submit"]').click()
    cy.get('[data-id="username"]').click()
    cy.get('[data-id="logout-btn"]').click()
    
    })
  // it('user sees loading indicator when login in progress', () => {
  //   //arrange
  //   cy.visit('http://127.0.0.1:8000/')
  //   //act
  //   cy.get('[data-id="email"]').type("superadmin@gmail.com")
  //   cy.get('[data-id="password"]').type("password")
  //   cy.get('[data-id="submit"]').click()
  //   //assert
  //   cy.get('[data-id="submit"]').should("have.class", "loading")
  // })
  })
  // it("user sees warning when trying to login without filling all inputs", () => {
  //   // Arrange
  //   cy.visit("http://127.0.0.1:8000/");
  //   // Act
  //   cy.get('[data-id="submit"]').click();
  //   // Assert
  //   cy.get('[data-id="warning-message"]').should("be.visible");
  // });
  //error di tanda petik harusnya petik dua bukan petik satu
  //error untuk di video 16, harus dikerjain sampe tryal error di vid 17 dulu baru bisaahh