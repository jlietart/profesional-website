"use client";

import 'devicon/devicon.min.css';

export const Punchline = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-bold text-center">Hi ! I'm Julien, an alchemist of code ⚗️</h1>
      <p className="text-center text-xl p-8 leading-relaxed text-start">
        <p>I mix :</p>
        <ul className="list-inside">
          <li>My 12+ years of experience with <i className="devicon-javascript-plain colored"></i> JavaScript (with some <i className="devicon-typescript-plain colored"></i> TypeScript over the top),</li>
          <li>+8 years of experience with <i className="devicon-react-original colored"></i> React,</li>
          <li>+6 years of great achievements on projects with <i className="devicon-graphql-plain colored"></i> GraphQL,</li>
        </ul>  
        in my coding cauldron. <p>With the right formula, 
        I transmute these elements into <span className="text-yellow-500 font-bold">✨ golden applications ✨</span>.</p>
      </p>
      <p className="text-center">
        My focus on code quality is like the precise measurements in an alchemist's recipe. 
        It keeps the potion potent and the elixir effective. But remember, the magic is in the formula, not the alchemist!
      </p>
    </div>
  );
};