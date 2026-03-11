import { useEffect, useState } from "react";
import { getEcopoints } from "../api/api";

export default function Ecopoints({ token }) {
  const [ecopoints, setEcopoints] = useState([]);

  useEffect(() => {
    getEcopoints(token).then(setEcopoints);
  }, []);

  return (
    <div>
      <h2>Ecopoints</h2>
      <ul>
        {ecopoints.map(e => (
          <li key={e._id}>
            {e.nombre} - {e.codigoPostal}
          </li>
        ))}
      </ul>
    </div>
  );
}
