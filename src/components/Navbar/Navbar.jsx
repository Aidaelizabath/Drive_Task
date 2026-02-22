import React, { useEffect, useRef } from 'react';
import logo from '../../assets/cards/logo1.png';
import search from '../../assets/cards/search2.png';
import bell from '../../assets/cards/bell2.png';
import profile from '../../assets/cards/profile1.png';
import caret from '../../assets/cards/caret.png';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current?.classList.add('bg-[#141414]');
      } else {
        navRef.current?.classList.remove('bg-[#141414]');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full px-[6%] py-5 flex justify-between items-center fixed top-0 text-sm text-beige bg-gradient-to-b from-black/70 to-transparent z-50 transition-all duration-300"
    >
      {/* Left Section */}
      <div className="flex items-center gap-12">
        <img src={logo} alt="Netflix Logo" className="w-[90px]" />

        <ul className="hidden md:flex gap-5 list-none cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <img src={search} alt="Search" className="w-6 cursor-pointer" />

        <p className="hidden sm:block">Children</p>

        <img src={bell} alt="Notifications" className="w-6 cursor-pointer" />

        {/* Profile Dropdown */}
        <div className="relative flex items-center gap-1 group cursor-pointer">
          <img src={profile} alt="Profile" className="w-6" />
          <img src={caret} alt="Dropdown" className="w-4" />

          <div className="absolute top-full right-0 bg-[#191919] px-5 py-4 rounded hidden group-hover:block">
            <p
              onClick={() => logout()}
              className="text-sm underline cursor-pointer"
            >
              Sign Out Of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;