import { useState } from "react";

export default function Home() {
    const [value, setValue] = useState(false);
    return (
        <>
            {value ? (
                <div className="h-screen bg-gray-800">
                    <h1 className="text-center text-green-300 font-bold py-6">
                        Hello
                    </h1>
                </div>
            ) : (
                <div className="h-screen bg-gray-800">
                    <h1 className="text-center text-green-300 font-bold py-6">
                        Hello world
                    </h1>
                </div>
            )}
        </>
    );
}