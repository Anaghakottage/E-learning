import Link from "next/link";
import React from "react";

export const navItemData = [
  {
    
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",

    url: "/courses",
  },
  {
    name: "About",

    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",

    url: "/faq",
  },
];
type Props = {
  activeItem: number;

  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden800px:">
        {navItemData &&
          navItemData.map((i, index) => (
            // eslint-disable-next-line react/jsx-key
            <Link href={`${i.url}`} key={index}passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                }  text-[18px] px-6 font-poppins font-[400]`}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {
      isMobile && (
        <div className="800px:hidden mt-5">
          <div className="w-full text-center py-6"></div>
            {navItemData &&
              navItemData.map((i, index) => (
                // eslint-disable-next-line react/jsx-key
                <Link href={`${i.url}`} passHref>
    <span
        className={`${
            activeItem === index
                ? "dark:text-[#37a39a] text-[crimson]"
                : "dark:text-white text-black"
        } block py-5 text-[18px] px-6 font-poppins font-[400]`}
    >
        {i.name}
    </span>
</Link>

              ))}
          </div>
        
      )}
    </>
  );
};

export default NavItems;
