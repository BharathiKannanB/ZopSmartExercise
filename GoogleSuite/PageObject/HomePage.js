

class HomePage {

    get SearchBox() 
    {return $("//input[@title='Search']");}
    
    
    get LanguageButton() 
    {return $("//div[@id='SIvCob']/a");}
    
    
    get SearchButton() 
    {return $("(//input[@value='Google Search'])[2]");}
    
    
    get FeelingLuckyButton() 
    {return $("//input[@value='I'm Feeling Lucky']");}

    OpenURL()
    {
       	 // navigate to the Google URL
		browser.url('https://www.google.com/');
		// logging actions
		console.log(browser.getUrl());
    }


    CheckMouseMove(){
        browser.checkElement('div.promo-row');
    }


}

export default new HomePage();