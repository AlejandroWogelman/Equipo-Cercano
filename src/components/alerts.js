import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const openModal = ({ name, distance }) => {
  const km = Math.round(distance);
  return MySwal.fire(`Estás a ${km}km de ${name}`);
};
