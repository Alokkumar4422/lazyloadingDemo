import React from "react";
import data from "./data";
import LazyLoad from "react-lazyload";
import Post from './post'
import {Spinner} from './animation'

const App = () => (
  <div className="App">
    <h2>React lazy loading expamle</h2>
    <div className="post-container">
      {data.map(post => {
        // console.log("post",post)
        return (
          <LazyLoad
            key={post.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Spinner />}
          >
            <Post key={post.id} {...post} />
          </LazyLoad>
        )})}
    </div>
  </div>
);

export default App;
