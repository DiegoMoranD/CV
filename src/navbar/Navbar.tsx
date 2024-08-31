
function Navbar() {
    return (
        <header className='px-4 py-8 sm:px-6 sm:py-4 border-b border-white border-opacity-20'>
            <div className=' container max-w-6xl mx-auto flex items-center justify-between'>
                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 flex items-center gap-2 text-lg font-semibold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                </p>
                <nav className='hidden sm:flex items-center gap-4'>
                    <a href="" className='text-sm font-medium hover:underline underline-offset-4'>Acerca de mi</a>
                    <a href="" className='text-sm font-medium hover:underline underline-offset-4'>Proyectos</a>
                    <a href="" className='text-sm font-medium hover:underline underline-offset-4'>Habilidades</a>
                    <a href="" className='text-sm font-medium hover:underline underline-offset-4'>Contacto</a>
                </nav>
                <button className="hidden sm:inline-flex border border-white py-2.5 px-5 border-opacity-20 rounded-md hover:bg-slate-200 hover:bg-opacity-15 transition-colors duration-300">Descargar CV</button>
            </div>
        </header>
    )
}

export default Navbar