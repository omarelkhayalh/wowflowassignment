Feature: Navigate to products
    This feature navigates to product page 

Scenario: Navigate
    Given user is navigated to products page
    When User filter women dress
    Then verify that there are 3 dresses
    Then write dresses names to file 