@skip
Feature: Spacetalk Product Search
  As a user
  I want to search for products on Spacetalk website
  So that I can find and view product details

  Background:
    Given I am on the SpaceTalk website
    
  Scenario Outline: Search for different products
    Given I navigate to "https://spacetalk.co/"
    When I click on the search link with href "/search"
    And I search for "<product_name>"
    Then the page should load successfully
    And the product page should be displayed

    Examples:
      | product_name               |
      | Mobile starter pack        |
      | Watch                      |
      | Kids phone                 |
