import React from 'react'




function Form (){


  return (
    <div>
      <div className="flex items-center h-screen w-full bg-teal-lighter">
  <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
    <h1 className="block w-full text-center text-grey-darkest mb-6">Sign Up</h1>
    <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
      <div className="flex flex-col mb-4 md:w-1/2">
        <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" for="first_name">First Name</label>
        <input className="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="first_name" id="first_name"/>
      </div>
      <div className="flex flex-col mb-4 md:w-1/2">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2" for="last_name">Last Name</label>
        <input className="border py-2 px-3 text-grey-darkest md:ml-2" type="text" name="last_name" id="last_name"/>
      </div>
      <div className="flex flex-col mb-4 md:w-full">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Email</label>
        <input className="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email"/>
      </div>
      <div className="flex flex-col mb-6 md:w-full">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="password">Password</label>
        <input className="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password"/>
      </div>
      <button className="block bg-green-700 bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
    </form>
    <a className="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker" href="/login">Already have an account?</a>
  </div>
</div>
    </div>
  )
}
export default Form