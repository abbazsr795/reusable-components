"use client"

import React from "react";
import { Checkbox } from "evergreen-ui";
import useStore from "../store";
import { useEffect } from "react";

export default function SignIn(){

    //Requires states forhiding/showing passwords
    const ShowPassword = useStore((state) => state.showPassword)
    const SetShowPassword = useStore((state) => state.changeShowPassword)

    useEffect(() => {
        SetShowPassword(false)
    }, [])

    return(
        // Component is horizontally centered by default in the layout.js page with a top margin
        <div className="border border-1 p-10 m-2 rounded w-2/6 min-w-fit max-w-96">
            <p className="flex flex-row justify-center text-2xl">Sign In</p>
            <br></br>
            <p className="text-md">Email</p>
            {/* Uses global.css for removing blue default outline when focus */}
            <input maxLength={100} className="border-solid border-slate-300 rounded border p-1 w-full"></input>
            <br></br>
            <br></br>
            <p className="text-md">Password</p>
            {/* Uses global.css for removing blue default outline when focus */}
            <input maxLength={100} type={!ShowPassword ? "password" : "text"} className="border-solid border-slate-300 rounded border p-1 w-full"></input>
            {/* Requires Evergreen-UI */}
            <Checkbox
            label="Show password"
            checked={ShowPassword}
            onChange={event => SetShowPassword(event.target.checked)}
            />
            <br></br>
            <a href="/signup" className="text-xs flex flex-row justify-center hover:underline">Not a user? Create one!</a>
            <br></br>
            <div className="flex flex-row justify-center">
                <button className="border border-1 border-slate-600 hover:border-slate-400 rounded px-3 py-2 w-fit text-md text-slate-600 hover:text-slate-400">Continue</button>
            </div>
        </div>
    )
}
