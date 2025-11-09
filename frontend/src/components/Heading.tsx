interface HeaderPageProps {
    title: string
}

export default function HeadingPage({ title }: HeaderPageProps) {
    return (
        <header className="flex flex-col  mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">
                    {title}
                </h2>
            </header>
    )
}
