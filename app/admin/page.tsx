import Copyright from "@/components/Copyright";
import Image from "next/image";
import logo from "../../assets/logo-cropped.png";

const AdminPage = () => {
  return (
    <main className="pt-36 pb-20 min-h-screen px-1.5 md:px-10 lg:px-20 xl:px-40 flex justify-center items-center ">
      <div className="flex flex-col gap-7 bg-white p-5 md:py-10 xl:py-20 md:px-10 shadow-2xl rounded-lg items-center justify-center text-sm">
        {/* POLICE LOGO */}
        <Image
          className=" rounded-[1.25rem] "
          src={logo}
          alt="Police - Nigeria Police Force Logo@pngkey.com"
          width={100}
          height={100}
        />

        {/* LOGIN FORM */}
        <div className=" flex flex-col gap-6 pb-8 ">
          {/* INTRO */}
          <div className=" flex flex-col gap-4 ">
            <p className=" font-medium text-2xl ">Welcome Back 👋</p>
            <p className=" font-normal text-base ">
              See something - Say something. Your gateway to a safer community
              starts here.
            </p>
          </div>

          {/* FORM */}
          <form className=" flex flex-col gap-4 ">
            {/* EMAIL */}
            <div className=" flex flex-col gap-2 ">
              <label htmlFor="email" className=" text-sm font-normal ">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Example@email.com"
                className=" h-11 bg-[#F3F7FB] border border-[#D4D7E3] rounded-lg p-4 text-sm "
              />
            </div>

            {/* PASSWORD */}
            <div className=" flex flex-col gap-2 ">
              <label htmlFor="password" className=" text-sm font-normal ">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="**********"
                className=" h-11 bg-[#F3F7FB] border border-[#D4D7E3] rounded-lg p-4 text-sm "
              />
            </div>

            {/* FORGOT PASSWORD */}
            {/* <p className=" font-normal text-sm text-[#1E4AE9] text-right ">
              Forgot Password?
            </p> */}

            {/* SIGN IN */}
            <button
              type="submit"
              className="bg-[#162D3A] text-white py-4 rounded-xl "
            >
              Sign In
            </button>
          </form>

          {/* <p className=" text-base font-normal text-center ">
            Don&apos;t you have an account?{" "}
            <span className=" text-[#1E4AE9] ">Sign up</span>
          </p> */}
        </div>

        <Copyright />
      </div>
    </main>
  );
};

export default AdminPage;
