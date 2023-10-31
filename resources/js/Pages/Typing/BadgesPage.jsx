import React from "react";
import Badge from "./BadgePage"; // assuming Badge component is defined elsewhere

const BadgesPage = ({ badges }) => {
    return (
        <div className="flex lg:container w-full mx-1 md:max-w-7xl md:mx-auto md:space-x-2 mt-4 max-h-screen justify-center">
            <div>
                <div className="grid grid-cols-4 gap-4 space-y-6 bg-gradient-to-r from-kblue-800 to-kblue-500 p-4 rounded-md">
                    {badges.map((badge) => (
                        <Badge key={badge.id} text={badge.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BadgesPage;
