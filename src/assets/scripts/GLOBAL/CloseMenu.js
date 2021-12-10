export default function CloseMenu() {
  const MENU_CB = document.getElementById("menuClickBlocker");
  const MENU_DARKEN = document.getElementById("menuDarken");
  const MENU = document.getElementById("menuLinks");
  const MENU_CNT = document.querySelector(".menu-links-cnt");

  MENU_CNT.classList.toggle("deactive");
  MENU_CNT.style.pointerEvents = "none";
  MENU_DARKEN.style.pointerEvents = "none";
  document.getElementById("linkSet").style.height = 0;

  setTimeout(() => {
    MENU.style.width = "0";
  }, 500);
  setTimeout(() => {
    MENU_DARKEN.classList.toggle("deactive");
  }, 1500);
  setTimeout(() => {
    MENU_CB.style.display = "none";
    document.body.style.overflowY = "auto";
  }, 2500);
}
