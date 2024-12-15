Feature: Check add Watchs To cart Functionality

Scenario: Validate that the user can add a watch which has aprice >55 to cart
Given The user navigates to Magento home page 
When The user click on Gear
And Select the Watches option form the dropDown List
And Click on List View
And Add the Watch that its price is more than 55 to the Cart
Then The Selected Watches will be added to the cart 

