
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-charcoal/80 backdrop-blur-sm sticky top-0 z-50 border-b border-cream/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <img 
              src="/lovable-uploads/f5b460f3-d124-41b5-879e-66d13b173a25.png" 
              alt="Begin2Build Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-semibold text-cream">Begin2Build</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`text-cream hover:text-cream-dark transition-colors duration-300 ${
                location.pathname === '/' ? 'border-b-2 border-cream' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/submit" 
              className={`text-cream hover:text-cream-dark transition-colors duration-300 ${
                location.pathname === '/submit' ? 'border-b-2 border-cream' : ''
              }`}
            >
              Submit Project
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
