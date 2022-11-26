export const Navbar = () => {
    return (
        <div className="font-semibold text-white flex gap-4 underline text-xs sm:text-base">
            <div className="hover:text-gray-300 hover:cursor-pointer">Blog</div>
            <div className="hover:text-gray-300 hover:cursor-pointer">
                Get Updates
            </div>
            <div className="hover:text-gray-300 hover:cursor-pointer">
                About
            </div>
            <div className="hover:text-gray-300 hover:cursor-pointer">
                Log in
            </div>
        </div>
    );
};
