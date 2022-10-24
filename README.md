# DevShed Digital Full Stack Comment App.

### Getting started

#### 1. Get to know your stack and tools

This project is built on the MERN Stack ([Mongo](https://www.mongodb.com/docs/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [Node](https://nodejs.org/en/)).

Additionally, you'll have access to [Axios](https://axios-http.com/docs/intro) for your API request. If you decide to install any additional libraries or NPM packages please note them down and add a quick explaination.

#### 2. Install your dependencies

In both your server and your client you must run

```
npm i
```

#### 3. Create .env file and adding your Mongo DB

On your Sever folder you MUST create an .env file.

```
touch .env
```

In that .env you need to add

```
MONGOURL= "Whatever you get back from the mongo db url"
```

#### 4. Setting up Mongo DB

Here is a [video](https://youtu.be/bhiEJW5poHU) on how to setup your MongoDB.
You have to open a Free account with [Mongo DB](https://www.mongodb.com/cloud/atlas/register)
Once you have an account, please follow the [video](https://youtu.be/bhiEJW5poHU) instructions to setup a free database. Once your free Database has been setup, you will have a Mongo DB URL. Please add that URL in your .env file as shown in step 3.

#### 5. Start the app

Client - localhost3000

```
npm run start
```

Server - localhost8080

```
npm run start
```

# Task

Provide the functionality to allow for multiple people to contribute to an online Comment.

#### User Stories:

- As an anonymous user I can post a message to the comment
- An optional name field will be there if a user wants to add their name. If the name field is blank the entry will display: "Anonymous User".
- As an anonymous user I can retrieve the list of coment entries, sorted by creation time. For
  each entry, I see the message, the name (if provided) or "Anonymous User", as well as date & time of when it was posted.

#### Requirements

- Entries must be saved into your MongoDB Database.
- MongoDB can only be accessed by your Backend Server.

#### Notes

- Please work independently without code review by others and state any assumptions you made or
  questions you had along the way. When complete, note how much time you spent from beginning
  to end.
- Be creative with your solution—there is no 100% correct solution. We are just as interested in how you approach the problem as we are in the actual solution.
- Please Design it as you see fit. The app is simple by it's nature so do not stress if your app is simplistic/minimalist.

#### Tips

Try and keep these 3 things in mind.

- Scalability
- Organization
- DRY

# Questions

Once completed please answer the following questions.

### Did you add any libraries or NPM packages (please leave blank if no)

I added React-Bootstrap for ease of styling and use of basic components (Buttons, Cards, generic Containers and such)

### What would be your approach to ensuring the application is ready for production (testing)?

I would have liked to approach the project from a Test Driven Development mentality, but given the short timeframe I felt it was important to have a working prototype quickly.

When I tried to add tests, I into a Jest error since I was using import... rather than require(...). It appeared the solution would have involved installing a couple of babel libraries as well as changing some configuration files, and I did not want to do that and risk new conflicts cropping up from these changes. Had this been meant for production, or had I had a bit more time, I of course would have made the changes and dealt with any other issues!

However, for testing I would have added individual component tests to make sure they were receiving and using props properly, and rendering as expected both on startup and when props change. I would have also tested the helper functions to make sure they were having the intended effects. I would have also liked to add cypress for happy path testing at a minimum.

### If your form was given a new type of input field (such as a number field), how reusable are your components?

Since I used React-Bootstrap, many reusable components with functionality across a wide variety of uses (such as a Button component, or a Card component) were already made. From that perspective, adding a number field would only require using the correct React-Bootstrap field.

However, my goal was to make my higher order components as self-contained and reusable as possible. So, for example, if we added a field that did not require user input (let's say, a random cat fact for each post) we would only have to modify the files that handle state (useAppData) or display comments (Comment and CommentsThread). App and the Form components would continue to work as intended.

### What did you not include in your solution that you want us to know about? Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.

There is currently no way for the user to know if their post failed to reach the database. The comment would appear because of the local state update, and the user would only realize something failed when they refreshed the page and the component was missing. In order to fix this, I would do the following:

- Change the back end architecture so that it sends a response to the front end if the database update succeeded or failed. I would pass the response from the DB of success or failure down to the POST route, then use that to send a response to the front end.
- Have the front end show a spinner while waiting for the server response, then either update the local state and clear the form (as it does now) or show an error and keep the form's text so the user can try to resubmit

I also added a simple HTML validation so that users can submit anonymous posts (as intended) but cannot not submit posts with no text in the comment field. I tried to implement the React-Bootstrap validation, but had some difficulty making it work properly when only validating the comment text and not the name field. My rubber duck failed me, but I am confident it would be a quick fix with help from a senior dev or maybe even a peer!

I am generally happy with state management and DRYness of the code as it stands. Moving the code in useFormFunctions hook to useAppData would make sense, since it updates the database which would make sense to have it together with the original database query in useAppData. However, all of the other functions belong just to AddCommentForm and use local state only, I felt it made sense to separate them out.

### Other information about your submission that you feel it's important that we know if applicable.

The project as it is right now took me approximately 12 hours of work. I had a fully working prototype after approximately 6 hours, but I felt the state handling was inelegant and the code was messy. Sadly, while trying to fix that, I made some code architecture choices that turned out to be not very functional. So, it took some time for me to try them, find they didn't work as intended, undo them and try something else.

### Your feedback on this technical challenge

The only thing I would have added was an idea of how long you wanted us to work on this! I have no idea if I worked too much, or too little, but I feel that 12 hours over 3 days was a reasonable amount.
