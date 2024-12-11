Feature: Check Create New Account Functionality

Scenario: Validate that the user can Create New Account Sucesssfully
Given The user navigates to create a new account page and the user
When The user types first name in the First Name field of the Personal Information
And The user types last name in the Last Name field of the Personal Information
And The user types email in the Email field of the Sign in Information
And The user types password in the Password field of the Sign in Information
And The user types confirm password in the Confirm field of the Sign in Information
And The user Clicks on the Create an Account button
Then a thank you message for registering will appears