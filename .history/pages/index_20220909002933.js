export default function Home() {
  return (
    < div class="container font-inter h-screen  relative w-full  bg-gradient-to-r from-[#f5edff]  via-lime-100 to-[#bbdcfa]  ">
  
    <div class="h-1 w-fit bg-black "></div>
                  {/* Navbar Start from here */}


          <div>
          <nav className="  box-content   bg-black  border-zinc-800  shadow-2xl shadow-gra border-b-2 rounded-t-2xl flex flex-wrap  items-center justify-between ml-10 mr-10 mt-8  ">
          
          
          <div class="flex items-center  ml-4 space-x-1">
          <img src="/compsi.png"  className=" h-5 s-5"/>
<div>
<p className="text-lg  font-poppins tracking-tighter  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#a220ff]  to-pink-500">Seogbtools.dev</p>
  
</div>
</div>
      <div class=" xl:w-96 font-inter"> 
      <input
    type="search"
    class="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-zinc-900  bg-clip-padding
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none focus:border-2
    "
    id="exampleSearch"
    placeholder="Search..."
  />
      </div> 
          
<div className="ml- brightness-95 mt-3">

          
<button type="button" class="text-gray-900   ring-slate-100  border-1 bg-white  focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-500 mr-2 mb-2 ml-5 font-inter ">
Message
</button>

</div>
    
         
          </nav>
              </div>
              
               {/* Navbar end from here */}

        
    {/* Sidebar Begins  */}



              <section class="flex h-[38.5vw]   shadow-md shadow-neutral-600 ml-10 mr-10  rounded-b-lg bg-black	   overflow-y-auto " > 
  <div class=" flex flex-col w-[17vw] bg-black  h-full shadow-xl  bg-opacity-100    border-r-2 border-zinc-900	" arial-label="Sidebar">

             
 <div class="flex items-center space-x-4">
  <img class="w-12 h-15 ml-4  mt-3 rounded-full border-2 border-blue-600" src="/profile.jpg" alt="" />
  <div class="mt-3 font-xl dark:text-white text-md  font-semibold font-inter	">
      <div>Jese Leos</div>
     <div className="text-left text-ellipsis font-inter"></div>

  </div>
</div>
                   <div class="flex flex-col justify-between mt-6 divide-x-2">

                   <aside>
          <ul>
            <li>
              <a class=" flex items-center px-4 py-2 text-gray-400 rounded- hover:bg-zinc-900  bg-zinc-900		    hover:text-gray-100 active:bg-zinc-900   " href="#">
              <img
      src="/com.png" className="h-6 w-6 ml-3"
    
      alt=""
    />
    
              <span class="ml-2  text-sm font-inter  font-medium">Dashboard</span>
        
              </a>
            </li>

            <li>
              <a class=" flex items-center px-4 py-2  text-gray-400 rounded-md hover:bg-zinc-800      hover:text-gray-100 active:bg-slate-800  " href="#">
              <img
      src="/rocket.png" className="h-6 w-6 ml-3"
    
      alt=""
    />
                <span class="ml-2  text-sm font-inter  font-md">Starter Pack</span>
              </a>
            </li>
            <li>
              <a class="flex items-center px-4 py-2  text-gray-400 rounded-md hover:bg-zinc-800 bg-neutral-900	      hover:text-gray-100 active:bg-slate-800  " href="#">
              <img
      src="/ecom.png" className="h-6 w-6 ml-3"
    
      alt=""
    />
               
           
                <span class="ml-2  text-sm font-inter  font-md"> Ecom pack</span>
              </a>
            </li>
            
            <li>
              <a class="flex items-center px-4 py-2  text-gray-400 rounded-md hover:bg-zinc-800 bg-neutral-900	      hover:text-gray-100 active:bg-slate-800  " href="#">
              <img
      src="/pro.png" className="h-6 w-6 ml-3"
    
      alt=""
    />
               
           
                <span class="ml-2  text-sm font-inter  font-md"> Pro Pack</span>
              </a>
            </li>
            <li>
              <a class="flex items-center px-4 py-2  text-gray-400 rounded-md hover:bg-zinc-800 bg-neutral-900	      hover:text-gray-100 active:bg-slate-800  " href="#">
              <img
      src="/setting.png" className="h-6 w-6 ml-3"
    
      alt=""
    />
               
           
                <span class="ml-2  text-sm font-inter  font-md"> Settings</span>
              </a>
            </li>
            <li>
              <a class="flex items-center px-4 py-2  text-gray-400 rounded-md hover:bg-zinc-800 bg-neutral-900	      hover:text-gray-100 active:bg-slate-800  " href="#">
              <img
      src="/Key.png" className="h-6 w-6 ml-3"
    
      alt=""
    />
               
           
                <span class="ml-2  text-sm font-inter  font-md"> Logout</span>
              </a>
            </li>  
          </ul>
              
        </aside>
   
                
</div>  

    
<p class="mr-4 ml-4 text-xs text-gray-400  px-5 py-10 font-inter bg-blend-lighten md:bg-blend-darken border-2 border-zinc-800 rounded-lg m-auto mt-10 leading-4">
<span class="bg-[#7c3aed]  text-gray-100  mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 font-inter text-base mb-4">BETA</span><br></br>

         Currently working on Beta version. any changes made to Websites will be implemented ASAP.
       </p>
  </div>

       {/* Sidebar end from here */}
``







  <div  className=" mt-3 ml-2 mr-3 overflow-y-auto pr-3 pl-3 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black scrollbar-thumb-rounded-full scrollbar-track-rounded-full" >
  <div class="container mx-auto">
<div class="flex-col grid grid-cols-4 gap-6 ">

<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg bg-black border-2 border-zinc-800 shadow-xl shadow-gray-800 ">
  <div class="hover:backdrop-blur-lg  bg-gray-600    border-gray-200 backdrop-filter bg-opacity-30 rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
  <div  className=" mt-5 text-lg font-bold 	font-inter text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ahrefs</div>
 <img src="/Ahref.webp" class="w-20 h-20 rounded-2xl shadow-xl shadow-lime-[80]  "alt=""/>     

</div>

  <p class="text-gray-300 text-sm mt-5 font-inter mb-2 ml-4 leading-5 font-medium">
  Semrush: Best Seo and PPC tool - Get More Organic Visits
  </p>
  <button type="button" class=" py-2.5 px-4 mt-7  ml-40 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:shadow-md dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open</button>
  
   </div>
</div>



<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg bg-black border-2 border-zinc-800 shadow-xl shadow-gray-800 ">
  <div class="hover:backdrop-blur-lg  bg-gray-600    border-gray-200 backdrop-filter bg-opacity-30 rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-lg font-bold	font-inter text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-neutral-700 to-[#8f8f8f]">Semrush</div>
 <img src="/semrush.webp" class="w-20 h-25 rounded-2xl shadow-xl shadow-gray-600 "alt=""/>     

</div>

  <p class="text-gray-300 text-sm mt-5 font-inter mb-2 ml-4 leading-5 font-medium">
  Semrush: Best Seo and PPC tool - Get More Organic Visits
  </p>
  <button type="button" class=" py-2.5 px-4 mt-7  ml-40 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:shadow-md dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open</button>
  
   </div>
</div>







<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg bg-black border-2 border-zinc-800 shadow-xl shadow-gray-800 ">
  <div class="hover:backdrop-blur-lg  bg-gray-600    border-gray-200 backdrop-filter bg-opacity-30 rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-lg font-bold	font-inter text-transparent bg-clip-text bg-gradient-to-r from-[#ff5f15] via-[#fc6900] to-[#000000]">Ubbersuggest</div>
 <img src="/Ubbersuggest.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-300 text-sm mt-5 font-inter mb-2 ml-4  font-medium leading-5">
  Ubersuggest's Free Keyword Tool, Generate More Suggestions

  </p>
  <button type="button" class=" py-2.5 px-4 mt-7  ml-40 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-600 focus:shadow-md dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open</button>
  
   </div>
</div>






<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg bg-black border-2 border-zinc-800 shadow-xl shadow-gray-800 ">
  <div class="hover:backdrop-blur-lg  bg-gray-600    border-gray-200 backdrop-filter bg-opacity-30 rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-lg font-bold	font-inter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-600 to-pink-500">Jasper AI</div>
 <img src="/jasper.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-500 text-sm mt-5 font-inter mb-2 ml-4 leading-5 font-medium">
  Create content 5x faster with artificial intelligence.  </p>
  <button type="button" class=" py-2.5 px-4 mt-7  ml-40 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:shadow-md dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Open</button>
  
   </div>
</div>



{/* Section end from here */}
<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg bg-black border-2 border-zinc-800 shadow-xl shadow-gray-800 ">
  <div class="hover:backdrop-blur-lg  bg-gray-600    border-gray-200 backdrop-filter bg-opacity-30 rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ahrefs</div>
 <img src="https://seogbtools.dev/wp-content/uploads/2021/08/Logo-400x500-px-15.png" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-300 text-sm mt-5 font-medium mb-2 ml-4">
 10 Ahrefs - SEO Tools & Resources To Grow Your Search Traffic
  </p>
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2 ]  " onclick="openInNewTab('https://seogbtools.dev')">Open</button>
  </div>
</div>

<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Semrush</div>
 <img src="/semrush.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  SEMrush: Best Seo and PPC tool - Get More Organic Visits
  </p>
  <button type="button" onclick="window.open('http://www.semrush.com')" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
  
   <input type="button" value="Open" onclick="window.open('https://semrush.com)" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  " />
   </div>
</div>







<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ubbersuggest</div>
 <img src="/ubbersuggest.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  Ubersuggest's Free Keyword Tool, Generate More Suggestions
  </p>
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
 </div>
</div>






<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Jasper.ai</div>
 <img src="/jasper.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  Jasper - The Best AI Writing Assistant Get Mind-Blowing Copy With AI
  </p> 
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
   </div>
</div>



{/* Section end from here */}

<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ahrefs</div>
 <img src="https://seogbtools.dev/wp-content/uploads/2021/08/Logo-400x500-px-15.png" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4">
  Ahrefs - SEO Tools & Resources To Grow Your Search Traffic
  </p>
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
  </div>
</div>

<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Semrush</div>
 <img src="/semrush.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  SEMrush: Best Seo and PPC tool - Get More Organic Visits
  </p>
  <button type="button" onclick="window.open('http://www.semrush.com')" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
  
   <input type="button" value="Open" onclick="window.open('https://semrush.com)" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  " />
   </div>
</div>







<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ubbersuggest</div>
 <img src="/ubbersuggest.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  Ubersuggest's Free Keyword Tool, Generate More Suggestions
  </p>
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
 </div>
</div>






<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Jasper.ai</div>
 <img src="/jasper.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  Jasper - The Best AI Writing Assistant Get Mind-Blowing Copy With AI
  </p> 
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
   </div>
</div>



{/* Section end from here */}
<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ahrefs</div>
 <img src="https://seogbtools.dev/wp-content/uploads/2021/08/Logo-400x500-px-15.png" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4">
  Ahrefs - SEO Tools & Resources To Grow Your Search Traffic
  </p>
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
  </div>
</div>

<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Semrush</div>
 <img src="/semrush.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  SEMrush: Best Seo and PPC tool - Get More Organic Visits
  </p>
  <button type="button" onclick="window.open('http://www.semrush.com')" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
  
   <input type="button" value="Open" onclick="window.open('https://semrush.com)" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  " />
   </div>
</div>







<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ubbersuggest</div>
 <img src="/ubbersuggest.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  Ubersuggest's Free Keyword Tool, Generate More Suggestions
  </p>
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
 </div>
</div>






<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Jasper.ai</div>
 <img src="/jasper.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  Jasper - The Best AI Writing Assistant Get Mind-Blowing Copy With AI
  </p> 
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
   </div>
</div>



{/* Section end from here */}

{/* Section end from here */}
<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  shadow-lg backdrop-blur-sm bg-white/30  ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ahrefs</div>
 <img src="https://seogbtools.dev/wp-content/uploads/2021/08/Logo-400x500-px-15.png" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4">
  Ahrefs - SEO Tools & Resources To Grow Your Search Traffic
  </p>
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
  </div>
</div>

<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg bg-black border-2 border-zinc-800 shadow-xl shadow-gray-800 ">
  <div class="hover:backdrop-blur-lg  bg-gray-600    border-gray-200 backdrop-filter bg-opacity-30 rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Semrush</div>
 <img src="/semrush.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  SEMrush: Best Seo and PPC tool - Get More Organic Visits
  </p>
  <button type="button" onclick="window.open('http://www.semrush.com')" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
  
   <input type="button" value="Open" onclick="window.open('https://semrush.com)" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  " />
   </div>
</div>







<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Ubbersuggest</div>
 <img src="/ubbersuggest.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  Ubersuggest's Free Keyword Tool, Generate More Suggestions
  </p>
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
 </div>
</div>






<div class="flex justify-center">
<div class="block pt-6 pr-1 pl-1 rounded-lg  border-2 shadow-lg bg-white ">
  <div class=" bg-[#f2f2f2] rounded-lg shadow md:flex md:items-initial md:justify-between md:p-4 dark:bg-gray-800">
<div  className=" mt-5 text-2xl font-bold	 text-transparent bg-clip-text bg-gradient-to-r from-[#ffc83a] via-[#ff008a] to-[#6100ff]">Jasper.ai</div>
 <img src="/jasper.webp" class="w-20 h-20 rounded-2xl shadow-lg shadow-gray-500 "alt=""/>     

</div>

  <p class="text-gray-900 text-sm mt-5 font-medium mb-2 ml-4 ">
  Jasper - The Best AI Writing Assistant Get Mind-Blowing Copy With AI
  </p> 
  <button type="button" class=" inline-block px-4 py-2 ml-40 mb-2 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#f2f2f2]  ">Open</button>
   </div>
</div>



{/* Section end from here */}
</div>

</div>



  </div>
  </section>
         
         
                 </div>
  )
}
