import { useState } from "react";
import styles from "../../styles/Foryou.module.css";
const For_you = () => {
  const [articles, setArticle] = useState(["", "", "", "", ""]);
  const [blogs, setBlogs] = useState(["", "", "", "", ""]);
  const [type, setType] = useState("articles");
  return (
    <div className={styles.main_container}>
      <span>For you</span>
      <div className={styles.title}>
        <div
          onClick={(e) => {
            setType("articles");
          }}
          className={
            type == "articles"
              ? styles.title_articles_active
              : ""
          }
        >
          Article
        </div>
        <div
          className={
            type == "blogs"
              ? styles.title_blogs_active
              : ""
          }
          onClick={(e) => {
            setType("blogs");
          }}
        >
          Blogs
        </div>
      </div>
      <div className={styles.content}>
        {type == "articles"
          ? articles.map((article) => {
              return (
                <div className={styles.content_grid}>
                  <img src="/girl_mobile.png"></img>
                  <div> Vipin jaluthria</div>
                </div>
              );
            })
          : blogs.map((blog) => {
              return (
                <div className={styles.content_grid}>
                  <img src="/girl_mobile.png"></img>
                  <div> Gungun jaluthria</div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default For_you;
