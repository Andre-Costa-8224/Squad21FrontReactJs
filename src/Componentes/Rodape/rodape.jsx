import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  var data = new Date()
  var mes = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
  return (
    <footer class="border-top">
      <span>
        &copy; {data.getDate()+" / "+mes[data.getMonth()]+" / "+data.getFullYear()} - Refugiados -{" "}
        <Link to={"/sobre"}>Sobre</Link>
      </span>
      | <span>Contato: squad21github@gmail.com</span>
    </footer>
  );
}

export default Footer;
