Feature: BH functionality test

  Scenario Outline: Verify Search Functionality
    Given Navigate to BH home page
    When Click in Search icon
    Then Verify Search field is visible
    And Enter the "<Search value>" in search
    And Verify first result matches the "<Search value>"
  
  Examples:
  |Search value|
  |Employee Education in 2018: Strategies to Watch|
  
  Scenario Outline: Verify Comments
    Given Navigate to BH home page
    When Click on Find a Center
    Then Verify the new page name URL has "<URL value>"
    And Enter NewYork in Search
    And Verify number of found center is equal to the list displayed
    And Click on first center of the list
    And Verify the name and address is same on popup
    
  Examples:
  |URL value|
  |/child-care-locator|
    
  
