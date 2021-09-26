
describe("test with ci", () => {
    it("should visit automation test store website", () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/create")
        cy.url("https://automationteststore.com/index.php?rt=account/create")
        .should('eq', 'https://automationteststore.com/index.php?rt=account/create')
        cy.log('after verify url address')
        cy.clearLocalStorageSnapshot()
        cy.log('after cleaning local storage before tests run')

    })

    it("should fill form", () => {
        cy.log('first name')
        cy.get('#AccountFrm_firstname').type('oren')
        cy.log('last name')
        cy.get('#AccountFrm_lastname').type('rauch')
        cy.log('Email address')
        cy.get('#AccountFrm_email').type('ore62n@gmail.com')
        cy.log('phone number')
        cy.get('#AccountFrm_telephone').type('0123456789')
        cy.log('FAX number')
        cy.get('#AccountFrm_fax').type('9876543210')
        cy.log('End of first form')
        cy.log('company')
        cy.get('#AccountFrm_company').type('hackermoon')
        cy.log('Address 1')
        cy.get('#AccountFrm_address_1').type('sunset stip 201')
        cy.log('City')
        cy.get('#AccountFrm_city').type('California')
        cy.log('zip/post code')
        cy.get('#AccountFrm_postcode').type('4630188')
        cy.log('country')
        cy.get('#AccountFrm_country_id').select('Zimbabwe').should('have.value', '239')
        cy.log('Region / state')
        cy.get('#AccountFrm_zone_id').select('Matabeleland North').should('have.value', '3839')
        cy.get('#AccountFrm_loginname').type('hackerman142')
        cy.get('#AccountFrm_password').type('0b9b8b7b6B5b')
        cy.get('#AccountFrm_confirm').type('0b9b8b7b6B5b')
        cy.get('[for="AccountFrm_newsletter0"]').click()
        cy.log('newsletter')
        cy.get('#AccountFrm_agree').click()
        cy.log('continue button')
        cy.get('.col-md-2 > .btn').click()
        cy.saveLocalStorage()

    })
    it('Should navigate to main page', () => {
        cy.get('.logo > img').click()
        cy.wait(500)
    })
    it('Should Scroll down', () => {
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .fixed_wrapper > .fixed > .prdocutname').scrollIntoView()
        cy.wait(500)
    })
    it("should select and add product to cart", () => {

        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click().wait(500)
        cy.saveLocalStorage()
        cy.saveLocalStorage()
        cy.get('.quick_basket > a > .fa').click()
        cy.saveLocalStorage()
        cy.wait(550)
    })

    it("should validate product table content", () => {
        cy.get('.product-list > table > tbody > tr').should(($tr) => {
            // should have found 2 table row elements
            expect($tr).to.have.length(2)

            expect($tr.eq(0), 'First table row')
            .to.contain('Image')
            .to.contain('Name')
            .to.contain('Model')
            .to.contain('Unit Price')

            expect($tr.eq(1), 'Second table row')
            .to.contain('a')
            .to.contain('Benefit Bella Bamba')
            .to.contain('523755')
            .to.contain('$56.00')

   
        })

        cy.log('after tr column content validate')

        cy.get('.product-list > .table > tbody > tr > td').should(($td) => {
            const classes = $td.map((i, el) => {
                return Cypress.$(el).attr('class')
            })
          
            // call classes.get() to make this a plain array
            expect(classes.get()).to.deep.eq([
                "align_center",
                "align_left",
                "align_left",
                "align_right",
                "align_center",
                "align_right",
                "align_center",
            ])
        })
        cy.log('after tr classes validate')

    })

})