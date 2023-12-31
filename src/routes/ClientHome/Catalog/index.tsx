import "./styles.css";
import CatalogCard from "../../../components/CatalogCard";
import * as productService from "../../../services/product-service";



export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <h2 className="dsc-h2 dsc-mb20 dsc-mt20">Tempos de espera</h2>
        
        <div className="d-flex justify-content-between">
  <p className="dsc-mb20 dsc-mt20">
    <span className="dsc-light-text">
      Saiba quais as lojas com o atendimento mais rápido para o
    </span>{" "}
    <span className="dsc-bold-text">Cartão de Cidadão</span>
  </p>
  <div className="dropdown">
    <button className="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Cartão Cidadão - Pedido/Renovação
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</div>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
        {
              productService.findAll().map(
                product => <CatalogCard key={product.id} product={product} />
              )
            }
        </div>
      </section>
    </main>
  );
}


