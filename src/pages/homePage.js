import React, { Fragment } from "react";
import "../styles/main.css";
import HomePageData from "../datas/homePageContent.json";
import Banner from "../components/Banner";
import ArticlePoint from "../components/ArticlePoint";

function HomePage() {
  return (
    <>
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {HomePageData.map((item) => (
            <ArticlePoint
              key={item.id}
              picture={item.picture}
              pictureAlt={item.pictureAlt}
              title={item.title}
              texte={item.texte}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default HomePage;
