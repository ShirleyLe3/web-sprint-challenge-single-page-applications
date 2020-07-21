cy.get('[data-cy="name"]')
.type('Shirley')
.should('have.value', 'Shirley');

cy.get('[data-cy="submit-button"]').should('be.disabled');
cy.get('[data-cy="submit-button"]').should('not.disabled');


cy.get('[data-cy="phone"]').type(7032214841).should('have.value', '7032214841');

cy.get('[data-cy="crust"]').select('Original').should('have.value', 'Original');

cy.get('[data-cy="phone"]').type(7032214841).should('have.value', '7032214841');

cy.get('[data-cy="pepperoni"]').click().should('be-checked');
cy.get('[data-cy="sausage"]').click().should('be-checked');
cy.get('[data-cy="chicken"]').click().should('be-checked');
cy.get('[data-cy="bacon"]').click().should('be-checked');
cy.get('[data-cy="onions"]').click().should('be-checked');
cy.get('[data-cy="jalapenos"]').click().should('be-checked');
cy.get('[data-cy="pinneapple"]').click().should('be-checked');
cy.get('[data-cy="spinach"]').click().should('be-checked');
cy.get('[data-cy="mushrooms"]').click().should('be-checked');
cy.get('[data-cy="olives"]').click().should('be-checked');
cy.get('[data-cy="tomatoes"]').click().should('be-checked');


cy.get('[data-cy="instructions"]').type('I am a potato').should('have.value', 'I am a potato');
})
})