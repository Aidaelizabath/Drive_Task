import React from 'react';
import youtube_icon from '../../assets/cards/youtube.webp';
import twitter_icon from '../../assets/cards/twitter.webp';
import instagram_icon from '../../assets/cards/insta.webp';
import facebook_icon from '../../assets/cards/facebook_logos.png';

const Footer = () => {
  return (
    <div className="px-[4%] py-8 max-w-[1000px] mx-auto">

      {/* Social Icons */}
      <div className="flex gap-5 my-10">
        <img src={youtube_icon} alt="YouTube" className="w-7 cursor-pointer md:w-[30px]" />
        <img src={twitter_icon} alt="Twitter" className="w-7 cursor-pointer md:w-[30px]" />
        <img src={instagram_icon} alt="Instagram" className="w-7 cursor-pointer md:w-[30px]" />
        <img src={facebook_icon} alt="Facebook" className="w-7 cursor-pointer md:w-[30px]" />
      </div>

      {/* Links */}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8 text-sm md:text-base list-none">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      {/* Copyright */}
      <p className="text-gray-500 text-sm">
        © 1997–2025 Netflix, Inc.
      </p>

    </div>
  );
};

export default Footer;

