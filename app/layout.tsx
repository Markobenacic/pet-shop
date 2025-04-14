import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PawPerfect Pet Shop",
  description: "Find your perfect pet companion and all the supplies they need",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  PawPerfect
                </Link>
                <div className="hidden md:flex space-x-8">
                  <Link href="/pets" className="text-gray-600 hover:text-blue-600 transition">
                    Pets
                  </Link>
                  <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">
                    Products
                  </Link>
                  <Link href="/cart" className="text-gray-600 hover:text-blue-600 transition">
                    Cart
                  </Link>
                </div>
                {/* Mobile menu button */}
                <button className="md:hidden p-2">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">PawPerfect Pet Shop</h3>
                  <p>Your one-stop shop for all pet needs</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="hover:text-blue-400 transition">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-blue-400 transition">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="hover:text-blue-400 transition">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                  <p>Email: info@pawperfect.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                <p>&copy; 2024 PawPerfect Pet Shop. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
