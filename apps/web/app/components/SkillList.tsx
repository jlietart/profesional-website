"use client";
import React from "react";

export const SkillList = () => {
  const skills = [
    { title: "Skill 1", description: "Description 1", imageUrl: "https://via.placeholder.com/150" },
    { title: "Skill 2", description: "Description 2", imageUrl: "https://via.placeholder.com/150" },
    { title: "Skill 3", description: "Description 3", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index} className="max-w-full rounded overflow-hidden shadow-lg my-4 mx-auto">
          <img className="w-full" src={skill.imageUrl} alt={skill.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{skill.title}</div>
            <p className="text-gray-700 text-base">{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};