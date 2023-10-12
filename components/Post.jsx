'use client';

const Post = ({ post }) => {
  const { title, body } = post;

  return (
    <div className="container-post">
      <h2 className="post-title">{title}</h2>
      <div className="container-post-body">
        <p className="post-body">{body}</p>
      </div>
    </div>
  );
};

export { Post };
