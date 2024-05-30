import { Link, useMatch } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

function NavigationJuegos() {
  const matchHome = useMatch("/");
  return (
    matchHome?.pathname != "/" && (
      <nav className="flex">
        <ul className="flex gap-4 justify-center items-center">
          <li className="inline-flex items-center gap-2 rounded-md hover:bg-primary-300 bg-dark-100 py-1.5 px-3 text-sm/6 font-semibold text-color-200 hover:text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-primary-300 data-[open]:bg-dark-300 data-[focus]:outline-1 data-[focus]:outline-white">
            <a className="" href="/">
              Inicio
            </a>
          </li>
          <li>
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md bg-dark-100 py-1.5 px-3 text-sm/6 font-semibold text-color-200 hover:text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-primary-300 data-[open]:bg-dark-300 data-[focus]:outline-1 data-[focus]:outline-white">
                Juegos
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </MenuButton>
              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <MenuItems
                  anchor="bottom end"
                  className="mt-1 w-52 origin-top-right rounded-xl border backdrop-blur-sm border-white/5 bg-white/5 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                  <MenuItem>
                    <Link
                      to={"/dados"}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                    >
                      Dados
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"/gato"}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                    >
                      Gato - Tres en raya
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"/memorama"}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                    >
                      Memorama
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={"/adivina"}
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                    >
                      Adivina el numero
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </li>
        </ul>
      </nav>
    )
  );
}
export default NavigationJuegos;
