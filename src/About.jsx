import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div>
        <br />
        <br />
        <br />
        <br />

        <h1>My Skills</h1>
        <br />
        <br />
        <br />
        <br />

        <p>
          I'm a full stack developer with a passion for learning new things. I'm
          always looking for new ways to improve my skills and make my projects
          better.
          <br />
          <br />
          For the past few months, I've been at BCIT doing the CST program and
          have learned a lot about software development. I've learned about the
          software development lifecycle, how to work in a team, and how to use
          a variety of different technologies.
          <br />
          <br />I hope to apply my skills to a job in the future and continue to
          learn and grow as a developer.
        </p>
      </div>
      <TagCloud
        className="tagCloud"
        options={(w) => ({
          radius: Math.min(690, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
        })}
        onClick={(tag, ev) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          "C++",
          "Java",
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Node.js",
          "Angular",
          "Express",
          "MongoDB",
          "SQL",
          "Python",
          "C",
          "Git",
          "Figma",
          "JQuery",
          "Azure",
          "AWS",
          "Wireshark",
          "zsh",
          "Firebase",
          "C#",
          "SQLlite",
          "Kotlin",
        ]}
      </TagCloud>
    </div>
  );
};

export default About;
