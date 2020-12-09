// src/components/PostsFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { fetchNextPosts } from "../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postsLoading } from "../store/posts/selectors";

export default function PostsFeed() {
  const posts = useSelector(getPosts);
  const loading = useSelector(postsLoading);
  const dispatch = useDispatch();

  async function fetchNext2Posts() {
    dispatch(fetchNextPosts());
  }

  useEffect(() => {
    fetchNext2Posts();
  }, []);

  return (
    <div className='PostsFeed'>
      <h2>Recent posts</h2>

      {posts.map(post => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p className='meta'>
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              {/* {post.post_likes.length} likes &bull;{" "} */}
              <span className='tags'>
                {post.tags.map(tag => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span className='Tag'>{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>
        );
      })}
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={fetchNext2Posts}>Load more</button>
        )}
      </p>
    </div>
  );
}
