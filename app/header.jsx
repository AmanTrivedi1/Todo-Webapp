import Link from "next/link";
import { BsCheck2All } from "react-icons/bs";
import React from "react";
import { LogoutBtn } from "../components/Clients";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>
          <BsCheck2All className="Logo" />
        </h2>
      </div>
      <article>
        <Link href={"/"}>Task</Link>
        <Link href={"/profile"}>Profile</Link>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default Header;
