interface Content {
    children: React.ReactNode;
    classname?: string;
}

const ButtonHome: React.FC<Content> = ({ children, classname }: Content) => {
    return (
        <button className={`group`}>
            <div
                className={`${classname} bg-[#1a1a1a] bg-opacity-45 
                border-2 border-purple-800
                hover:bg-general_bg active:bg-general_bg text-white font-medium text-sm py-2 px-4 rounded-lg mt-2 shadow-md transform transition-all duration-300 group-hover:scale-105 group-active:scale-95`}
            >
                {children}
            </div>
        </button>
    );
};

export default ButtonHome;
