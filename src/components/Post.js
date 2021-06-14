import React from "react";

const Post = ({ article }) => {
  console.log(article);

  const {
    coverImage,
    content,
    blogImage,
    mainContent,
    bottomImage,
    conclusion,
  } = article.fields;

  return (
    <div className="post">
      {coverImage && (
        <img
          className="featuredImage"
          src={coverImage.fields.file.url}
          alt="bogger"
        />
      )}

      <h2>{content.content[0].content[0].value}</h2>
      <p>{content.content[1].content[0].value}</p>
      <p>{content.content[2].content[0].value}</p>
      {blogImage && (
        <img
          className="featuredImage2"
          src={blogImage.fields.file.url}
          alt="bogger2"
        />
      )}
      <br />
      <h2>{mainContent.content[0].content[0].value}</h2>
      <p>{mainContent.content[1].content[0].value}</p>
      <p>{mainContent.content[2].content[0].value}</p>
      {bottomImage && (
        <img
          className="featuredImage2"
          src={bottomImage.fields.file.url}
          alt="bogger2"
        />
      )}
      <br />
      <h2>{conclusion.content[0].content[0].value}</h2>
      <p>{conclusion.content[1].content[0].value}</p>
    </div>
  );
};

export default Post;
