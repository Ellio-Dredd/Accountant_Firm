import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex flex-row gap-2">
        <Image
        src={`/${getImagePrefix()}images/logo/logo2.png`}
        alt="accountnest-logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "50px", height: "40px" ,marginTop: "2px"}}
      />
       <div className="flex flex-col m-0 ml-2 text-gray-500 font-semibold">
         <h1>Probity</h1>
          <h1>Accountants</h1>
       </div>
      </div>
    </Link>
  );
};

export default Logo;
