import React from "react";
import Details from "./Details";
import Chirper from "../../assets/images/Chirper.gif";
import ReelMovies from "../../assets/images/ReelMovies.gif";

const portfolioContent = [
  {
    name: "Chirper",
    description:
      "This project will enable the users to securely log in to the web application and chat with other users on topics of interest. The user's login will be saved as well as the message history in different chats.",
    technologies: "Jquery, JavaScript, Express, SocketIO, BootStrap",
    githubLink: "https://github.com/Nem-Ajvaz/Group_Project_2",
    liveLink: "https://mysterious-bastion-78954.herokuapp.com/",
    gif: Chirper,
  },
  {
    name: "ReelMovies",
    description:
      "This project will enable the user to search for a movie title in the search bar and and render the movie details (Title, Plot, Actors, Awards and Ratings) along with the YouTube trailer to the screen.",
    technologies: "Jquery, JavaScript, YouTube API, OMBD API, TailWind",
    githubLink: "https://github.com/Nem-Ajvaz/Group_Project",
    liveLink: "https://nem-ajvaz.github.io/Group_Project/",
    gif: ReelMovies,
  },
  {
    name: "NoteTaker",
    description:
      "This application works as an introduction to backend development. We are presented with written front end code and are required to build the back end, connect the two, and then deploy the entire application to Heroku.",
    technologies: "Express, JavaScript",
    githubLink: "https://github.com/Nem-Ajvaz/Note-Taker-Express",
    liveLink: "https://nemsnotetaker.herokuapp.com/notes",
  },
  {
    name: "Weather Dashboard",
    description:
      "The purpose of this project was to build a simple weather forecast app for viewing a daily and 5-day forecast.",
    technologies: "Jquery, LocalStorage, API",
    githubLink: "https://github.com/Nem-Ajvaz/homework_6",
    liveLink: "https://nem-ajvaz.github.io/homework_6/",
  },
  {
    name: "Day Planner",
    description:
      "The purpose of this project was to build a simple calendar app for scheduling your working day.",
    technologies: "Jquery, LocalStorage,",
    githubLink: "https://github.com/Nem-Ajvaz/homework_5",
    liveLink: "https://nem-ajvaz.github.io/homework_5/",
  },
  {
    name: "JavaScript Quiz",
    description:
      "The purpose of this project was to build a multiple choice quiz which would subtract time on wrong answers and store scores to LocalStorage.",
    technologies: "Jquery, JavaScript, YouoTube API, OMBD API, TailWind",
    githubLink: "https://github.com/Nem-Ajvaz/homework_4",
    liveLink: "https://nem-ajvaz.github.io/homework_4/",
  },
];

export default function Portfolio() {
  return (
    <div className="work-container">
      {portfolioContent.map((details) => (
        <Details
          name={details.name}
          description={details.description}
          technologies={details.technologies}
          liveLink={details.liveLink}
          githubLink={details.githubLink}
          img={details.gif}
        />
      ))}
    </div>
  );
}
