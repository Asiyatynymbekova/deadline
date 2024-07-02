import { useState } from 'react'
 import bycicle from  '../src/assets/bycicle.svg'
 import background from '../src/assets/background.svg'
import ocean from '../src/assets/ocean.svg'


 function App() {
  const [click,setClick] = useState(false);
  function onHandleClick(){
    setClick(! click)
  }
  const [backdrop,setBackdrop] = useState(background);
  return(

<>
<div className='flex justify-center'>
  <div className='w-full justify-center'>
    <div className='h-full mt-10 flex ml-32 flex-col'>
      <h1 className='text-4xl font-bold'>Thematic <br/> Backgrounds</h1> 
      <h1 className='text-xl text-gray-500'>Whimsical handcrafted backdrops in different styles</h1>
    </div>
    <div className='w-full flex justify-center h-full' onClick={onHandleClick}>
      <img className='w-[60%] h-[80%] flex justify-center absolute' src={backdrop} />
      <img className=' justify-center absolute w-96 translate-y-20 flex' src={bycicle} />
    </div>
  </div>
</div>
{click ? <div className='bg-white shadow-lg flex rounded-lg flex-col  fixed gap-3 p-5 right-32'>Backdrops
  <img onClick={() => setBackdrop(background)} className='w-full' src={background} />
  <img onClick={() => setBackdrop(ocean)} className='w-full' src={ocean} />
</div> : ""}
    </>
  )
 }
 export default App

 
