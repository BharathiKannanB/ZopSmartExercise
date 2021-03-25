import HomePage from'../pageobject/HomePage';

// Testcase 01 - To verify and validate the functionality of search in GoogleHomePage

describe('Testcase 01 Search functionality', function() {
    before(function()
    {
        HomePage.OpenURL();
    }),
    it('Enter SearchBox', function () {
        HomePage.SearchBox().setValue("Apple");
    }),
    it('Check Game Overview Section', function () {
        Loginpage.CheckGameOverviewSection();
    }),
    it('Check sliding image', function () {
        Loginpage.CheckSlidingImage();
    }),
    it('Failed test case', function () {
       var result= Loginpage.CheckGameOverviewSection();
       console.log(result[0].isSameDimensions);
       expect(result[0].isSameDimensions).to.be.true;
    });
});