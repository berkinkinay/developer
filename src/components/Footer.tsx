const Footer = () => {
  return (
    <div class='flex flex-col items-center justify-center w-auto h-auto gap-10'>
      <div class='grid grid-cols-3 lg:grid lg: grid-rows place-items-center w-full h-fit font-extrabold text-xl text-white'>
        <a 
          className='hello'
          href='https://www.linkedin.com/in/berkin-k%C4%B1nay-04a137228/'
          target='blank'
        >
          linkedin
        </a>
        <button
          className='hello'  onClick={() => {
            window.location.href = 'mailto:helloberkin@gmail.com';
          }}
        >
          hello@berkin.dev
        </button>
        <a className='hello'
           target='blank' 
           href='https://github.com/berkinkinay'
          >
            github
        </a>
      </div>
      <div class='text-sm text-pink-200'>
        Copyright © 2023 Berkin Kınay. All Rights Reserved.
      </div>
    </div>

  )
}

export default Footer