import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";
import NoPostFound from "../../UI/NoPostFound";

const PostList = ({ posts }) => {
  const [tPosts, setTPosts] = useState([]);
  useEffect(() => {
    let transformedPosts = [];
    for (let key in posts) {
      transformedPosts.push({
        id: key,
        title: posts[key].title,
        description: posts[key].description,
      });
      setTPosts(transformedPosts);
    }
  }, [posts]);
  return (
    <div>
      {tPosts.length > 0 ? (
        tPosts.map(({ id, title, description }) => (
          <PostItem title={title} description={description} key={id} id={id} />
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
