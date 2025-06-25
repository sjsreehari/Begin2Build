import React from "react";

const Footer = () => {
  return (
    <footer className="bg-charcoal/50 border-t border-cream/10 py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/favicon-images/f5b460f3-d124-41b5-879e-66d13b173a25.png" 
            alt="Begin2Build Logo" 
            className="h-8 w-auto opacity-80"
          />
          <p className="text-cream/80 text-sm">
            © 2024 Begin2Build. Empowering students to build their coding confidence.
          </p>
          <p className="text-cream/60 text-xs">
            Start small. Build big. Code with confidence.
          </p>
          <p className="text-cream/70 text-sm font-semibold">
            Built by{" "}
            <a 
              href="https://www.linkedin.com/in/deva-nandan-m-r-81b76b33a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-cream transition"
            >
              Deva Nandan
            </a>{" "}
            &{" "}
            <a 
              href="https://www.linkedin.com/in/sreeharisj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-cream transition"
            >
              Sreehari
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


