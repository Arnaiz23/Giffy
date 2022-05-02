import ListOfGifs from "components/ListOfGifs";
import React from "react";
import { Link } from "wouter";
import './index.css';

export default function Category({ name, options = [] }) {
  return (
    <section>
      <h4>{name}</h4>
      <ul>
        {options.map((singleOption, index) => (
          <li>
            <Link to={`/search/${singleOption}`} >
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}