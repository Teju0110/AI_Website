import React from "react";
import Article from "../Components/Article";
import blog01 from "../Images/blog01.png";
import blog02 from "../Images/blog02.png";
import blog03 from "../Images/blog03.png";
import blog04 from "../Images/blog04.png";
import blog05 from "../Images/blog05.png";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog_heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="blog_container">
        <div className="blog_container1">
          <Article
            imageURL={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog_container2">
          <Article
            imageURL={blog02}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageURL={blog03}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageURL={blog04}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageURL={blog05}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
