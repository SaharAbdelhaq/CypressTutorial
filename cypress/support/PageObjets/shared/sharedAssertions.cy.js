class sharedAssertions {
  checkPageTitleIsContain(value) {
    cy.get(".page-title").should("contain", value);
  }
}
export default sharedAssertions;
