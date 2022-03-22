import React, { useEffect, useState } from "react";
import { useAuth } from "../../Providers/auth";
import Api from "../../Service/api";
import ModalEdit from "./modal";

function Perfil() {
  const { user, setUser } = useAuth();

  const [dadousu, setDadoUsu] = useState([]);

  var usuId = "";

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (dadosusu) => {
    setShow(true);
    setUserupdate(dadosusu);
  };

  const [userupdate, setUserupdate] = useState();

  useEffect(() => {
    Api.get("/usuarios/")
      .then((res) => setDadoUsu(res.data))
      .catch((err) => window.alert(err));
  });

  dadousu.map((dado) => {
    if (dado.email === user) {
      return (usuId = dado.userId);
    }
    return console.log("Usuário não encontrado");
  });

  if (user.email === "") {
    var log = (
      <h1 className="app-header">usuário não encontrado, faça login!</h1>
    );
    return log;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ email: "" });
    window.location.assign("/");
  };

  const deletar = () => {
    const conf = window.confirm("Tem certeza  que deseja deletar?");
    if (conf) {
      Api.delete(`/usuarios/${usuId}`)
        .then(() => window.location.assign("/"))
        .catch((err) => window.alert(err));
      handleLogout();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="app-header">
      <h2
        className="text-light border bg-primary"
        style={{
          margin: "auto",
          width: "15%",
          textAlign: "center",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        PERFIL
      </h2>
      <section className="section">
        <article className="row">
          {dadousu.map((dado) => {
            return (
              <div key={dado.id}>
                <p>Nome:</p>
                <p style={{ paddingLeft: "20px" }}>
                  {user === dado.email ? dado.nome : ""}
                </p>
                <p>Email:</p>
                <p style={{ paddingLeft: "20px" }}>
                  {user === dado.email ? dado.email : ""}
                </p>
                <p>Classificação:</p>
                <p style={{ paddingLeft: "20px" }}>
                  {user === dado.email ? dado.role : ""}
                </p>
                <div key={dado.id}>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleShow(dado)}
                  >
                    ALTERAR
                  </button>
                  <br />
                  <br />
                  <button className="btn btn-danger" onClick={deletar}>
                    DELETAR
                  </button>
                  <br />
                  <br />
                  <button className="btn btn-primary" onClick={handleLogout}>
                    SAIR
                  </button>
                </div>
              </div>
            );
          })}
        </article>
        <article className=""></article>
      </section>
      {show ? (
        <ModalEdit show={show} handleClose={handleClose} dado={userupdate} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Perfil;
