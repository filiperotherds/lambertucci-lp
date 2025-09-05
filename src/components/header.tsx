import Image from "next/image";

export default function Header() {
    return(
        <header className="w-full h-20 flex items-center justify-center absolute">
            <div className="w-full max-w-7xl h-full flex flex-row items-center justify-between">
                <div className="w-48 h-8 relative">
                    <Image
                    src={'/Logo Expandida.png'} fill alt="Lambertucci Construction Logo"
                    />
                </div>
            </div>
        </header>
    )
}