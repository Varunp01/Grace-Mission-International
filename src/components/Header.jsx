"use client"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          
          <Link to="/">
          <img src="\GSI_LOGO.png" alt="Logo" className="h-14 rounded-md" />
          </Link>
          {/* <span className="text-xl font-bold">Savoria</span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <HashLink smooth to="/#initiatives" className="text-sm font-medium hover:text-primary">
            Our Initiatives
          </HashLink>
          <HashLink smooth to="/#getInvolved" className="text-sm font-medium hover:text-primary">
            Get Involved
          </HashLink>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-full border border-input p-2 hover:bg-accent hover:text-accent-foreground"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <HashLink
                smooth
                to="/#initiatives"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                our Initiatives
              </HashLink>
              <HashLink
                smooth
                to="/#getInvolved"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Involved
              </HashLink>
              <button
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                        <Link to="/contact">
            Contact Us
        </Link>
              </button>
            </nav>
          </div>
        )}
          <button className="hidden md:inline-flex bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
        <Link to="/contact">
            Contact Us
        </Link>
          </button>
      </div>
    </header>
  )
}

export default Header
