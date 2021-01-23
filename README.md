## This is an youtube cloned app build on react

### Steps to run:
1. clone this git repo using this link `https://github.com/arkumari2000/youtube-clone.git`
2. run `npm install` after entering in the folder
3. now install axios: `npm install --save axios`
4. get your youtube api key
5. run the project `npm start`

### Steps to get your own youtube API key:

1. You need a Google Account to access the Google API Console, request an API key, and register your application.
2. Create a project in the Google Developers Console and obtain authorization credentials so your application can submit API requests.
3. After creating your project, make sure the YouTube Data API is one of the services that your application is registered to use:
  a.  Go to the API Console and select the project that you just registered.
  b. Visit the Enabled APIs page. In the list of APIs, make sure the status is ON for the YouTube Data API v3.
4. If your application will use any API methods that require user authorization, read the authentication guide to learn how to implement OAuth 2.0 authorization.
5. Select a client library to simplify your API implementation.
6. Familiarize yourself with the core concepts of the JSON (JavaScript Object Notation) data format. JSON is a common, language-independent data format that
   provides a simple text representation of arbitrary data structures. For more information, see json.org.
   
#### you can watch this video of how to get youtube api key if you are facing any problem [How to create a YouTube API key (2020)](https://www.youtube.com/watch?v=VqML5F8hcRQ)
   
### Steps to set your youtube api in the project:
1. get your api key 
2. go in the folder `src/api/youtube_api`
3. now paste you API key in the line `const KEY = {YOUR API KEY};`

And now you can search anything like you search in youtube in the search bar.

#### for any query contact: arkumari2000@gmail.com
