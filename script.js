//your code here
cy.visit(baseUrl + "/main.html");
cy.get("img").eq(0).invoke("attr", "src").then(src => {
    expect(src).to.equal("golden_retriever_img_link"); // Replace with the actual URL
});

// Test for the Poodle image
cy.visit(baseUrl + "/main.html");
cy.get("img").eq(1).invoke("attr", "src").then(src => {
    expect(src).to.equal("poodle_img_link"); // Replace with the actual URL
});