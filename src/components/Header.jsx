import IconMoon from "./icons/IconMoon";

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
                    Todo
                </h1>
                <button>
                    <IconMoon />
                </button>
            </div>
        </header>
    );
};

export default Header;
