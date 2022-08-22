import React from 'react';
import Profile from './profile.png'
import 'bootstrap/dist/css/bootstrap.min.css'
const Home = () =>{
   const btnHandler=()=>{
        alert('download the CV using link: xyz')
      }
    return(
        <section className='bg-dark text-light p-2 text-center text-sm-start'>
            <div className='container'>
                <div className='d-sm-flex align-items-center justify-content-between'>
                    <div>
                        <h1 className='head'>Hi I am <span className='text-primary'>Tayyab Sadiq</span></h1>
                    <p className='lead my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae aperiam expedita soluta quasi. Iure dolores impedit ea vero ullam quia non quam ratione excepturi? Voluptatem nesciunt expedita aut tempore!</p>
                    <button onclick={btnHandler} className="btn btn-primary btn-lg">Download my CV</button>
                    </div>
                        <img className='img-fluid w-40' src={Profile} alt="" />
             </div>
         </div>
         </section>
    )
}

export default Home;