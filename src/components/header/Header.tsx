export default function Header() {
    return (
        <>
            <div className="shadow-md">
                <div className='flex items-center justify-between px-8 py-2 max-w-7xl mx-auto '>
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/360_F_129750963_0sERyGS1jJuteN7hhg0GqNBFbIDpy7do.jpg" alt="img hashtag" className='w-10 h-10' />
                        <p className="text-2xl font-bold text-primary">ashbnb</p>
                    </div>
                    <div className="flex items-center border border-gray-300 px-4 py-2 rounded-full shadow-md">
                        <p className="border-r border-r-gray-300 pr-4">Qualquer lugar</p>
                        <p className="border-r border-r-gray-300 px-4">Qualquer semana</p>
                        <p className="px-4">Hospedes</p>

                        <div className="bg-primary rounded-full p-2 ml-4 cursor-pointer text-white">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center border border-gray-300 px-4 py-2 gap-2 rounded-full shadow-md">

                        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 text-gray-600">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>

                        <p>Gugu xyz</p>

                    </div>
                </div>
            </div>
        </>
    )
}
