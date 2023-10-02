import React from 'react'

const About = () => {
  return (
    <div>
      <div className="">
        <div className="flex justify-center items-center mt-10">
          <div
            className="rounded-lg shadow-xl bg-gray-900 text-white"
            style={{ width: "90vw", height: "80vh" }}
          >
            <div className="border-b border-gray-800 px-8 py-3">
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300" />
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
            </div>
            <div className="px-8 py-6">
              <p>
                <em className="text-blue-400">const</em>{" "}
                <span className="text-green-400">about</span>{" "}
                <span className="text-pink-500">=</span>{" "}
                <em className="text-blue-400">function</em>( ) {"{"}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;you_are_at:{" "}
                <span className="text-yellow-300">'SwarnaLehenga'</span>,
              </p>{" "}
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;description:{" "}
                <span className="text-yellow-300">
                  ' Swarna Lehenga - Step Into Elegance with Swarna Lehenga -
                  The Ultimate Destination for Luxurious Indian Fashion.'
                </span>
                ,
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;my_name:{" "}
                <span className="text-yellow-300">'Siddhartha Singh'</span>,
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
                <span className="text-yellow-300">
                  '
                  <a
                    href="https://inators.netlify.app"
                    target="_blank"
                    className="text-yellow-300 hover:underline focus:border-none"
                  >
                    https://inators.netlify.app
                  </a>
                  '
                </span>
                ,
              </p>
              <p>&nbsp;&nbsp;{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About