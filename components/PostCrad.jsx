

const PostCard=({data})=>{
    const {title,body}=data;

    return <div className="wrapper-post">
        <h2 className="post-title-card">{title}</h2>
        <p className="post-text">{body}</p>
        <p></p>
    </div>
}

export {PostCard}