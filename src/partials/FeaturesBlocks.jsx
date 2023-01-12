import React from 'react';
import {
  CircleStackIcon,
  EyeSlashIcon,
  GlobeAltIcon,
  LockClosedIcon,

} from '@heroicons/react/24/outline'

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div id="features" className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20"> 

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Market magic<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">.</span></h2>
            <p className="text-xl text-gray-600">Having a great product is half the battle; the other half is dominating the market. We believe we can take Soteria to the moon and create a subspace in the market that only we can fulfill while protecting millions of identities.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-10 bg-white rounded shadow-xl h-full">
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-indigo-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-indigo-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg> */}
              <div
                className='w-14 h-14 p-1 -mt-1 mb-2 rounded-full bg-gradient-to-br flex items-center justify-center text-white from-purple-600 to-indigo-600'
              >
                <GlobeAltIcon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stance</h4>
              <p className="text-gray-600 text-left">We know what you're thinking. A group of 4 high schoolers? Claiming to be able to build all this? Not without help. We've cultivated an extensive network of advisors hailing from Onyx by J.P. Morgan and the National Blockchain Project.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-10 bg-white rounded shadow-xl h-full">
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-indigo-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg> */}
              <div
                className='w-14 h-14 p-1 -mt-1 mb-2 rounded-full bg-gradient-to-br flex items-center justify-center text-white from-purple-600 to-indigo-600'
              >
                <LockClosedIcon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Draw</h4>
              <p className="text-gray-600 text-left">To get our foot in the door after initial development is complete and seed investor rounds have concluded, we'll leverage influencer marketing via LinkedIn, webinars, and blogs/videos detailing the importance of cybersecurity in healthcare.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-10 bg-white rounded shadow-xl h-full">
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-indigo-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
              </svg> */}
              <div
                className='w-14 h-14 p-1 -mt-1 mb-2 rounded-full bg-gradient-to-br flex items-center justify-center text-white from-purple-600 to-indigo-600'
              >
                <EyeSlashIcon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aim</h4>
              <p className="text-gray-600 text-left">Getting our names in the news is one thing, getting Soteria signed on contractual B2B partnerships is another. To validate our tech, we plan on presenting our core algorithms such as our Quantum Key Distribution Algorithm at conferences to build a positive reputation and connections.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-10 bg-white rounded shadow-xl h-full">
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-indigo-600" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-white" d="M16 12.571h8" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-indigo-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>               */}
              <div
                className='w-14 h-14 p-1 -mt-1 mb-2 rounded-full bg-gradient-to-br flex items-center justify-center text-white from-purple-600 to-indigo-600'
              >
                <CircleStackIcon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">Release</h4>
              <p className="text-gray-600 text-left">We hope to initiate partnerships with initial small-scale partners such as local genetic research laboratories through demos (process from consumer viewpoint shown below). Pricing of our product is dependent on the Megabytes of storage requested within the blockchain, SoteriaNET.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
