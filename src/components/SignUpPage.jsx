import React from 'react'

const SignUpPage = () => {
  return (
    <section className="">
      <div className="container">
        <div className="signUp-css">
          <div className="signUp-item-css">
            <form className="h-dvh flex flex-col justify-center items-center gap-5">
              <div className="bg-secondColor p-10">
                <h2 className='text-[80px] text-baseColor font-headerFont font-bold underline'>sign-up</h2>
                <p className='text-center text-3xl text-BrandColor font-regularFont'>to <br />your account</p>
              </div>
              <div className="flex flex-col gap-8 bg-secondColor py-10 px-6 rounded-4xl">
                <div className="flex gap-3 ">
                  <input
                    type="text"
                    placeholder="first name"
                    className="input-css"
                  />
                  <input
                    type="text"
                    placeholder="last name"
                    className="input-css"
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <input
                    type="text"
                    placeholder="email"
                    className="input-css"
                  />
                  <input
                    type="text"
                    placeholder="phone number"
                    className="input-css"
                  />
                  <input
                    type="text"
                    placeholder="password"
                    className="input-css"
                  />
                  <input
                    type="text"
                    placeholder="confirm password"
                    className="input-css"
                  />
                
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage
