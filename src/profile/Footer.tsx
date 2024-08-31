import IconLinkedin from "../Icons/IconLinkedin"
import IconGit from "../Icons/IconGit"

function Footer() {
    return (
        <footer className="px-4 py-6 sm:px-6 bg-[#0f0f10] border-t border-opacity-25 border-white">
            <div className="container max-w-6xl mx-auto flex items-center justify-between">
                <p className="text-sm text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="" className=""><IconLinkedin/></a>
                    <a href="" className=""><IconGit/></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer