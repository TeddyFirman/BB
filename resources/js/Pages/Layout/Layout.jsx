import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout(props) {
    const { children } = props;
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-auto">
                {/* Header */}
                <Header />

                {/* Content */}
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    <div className="py-6 px-4 sm:px-6 lg:px-8">
                        {children /* Content children */}
                    </div>
                </main>
            </div>
        </div>
    );
}
