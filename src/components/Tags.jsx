import React from "react";
import "../styles/Tags.css";

const Tags = ({ tags }) => {
  return (
    <div className="housing-tags">
      {tags.map((tag, tagIndex) => (
        <p key={tagIndex} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
