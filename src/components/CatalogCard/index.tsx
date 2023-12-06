import { Link } from 'react-router-dom';
import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
  product: ProductDTO;
};

// Função utilitária para formatar a string de tempo
const formatarTempo = (tempo: string) => {
  const horas = tempo.split('h')[0];
  const minutos = tempo.split('h')[1].split('m')[0];
  return `${horas}h ${minutos}m`;
};

export default function CatalogCard({ product }: Props) {
  return (
    <Link to={`/product-details/${product.id}`}>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top ">
          <h3 className="dsc-lisboa-h3">{product.name}</h3>
        </div>
        <div className="dsc-catalog-card-bottom dsc-line-bottom">
          <h4 className="dsc-lisboa-p">{product.description}</h4>
          <button className="dsc-time-button" disabled>
            <div className="time-content">
              <div className="label">Tempo de espera</div>
              <div className="dot"></div>
              <div className="time-container">
                <div className="time-part">
                  {/* Usando a função utilitária para formatar o tempo */}
                  <span className="hour">{formatarTempo(product.time)}</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </Link>
  );
}
