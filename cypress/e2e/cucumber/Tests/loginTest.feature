Feature: Check login Functionality

    # Feature Description

    Scenario: Validate thet the user can login successfully
    Given The user navigates to sign in page in Magento Webite
    When The user types email in the email input field
    And The user types password in the password input field
    And The user clicks the SignIn button
    Then The user will directed to My Account Page


