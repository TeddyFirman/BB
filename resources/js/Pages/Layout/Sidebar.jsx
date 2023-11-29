import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <>
        <h1 className="sr-only">Sidebars examples</h1>
        <div className="flex flex-col flex-shrink-0 p-3 text-white bg-gray-900" style={{ width: 280 }}>
            <Link href="/admin/dashboard" className="flex items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi h-6 w-6" viewBox="0 0 24 24" fill="currentColor"></svg>
                <span className="text-xl ml-2 font-bold">Admin Panel</span>
            </Link>
            <hr className="border-gray-700" />
            <ul className="flex flex-col mb-auto">
                <li className="my-2">
                    <Link
                        href="dashboard"
                        className={`text-white ${
                            window.location.pathname === "/dashboard" ? "font-bold" : ""
                        }`}
                        aria-current="page"
                    >
                        Dashboard
                    </Link>
                </li>
                <li className="my-2">
                    <Link
                        href="materi"
                        className={`text-white ${
                            window.location.pathname === "/materi" ? "font-bold" : ""
                        }`}
                        aria-current="page"
                    >
                        Materi
                    </Link>
                </li>
            </ul>
            <hr className="border-gray-700" />
            <div>
                <Link
                    href="/logout"
                    method="post"
                    className="flex items-center text-white text-decoration-none"
                    as="button"
                >
                    Logout
                </Link>
            </div>
        </div>
        <div className="border-r border-gray-700" style={{ width: 0 }}></div>
    </>
    );
}
