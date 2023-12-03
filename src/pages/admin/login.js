import React from 'react'

const Login = () => {
  return (
    <div className="min-h-[80vh] grid place-items-center">
      {/* login */}
      <>
        <div className=''>
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 shadow-lg text-gray-800 min-w-[30vw]">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign in</h1>
              <p className="text-sm text-gray-600">
                Sign in to access your account
              </p>
            </div>
            <form novalidate="" action="" className="space-y-12">
              <div className="space-y-4">
                <div>
                  <label for="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="password" className="text-sm">
                      Password
                    </label>
                  
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="button"
                    className="w-full px-8 py-3 font-semibold rounded-md text-gray-50 bg-rose-800"
                  >
                    Sign in
                  </button>
                </div>
               
              </div>
            </form>
          </div>
        </div>
      </>

      {/* login */}
    </div>
  );
}

export default Login