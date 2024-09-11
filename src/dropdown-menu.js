export function dropdownMenuButton(dropdownButtons, dropdownLists) {
  for (let i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].addEventListener("mouseover", () => {
      dropdownLists[i].classList.remove("hidden");
    });
  }
  for (let i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].addEventListener("mouseout", () => {
      dropdownLists[i].classList.add("hidden");
    });
  }
}
