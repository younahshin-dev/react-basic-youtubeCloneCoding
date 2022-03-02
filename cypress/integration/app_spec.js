/// <reference types="Cypress"/>

import '@testing-library/cypress/add-commands'

describe('youtube', () => {
  beforeEach(() => {
    cy.intercept('GET', /(mostPopular)/g, {
      fixture: 'popular.json'}).as('getMostPopular');
    
    cy.visit('/');
  });

  it('render', () => {
    cy.findByText('Youtube').should('exist');
  });

  it('display most popular videos first', () => {
    cy.findByText('Ep4 It‘s on you and I | BTS: Burn the Stage').should('exist');
  })

});