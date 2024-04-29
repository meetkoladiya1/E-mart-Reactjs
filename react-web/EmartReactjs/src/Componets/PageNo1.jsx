import React from 'react'
import image9 from "../assets/asset 9.webp";
import image10 from "../assets/asset 10.webp";
import image24 from "../assets/asset 24.webp"
import image25 from "../assets/asset 25.webp"
import image26 from "../assets/asset 26.webp"
import image11 from "../assets/asset 11.webp"
import image12 from "../assets/asset 12.webp"
import image13 from "../assets/asset 13.webp"
import image14 from "../assets/asset 14.webp"
import image15 from "../assets/asset 15.webp"
import image16 from "../assets/asset 16.webp"
import image17 from "../assets/asset 17.svg"
import image30 from "../assets/asset 30.webp"
import image21 from "../assets/asset 21.webp"
import image2 from "../assets/asset 2.webp"
import image3 from "../assets/asset 3.webp"







const PageNo1 = () => {
  return (
    <div className='pt-24'>
      <div className='flex  justify-between flex-wrap '>
        <div className='w-[530px] ms-10'>
          <h1 className='text-6xl font-medium ms-9 mt-40 text-wrap: wrap text-center font-serif '>Plant a tree for
          </h1>
          <h1 className='text-6xl font-medium text-center ms-10 font-serif'> better world
          </h1>
          <p className='text-wrap: wrap  text-zinc-400 mt-5 ms-24'>Rectangle follower distribute device layer. Library hand</p>
          <p className='text-wrap: wrap   ms-14 text-center text-zinc-400'>ellipse device strikethrough.
          </p>
          <div className='flex justify-center ms-10'>
            <button className='border-2 borer-solid border-black p-  mt-5 text-black hover:bg-black hover:text-white  h-11 w-44 '>Shop Now</button>
          </div>
        </div>


        <div className='flex me-6 '>
          <img className='max-h-[450px] mt-20  hidden sm:block palnt-1 max-h-[700px] ' src={image9} alt="" />
          <img className=' max-h-[600px] plant-2 ms-5 ' src={image10} alt="" />
        </div>
      </div>
      {/* <br></br> */}


      {/* Shop by categories */}
      <div>
        <div className='flex justify-end'>
          <p className='text-5xl mt-14 '> Shop by categories</p>
        </div>


        <div className='flex-wrap flex justify-around mt-4'>
          <div className="image-container m-5">
            <img src={image24} className='max-h-96 w-80' alt="Your Image" />
            <div className="overlay h-40 border-black">
              <p className='font-bold h-20'>Aloe Vera</p>
            </div>
          </div>

          <div className="image-container m-5">
            <img src={image25} className='h-96 w-80' alt="Your Image" />
            <div className="overlay h-40">
              <p className='font-bold h-20'>Old Lady Cactus</p>
            </div>
          </div>


          <div className="image-container m-5">
            <img src={image2} className='h-96 w-80' alt="Your Image" />
            <div className="overlay h-40">
              <p className='font-bold h-20 '>Calathea Ornata</p>
            </div>
          </div>

          <div className="image-container m-5">
            <img src={image26} className='h-96 w-80' alt="Your Image" />
            <div className="overlay h-40  border-gray-300">
              <p className='font-bold h-20'>Green Aloevera</p>
            </div>
          </div>
        </div>
      </div>





      {/* ----------- */}


      <div className='mt-14 '>
        <p className='text-4xl semi-bold text-center '>Best interior plants</p>
        <p className='text-current text-center mt-5'>Rectangle follower library hand ellipse device strikethrough.</p>


        {/* //////////////////////////// */}
        {/* only one image */}
        <div className='mt-4 flex  flex-wrap'>
          <div className='max-h-[750px] max-w-[500px] m-6 '>
            <img className='palnt-3' src={image11} alt="" />
          </div>

          {/* first line */}
          <div className='flex-wrap '>
            <div className='flex mt-3 '>
              <div className="image-container">
                <img src={image12} alt="Your Image" className="zoom h-80 mt-2   w-64   m-5" />
                <div className='text-center mt-8'>
                  <p className='text-xl'>Monstera plant</p>
                  <del>$60</del> <p className='inline-block'>$48</p>
                </div>
                <div className="icons">
                  <i className="fas fa-heart"></i>
                  <i className="fas fa-heart"></i>
                  <i className="fas fa-heart"></i>
                </div>
              </div>


              <div className="image-container">
                <img src={image13} alt="Your Image" className="zoom h-80 mt-2  w-64 m-5" />
                <div className='text-center mt-8'>
                  <p className='text-xl'>Haworthia</p>
                  <del>$87</del> <p className='inline-block'> $70</p>
                </div>
                {/* <div className="icons">

  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>

</div> */}
              </div>



              <div className="image-container">
                <img src={image14} alt="Your Image" className="zoom h-80 mt-2  w-64 m-5" />
                <div className='text-center mt-8'>
                  <p className='text-xl'>Bird's nest fern</p>
                  <del>$68</del> <p className='inline-block'> $54</p>
                </div>
                {/* <div className="icons">

  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>

</div> */}
              </div>
            </div>








            {/* second line */}

            <div className='flex mt-8'>
              <div className="image-container">
                <img src={image3} alt="Your Image" className="zoom h-80 mt-2   w-64   m-5" />
                <div className='text-center mt-8'>
                  <p className='text-xl'>Peace lily</p>
                  <del>$72</del> <p className='inline-block'>$64</p>
                </div>
                {/* <div className="icons">

  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>

</div> */}
              </div>


              <div className="image-container">
                <img src={image15} alt="Your Image" className="zoom h-80 mt-2  w-64 m-5" />
                <div className='text-center mt-8'>
                  <p className='text-xl'>Monstera plant</p>
                  <p className='inline-block'>$67.00</p>
                </div>
                {/* <div className="icons">

  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>

</div> */}
              </div>



              <div className="image-container">
                <img src={image16} alt="Your Image" className="zoom h-80 mt-2  w-64 m-5" />
                <div className='text-center mt-8'>
                  <p className='text-xl'>Monstera plant</p>
                  <del>$54</del> <p className='inline-block'> $40 </p>
                </div>
                {/* <div className="icons">

  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>
  <i className="fas fa-heart"></i>

</div> */}
              </div>
            </div>
          </div>
        </div>

      </div>









      {/* Free shipping  */}
      <div className='w-auto h-24 bg-slate-300 mt-5'>
        <ul>
          <ol>
            <img src={image17} alt='this is img' />
          </ol>
        </ul>
      </div>




      {/* Find your perfect */}
      <div class="image-container">
        <img src={image30} alt="Your Image" />
        <div class="text-overlay">
          <p className=''>
            Find your perfect gardening tools on best price
          </p>
          <button className='border-2 border-solid border-black p-4  text-black bg-white'>shop Now</button>
        </div>
      </div>


      {/* New arrivals */}


      <div className='mt-15'>
        <h2 className='text-4xl mt-7 ms-9'>New arrivals</h2>
        <div className='flex flex-wrap justify-around relative'>

          <div className='image-container'>
            <img src={image21} alt="Your Image" className="zoom h-96 mt-2   max-w-[320px]   m-5" />
            <div className='text-center'>
              <p className='text-xl text-center'>Monstera plant </p>
              <del className=''>$54</del> <p className='inline-block'> $40 </p>
            </div>
            <div className=' text-white absolute top-4 left-60  '><p className='bg-black p-1'>-21%</p></div>
          </div>







          <div className='image-container h-96'>
            <img src={image12} alt="Your Image" className="zoom h-96 mt-2   max-w-[320px]   m-5" />
            <div className='text-center'>
              <p className='text-xl text-center'>Monstera plant </p>
              <del className=''>$54</del> <p className='inline-block'> $40 </p>
            </div>
            <div className=' text-white absolute top-4 left-60  '><p className='bg-black p-1'>-21%</p></div>
          </div>



          <div className='image-container'>
            <img src={image13} alt="Your Image" className="zoom h-96 mt-2   max-w-[320px]   m-5" />
            <div className='text-center'>
              <p className='text-xl text-center'>Haworthia</p>
              <del className=''>$54</del> <p className='inline-block'> $40 </p>
            </div>
            <div className=' text-white absolute top-4 left-60  '><p className='bg-black p-1'>-21%</p></div>
          </div>



          <div className='image-container'>
            <img src={image12} alt="Your Image" className="zoom h-96 mt-2   max-w-[320px]   m-5" />
            <div className='text-center'>
              <p className='text-xl text-center'>Monsterae plant</p>
              <del className=''>$54</del> <p className='inline-block'> $40 </p>
              <div className=' text-white absolute top-4 left-60  '><p className='bg-black p-1'>-21%</p></div>
            </div>



          </div>


        </div>

        {/* one image out of div */}
        <div className='image-container ms-10 relative'>
          <img src={image14} alt="Your Image" className="zoom h-96 mt-2  max-w-[320px]  m-5" />
          <div className='text-center'>
            <p className='text-xl text-center'>Bird's nest fern</p>
            <del className=''>$54</del> <p className='inline-block'>   $40 </p>
          </div>
          <div className=' text-white absolute top-4 left-60  '><p className='bg-black p-1'>-21%</p></div>
        </div>
      </div>


      <div className='mt-20'>
        
      </div>

      <footer>

        <div className='mt-10 sm:mt-20 h-72'>
          {/* <img src="" alt="" /> */}
          <p className='text-3xl sm:text-5xl text-center'>Subscribe to our newsletter</p>
          <p className='text-center text-lg sm:text-xl mt-2 sm:mt-4 text-gray-600'>Subscribe now and get exclusive offers!</p>

          <div className='flex flex-col sm:flex-row items-center justify-center mt-3 sm:mt-5'>
            <input type="email" placeholder='Your Email Address' className='bg-gray-200 sm:bg-slate-300 h-10 max-w-xs sm:max-w-md mt-2 sm:mt-0 border-none px-4 py-2  focus:outline-none  mt-36' />
            <button className='bg-black sm:ms-4 text-white px-4 py-2 mt-2 sm:mt-0  hover:bg-gray-800 focus:outline-none'>Subscribe Now</button>
          </div>
        </div>


        <div className='mt-6'>
          <hr />
        </div>


        <div className='mt-8 flex justify-center'>
          <p className='text-gray-400 mb-1'>Designed by:</p>
          <p className='font-bold'>Wpignite</p>
        </div>
      </footer>




    </div >


  )
}

export default PageNo1