const PortFolioList = ({ title }: any) => {
    return (
        <div>
            <div className="flex items-start">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-lightAccent w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <p className="text-lg text-primaryDark  dark:text-primaryLight">{title}</p>
            </div>
        </div>
    );
};

export default PortFolioList;
