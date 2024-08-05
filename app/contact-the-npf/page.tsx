import Image from "next/image";
import logo from "../../assets/logo-cropped.png";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="pt-36 pb-20 min-h-screen px-1.5 md:px-10 lg:px-20 xl:px-40 flex justify-center items-center">
      <div className="bg-white md:w-[55vw] lg:w-[45vw] xl:w-[31rem] p-5 md:py-10 xl:py-20 md:px-10 shadow-2xl rounded-lg flex items-center justify-center text-sm">
        <Image src={logo} alt="NPF logo" width={120} height={120} />
        <div className="space-y-2">
          <p className="text-center text-xl font-extrabold">
            Contact the Police
          </p>
          <div>
            <label htmlFor="Email:" className="text-base font-bold">
              Email Address
            </label>
            <Link href={"mailto:pressforabuja@police.gov.ng"}>
              <p className="underline font-medium">pressforabuja@police.gov.ng</p>
            </Link>
          </div>

          <div>
            <label htmlFor="Email:" className="text-base font-bold">
              Phone Number
            </label>
            <div className="flex gap-2">
              <Link href={"tel:+2347055462708"}>
                <p className="underline font-medium">07055462708</p>
              </Link>
              <Link href={"tel:+2347055462708"}>
                <p className="underline font-medium">07055462708</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
