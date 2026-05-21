import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 z-0"></div>
        <div className="absolute top-[-20%] left-[-10%] w-125 h-125 rounded-full bg-purple-400/30 blur-3xl mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-100 h-100 rounded-full bg-indigo-400/30 blur-3xl mix-blend-multiply animate-pulse delay-700"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Welcome to the Future
            </span>
            <br /> of Blogging
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Discover engaging stories, insightful perspectives, and a community of passionate writers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="px-8 py-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Join the Community
            </Link>
            <Link to="/login" className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-100 dark:border-gray-700 font-semibold text-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1">
              Start Reading
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Write With Us?</h2>
          <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 text-2xl">
              ✍️
            </div>
            <h3 className="text-xl font-bold mb-3">Express Yourself</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Share your ideas with a global audience. Our editor makes writing a breeze, letting you focus on your thoughts.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 text-2xl">
              🌍
            </div>
            <h3 className="text-xl font-bold mb-3">Connect Globally</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Read articles from authors around the world. Engage in discussions and build meaningful connections.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-6 text-pink-600 dark:text-pink-400 text-2xl">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-3">Grow Your Audience</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With our built-in SEO tools and social sharing, getting your content discovered has never been easier.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;