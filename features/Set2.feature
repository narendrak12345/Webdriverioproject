Feature: Set2 Test flows

    Scenario: TC201 launch URL
    
        Given Launch the URL
        When Input the location as London under the For Sale tab and click the search button
        Then The result will be the list of properties based on the preferred location
        Then Print the price values of the first 5 properties in the console
        When Select the 3rd property from the list
        When On selecting the property, there is a logo, name, and telephone number of the agent
        Then Click on the logo and go to the agent's page

    Scenario: TC0202 Verify agents page
        
        Then Verify whether the property is listed on the agent's page using the assertion method
        

         