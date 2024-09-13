import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MainMenu.css";

import productData from "../../assets/productData.json";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const MainMenu = () => {
  const [optionsEquipoProceso, setOptionsEquipoProceso] = useState([]);
  const [optionsEquipoCorte, setOptionsEquipoCorte] = useState([]);
  const [optionsEquipoEmpacado, setOptionsEquipoEmpacado] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let data = [];
    productData.productsSubCategory.proceso.map((subcategory) => {
      data.push({
        optionName: subcategory,
        optionRef: subcategory.replace(/\s/g, "").toLowerCase(),
      });
    });
    setOptionsEquipoProceso(data);

    data = [];
    productData.productsSubCategory.corte.map((subcategory) => {
      data.push({
        optionName: subcategory,
        optionRef: subcategory.replace(/\s/g, "").toLowerCase(),
      });
    });
    setOptionsEquipoCorte(data);

    data = [];
    productData.productsSubCategory.empacado.map((subcategory) => {
      data.push({
        optionName: subcategory,
        optionRef: subcategory.replace(/\s/g, "").toLowerCase(),
      });
    });
    setOptionsEquipoEmpacado(data);
  }, []);

  return (
    <div className="container text-center main-menu-container">
      <div className="row justify-content-center max-width main-menu-row">
        <div className="col-sm-12 col-md-2 menu-col">
          <button
            className="btn dropdown-header"
            type="button"
            onClick={() => navigate("/")}
          >
            Inicio
          </button>
        </div>
        <div className="col-sm-12 col-md-2 menu-col">
          <DropDownMenu
            menuHeaderName="proceso"
            menuOptions={optionsEquipoProceso}
          />
        </div>
        <div className="col-sm-12 col-md-2 menu-col">
          <DropDownMenu
            menuHeaderName="corte"
            menuOptions={optionsEquipoCorte}
          />
        </div>
        <div className="col-sm-12 col-md-2 menu-col">
          <DropDownMenu
            menuHeaderName="empacado"
            menuOptions={optionsEquipoEmpacado}
          />
        </div>
        <div className="col-sm-12 col-md-2 menu-col">
          <button
            className="btn dropdown-header"
            type="button"
            onClick={() => navigate("/contact")}
          >
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
