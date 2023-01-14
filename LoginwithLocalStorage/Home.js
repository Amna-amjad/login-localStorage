import React from 'react'

const Home = () => {
  
    const handleClick =()=>{
        localStorage.clear();
        window.location.reload();
    }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>LogOut</button>
    </div>
  )
}

export default Home
