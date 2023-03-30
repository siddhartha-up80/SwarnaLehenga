import React from "react";
import NewsCard from "./NewsCard";


const News = ({blogs}) => {
  return (
    <div className="flex items-center h-screen flex-row flex-wrap justify-center m-20 gap-10">
      {blogs.map((blogitem) => {
        return (
          <div className="" key={blogitem.slug}>
            <NewsCard blogitem={blogitem}></NewsCard>
          </div>
        );
      })}
     
    </div>
  );
};

export default News;
