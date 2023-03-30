import React from 'react'
import Link from "next/link";


const NewsCard = ({blogitem}) => {
  return (
    <div>
      <div
        class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg max-w-lg mx-auto"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        key={blogitem.slug}
      >
        <img
          src={blogitem.img}
          class="sm:h-96 w-max blur-[2px]"
          alt="image"
         
        />
        <Link href={`/blogpost/${blogitem.slug}`}>
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div class="flex justify-start items-end h-full">
              <div class="text-white m-6">
                <h5 class="font-bold text-lg mb-3">{blogitem.title}</h5>
                <p>
                  <small>{blogitem.content.substr(0, 140)}...</small>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard