import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";
import Article from "./article"

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Article articleText="Truth is double edge sword. -Caleb Keli"/>
    </div>
  );
}


export default BlogPost;
