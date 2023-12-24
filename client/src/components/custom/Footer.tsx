import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" w-full h-full sm:h-auto bg-gray-800 text-white py-8 sm:flex sm:flex-col">
      <div className="container mx-auto flex lg:flex-wrap justify-between sm:flex-col">
        <div className="w-full sm:w-full lg:w-1/4 mb-4 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: harshawardhanmore14@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="w-full sm:w-full lg:w-1/4 mb-4 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-full lg:w-1/4 mb-4 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><Facebook /></a>
            <a href="#" className="text-white hover:text-gray-400"><Twitter /></a>
            <a href="#" className="text-white hover:text-gray-400"><Instagram /></a>
          </div>
        </div>
        <div className="w-full sm:w-full lg:w-1/4 mb-4 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p>Subscribe to our newsletter for updates on new products and promotions.</p>
          <div className="mt-4">
            <Input type="email" placeholder="Your Email" className="px-4 py-2 w-full" />
            <Button className=" bg-primary-color hover:bg-primary-color text-white px-4 py-2 mt-2">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p>&copy; 2023 Your Mobile Munch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
