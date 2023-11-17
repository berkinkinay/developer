import Body from './Body'

const AppView = () => {
  return (
    <div className='title'>
      <div 
        className='flex 2xl:pl-64 2xl:pr-64 pt-10 lg:p-0 flex-col xs:w-full p-0
                   bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-fuchsia-600 
                  via-gray-800 to-violet-100 2xl:h-auto lg:h-auto w-full items-center justify-center'
      >
        <div 
          className='flex flex-col 2xl:h-full md:h-auto xs:w-full 2xl:w-[1350px] lg:w-[1100px] md:w-full sm:w-auto 2xl:m-20 
                     lg:m-5 rounded-[40px] items-center bg-black'
        >
         
            <Body />
        </div>
      </div>
    </div>
  )
}
export default AppView;
