import React from "react";
import { useThemeMode, Button, Avatar } from "flowbite-react";
import { Moon, Sun, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";


function Header() {
    const { mode, toggleMode } = useThemeMode();
    const [currentUser, setCurrentUser] = useState(0);
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <button onClick={() => setCurrentUser(0)}>
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            rounded
          />
        </button>
        <ArrowRight className={`${currentUser === 0 ? "hidden" : ""} mx-2`} />
        <ArrowLeft className={`${currentUser === 1 ? "hidden" : ""} mx-2`} />
        <button onClick={() => setCurrentUser(1)}>
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            rounded
          />
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            toggleMode();
            console.log(mode);
          }}
          className="p-2 rounded-md bg-none"
        >
          {mode === "light" ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
