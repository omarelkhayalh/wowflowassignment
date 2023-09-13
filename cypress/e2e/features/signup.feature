Feature: sign up
    Feature sign up will create an account for user

Scenario Outline: Signup
    Given A web browser is at the automation excercise login page
    When A user enters name "<name>", email "<email>", and clicks signup button
    Then The url will contain signup
    Then The Enter Account Information should appear
    And A user enters choose title "<title>"
    And user types password
    And user choose day of birth
    And user choose month of birth
    And user choose year of birth 
    And user enter firstname "<firstName>"
    And user enter lastname "<lastName>"
    And user enter company "<company>"
    And user enter address "<address>"
    And user select country
    And user enter state "<state>"
    And user enter city "<city>"
    And user enter zipcode "<zipcode>"
    And user enter mobilenumber "<mobilenumber>"
    And user clicks on create account button
    Then account is created message should appear
    Then user should click continue
    Then user is redirected to home page
    Then logout button should exist

    Examples:
        | name | email | firstName | lastName | company | address | state | city | zipcode | mobilenumber | title |
        | test | test  | test      | test     | test    | test    | test  | test | test    | 0000000000   | Mr    |
 #       | test | test  | test      | test     | test    | test  | test | test    | 0000000000   | Mrs   |
    