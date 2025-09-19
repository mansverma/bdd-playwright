Feature: SpaceTalk Cart Validation
  As a user visiting SpaceTalk website
  I want to view the shopping cart
  So that I can see the current cart count

  Background:
    Given I am on the SpaceTalk website

  Scenario: Verify empty cart displays zero count
    Given I navigate to "https://spacetalk.co/"
    When I click on the cart link with href "/cart"
    Then I should wait for the count bubble element to appear
    And the count bubble should display "0"

  Scenario Outline: Cart count bubble validation
    Given I navigate to "https://spacetalk.co/"
    When I click on the element with selector "a[href='/cart']"
    Then the element with class "count-bubble count-bubble--lg" should be visible
    And the count bubble value should be "<expected_count>"

    Examples:
      | expected_count |
      | 0              |