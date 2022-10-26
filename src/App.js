import React from "react";
import Comment from "./composants/Comment";

function App(){
  const comments = [
    {
      name : "Elliot Fu", 
      image : "https://semantic-ui.com/images/avatar/small/elliot.jpg",
      texte : "Hello from Elliot",
      date : "12/10/2022",
      evaluation : "5"
    },
    {
      name : "Stevie Feliciano", 
      image : "https://semantic-ui.com/images/avatar/small/stevie.jpg",
      texte : "Bonjour Stevie",
      date : "09/09/2021",
      evaluation : "4"
    },
    {
      name : "Tom Lukic", 
      image : "https://semantic-ui.com/images/avatar/small/joe.jpg",
      texte : "Cia Tom",
      date : "08/04/2020",
      evaluation : "3"
    }

  ];

  return (<>
    {
      comments.map(
        comment => <Comment name={comment.name} image={comment.image} texte={comment.texte} evaluation={comment.evaluation} />
      ) 
    }
    </>
  );
}

export default App;
