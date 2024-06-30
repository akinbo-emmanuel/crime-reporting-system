import Copyright from "@/components/Copyright"

const AdminPage = () => {
  return (
    <main className=" flex flex-col p-6 gap-7 ">
      {/* POLICE LOGO */}
      <img className=" rounded-[1.25rem] " src="https://www.pngkey.com/png/detail/34-345238_police-nigeria-police-force-logo.png" alt="Police - Nigeria Police Force Logo@pngkey.com"></img>

      {/* LOGIN FORM */}
      <div className=" flex flex-col gap-6 pb-8 ">
        {/* INTRO */}
        <div className=" flex flex-col gap-4 ">
          <p className=" font-medium text-2xl ">Welcome Back  👋</p>
          <p className=" font-normal text-base ">See something - Say something. Your gateway to a safer community starts here.</p>
        </div>

        {/* FORM */}
        <form className=" flex flex-col gap-4 ">
          {/* EMAIL */}
          <div className=" flex flex-col gap-2 ">
            <label htmlFor="email" className=" text-sm font-normal ">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Example@email.com"
              className=" h-11 bg-[#F3F7FB] border border-[#D4D7E3] rounded-lg p-4 text-sm " 
            />
          </div>

          {/* PASSWORD */}
          <div className=" flex flex-col gap-2 ">
            <label htmlFor="password" className=" text-sm font-normal ">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="**********"
              className=" h-11 bg-[#F3F7FB] border border-[#D4D7E3] rounded-lg p-4 text-sm " 
            />
          </div>

          {/* FORGOT PASSWORD */}
          <p className=" font-normal text-sm text-[#1E4AE9] text-right ">Forgot Password?</p>

          {/* SIGN IN */}
          <button type="submit" className="bg-[#162D3A] text-white py-4 rounded-xl ">Sign In</button>
        </form>

        {/* SPECIAL LOGIN */}
        <div className=" flex flex-col gap-4 ">
          <div className=" flex items-center justify-center gap-4 mt-2 py-3 ">
            <hr className=" w-20 sm:w-52 md:w-64 lg:w-80 " />
            <p className=" text-sm font-normal ">Or sign in with</p>
            <hr className=" w-20 sm:w-52 md:w-64 lg:w-80 " />
          </div>

          {/* SOCIAL BUTTONS */}
          <div className=" flex sm:flex-col gap-4 sm:items-center justify-between ">
            {/* GOOGLE */}
            <button className=" flex gap-4 sm:w-full sm:justify-center px-[2.22rem] sm:px-0 py-3 rounded-xl bg-[#F3F9FA] items-center ">
              {/* <Google className="text-2xl" /> */}
              <p className=" sm:hidden text-base font-normal ">Google</p>
              <p className=" hidden sm:block text-base font-normal ">Sign in with Google</p>
            </button>

            {/* FACEBOOK */}
            <button className=" flex gap-4 sm:w-full sm:justify-center px-[1.63rem] sm:px-0 py-3 rounded-xl bg-[#F3F9FA] items-center ">
              {/* <FaFacebook className="text-2xl text-[#1877A2]" /> */}
              <p className=" sm:hidden text-base font-normal ">Facebook</p>
              <p className=" hidden sm:block text-base font-normal ">Sign in with Facebook</p>
            </button>
          </div>
        </div>

        <p className=" text-base font-normal text-center ">Don&apos;t you have an account? <span className=" text-[#1E4AE9] ">Sign up</span></p>
      </div>

      <Copyright />
    </main>
  )
}

export default AdminPage