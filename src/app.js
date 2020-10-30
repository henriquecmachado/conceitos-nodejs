const express = require("express");
const cors = require("cors");
const { uuid } = require('uuidv4'); 
//const { v4: uuid, validate: isUuid } = require('uuid');
const app = express();



app.use(express.json());
app.use(cors());

const repositories = [];

const validateId = (req, resp, next) => {
  const { id } = req.params
  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if (repositoryIndex < 0){
    return resp.status(400).json({error: "Repository not found"})
  }
  next()
}

app.get("/repositories", (request, response) => {
  const { id, title, url, techs, likes } = request.query; 
  return response.json(repositories); 
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body; 

  const repository = {
   id: uuid(),
   title, 
   url, 
   techs, 
   likes: 0, 
  }; 
  repositories.push(repository); 
  return response.json(repository); 

});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params; 
  const { title, url, techs } = request.body; 
  

  const findRepositoryIndex = repositories.findIndex(repository => 
    repository.id === id); 

    if (findRepositoryIndex < 0) {
      return response.status(400).json({ error: 'Repository does not exist'})
    }

    const repository = {
      id, 
      title, 
      url, 
      techs, 
      likes: repositories[findRepositoryIndex].likes, 
    }; 

    repositories[findRepositoryIndex] = repository 

    return response.json(repository); 
  }); 

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params; 

  const findRepositoryIndex = repositories.findIndex(repository => repository.id === id); 
    
    if(findRepositoryIndex < 0){
      return response.status(400).json({Error: 'Project not found'})
    } 


    repositories.splice(findRepositoryIndex, 1);
    return response.status(204).send(); 
  
});

app.post("/repositories/:id/like", validateId, (request, response) => {
  const { id } = request.params; 

  const findRepositoryIndex = repositories.findIndex(repository => 
    repository.id === id); 

if (findRepositoryIndex === -1) {
  return reponse.status(400).json({ error: 'Repository does not exists.'}); 
}; 

repositories[findRepositoryIndex].likes += 1;  

return response.json(repositories[findRepositoryIndex]); 
});

module.exports = app;
