import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="error-page">
      <h1>Oops!</h1>
      <p>Désolé, une erreur est survenue ! Veuillez rafraichir la page </p>
      <p>
      </p>
    </div>
  );
}