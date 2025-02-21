//USEUNIT Object_Identifier
//USEUNIT Objects_Repository


//*********************************************************************
//Function Name : Launch Browser
//Description : This function is used to launch the browser
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function LaunchBrowser(){
  try{
    Log.AppendFolder("Launching Browser");
    Browsers.Item(btChrome).Run("http://BrightHorizons.com");
    Log.PopLogFolder();
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}

//*********************************************************************
//Function Name : Click_Search_Button
//Description : This function is used to click on the search button 
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function Click_Search_Button(){
  try{
    Log.AppendFolder("Click Search");
    let objParent = Object_Identifier.SetDefaultParent("*brighthorizons.co*");
    
    //Click on search 
    let objSearch = Object_Identifier.GetObject(objParent, Objects_Repository.OSearchLink);
    objSearch.Click();
    Log.PopLogFolder();
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}


//*********************************************************************
//Function Name : Verify Search Field is visible
//Description : This function is used to verify if search field is visible
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function Verify_Search_Field_IsVisible(){
  try{
    Log.AppendFolder("Verify search field is visible");
    let objParent = Object_Identifier.SetDefaultParent("*brighthorizons.co*");
    
    //Get the object of the search field
    let objSearchField = Object_Identifier.GetObject(objParent, Objects_Repository.OSearchField);
    
    //condition to check is the search field is visible on screen
    if(objSearchField.Exists){
      Log.Checkpoint("Search field is found");
    }else{
      Log.Error("Search field is not visible on the page")
    }
    Log.PopLogFolder();
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}


//*********************************************************************
//Function Name : Enter_Text_InSearchField
//Description : This function is used to enter a value in text field
//Parameter : strText - Text value passed from scenario example
//Author: Nishanthi
//*************************************************************************

function Enter_Text_InSearchField(strText){
  try{
    Log.AppendFolder("Verify search field is visible");
    let objParent = Object_Identifier.SetDefaultParent("*brighthorizons.co*");
    
    //Set the text in search field
    let objSearchField = Object_Identifier.GetObject(objParent, Objects_Repository.OSearchField);
    objSearchField.SetText(strText);
    
    //Click on Search button
    let objSearchBtn = Object_Identifier.GetObject(objParent, Objects_Repository.OSearchButton);
    objSearchBtn.ClickButton();
    Log.PopLogFolder();
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}

//*********************************************************************
//Function Name : Verify_First_Result_Matches_Text
//Description : This function checks if the first return value is the text entered
//Parameter : strText - Text value passed from scenario example
//Author: Nishanthi
//*************************************************************************

function Verify_First_Result_Matches_Text(strText){
  try{
    Log.AppendFolder("Verify search field is visible");
    Sys.Browser("chrome").Refresh();
    var searchResults = Sys.Browser("chrome").Page("https://www.brighthorizons.com/search*");

    // Get the first search result element
    let firstResult = searchResults.querySelector('.search-result');

    // Extract the title of the first result
    let title = firstResult.querySelector('.title').textContent;
    Log.Message(title);
    if(strictEqual(strText,title)){
      Log.Checkpoint("the first search result is " + title + "is as expected");
    }else{
      Log.Error("The first search result is " + title + "is not as expectd");
    }
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}


//*********************************************************************
//Function Name : Click_FindCenter_Link
//Description : This function is used to click on the Find center button 
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function Click_FindCenter_Link(){
  try{
    Log.AppendFolder("Click Find a center");
    let objParent = Object_Identifier.SetDefaultParent("*brighthorizons.co*");
    
    //Get the object value for Find the center link
    let objFind = Object_Identifier.GetObject(objParent, Objects_Repository.OFindCenterLink);
    objFind.Click();
    Log.PopLogFolder();
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}

//*********************************************************************
//Function Name : Verify_URL
//Description : This function is used to click on the Find center button 
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function Verify_URL(){
  try{
    Log.AppendFolder("Click Find a center");
    var currentURL = Sys.Browser("chrome").Page("*").URL;
    
    // Compare the URL value with regular expression
     if (currentURL.indexOf("/child-care-locator") !== -1) {
        Log.Checkpoint("The URL contains '/child-care-locator'");
    } else {
        Log.Error("The URL does not contain '/child-care-locator'")
    }
    Log.PopLogFolder();
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}


//*********************************************************************
//Function Name : Set_Text_inSearchTextBox
//Description : This function is used to set Text in the Search box
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function Set_Text_inSearchTextBox(){
  try{
    Log.AppendFolder("Click Find a center");

    let objParent = Object_Identifier.SetDefaultParent("*brighthorizons.com/*");
    
    //Get the value of the search text box 
    let objFind = Object_Identifier.GetObject(objParent, Objects_Repository.OSearchTextBox);
    objFind.SetText("New York");
    objFind.Keys("[Enter]");
    Log.PopLogFolder();    
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}

//*********************************************************************
//Function Name : Verify_SearchResults_ReturnValue
//Description : Verify the number of search results returned is equal to the search value displayed
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function Verify_SearchResults_ReturnValue(){
  try{
    Log.AppendFolder("Verify the number of search results returned is equal to the search value displayed");

    let objParent = Object_Identifier.SetDefaultParent("*brighthorizons.com/*");
    
    let resultNumbers = objParent.querySelector('.resultsNumber').innerText;
    Log.Message("The result from the found centers "+resultNumbers);
    
    //Get the count search results panels displayed
   let strSearchResultsCount = objParent.querySelectorAll('.centerResult.covidOpen').length;
   Log.Message("The result from the search "+strSearchResultsCount);
   
   if(strictEqual(aqConvert.StrToInt(resultNumbers),strSearchResultsCount)){
     Log.Checkpoint("The Number of found centers and the search results are the same")
   }else{
     Log.Error("The Number of found centers and the search results are not the same")
   }

   Log.PopLogFolder();    
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}

//*********************************************************************
//Function Name : Click_On_First_Center_in_Results
//Description : Click on the first center in results
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function Click_On_First_Center_in_Results(){
  try{
    Log.AppendFolder("Click on the first center in results");

    let objParent = Object_Identifier.SetDefaultParent("*brighthorizons.com/*");
    let firstCenterResult = objParent.querySelector('.centerResult');
    firstCenterResult.click();  // Simulate a click on the first center result
    Delay(3000);
  Log.PopLogFolder();    
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}


//*********************************************************************
//Function Name : Verify_the_value_dispalyed_inMap_and_List
//Description : Click on the first center in results
//Parameter : 
//Author: Nishanthi
//*************************************************************************

function Verify_the_value_dispalyed_inMap_and_List(){
  try{
    Log.AppendFolder("Click on the first center in results");
    let objParent = Object_Identifier.SetDefaultParent("*brighthorizons.com/*");
    
    //Get center anme and address the value from the List
    let centerName = objParent.querySelector('.centerResult__name').innerText;
    Log.Message(centerName);
    let centerAddress = objParent.querySelector('.centerResult__address').innerText;
    Log.Message(centerAddress); 
    
    //Get the center name and address from map
    let centerNameMap = objParent.querySelector('.mapTooltip__headline').innerText;
    Log.Message(centerNameMap);
    
    let centerAddressMap = objParent.querySelector('.mapTooltip__address').innerText;
    Log.Message(centerAddressMap);
    centerAddressMap = centerAddressMap.replace(/\n/g, ' ');
    if(strictEqual(centerName,centerNameMap) && strictEqual(centerAddress,centerAddressMap)){
      Log.Checkpoint("The name displayed in the list and the map is the same");
    }else{
      Log.Error("the name dislplayed in the list and the map are not same");
    }
   Log.PopLogFolder();    
 }
 catch(e){
   Log.Warning(e.message);
   Log.PopLogFolder();
 }
}
