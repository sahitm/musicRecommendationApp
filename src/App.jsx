import "./App.css";
import { React, useState } from "react";

  const PhycTrance = [
    {
      link: (<iframe width="100%" height="80" src="https://www.youtube.com/embed/l2RwckCRiZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
      rating: "3"
    },
    {
      link: (<iframe width="100%" height="80" src="https://www.youtube.com/embed/l2RwckCRiZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
      rating: "4"
    },
    {
      link: (<iframe width="100%" height="80" src="https://www.youtube.com/embed/l2RwckCRiZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
      rating: "3"
    }
  ];

  const Indie = [
    {
      link: (<iframe width="560" height="315" src="https://www.youtube.com/embed/vsbTtf0KiNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
      rating: "5"
    },
    {
      link: (<iframe width="560" height="315" src="https://www.youtube.com/embed/vsbTtf0KiNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
      rating: "3"
    },
    {
      link: (<iframe width="560" height="315" src="https://www.youtube.com/embed/vsbTtf0KiNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
      rating: "4"
    }
  ];

  const HipHop = [
    {
      link: (<iframe width="560" height="315" src="https://www.youtube.com/embed/F1hJ5hLKiVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
      rating: "4"
    },
    {
      link: (<iframe width="560" height="315" src="https://www.youtube.com/embed/F1hJ5hLKiVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
      rating: "4"
    },
    {
      link: (<iframe width="560" height="315" src="https://www.youtube.com/embed/F1hJ5hLKiVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>),
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
