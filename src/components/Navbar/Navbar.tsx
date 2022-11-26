export const Navbar = () => {
    return (
        <div className="font-semibold text-white flex gap-4 underline text-xs sm:text-base">
            <div
                className="hover:text-gray-300 hover:cursor-pointer"
                title="Blog page"
            >
                Blog
            </div>
            <div
                className="hover:text-gray-300 hover:cursor-pointer"
                title="Get updates about Chill With Me"
            >
                Get Updates
            </div>
            <div
                className="hover:text-gray-300 hover:cursor-pointer"
                title="About Chill With Me"
            >
                About
            </div>
            <div
                className="hover:text-gray-300 hover:cursor-pointer"
                title="Log in to your account"
            >
                Log in
            </div>
        </div>
    );
};
