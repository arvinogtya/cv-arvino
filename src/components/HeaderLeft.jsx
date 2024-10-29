import React from 'react'
import image from '/public/image.jpg'
import { BiPhone, BiEnvelope, BiCurrentLocation, BiMoon, BiSun, BiLogoBlogger, BiLogoYoutube } from 'react-icons/bi'
const HeaderLeft = ({darkMode, toggleDarkMode}) => {
  return (
    <div className='min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700'>

        <div className='flex flex-col gap-5'>

            <div className='flex flex-col items-center justify-center gap-5'>
                <img src={image} alt="" className='w-32 rounded-full'/>

                <div className='text-center space-y-1'>
                    <h1 className='text-4xl font-light'>Arvino Gatya <span className='font-semibold'>Adhiarsa</span>
                    </h1>
                    <h3 className='text-xl font-light'>Pelajar</h3>
                </div>

                <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
                    {
                       darkMode ? (
                        <BiSun className='text2xl'/>
                       ) : (
                        <BiMoon className='text2xl'/>
                       )
                    }
                </button>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                        <BiCurrentLocation className='text-xl'/>
                        <span>Pacitan, Jawa Timur</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BiEnvelope className='text-xl'/>
                        <span>arvinogatya@gmail.com</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BiPhone className='text-xl'/>
                        <a href="https://wa.me/082142854052">0821-4285-4052</a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                <h1 className='text-base font-semibold md:text-2xl'>PROJECTS</h1>

                <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                        <BiLogoBlogger className='text-xl'/><a href="https://arvinogty.blogspot.com/">arvinogty.blogspot</a>
                        
                    </li>
                    <li className='flex items-center gap-2'>
                        <BiLogoYoutube className='text-xl'/><a href="https://www.youtube.com/@arvinoogty">@arvinoogtya</a> 
                    </li>
                </ul>
            </div>

            <div className='flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700'>
                <h1 className='text-baes font-semibold md:text-2xl'>PENDIDIKAN</h1>

                <ul>
                    <li className='relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                        <span className='font-semibold md:text-lg'>Teknik Komputer dan Jaringan</span>
                        <span className='font-light'>SMK Negeri 1 Pacitan</span>
                        <span className='text-sm text-grey-400'>2022-2025</span>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                <h1 className='text base font-semibold md:text-2xl'>MINAT</h1>

                <div className="flex flex-wrap gap-3">
                    <div className="flex flex-wrap gap-3">
                        <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>LINUX</span>
                        <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>CISCO</span>
                        <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>VIRTUALISASI</span>
                        <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>MIKROTIK</span>
                        <span className='rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black'>AUTOMATION</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700"></div>
        </div>
    </div>
  )
}

export default HeaderLeft