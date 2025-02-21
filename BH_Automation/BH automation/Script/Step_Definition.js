//USEUNIT FunctionLibrary


Given("Navigate to BH home page", function (){
  FunctionLibrary.LaunchBrowser();
});

When("Click in Search icon", function (){
  FunctionLibrary.Click_Search_Button();
});

Then("Verify Search field is visible", function (){
  FunctionLibrary.Verify_Search_Field_IsVisible()
});

Then("Enter the {arg} in search", function (strText){
  FunctionLibrary.Enter_Text_InSearchField(strText);
});

Then("Verify first result matches the {arg}", function (strText){
  FunctionLibrary.Verify_First_Result_Matches_Text(strText);
});

When("Click on Find a Center", function (){
  FunctionLibrary.Click_FindCenter_Link();
});

Then("Verify the new page name URL has {arg}", function (param1){
  FunctionLibrary.Verify_URL();
});

Then("Enter NewYork in Search", function (){
  FunctionLibrary.Set_Text_inSearchTextBox();
});

Then("Verify number of found center is equal to the list displayed", function (){
  FunctionLibrary.Verify_SearchResults_ReturnValue();
});

Then("Click on first center of the list", function (){
  FunctionLibrary.Click_On_First_Center_in_Results();
});

Then("Verify the name and address is same on popup", function (){
  FunctionLibrary.Verify_the_value_dispalyed_inMap_and_List();
});
