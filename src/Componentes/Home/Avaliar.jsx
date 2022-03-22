import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/auth";

export const Avaliate = () => {
  const { user } = useAuth();

  const btnh = (
    <p className="app-header" style={{ textAlign: "center" }}>
      Acesso negado, volte para{" "}
      <Link to={"/"} className="text-dark bg-warning">
        HOME
      </Link>
    </p>
  );

  if (user === "andrecosta8224@gmail.com") {
    return btnh;
  }

  return (
    <div id="avaliacao" className="app-header">
      <main>
        <section style={{ padding: "10px" }} className="section">
          <h3>Esta área é onde você poderá avaliar o nosso site.</h3>
          <p>Entre no link abaixo para comentar</p>
          <li>
            <Link className="linksfontesz" to={"/avaliacaoindex"}>
              Página de avaliações
            </Link>
          </li>
        </section>
      </main>
    </div>
  );
};
