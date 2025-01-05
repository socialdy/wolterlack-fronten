import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#485959] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-light mb-6">Foster Kitchens</h3>
            <p className="text-gray-300">
              Crafting exceptional kitchen spaces since 1990.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>123 Design Street</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>info@fosterkitchens.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Hours</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Mon - Fri: 9:00 - 18:00</li>
              <li>Saturday: 10:00 - 17:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-300">
          <p>&copy; 2024 Foster Kitchens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};