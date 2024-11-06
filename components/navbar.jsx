import Link from "next/link";
import { usePathname } from "next/navigation";
import MainButton from "./utility/MainButton";

const Navbar = (props) => {
  const pathname = usePathname();

  if (pathname === "/") {
  }
  return (
    <nav className="flex items-center justify-between w-full my-6">
      <div className="flex items-center">
        <MainButton>Hotto</MainButton>
      </div>
    </nav>
  );
};

export default Navbar;
