import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 px-4 border-t border-blue-900">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <p className="text-sm">
          Illustrations by{" "}
          <a
            href="https://storyset.com/communication"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            Storyset
          </a>
        </p>

        <p className="text-blue-300 text-sm">
          © 2025 Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
