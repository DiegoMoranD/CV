import { ProjectTemplate } from "./ProjectTemplate"
import File from '../imgs/file.png'
import Tinder from '../imgs/tinder.png'
import TypingGame from '../imgs/typing-game.png'
import Mentor from '../imgs/frontend-mentor.png'

function Projects() {
    return (
        <section className="bg-[#3d3d43] py-12 sm:py-16 lg:py-20">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
                        <p className="text-muted-foreground">
                            Check out some of my recent work and the technologies I used to build them.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <ProjectTemplate
                            image={Mentor}
                            name={'Frontend-Mentor'}
                            description={'Una lista en desarrollo con algunos proyectos centrados en el diseño frontend de un sitio web o elemento.'}
                            link={''}
                            gitLink={'https://github.com/DiegoMoranD/frontend-mentor'}
                        />
                        <ProjectTemplate
                            image={Tinder}
                            name={'Tinder'}
                            description={'Un proyecto vanilla que simula el efecto swipe de tinder, solo usando HTML, CSS y JavaScript'}
                            link={''}
                            gitLink={'https://github.com/DiegoMoranD/tinder'}
                        />
                        <ProjectTemplate
                            image={TypingGame}
                            name={'Typing Game'}
                            description={'¿Quieres saber tus habilidades al escribir?, pues en este proyecto podras saberlo'}
                            link={''}
                            gitLink={'https://github.com/DiegoMoranD/reaccoon-typing-game'}
                        />
                        <ProjectTemplate
                            image={File}
                            name={'Typing Game'}
                            description={'lorem'}
                            link={''}
                            gitLink={''}
                        />
                        <ProjectTemplate
                            image={File}
                            name={'Typing Game'}
                            description={'lorem'}
                            link={''}
                            gitLink={''}
                        />
                        <ProjectTemplate
                            image={File}
                            name={'Typing Game'}
                            description={'lorem'}
                            link={''}
                            gitLink={''}
                        />
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects