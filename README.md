## Challenge Concepts of Node.js

![Screenshot_1](https://user-images.githubusercontent.com/59877230/97759691-4eaeb100-1ae0-11eb-929b-6cf005965249.jpg)
<br>
## 🚀 About the Challenge

This challenge aims to fix the knowledge and basic concepts in Node.js such as: route testing with Insomnia, HTTP methods: GET, POST, PUT and DELETE and their proper functionalities within the application.
<br>
## ⚡ Application Routes

- POST /repositories: The route must receive title, url, and techs within the body of the request, and the URL is the link to the github of that repository. When registering a new project, it must be stored inside an object in the following format: { id: "uuid", title: 'Node.js Challenge', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Make sure that the ID is a UUID, and always start the likes as 0.

- GET /repositories: Route that lists all repositories;

- PUT /repositories/:id: The route should change only the title, url, and techs of the repository that has the id equal to the id present in the route parameters;

- DELETE /repositories/:id: The route should delete the repository with the id present in the route parameters;

- POST /repositories/:id/like: The route should increase the number of likes of the specific repository chosen through the id present in the route parameters, with each call of that route, the number of likes must be increased by 1;
<br>
## 😍 Things I found interesting

- While we were developing the API for routes in Node.js, I was able to get a point of how the Backend is used at the time of development and how the things behind the application behave, primarily the routes; 

- The concepts were applied in a very dynamic and easy to understand way; 

Thanks a lot [Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg) for this incredible challenge! 💜 

Made by Henrique C. Machado 
