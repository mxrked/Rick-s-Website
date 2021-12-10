export default function OpenMenu() {
  //alert(true);
  const MENU_CB = document.getElementById("menuClickBlocker");
  const MENU_DARKEN = document.getElementById("menuDarken");
  const MENU = document.getElementById("menuLinks");
  const MENU_CNT = document.querySelector(".menu-links-cnt");

  document.body.style.overflowY = "hidden";

  MENU_CB.style.display = "block";
  MENU.style.display = "block";
  MENU_CNT.style.display = "block";
  MENU_DARKEN.style.display = "block";
  MENU_DARKEN.style.pointerEvents = "none";
  MENU_CNT.style.pointerEvents = "auto";

  setTimeout(() => {
    MENU_DARKEN.classList.remove("deactive");
  }, 100);

  setTimeout(() => {
    MENU.style.width = "100%";
  }, 400);

  setTimeout(() => {
    MENU_CNT.classList.remove("deactive");
  }, 900);

  setTimeout(() => {
    MENU_DARKEN.style.pointerEvents = "auto";
  }, 1100);
}
