import BlockContent from "@sanity/block-content-to-react";
import ImageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import NavBar from "../../components/Navbar";
import { useRouter } from "next/router";
import Slide from "react-reveal/Slide";
import styles from "../../styles/Allblogs.module.css";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
const AllBlogs = ({ blogs }) => {
  const router = useRouter();
  const [updatedBlogs, setUpdatedBlogs] = useState([]);

  useEffect(() => {
    if (blogs.length > 0) {
      const imageurl = ImageUrlBuilder({
        projectId: "vtwse9n7",
        dataset: "production",
      });
      setUpdatedBlogs(
        blogs.map((blog) => {
          return {
            ...blog,
            mainImage: imageurl.image(blog.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setUpdatedBlogs([]);
    }
  }, [blogs]);
  //console.log(updatedBlogs);
  return (
    <div>
      <div>
        <img className={styles.image_top} src="../2.jpg" atl="image"></img>
      </div>
      <div className={styles.main_container}>
        <div className={styles.container}>
          {updatedBlogs.length <= 0 ? (
            <h2>No Blogs to show</h2>
          ) : (
            updatedBlogs.map((blog, index) => (
              <Slide bottom key={index}>
                <div
                  className={styles.blogContainer}
                  key={index}
                  onClick={() => {
                    router.push(`/blogs/${blog.slug.current}`);
                  }}
                >
                  <img
                    src={blog.mainImage}
                    alt="image"
                    className={styles.blog_image}
                  />
                  <p className={styles.blog_title}>{blog.title}</p>
                  <div className={styles.blog_body}>
                    <BlockContent
                      blocks={blog.body}
                      dataset="production"
                      projectId="vtwse9n7"
                    />
                  </div>
                </div>
              </Slide>
            ))
          )}
        </div>
        <div className={styles.right}>
          <div>
            <form>
              <input
                className={styles.search}
                type="text"
                placeholder="Search"
              ></input>
              <button
                className={styles.search_button}
                onSubmit={(e) => console.log(e)}
              >
                <FaSearch />
              </button>
            </form>
          </div>

          <div className={styles.recent_posts_title}>
            <p>Recent Posts</p>
          </div>
          <div className={styles.recent_all_posts}>
            {updatedBlogs.map((blog, index) => {
              return (
                <div key={index} className={styles.recent_particular_posts}>
                  <Link href={`/blogs/${blog.slug.current}`}>
                    <a>{blog.title}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const query = encodeURIComponent(`*[ _type=="post"]`);
  const url = `https://vtwse9n7.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  if (result == null) {
    return {
      props: {
        blogs: [],
      },
    };
  } else {
    return {
      props: {
        blogs: result.result,
      },
    };
  }
};
export default AllBlogs;
