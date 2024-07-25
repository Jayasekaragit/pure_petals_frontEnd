import React from 'react';

export default function Footer() {
  return (
    <div className="bg-custom-darkBlue text-black  text-center">
      <p>© 2024 Pure Petals. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/privacy" className="hover:text-black">Privacy Policy</a>
        <a href="/terms" className="hover:text-black">Terms of Service</a>
        <a href="/contact" className="hover:text-black">Contact Us</a>
      </div>
    </div>
  );
}
