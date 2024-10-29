import React from 'react'
import mikrotik from '/public/mikrotik.png'
import cisco from '/public/cisco.png'
import lksjatim from '/public/lksjatim.png'
import lkskbp from '/public/lkskabupaten.jpg'


const Home = () => {
  return (
    <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>

        <main className='flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14'>

            <div className="space-y-5">
                <h1 className='text-2xl font-bold md:text-4xl'>About</h1>
                <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>Hallo, saya adalah siswa kelas 12 jurusan Teknik Komputer dan Jaringan di SMKN 1 PACITAN, saya memiliki ketertarikan dibidang Networking.</p>
            </div>

            <div className="space-y-10">
                <h1 className='text-2xl font-bold md:text-4xl'>Pengalaman Dan Pencapaian</h1>

                <div className="flex flex-col lg:flex-row lg:gap-20">
                <ul>
                    <li className='relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                        <span className='text-lg font-semibold'>Lomba Kompetensi Siswa (LKS) bidang IT Network System Administration</span>
                        <span className='font-light'>Tingkat Provinsi Jawa Timur</span>
                        <span className='text-sm text-gray-400'>Tahun 2024</span>
                    </li>
                    <li className='relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                        <span className='text-lg font-semibold'>Olimpiade Jaringan MikroTik</span>
                        <span className='font-light'>Tahap 1</span>
                        <span className='text-sm text-gray-400'>Tahun 2024</span>
                    </li>
                    <li className='relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                        <span className='text-lg font-semibold'>Lomba Kompetensi Siswa (LKS) bidang IT Network System Administration</span>
                        <span className='font-light'>Tingkat Kabupaten Pacitan</span>
                        <span className='text-sm text-gray-400'>Tahun 2024</span>
                    </li>
                </ul>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
                <h1 className='text-2xl font-bold md:text-4xl'>Sertifikasi</h1>

                <div className="space-y-10 grid-cols-2">
                    <div className="text-baseline space-y-3">
                        {/* <img src={lksjatim} alt="" /> */}
                        <a href=".././sertifikasi/sertifikasi-lksjatim.html">
                        <h3>Peserta | LKS ITNSA JATIM</h3></a>
                        <span className='text-sm text-gray-400'>Tahun 2024</span>
                    </div>
                    <div className="text-baseline space-y-3">
                        {/* <img src={lkskbp} alt="" /> */}
                        <a href=".././sertifikasi/sertifikasi-lkspacitan.html">
                        <h3>Juara 1 | LKS ITNSA Kabupaten Pacitan</h3></a>
                        <span className='text-sm text-gray-400'>Tahun 2024</span>
                    </div>
                    <div className="text-baseline space-y-3">
                        {/* <img src={mikrotik} alt="" /> */}
                        <a href=".././sertifikasi/sertifikasi-mikrotik.html">
                        <h3>Pelatihan | Mikrotik Administration by AgunaCourse</h3></a>
                        <span className='text-sm text-gray-400'>Tahun 2024</span>
                    </div>
                    <div className="text-baseline space-y-3">
                        {/* <img src={cisco} alt="" /> */}
                        <a href=".././sertifikasi/sertifikasi-cisco.html">
                        <h3>Pelatihan | Cisco CCNA 200-301 by AgunaCourse</h3></a>
                        <span className='text-sm text-gray-400'>Tahun 2024</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Home