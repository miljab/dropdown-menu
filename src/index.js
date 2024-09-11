import { dropdownMenuButton } from "./dropdown-menu";
import "./styles.css";

const dropdownButtons = document.querySelectorAll(".dropdown-button");
const dropdownLists = document.querySelectorAll(".dropdown-items");

dropdownMenuButton(dropdownButtons, dropdownLists);
