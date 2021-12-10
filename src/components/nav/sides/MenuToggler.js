import OpenMenu from "../../../assets/scripts/GLOBAL/OpenMenu";

const MenuToggler = () => {
  return (
    <button id="menuToggler" onClick={OpenMenu}>
      <span className="menu-toggler-span page-transition" />
      <span className="menu-toggler-span page-transition" />
      <span className="menu-toggler-span page-transition" />
    </button>
  );
};

export default MenuToggler;
