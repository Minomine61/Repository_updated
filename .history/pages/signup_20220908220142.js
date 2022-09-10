
import Link from "next/link"

export default function Login() {

    return (
     
      <div className="container font-inter h-screen  relative w-full  bg-gradient-to-r from-[#f5edff]  via-lime-100 to-[#bbdcfa]  " >

<div class="flex-grow border-t border-gray-300"></div>
  <div className=" box-content  w-72 bg-black  border-zinc-800  shadow-2xl  border-b-2 rounded-2xl  px-8 mx-auto mt-10  ">
  <div class="flex items-center  ">
<img src="/compsi.png"  />
<div>
  <p className="text-md  font-poppins tracking-tight  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#a220ff]  to-pink-500">Seogbtools.dev</p>
  
</div>
</div>
  <h1 className="text-white text-2xl mx-auto px-auto pl-5 pr-5 font-semibold pt-4">Create your Account
</h1>
<p className="text-gray-500 text-xs pl-10">You'll be up & running in 2 minutes


</p>
  <div class="h-10 w-fit bg-black "></div>
  
  <form>
  
    <div className="mb-2  ">
   
    
  <div className="   justify-center items-center relative w-full position-center ml-10 mr-10  ">
    <button type="submit" class="text-white mb-3 bg-gray-800 hover:bg-blue-800 focus:ring-2 font-inter focus:outline-none focus:ring-gray-300  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><div className="  box-content flex flex-wrap  items-center space-x-1"><img className="h-[15px] w-[20px] ml-3" src="/google.svg"/><p>Continue with Google</p> </div></button>
    <button type="submit" class="text-white bg-gray-800 hover:bg-blue-800 focus:ring-2 font-inter focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><div className="  box-content flex flex-wrap  items-center space-x-1"> <img className="h-[20px] w-[20px] ml-3" src="/fbs.svg"/><p>Continue with Facebook</p> </div></button>
  
    </div>
    <div className="flex  justify-center mb-10 space-x-4 " >
  </div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300 font-inter">Email</label>
      <input type="email" id="email" class="bg-gray-50 border font-medium border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-inter" placeholder="your Email" required="" />
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-700 font-inter">Password</label>
      <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-inter" required="" placeholder="Password" />
    </div>
    <div class="flex items-start mb-4">
      <div class="flex items-center h-5">
         <p className=" font-inter text-xs float-left text-gray-200  hover:bg-zinc-900 hover:text-gray-400 hover:cursor-pointer"><a> <u>Forgot Password</u></a></p>
      </div>
  
    </div>
    <button type="submit" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-2 font-inter focus:outline-none focus:ring-gray-200  font-medium rounded-md text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4">continue</button>
    <div class="flex-grow border-t border-gray-600"></div>

    <div className="flex flex-col-2 my-4 ">
  
   <p className="   font-inter text-sm font-semibold   text-gray-200 hover:underline hover:cursor-pointer hover:text-gray-400 "><Link href="/login"><a> Already Have an Account? Login in
  
  </a></Link></p>
    </div>
  </form>
  
  </div>
      
     </div>
    )
  }
  
  
  