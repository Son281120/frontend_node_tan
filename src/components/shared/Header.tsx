import { Button } from "../ui/button";
import { Search, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center min-h-16 ">
      <div className="flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex justify-center items-center">
            <li className="py-2 px-4 text-xl font-bold text-primary">Dell</li>
            <li className="py-2 px-4 text-xl font-bold text-primary">Asus</li>
            <li className="py-2 px-4 text-xl font-bold text-primary">Msi</li>
            <li className="py-2 px-4 text-xl font-bold text-primary">
              MacBook
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center min-w-20 py-1 px-2 border-2 hover:border-accent rounded-xl">
        <Search className="text-primary/50" />
        <input
          type="text"
          placeholder="Search ..."
          className="ml-2 focus-visible:outline-none block w-[200px]"
        />
      </div>
      <Button className="rounded-xl bg-tr text-primary hover:bg-pink-500 hover:text-primary-foreground transition-all">
        <Link href={"/cart"}>
          <ShoppingBag />
        </Link>
      </Button>
    </header>
  );
};

export default Header;
