import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../assets/product';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-20 text-xl">Product not found</div>;
  }

  return (
    <>
    <div class="flex items-center bg-indigo-100 w-screen min-h-screen" style="font-family: 'Muli', sans-serif;">
  <div class="container ml-auto mr-auto flex flex-wrap items-start">
    <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
      <h1 class="text-3xl lg:text-4xl text-gray-700 font-extrabold">
        Best Sellers
      </h1>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure class="mb-2">
          <img src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png" alt="" class="h-64 ml-auto mr-auto" />
        </figure>
        <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 class="text-white text-2xl font-bold leading-none">
              iPhone 11 Pro Max
            </h5>
            <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
          </div>
          <div class="flex items-center">
            <div class="text-lg text-white font-light">
              $1099,00
            </div>
            <button href="javascript:;" class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure class="mb-2">
          <img src="https://srv-cdn.onedio.com/store/7fd6410ffac110960cb4a60b09878db19ebbdf3c8b6e842918d16f3c61784763.png" alt="" class="h-64 ml-auto mr-auto" />
        </figure>
        <div class="rounded-lg p-4 bg-purple-600 flex flex-col">
          <div>
            <h5 class="text-white text-2xl font-bold leading-none">
              iPhone 11
            </h5>
            <span class="text-xs text-gray-400 leading-none">Just the right amount of everything.</span>
          </div>
          <div class="flex items-center">
            <div class="text-lg text-white font-light">
              $699,00
            </div>
            <button href="javascript:;" class="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure class="mb-2">
          <img src="https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png" alt="" class="h-64 ml-auto mr-auto" />
        </figure>
        <div class="rounded-lg p-4 bg-gray-700 flex flex-col">
          <div>
            <h5 class="text-white text-2xl font-bold leading-none">
              iPhone XR
            </h5>
            <span class="text-xs text-gray-400 leading-none">Brilliant. In every way.</span>
          </div>
          <div class="flex items-center">
            <div class="text-lg text-white font-light">
              $599,00
            </div>
            <button href="javascript:;" class="rounded-full bg-gray-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure class="mb-2">
          <img src="https://srv-cdn.onedio.com/store/cfdd8ebc1b39e215c44c7c9a02bfaa49287f79b806ec5743124d0aea25c2b0c3.png" alt="" class="h-64 ml-auto mr-auto" />
        </figure>
        <div class="rounded-lg p-4 bg-gray-600 flex flex-col">
          <div>
            <h5 class="text-white text-2xl font-bold leading-none">
              iPhone SE
            </h5>
            <span class="text-xs text-gray-400 leading-none">Lots to love.
              Less to spend.</span>
          </div>
          <div class="flex items-center">
            <div class="text-lg text-white font-light">
              $399,00
            </div>
            <button href="javascript:;" class="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
    // <div className="flex items-center bg-indigo-100 w-screen min-h-screen" style={{ fontFamily: "'Muli', sans-serif" }}>
    //   <div className="container ml-auto mr-auto flex flex-wrap items-start">
    //     <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
    //       <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
    //         {product.name}
    //       </h1>
    //     </div>
    //     <div className="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
    //       <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
    //         <figure className="mb-2">
    //           <img src={product.image} alt={product.name} className="h-64 ml-auto mr-auto rounded-t-lg" />
    //         </figure>
    //         <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
    //           <div>
    //             <h5 className="text-white text-2xl font-bold leading-none">
    //               {product.name}
    //             </h5>
    //             <span className="text-xs text-gray-400 leading-none">{product.description}</span>
    //           </div>
    //           <div className="flex items-center mt-4">
    //             <div className="text-lg text-white font-light">
    //               ${product.price}
    //             </div>
    //             <button className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
    //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
    //                 <line x1="12" y1="5" x2="12" y2="19"></line>
    //                 <line x1="5" y1="12" x2="19" y2="12"></line>
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
