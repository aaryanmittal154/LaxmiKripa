import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/logo.png" // Replace this with the path to your logo
                alt="LaxmiKripa Ispat Logo"
                width={48} // Adjust the width as needed
                height={48} // Adjust the height as needed
                priority
              />
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-gray-800 hidden sm:block">
              LaxmiKripa Ispat
            </h1>
          </div>

          <nav>
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products" legacyBehavior>
                  <a className="text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-lg text-gray-800 hover:text-blue-500 transition-colors duration-200">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
