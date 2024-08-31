
export const ProjectTemplate = ({ image, description, name, link, gitLink }) => {
    return (
        <div>
            <img
                src={image}
                width={600}
                height={400}
                alt="Project 1"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className='p-4 sm:p-6 bg-[#18181b] rounded-b-lg'>
                <h3 className="text-xl font-semibold pb-4">{name}</h3>
                <p className="text-muted-foreground">{description}</p>
                <div className='flex items-center gap-2 mt-6'>
                    <button className='bg-[#0f0f10] border border-slate-100 rounded border-opacity-15 px-5 py-2 hover:bg-slate-50 hover:bg-opacity-5'>
                        <a href={link}>Ver proyecto</a>
                    </button>
                    <button className='p-3.5 hover:bg-slate-50 hover:bg-opacity-5 rounded-lg'>
                        <a href={gitLink}><svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                        </svg></a>
                    </button>
                </div>
            </div>
        </div>
    )
}
