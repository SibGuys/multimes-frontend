import "./Navbar.css";
import Space from "src/shared/ui/space/Space";
import SpaceProps from "src/shared/ui/space/Space";
import addSvg from "src/assets/svg/add.svg";
import profileSvg from "src/assets/svg/profile.svg";
type NavbarProps= {
    icons: typeof SpaceProps[];
}

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className={"navbar-list"}>

                    <li className="navbar-list_item"><Space chosenSpace={"add"}/></li>
                    <li className="navbar-list_item"><Space chosenSpace={"icon-all-chat"}/></li>
                    <li className="navbar-list_item"><Space chosenSpace={"inactive-space"} children={"name"}/></li>
                    <li className="navbar-list_item"><Space chosenSpace={"icon-account"}></Space> </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
