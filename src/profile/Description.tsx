import Photo from '../imgs/perfil.jpg'

function Description() {
    return (
        <main className='flex-1'>
            <section className='py-12 sm:py-16 lg:py-20'>
                <div className='container max-w-6xl mx-auto px-4 sm:px-6'>
                    <div className='grid md:grid-cols-2 gap-8 items-center'>
                        <div>
                            <img src={Photo} width={400}
                                height={400}
                                alt="Profile Picture"
                                className="rounded-full mx-auto sm:mx-0"
                                style={{ aspectRatio: "400/400", objectFit: "cover" }} />
                        </div>
                        <div className=' space-y-4'>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hola, soy Diego Moran</h1>
                            <p className="text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolore quibusdam, beatae cum qui minus rerum, odit obcaecati expedita tempora deleniti recusandae explicabo tempore nobis maiores quasi ullam. Libero, sapiente?.
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="bg-slate-100 text-black px-4 py-2 hidden sm:inline-flex border border-white border-opacity-20 rounded-md hover:bg-gray-300 hover:bg-opacity-90 transition-colors duration-300">
                                    Acerca de mi
                                </button>
                                <button className='px-4 py-2 hidden sm:inline-flex border border-white border-opacity-20 rounded-md hover:bg-slate-200 hover:bg-opacity-15 transition-colors duration-300'>
                                    Ver resumen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Description