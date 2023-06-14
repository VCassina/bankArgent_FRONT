import React from "react";
import "../styles/main.css";

function ArticlePoint(props) {
  const { picture, pictureAlt, title, texte } = props;
  console.log(picture)

  return (
    <div className="feature-item">
      <img className="feature-icon" src={picture} alt={pictureAlt} sizes="(max-width: 100px) 100px"
  width="100"
  height="100"></img>
      <h3 className="feature-item-title">{title}</h3>
      <p>{texte}</p>
    </div>
  );
}

export default ArticlePoint;