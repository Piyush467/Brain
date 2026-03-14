import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // New state for mobile dropdown
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleTestimonialsClick = () => {
    closeMobileMenu();
    navigate("/", { state: { scrollTo: "test" } });
  };

  return (
    <div className="relative z-50 w-full flex justify-center pt-10 px-4">
      <nav className="relative w-full max-w-7xl bg-[#001224] text-white px-6 py-3 flex items-center justify-between shadow-xl border border-slate-800/50 rounded-full">
        {/* LOGO */}
        <Link to="/" onClick={closeMobileMenu}>
          <div className="flex items-center gap-3 pl-2">
            <img src="/logo.png" alt="Wendigo Advisors - Healthcare CIO Advisory Services by Brian Damiani" className="w-42 h-10 object-contain" />
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-[#FFFFFF6B] text-sm font-medium">
          <NavItemWithDropdown label="Services" />
          <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <button onClick={handleTestimonialsClick} className="hover:text-white transition-colors">
            Testimonials
          </button>
          <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
          <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
          <a href="https://yourhealthcarecio.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blogs</a>
        </div>

        {/* CTA + MOBILE HAMBURGER */}
        <div className="flex items-center gap-4">
          <a href="https://calendly.com/brian_damiani/working-session-30-min" target="_blank" rel="noreferrer">
            <button className="hidden sm:block bg-[#338CF0] text-white font-semibold py-3 px-8 rounded-full text-sm">
              Contact Us for Free
            </button>
          </a>

          {!isMobileMenuOpen && (
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-300 hover:text-white">
              <Menu size={28} />
            </button>
          )}
        </div>

        {/* FULL PAGE MOBILE MENU */}
        <div
          className={`
            fixed inset-0 w-full h-screen bg-[#001224] transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
            lg:hidden z-[100] flex flex-col p-6 overflow-y-auto
          `}
        >
          <div className="flex items-center justify-between w-full px-2">
            <img src="/logo.png" alt="Logo" className="w-42 h-10 object-contain" />
            <button onClick={closeMobileMenu} className="p-2 text-gray-300 hover:text-white">
              <X size={32} />
            </button>
          </div>

          {/* MOBILE MENU LINKS */}
          <div className="flex flex-col items-end gap-6 mt-12 pr-4">
            <Link to="/" onClick={closeMobileMenu} className="text-4xl font-medium hover:text-blue-400">Home</Link>

            {/* MOBILE SERVICES DROPDOWN */}
            <div className="flex flex-col items-end">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center gap-2 text-4xl font-medium hover:text-blue-400"
              >
                Services <ChevronDown size={28} className={`${isMobileServicesOpen ? "rotate-180" : ""} transition-transform`} />
              </button>

              {isMobileServicesOpen && (
                <div className="flex flex-col items-end gap-4 mt-4 pr-2 border-r-2 border-blue-500/30 mr-1">
                  <Link to="https://calendly.com/brian_damiani/working-session-30-min" onClick={closeMobileMenu} className="text-2xl text-gray-400 hover:text-white">Free Working Session</Link>
                  <Link to="/ITservices" onClick={closeMobileMenu} className="text-2xl text-gray-400 hover:text-white">IT Health Check Service</Link>
                  <Link to="/cio-operating" onClick={closeMobileMenu} className="text-2xl text-gray-400 hover:text-white">CIO Operating System</Link>
                  <Link to="/healthcare" onClick={closeMobileMenu} className="text-2xl text-gray-400 hover:text-white">CIO as a Service</Link>
                </div>
              )}
            </div>

            <Link to="/about" onClick={closeMobileMenu} className="text-4xl font-medium hover:text-blue-400">About Us</Link>
            <button onClick={handleTestimonialsClick} className="text-4xl font-medium hover:text-blue-400 text-right">Testimonials</button>
            <Link to="/pricing" onClick={closeMobileMenu} className="text-4xl font-medium hover:text-blue-400">Pricing</Link>
            <Link to="/resources" onClick={closeMobileMenu} className="text-4xl font-medium hover:text-blue-400">Resources</Link>
            <Link to="/insights" onClick={closeMobileMenu} className="text-4xl font-medium hover:text-blue-400">Insights</Link>
            <a href="https://yourhealthcarecio.com/blog" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer" className="text-4xl font-medium hover:text-blue-400">Blogs</a>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-auto flex flex-col items-center gap-8 pb-10">
            <a href="https://www.linkedin.com/company/wendigo-advisors/" target="_blank" rel="noopener noreferrer" className="p-3 border border-slate-600 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors bg-slate-900/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <p className="text-[14px] text-gray-500 uppercase tracking-[0.2em] font-light">
              © 2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Desktop Dropdown stays the same
function NavItemWithDropdown({ label }) {
  return (
    <div className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors py-2">
      <span>{label}</span>
      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#0F172A] border border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2 flex flex-col">
          <Link to="https://calendly.com/brian_damiani/working-session-30-min" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:bg-slate-800 text-sm">Free Working Session (New)</Link>
          <Link to="/ITservices" className="px-4 py-2 hover:bg-slate-800 text-sm">IT Health Check Services</Link>
          <Link to="/cio-operating" className="px-4 py-2 hover:bg-slate-800 text-sm">CIO Operating System</Link>
          <Link to="/healthcare" className="px-4 py-2 hover:bg-slate-800 text-sm">CIO as a Service</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;