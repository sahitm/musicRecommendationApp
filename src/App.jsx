import "./App.css";
import { React, useState } from "react";

  const PhycTrance = [
    {
      link: (
        <iframe
          title="song"
          src="https://open.spotify.com/embed/track/2MWjwvJD5Khi8XQ4YPAcTn?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "3"
    },
    {
      link: (
        <iframe
          title="song1"
          src="https://open.spotify.com/embed/track/0zyel0AXT4FoaGduT7qP6b?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "4"
    },
    {
      link: (
        <iframe
          title="song3"
          src="https://open.spotify.com/embed/track/4EaeZrjQTyeFRZa7WVhjkA?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "3"
    }
  ];

  const Indie = [
    {
      link: (
        <iframe
          title="song1"
          src="https://open.spotify.com/embed/track/5iCY0TXNImK4hyKfcplQsg?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "5"
    },
    {
      link: (
        <iframe
          title="song2"
          src="https://open.spotify.com/embed/track/669PEr8I3wOswY8BANBpdh?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "3"
    },
    {
      link: (
        <iframe
          title="song3"
          src="https://open.spotify.com/embed/track/4QK1qv4mgsfdWmMzp1Z3fx?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "4"
    }
  ];

  const HipHop = [
    {
      link: (
        <iframe
          title="song1"
          src="https://open.spotify.com/embed/track/7Ie9W94M7OjPoZVV216Xus?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "4"
    },
    {
      link: (
        <iframe
          title="song2"
          src="https://open.spotify.com/embed/track/7iL6o9tox1zgHpKUfh9vuC?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "4"
    },
    {
      link: (
        <iframe
          title="song3"
          src="https://open.spotify.com/embed/track/503OTo2dSqe7qk76rgsbep?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ),
      rating: "3"
    }
  ];

export default function App() {
  const [isPhycTrance, SetPhycTrance] = useState(false);
  const [isIndie, SetIndie] = useState(false);
  const [isHipHop, SetHipHop] = useState(false);



  function displayGenre(genre) {
    if (genre === "PhycTrance") {
      SetPhycTrance(true);
      SetIndie(false);
      SetHipHop(false);
    } else if (genre === "Indie") {
      SetPhycTrance(false);
      SetIndie(true);
      SetHipHop(false);
    } else {
      SetPhycTrance(false);
      SetIndie(false);
      SetHipHop(true);
    }
  }

  return (
    <div className="App">
      <h1>🎙️Great Music</h1>

      <hr />
      <button onClick={() => displayGenre("PhycTrance")}>PhycTrance</button>
      <button onClick={() => displayGenre("Indie")}>Indie</button>
      <button onClick={() => displayGenre("HipHop")}>HipHop</button>
      <hr />

      {isPhycTrance && PhycTrance.map((item) => <div id='link'>{item.link}<hr></hr> <p>Rating:{item.rating}</p><hr></hr></div>)}
      {isIndie && Indie.map((item) => <div id='link'>{item.link}<hr></hr> <p>Rating:{item.rating}</p><hr></hr></div>)}
      {isHipHop && HipHop.map((item) => <div id='link'>{item.link}<hr></hr> <p>Rating:{item.rating}</p><hr></hr></div>)}
    </div>
  );
}
