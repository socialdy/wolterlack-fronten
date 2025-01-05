import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-light text-[#485959]">
            Foster Kitchens
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray hover:text-[#485959] transition-colors">
              Collections
            </Link>
            <Link to="/" className="text-gray hover:text-[#485959] transition-colors">
              About
            </Link>
            <Link to="/" className="text-gray hover:text-[#485959] transition-colors">
              Projects
            </Link>
            <Button className="bg-[#485959] hover:bg-[#384848] text-white">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};