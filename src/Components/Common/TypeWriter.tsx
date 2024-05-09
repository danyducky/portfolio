import Typewriter from "typewriter-effect";

interface TypeWriterProps {
    words: string[]
}

function TypeWriter({words}: TypeWriterProps) {
    return (
        <Typewriter
            options={{
                strings: words,
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 50,
            }}
        />
    )
}

export default TypeWriter;