import Body from './Body'

export function AppView() {

  return (
    <div className='title'>
      <div className='sir'>
        <div className='sir-body'>
          <div 
            class='flex flex-col 2x:w-auto md:w-full sm:w-full h-auto 2xl:p-20 md:p-0 
                   rounded-[40px] border border-slate-800 items-center
                   justify-center drop-shadow-lg backdrop-blur-md'
          > 
            <div class=''> <Body /> </div>
          </div>
        </div>
      </div>
    </div>
  )
}