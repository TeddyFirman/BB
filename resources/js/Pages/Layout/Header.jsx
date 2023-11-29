import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Header(props) {
   const { auth } = usePage().props;
   return (
       <nav className="bg-gray-100 py-3 sticky top-0">
           <div className="container flex justify-end items-center mx-auto">
               {/* <img
                   src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
                   height="25"
                   alt=""
               /> */}
               <h5 className="mb-0 ml-2">{auth.name}</h5>
           </div>
       </nav>
   );
}
