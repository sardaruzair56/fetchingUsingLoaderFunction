import React from "react";
import { Link } from "react-router-dom";

const DUMMY_event = [
  {
    id: "e1",
    title: "Some Event",
  },
  {
    id: "2",
    title: "Some Event 2",
  },
  {
    id: "e3",
    title: "Some Event 3",
  },
  {
    id: "e4",
    title: "Some Event 4",
  },
];

const Eventpage = () => {
  return (
    <div>
      <h1>My Event Page</h1>
      <ul>
        {DUMMY_event.map((event) => (
          <li key={event.id}>
            <Link to={event.id}> {event.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eventpage;
