# Description
This is a response to the Lexicon Digital Challenge. An implimentation of a movie website price comparison website frontend with a provided API. The application has been scaffolded with create-react-app.

# Instructions
To run this app, install the dependancies with yarn with this command.
```sh
yarn
```
Then build the application. 
```sh
yarn build
```
After which instructions will appear to run it on the local network with serve.
```sh
serve -s build
```
This runs the app and will be accessable through the network address provided.

# Context
The main users for this kind of application would be for people who wish to compare movie prices from the two websites to get the lowest price.

# Architectural Elements and Decisions
There were a few decisions made regarding the building of this application concerning file structure, and component responsibility.

## File Structure
Concerning file structure, I took a standard react app approach to seperate UI elements into state-changing, and non-state-changing categories. The folders components, and containers respectively. This was done even though there were no other pages to allow for the app to be more extensible to additional developers in the future should the client wish to expand the functionality. I have also decided to include the assets, and config folder in the src folder for similar reasons.
Other items of note would be the addition of a postman collection. Postman being an API testing tool to hit APIs. This was added to allow for quick testing of the API and to see more clearly the response json that would be returned.

## Component Responsibility
With components, as mentioned above they have been split into the two categories. Furthermore, each component has been broken down to it's smallest components to a degree. This is to allow for a better unit testing structure where each component can be tested in isolation.

## Reliability
As the API provided was known to be unrealiable, I added a retry function in order to ensure the data was properly obtained. This would, through the fetch response object, check for an ok. If there was not an ok on the response, it would retry the function until it did, and then return the response data. 
There was another solution that was on the table at the time of building, which was to develop a middleman server and database, which would have fetched the data, with a similar retry method, and store the transformed movie data in its own data store, possibly MongoDB or Redis. The data would then be updated periodically, possibly overnight to ensure an updated database. This would ensure quality service to the front end client while also reducing the computational load of processing the information.

 instructions, context, architectural elements and decisions, trade-offs and
assumptions made

# Trade offs
One of the trade offs would be found in the decision of the language that I started in. I decided to go with React Javascript instead of React Typescript as Typescript may have been a bit too much overhead in comparison. 
The other trade off was the decision explained above about creating a middleman server to house in between data. While this would provide better service, given the overall time constraints, I decided it would have been better to ensure a better quality front end.

# Assumptions
The main assumption I made was that the API provided would perform overly poorly. This was to justify the approach I made in the retry of the calling of the API.
