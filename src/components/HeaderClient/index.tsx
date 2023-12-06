import { Link } from "react-router-dom";
import "./styles.css";

export default function HeaderClient() {
  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <Link to="/">
            <h1>Serviços da Justiça</h1>
          </Link>
        </nav>
      </header>
    </>
  );
}
