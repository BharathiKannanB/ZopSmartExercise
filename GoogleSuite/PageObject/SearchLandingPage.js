

class SearchLandingPage {

  
    get PerformanceStat() 
    {return $("//div[@id='result-stats']/nobr");}
    
    
    get ErrorMessage() 
    {return $("//p[@role='heading']");}
    
    
     get searchResult() 
    {return $("//h3[text()='Apple (India)']");}
  
    get getTitle() 
    {return browser.getTitle()}
  

}

export default new SearchLandingPage();
