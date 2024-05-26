import React from 'react';
import backgroundImage from '../assets/college.jpeg'; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">INTERNATIONAL CONFERENCE</h1>
        <h3 className="text-2xl font-semibold mb-6">On Communication Networks and Computing (ICCNC 2025)</h3>
        <p className="text-lg mb-4">Date: 08-09 Feb, 2025</p>
        <p className="text-lg mb-4">Location: Rajkiya Engineering College Sonbhadra, Uttar Pradesh, India - 231206</p>
        <p className="text-lg mb-8">Join us for an exciting event with leading experts in the field of electrical and electronics engineering.</p>
        <Link to="/registration" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
