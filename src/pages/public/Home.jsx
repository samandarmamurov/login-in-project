import React from 'react'
import Button from '../../components/Button'

function Home() {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Chap taraf - matn qismi */}
        <div>
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Create, Read, <span className="text-indigo-600">Inspire.</span>
          </h1>
          <p className="text-gray-500 text-lg mt-6 max-w-md">
            Discover stories written by amazing people. Share your knowledge and inspire others with your unique perspective.
          </p>
          <div className="flex gap-4 mt-8">
            <Button text="Explore Posts →" variant="primary" />
            <Button text="Get Started" variant="outline" />
          </div>
        </div>

        {/* O'ng taraf - hero rasm qismi */}
        <div
          className="bg-white rounded-3xl p-8"
          style={{ boxShadow: '0 30px 70px -20px rgba(79, 70, 229, 0.25)' }}
        >
          <img
            src="/public/big.png"
            alt="hero illustration"
            className="w-full rounded-2xl"
          />
        </div>

      </div>
    </div>
  )
}

export default Home