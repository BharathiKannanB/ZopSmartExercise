import HomePage from'../pageobject/HomePage';
import SearchLandingPage from'../pageobject/SearchLandingPage';

// Testcase 01 - To verify and validate the Search functionality in GoogleHomePage

describe('Testcase 01 Search functionality', function() {
    before(function()
    {
        HomePage.OpenURL();
    }),
    it('Enter SearchBox', function () {
        HomePage.SearchBox().setValue("Apple");
    }),
    it('Click Search Button', function () {
        HomePage.SearchButton().click();
    }),
    it('Validate Search Result', function () {
        const result= HomePage.searchResult().getText();
        assert.strictEqual(result, "Apple (India)");
    }),
});
    
   // Testcase 02 - To verify and validate the I'm Feeling Lucky functionality in GoogleHomePage

describe('Testcase 02 - I'm Feeling Lucky functionality', function() {
    before(function()
    {
        HomePage.OpenURL();
    }),
    it('Enter SearchBox', function () {
        HomePage.SearchBox().setValue("Apple");
    }),
    it('Click I'm Feeling Lucky Button', function () {
        HomePage.FeelingLuckyButton().click();
    }),
    it('Validate Search Result', function () {
        const result= HomePage.searchResult().getText();
        assert.strictEqual(result, "Apple (India)");
    }),
});
