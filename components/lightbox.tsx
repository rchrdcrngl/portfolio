import { ProjectImage } from "@/lib/types";

const Lightbox = ({ selectedImage, callback }: { selectedImage: ProjectImage | null; callback:(image:ProjectImage | null)=>void }) => {
    return (
    selectedImage && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75 z-[200]">
            <div className="relative z-[210]">
            <img
                src={selectedImage.url}
                alt="Selected Image"
                className="max-h-full"
            />
            <button
                className="absolute top-4 right-4 p-2 text-white bg-black rounded-full hover:bg-opacity-50"
                onClick={()=>callback(null)}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </div>
        </div>
        )
    );
};

export default Lightbox;