import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor"; 

const Ticker = ({ num, suffix }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp end={num} duration={1.25} delay={0.25} separator="," start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <div className='block'>
            <VisibilitySensor
              active={!viewPortEntered}
              onChange={isVisible => {
                if (isVisible) {
                  setViewPortEntered(true);
                }
              }}
              delayedCall
            >
              <h4 className="text-2xl sm:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500" ref={countUpRef} />
            </VisibilitySensor>
            <p className="text-sm sm:text-md lg:text-lg mt-3 font-medium w-60">{suffix}</p>
          </div>
        );
      }}
    </CountUp>
  );
};

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import CipherImg from '../images/cipher.png';
import QuantumKeyImg from '../images/quantumkey.png';
import BlockchainImg from  '../images/blockchain.png';
import CipherDiagramImg from '../images/cipherdiagram.png'
import QuantumDashImg from '../images/quantumdash.png'
import BrochureImg from '../images/brochure.png'
import BrochureTransparentImg from '../images/brochure-transparent.png'
import BlockchainDashImg from '../images/blockchaindash.png'

import {
  FireIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
  CursorArrowRaysIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" id="tech">
        <div className="pt-12 md:pt-12">

          {/* Section header */}
          <img className="mx-auto pb-4" src={BrochureImg} width="700" alt="Brochure" />
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Safe and sound<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">.</span></h1>
            <p className="text-xl text-gray-600">Medical data breaches are at an all-time high. Soteria uses the cybersecurity technologies of the future to protect genetic databases for genetic data companies and researchers, potentially protecting millions of patient records.</p>
          </div>

          <div className='max-w-screen-xl mx-auto py-10 pt-12 px-4 sm:px-6' data-aos="fade-up">
            <div className="flex flex-col sm:flex-row justify-center space-x-4 md:space-x-12 lg:space-x-24 font-bold mb-16 mx-auto w-full text-center">
              <Ticker num={48000000} suffix='Healthcare records impacted in 2022' />
              <Ticker num={590} suffix='Healthcare organizations breached in 2022' />
              <Ticker num={1} suffix='Secure solution' />
            </div>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-10">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Extensive suite of encryptions</h3>
                <p className="text-xl text-gray-600">Soteria combines several privacy-preserving technologies to create SoteriaNET, the most secure platform for the data that matters most. Through the SoteriaNET platform, institutions can upload and access genetic data efficiently while staying safe at every step of the process.</p>
              </div>
              {/* Tabs buttons */}
              <p className="text-sm md:text-base text-indigo-700 mb-2">Click through to learn about our tech.</p>
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-end text-lg p-5 rounded-md border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Forming the Foundation</div>
                    <div className="text-gray-600">At the root of our product is a permissioned blockchain that allows for the secure upload and storage of consumer genetic data, allowing for the establishment of an immutable network.</div>
                  </div>
                  <div className={"flex justify-center items-center w-8 h-8 shadow shadow-indigo-500 bg-indigo-100 rounded-full text-indigo-500 flex-shrink-0 ml-3 " + (tab == 1 && "invisible")}>
                    {/* <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg> */}
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </a>
                <a
                  className={`flex items-end text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                  <div className="font-bold leading-snug tracking-tight mb-1">Further Fortitude</div>
                    <div className="text-gray-600">In the event that data in any of the blocks is somehow accessed, hackers won't be able to parse the data as it will be encrypted with the industry standard AES-256 Bit Cipher.</div>
                  </div>
                  <div className={"flex justify-center items-center w-8 h-8 shadow shadow-indigo-500 bg-indigo-100 rounded-full text-indigo-500 flex-shrink-0 ml-3 " + (tab == 2 && "invisible")}>
                    {/* <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg> */}
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </a>
                <a
                  className={`flex items-end text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                  <div className="font-bold leading-snug tracking-tight mb-1">Fire with Fire</div>
                    <div className="text-gray-600">As quantum computing grows in popularity, hackers will soon be able to effortlessly break modern cryptography. Our blockchain combats such threats during data retrieval with a custom Quantum Key Distribution which will stand resilient in the face of hackers armed with quantum decryption capabilities.</div>
                  </div>
                  <div className={"flex justify-center items-center w-8 h-8 shadow shadow-indigo-500 bg-indigo-100 rounded-full text-indigo-500 flex-shrink-0 ml-3 " + (tab == 3 && "invisible")}>
                    {/* <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg> */}
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 items-center justify-center" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right justify-center items-center">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col justify-center items-center">
                    <img className="md:max-w-none mx-auto rounded-lg shadow-md md:mt-[5%]" src={BlockchainDashImg} width="600" height="480" alt="Features bg" />
                    <img className="md:max-w-none mx-auto rounded-lg shadow-md md:mt-8" src={BlockchainImg} width="600" height="480" alt="Features bg" />
                    {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} /> */}
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col justify-center items-center">
                    <img className="md:max-w-none mx-auto rounded-lg shadow-md md:mt-[5%]" src={CipherDiagramImg} width="600" height="480" alt="Features bg" />
                    <img className="md:max-w-none mx-auto rounded-lg shadow-md md:mt-8" src={CipherImg} width="600" height="480" alt="Features bg" />
                    {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} /> */}
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col justify-center items-center">
                    <img className="md:max-w-none mx-auto rounded-lg shadow-md md:mt-[5%]" src={QuantumDashImg} width="600" height="480" alt="Features bg" />
                    <img className="md:max-w-none mx-auto rounded-lg shadow-md md:mt-8" src={QuantumKeyImg} width="600" height="480" alt="Features bg" />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
