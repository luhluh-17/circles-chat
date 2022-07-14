import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate = useNavigate()

  const handleLogin = () => navigate('/login')
  const handleRegister = () => navigate('/register')
  return (
    <section className='hero-section'>
      <div className='hero-navbar'>
        <h2>Logo</h2>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className='hero-container'>
        <h1>Imagine a place...</h1>
        <h3>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </h3>
        <button onClick={handleRegister}>Register</button>
      </div>
      <div></div>
    </section>
  )
}

export default HeroSection
