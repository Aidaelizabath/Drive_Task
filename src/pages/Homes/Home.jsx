import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const [hoveredTrailer, setHoveredTrailer] = useState(null)

  return (
    <div className="relative">

      {/* 🔥 Background Trailer */}
      {hoveredTrailer && (
        <iframe
          className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
          src={`https://www.youtube.com/embed/${hoveredTrailer}?autoplay=1&mute=1&controls=0&loop=1&playlist=${hoveredTrailer}`}
          title="Movie Trailer"
          allow="autoplay"
        />
      )}

      {/* 🔥 Dark Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-black via-black/60 to-transparent -z-10"></div>

      <Navbar />

      {/* Movie Sections */}
      <div className="pl-[6%] md:pl-[4%] relative z-10">
        <Titlecards setHoveredTrailer={setHoveredTrailer} />
        <Titlecards title="Blockbuster Movies" category="top_rated" setHoveredTrailer={setHoveredTrailer} />
        <Titlecards title="Only on Netflix" category="popular" setHoveredTrailer={setHoveredTrailer} />
        <Titlecards title="Upcoming" category="upcoming" setHoveredTrailer={setHoveredTrailer} />
        <Titlecards title="Top picks for you" category="now_playing" setHoveredTrailer={setHoveredTrailer} />
      </div>

      <Footer />
    </div>
  )
}

export default Home