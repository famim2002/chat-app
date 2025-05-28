import React from 'react'
import BackButton from '../common-components/BackButton'

const SignUpPage = () => {
  return (
    <section className="">
      <div className="container">
        <form className="h-dvh flex flex-col justify-center items-center gap-5">
      <div className='py-2 px-5'>
        <BackButton />
      </div>
          <div className="flex flex-col gap-10">
            <div className=" bg-secondColor p-5 rounded-[50px]">
              <h2 className="text-[80px] text-baseColor font-headerFont font-bold text-center underline">
                sign-up
              </h2>
              <p className="text-center text-3xl text-BrandColor font-regularFont">
                to <br />
                your account
              </p>
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
                <input type="email" placeholder="email" className="input-css" />
                <input
                  type="number"
                  placeholder="phone number"
                  className="input-css"
                />
                <input
                  type="password"
                  placeholder="password"
                  className="input-css"
                />
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input-css"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUpPage
