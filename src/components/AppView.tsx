import Body from './Body'

export function AppView() {
  return (
    <div className='title'>
      <div className='sir'>
        <div className='sir-body'>
          <div 
            class='flex flex-col 2x:w-auto xl:w-auto lg:w-auto md:w-full xs:w-full h-auto 2xl:p-20 md:p-0 
                   rounded-[40px] items-center
                   justify-center drop-shadow-lg backdrop-blur-md mt-10'
          > 
            <div class=''> <Body /> </div>
          </div>
        </div>
      </div>
    </div>
  )
}
