import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-desktop-light.jpg')] bg-contain bg-no-repeat">
                <header className="container mx-auto px-4 pt-8">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
                            todo
                        </h1>
                        <button>
                            <MoonIcon />
                        </button>
                    </div>

                    <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
                        <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                        <input
                            type="text"
                            placeholder="Create a new todo..."
                            className="w-full outline-none placeholder:text-gray-400"
                        />
                    </form>
                </header>
                <main className="container mx-auto mt-8 px-4">
                    <div className="rounded-md bg-white px-4">
                        <article className="flex gap-4 py-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">
                                Complete online JS Course
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex gap-4 py-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">
                                Complete online JS Course
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex gap-4 py-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">
                                Complete online JS Course
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex gap-4 py-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">
                                Complete online JS Course
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex gap-4 py-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">
                                Complete online JS Course
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>

                        <section className="flex justify-between px-4 py-4">
                            <span className="text-gray-400">5 items left</span>
                            <p className="text-gray-400">Clear Complete</p>
                        </section>
                    </div>
                </main>
                <section className="container mx-auto mt-8 px-4">
                    <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                        <button className="text-blue-600">All</button>
                        <button className="hover:text-blue-600">Active</button>
                        <button className="hover:text-blue-600">
                            Completed
                        </button>
                    </div>
                </section>

                <p className="mt-8 text-center">
                    Drag and drop to reorder list
                </p>
            </div>
        </>
    );
};
export default App;
