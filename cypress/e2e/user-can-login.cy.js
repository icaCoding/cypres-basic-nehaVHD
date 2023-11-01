describe('User can login to system', () => { //template pada cypress ini ada descibe dan ada it
 //positive test case 1
  it('user can login with valid username and password', () => { //describe semacam tes hub //it semacam tesnya
    //*bagian arrange
    cy.visit('http://127.0.0.1:8000') //isi dari tes body sesuai dg perintah yang diintruksikan disini
    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan nich?

    //*bagian act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan nich?
    cy.get(':nth-child(3) > .form-control').type('password')
    cy.get('.btn').click()

    //*bagian assert
    //select element html yang dibutuhkan
    //lakukan assertion  
    cy.get('.nav-link > .d-sm-none').should('have.text', 'Hi, SuperAdmin')
  })

//describe = kumpulan sebuah tes
//it = tes codenya
//misal analogi describe adalah asset scenarionya kalau it tes codenya
//masing2 skenario login akan ada negatif dan positif tes case
//tabiatnya di cypress setiap x kita ngesave by default dia akan jalan ulang
//minimal membuat test case 1 positive dan 4 negative case

//negative test case 1
//yg kita test yang bagian only ini aja dah
it('user cannot login with valid username and wrong password', () => {
  //arrage
  cy.visit('http://127.0.0.1:8000')

  //act
  cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
  cy.get(':nth-child(3) > .form-control').type('password-salah')
  cy.get('.btn').click()

  //assert
  cy.get('.invalid-feedback').should(
    'have.text',
    'These credentials do not match our records.'
  )
})

  //negative test case 2
  it('user cannot login with invalid username and valid password', () => {
    //arrage
    cy.visit('http://127.0.0.1:8000')
  
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmiaddn@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('password')
    cy.get('.btn').click()
  
    //assert
    cy.get('.invalid-feedback').should(
      'have.text',
      'These credentials do not match our records.'
    )
  })

    //negative test case 3
    it('user cannot login with empty username and correct password', () => {
      //arrage
      cy.visit('http://127.0.0.1:8000')
    
      //act
      cy.get(':nth-child(3) > .form-control').type('password')
      cy.get('.btn').click()
    
      //assert
      cy.get('.invalid-feedback').should(
        'have.text',
        'The email field is required.'
      )
    })

      //negative test case 4
      it('user cannot login with correct username and empty password', () => {
        //arrange
        cy.visit('http://127.0.0.1:8000')
      
        //act
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
        cy.get('.btn').click()
      
        //assert
        cy.get('.invalid-feedback').should(
          'have.text',
          'The password field is required.'
        )
        })

        //negative test case kuizz

        it('user cannot login without entering username and password', () => {
          //arrange
          cy.visit('http://127.0.0.1:8000')
        
          //act
          cy.get('.btn').click()
        
          //assert
          cy.get('.invalid-feedback').should(
            'have.text',
            'The email field is required.The password field is required.'
          )
        })
        //negative test case 4 (tambahan Neha QUIZZ 13)
        // it("user sees warning when trying to login without filling all inputs", () => {
        //   // Arrange
        //   cy.visit("http://127.0.0.1:8000/")
          
        //   // Act
        //   cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
        //   cy.get(':nth-child(3) > .form-control').type('password')
        //   cy.get('.btn').click()
          
        //   // Assert
        //   cy.get('Please fill in all fields').should('be.visible')
        // })
      })