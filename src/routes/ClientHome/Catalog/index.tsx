import "./styles.css";
import * as productService from '../../../Services/product-service';
import CatalogCard from "../../../components/CatalogCard";

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <h2 className="dsc-h2 dsc-mb20 dsc-mt20">Tempos de espera</h2>
        <p className="dsc-mb20 dsc-mt20">
          <span className="dsc-light-text">
            Saiba quais as lojas com o atendimento mais rápido para o
          </span>{" "}
          <span className="dsc-bold-text">Cartão de Cidadão</span>
        </p>
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {productService.findAll().map(
            product => <CatalogCard key={product.id} product={product} />
          )}
        </div>
      </section>
    </main>
  );
}


