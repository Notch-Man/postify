import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";
import NoPostFound from "../UI/NoPostFound";

const PostList = ({ posts }) => {
  const [tPosts, setTPosts] = useState([]);
  useEffect(() => {
    let transformedPosts = [];
    for (let key in posts) {
      transformedPosts.push({
        id: key,
        title: posts[key].title,
        description: posts[key].description,
        author: posts[key].author,
        uid: posts[key].uid,
      });
      setTPosts(transformedPosts);
    }
  }, [posts]);
  return (
    <div>
      {tPosts.length > 0 ? (
        tPosts.map(({ id, title, description, uid, author }) => (
          <PostItem
            title={title}
            description={description}
            id={id}
            uid={uid}
            author={author}
            key={id}
          />
        ))
      ) : (
        <NoPostFound />
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.object,
};

export default PostList;
