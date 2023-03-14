import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h2>About Me</h2>
                {/* Create bio in this div */}
                <p>Fill In Bio Here</p>
            </div>
            {/* Place image below */}
            <div></div>
        </div>
    </div>
  )
}

export default About