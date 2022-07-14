import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate = useNavigate()

  const handleLogin = () => navigate('/login')
  const handleRegister = () => navigate('/register')
  return (
    <section className='hero-section'>
      <div className='hero-navbar'>
        <h2>Slack Clone</h2>
        <button className='btn-round' onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className='flex-col'>
        <div className='hero-container'>
          <h1 className='title'>Imagine a place...</h1>
          <h3>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </h3>
        </div>
        <button className='btn-round-dark' onClick={handleRegister}>
          Explore the Community
        </button>
      </div>
      <div></div>
    </section>
  )
}

export default HeroSection
