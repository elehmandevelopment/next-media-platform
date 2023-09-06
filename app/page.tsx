import Image from 'next/image'

import goldenAsset from '/public/assets/next-golden-original.png';
import nextLogo from '/public/assets/next-logo.png';
import { lazy } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      <div className='mt-8'>
        <div className='mb-16 w-full'>
          <div className='mx-auto w-full md:mb-28 lg:w-11/12'>
            <div className="relative group">
              <Image 
                src={goldenAsset} 
                alt={'mountain sunset'} 
                width={1333} 
                height={824} 
                className='rounded-xl shadow-lg shadow-gray-500 blur-0' 
                quality={100} 
              />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.04] ease-in-out duration-700">
                <Image 
                  src={nextLogo} 
                  alt='logo' 
                  width={333} 
                  height={333} 
                  className='relative' 
                  quality={100} 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="relative group mb-8">
        
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image 
            src={nextLogo} 
            alt='logo' 
            width={333} 
            height={333} 
            className='relative' 
            quality={100} 
            loading="lazy"
          />
        </div>

        <div className='h-60 sm:h-40 lg:h-auto fixed inset-x-0 bottom-5 mx-5 flex max-w-screen-xl flex-col items-center justify-between space-y-3 rounded-lg border-t-4 border-black bg-white px-5 pb-3 pt-0 drop-shadow-lg transition-all duration-150 ease-in-out dark:border dark:border-t-4 dark:border-stone-700 dark:bg-black dark:text-white lg:flex-row lg:space-y-0 lg:pt-3 xl:mx-auto'>
          <div className="text-center lg:text-left">
            <p className="font-title text-lg text-black dark:text-white sm:text-2xl">Platforms Starter Kit Demo</p>
            <p className=" mt-2 text-sm text-stone-700 dark:text-stone-300 lg:mt-0">This is a demo site showcasing how to build a multi-tenant application with
            <a className="font-semibold text-black underline dark:text-white px-1" href="https://platformize.co" rel="noreferrer" target="_blank">custom domain</a>support.</p>
          </div>
          <div className=" flex w-full flex-col space-y-3 text-center sm:flex-row sm:space-x-3 sm:space-y-0 lg:w-auto">
            <a className="whitespace-no-wrap flex-auto rounded-md border border-black bg-black px-5 py-1 font-title text-lg text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white sm:py-3" href="https://vercel.com/guides/nextjs-multi-tenant-application" rel="noreferrer" target="_blank">Create a Profile</a>
            <a className="whitespace-no-wrap flex-auto rounded-md border border-stone-200 px-5 py-1 font-title text-lg text-black transition-all duration-150 ease-in-out hover:border-black dark:border-stone-700 dark:text-white dark:hover:border-white sm:py-3" href="https://app.vercel.pub" rel="noreferrer" target="_blank">Discover Profiles</a>
          </div>
        </div> 
      </div>
      
    </main>
  )
}
