import IconReact from "../Icons/IconReact"
import IconJavascript from "../Icons/IconJava"
import IconTypescript from "../Icons/IconTS"
import IconLaravel from "../Icons/IconLaravel"
import IconNextjs from "../Icons/IconNextJS"
import IconTailwindcss from "../Icons/IconTailwind"

function Skills() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-[#0f0f10]">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Habilidades</h2>
                        <p className="text-muted-foreground">Here are some of the technologies I'm proficient in.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="flex items-center gap-2 p-4 rounded-md bg-[#3d3d43]">
                            <IconReact/>
                            <p className="text-sm font-medium">React</p>
                        </div>
                        <div className="flex items-center gap-2 p-4 rounded-md bg-[#3d3d43]">
                            <IconJavascript/>
                            <p className="text-sm font-medium">JavaScript</p>
                        </div>
                        <div className="flex items-center gap-2 p-4 rounded-md bg-[#3d3d43]">
                            <IconTypescript/>
                            <p className="text-sm font-medium">TypeScript</p>
                        </div>
                        <div className="flex items-center gap-2 p-4 rounded-md bg-[#3d3d43]">
                            <IconLaravel/>
                            <p className="text-sm font-medium">Laravel</p>
                        </div>
                        <div className="flex items-center gap-2 p-4 rounded-md bg-[#3d3d43]">
                            <IconNextjs/>
                            <p className="text-sm font-medium">NextJS</p>
                        </div>
                        <div className="flex items-center gap-2 p-4 rounded-md bg-[#3d3d43]">
                            <IconTailwindcss/>
                            <p className="text-sm font-medium">TailwindCSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills