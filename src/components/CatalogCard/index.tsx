import { Link } from 'react-router-dom';
import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
  product: ProductDTO;
};

const formatarTempo = (tempo: string) => {
  const horas = tempo.split('h')[0];
  const minutos = tempo.split('h')[1]?.split('m')[0] || '00'; // Tratamento para caso não haja minutos
  return { horas, minutos };
};

export default function CatalogCard({ product }: Props) {
  const { horas, minutos } = formatarTempo(product.time);

  return (
    <Link to={`/product-details/${product.id}`}>
      <div className="dsc-card">
        <div className="dsc-catalog-card-bottom dsc-line-bottom">
          <h3 className="dsc-city-h3">{product.name}</h3>
          <h4 className="dsc-city-h4">{product.subDescription}</h4>
        </div>
        <div className="divider"></div>
        <div className="dsc-catalog-card-bottom dsc-line-bottom">
          <h4 className="dsc-city-p">{product.description}</h4>
          <div className="alert alert-light custom-alert" role="alert">
            <div className="time-content">
              <div className="time-part">
                <div className="label bi bi-clock">Tempo de espera</div>
                <span className="hour">{horas}h</span>
                <span className="minute">{minutos}m</span>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
