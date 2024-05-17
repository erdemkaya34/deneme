import logo from "./logo.png"
import "./App.css"

function App() {
  return (
    <div className='bg-green-400 w-1/3 flex h-full'>
    <div className='h-full flex justify-center items-center'>
          <div className="mt-20 ml-28">
            <div className=' p-24  flex border border-gray-300  shadow-2xl' >
              <div className='mr-66 mt-14 '><img src={logo} alt='asda' className='w-72 mr-96'  /></div>
              <div className='mt-20 '>
                <h1 className='text-center mr-12 text-3xl' >LOGIN</h1>
                <input type="text" placeholder='Username' class=" mt-5 border border-gray-300  shadow-lg px-8 py-2 focus:outline-none focus:border-blue-500 w-80"/><br></br>
                <input type="password" placeholder='Password' class= " mt-5 border border-gray-300  shadow-sm px-8 py-2 focus:outline-none focus:border-blue-500 w-80"/>
                <div>
                <button className=' bg-green-300 text-white mt-5 border border-gray-300  shadow-2xl px-4 py-2 focus:outline-none focus:border-blue-500 w-40'>LOGIN</button>
                <a href='^^#' className='mr-10 ml-12 text-xs ' >Forgot password  register</a>
              </div>              
              </div>
            </div>
        
          </div>        
    </div>
    </div>
  )
}

export default App