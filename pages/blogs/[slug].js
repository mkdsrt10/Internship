import BlockContent from "@sanity/block-content-to-react";
import ImageUrlBuilder from "@sanity/image-url";
import {useState,useEffect} from "react"
import styles from "../../styles/blogs.module.css"; 
const Blog = ({title,body,image}) => {
    const [Imageurl,setImageurl]=useState('');
    useEffect(()=>{
        const ImageBuilder= ImageUrlBuilder({
            projectId :"vtwse9n7",
            dataset: "production",
        });
        setImageurl(ImageBuilder.image(image).width(500).height(250))

    },[image]);
    return (
      <div className={styles.container}>
          
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.image} src={Imageurl} alt="logo" />
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: "max" }}
          className={styles.body}
          projectId="vtwse9n7"
          dataset="production"
        />
        {console.log(body)}
      </div>
    );
}


export const getServerSideProps= async (pageContext)=>{
    const slug=pageContext.query.slug;
    console.log(slug);
    if(!slug)
    {
        return {
            notFound : true
        }
    }
    const query=encodeURIComponent(`*[_type =="post" && slug.current== "${slug}"]`);
    const url=`https://vtwse9n7.api.sanity.io/v1/data/query/production?query=${query}`;
    const result=await fetch(url).then(res=>res.json());
    const data=result.result[0];
    if(data==null)
    {
        return {
            notFound:true,
        }
    }
    return {
        props:{
            body:data.body,
            image:data.mainImage,
            title:data.title,
        }
    }
}
export default Blog;