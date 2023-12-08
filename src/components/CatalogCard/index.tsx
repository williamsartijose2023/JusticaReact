import FaRegClock from "../../assets/FaRegClock.svg";
import FaRegUser from "../../assets/FaRegUser.svg";
import dividerImg from "../../assets/Divider.svg";
import { Link } from 'react-router-dom';
import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
  product: ProductDTO;
};

const formatarTempo = (tempo: string) => {
  const horas = tempo.split('h')[0];
  const minutos = tempo.split('h')[1]?.split('m')[0] || '00'; // Tratamento para caso não haja minutos
  const timePerson = tempo.split('h')[0];

  return { horas, minutos, timePerson };
};

export default function CatalogCard({ product }: Props) {
  const { horas, minutos,} = formatarTempo(product.time);
  return (
    <Link to={`/product-details/${product.id}`}>
      <div className="dsc-catalog-card dsc-catalog-card-bottom">
        <div className="dsc-catalog-card-bottom dsc-line-bottom">
          <h3 className="dsc-city-h3">{product.name}</h3>
          <h4 className="dsc-city-h4">{product.subDescription}</h4>
          <div className=" dsc-divider">
          <img src={dividerImg} alt="Divider" />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h4 className="dsc-city-p">{product.description}</h4>
          <div className="alert alert-light custom-alert" role="alert">
            <div className="dsc-iconclock">
              <img src={FaRegClock} alt="Clock" />
            </div>
            <div className="time-label">Tempo de espera</div>
            <div className="time-content">
            <div className="time-part">
              <span className="number">{horas}</span>
              <span className="letter">h</span>
              <span className="number">{minutos}</span>
              <span className="letter">m</span>
            </div>
          </div>
        </div>
          <div className="alert alert-light custom-alert" role="alert">
            <div className="user-icon">
              <img src={FaRegUser} alt="User" />
            </div>
            <div className="user-label">Pessoas em espera</div>
          <div className="user-part">
            <span className="number">32</span>
          </div>
        </div>
      </div>
      </div>
        </div>
       
       
    </Link>
  );
}
