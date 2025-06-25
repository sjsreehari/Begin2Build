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
              alt="B2B Logo" 
              className="h-10 w-auto"
            />
            <button type="button" className="text-xl font-semibold text-cream nav-link p-2" style={{background: 'none', border: 'none', cursor: 'pointer'}}>
              B2B
            </button>
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`nav-link${location.pathname === '/' ? ' nav-link-active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/submit" 
              className={`nav-link${location.pathname === '/submit' ? ' nav-link-active' : ''}`}
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
