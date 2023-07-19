import React from 'react'
import Link from 'next/link';
const Categories = () => {
  return (
    <div>
      <section className="text-gray-600 body-font  mb-14">
        <div className=" px-5 py-5 mx-auto">
          <div className="flex flex-wrap justify-center m-4 gap-10 gap-x-20">
            <Link href="/lehenga" className="card w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Lehenga</h2>
                <p>Step Into The Elegance</p>
              </div>
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?lehenga"
                  alt="Shoes"
                />
              </figure>
            </Link>
            <Link href="/saree" className="card w-96  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Saree</h2>
                <p>Step Into The Elegance</p>
              </div>
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt="Shoes"
                />
              </figure>
            </Link>
            <Link href="/kurti" className="card w-96  shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Kurti</h2>
                <p>Step Into The Elegance</p>
              </div>
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?kurti,girl"
                  alt="Shoes"
                />
              </figure>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories