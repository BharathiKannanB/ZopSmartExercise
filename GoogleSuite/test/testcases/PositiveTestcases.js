import HomePage from'../pageobject/HomePage';
import SearchLandingPage from'../pageobject/SearchLandingPage';

// Testcase 01 - To validate the Search functionality in GoogleHomePage

describe('Testcase 01 Search functionality', function() {
	try {
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
        const result= SearchLandingPage.searchResult().getText();
	browser.saveScreenshot('./screenshot/screen/Testcase01.png');
        assert.strictEqual(result, "Apple (India)");
	console.log("Search functionality validated");
    }),
	    } catch (error) {
    console.log(error.name);
}
});
    
   // Testcase 02 - To validate the I'm Feeling Lucky functionality in GoogleHomePage

describe('Testcase 02 - I'm Feeling Lucky functionality', function() {
	 try {
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
        const result= browser.getTitle();
	browser.saveScreenshot('./screenshot/screen/Testcase02.png');
        assert.strictEqual(result, "https://www.apple.com/in/");
	console.log("I'm Feeling Lucky functionality validated");
    }),
	    } catch (error) {
    console.log(error.name);
}
});

 // Testcase 03 - To verify and validate language change functionality in GoogleHomePage

describe('Testcase 03 - Language UI functionality', function() {
	try {
    before(function()
    {
        HomePage.OpenURL();
    }),
    it('Click Language Button', function () {
        HomePage.LanguageButton().click();
    }),
    it('Validate Language', function () {
        const result=  HomePage.LanguageButton().getText();
	browser.saveScreenshot('./screenshot/screen/Testcase03.png');
        assert.strictEqual(result, "English");
	console.log("Language change UI functionality validated");
    }),
	    } catch (error) {
    console.log(error.name);
}
});
    
  // Testcase 04 & 05 - To validate Keyboard and Mouse Actions in GoogleHomePage 

describe('Testcase 04 - Keyboard and Mouse Actions', function() {
	try {
    before(function()
    {
        HomePage.OpenURL();
    }),
    it('Enter SearchBox', function () {
        HomePage.SearchBox().setValue("Apple");
    }),
    it('move the existing data ', function () {
        HomePage.SearchBox().keys(['Ctrl', 'x'])
    }),
    it('Validate KeyBoard Action', function () {
        const result=  HomePage.SearchBox().getText();
        assert.strictEqual(result, "");
    }),
        it('paste the cut data ', function () {
        HomePage.SearchBox().rightClick()
        HomePage.SearchBox().moveTo(73,64)
	    browser.positionClick()
    }),
         it('Validate Mouse Action', function () {
        const result=  HomePage.SearchBox().getText();
	browser.saveScreenshot('./screenshot/screen/Testcase0405.png');
        assert.strictEqual(result, "Apple");
	console.log("Keyboard and Mouse actions validated");
    }),
	    } catch (error) {
    console.log(error.name);
}
});  
