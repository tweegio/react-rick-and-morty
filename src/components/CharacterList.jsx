import { useEffect, useState } from "react"
import Character from "./Character"

function NavPage(props){

return(
  
  <div className="d-flex justify-content-between"><p>Page {props.page}</p>
  <button className="btn btn-success btn-sm"
    onClick={() => props.setPage(props.page + 1)}>
    Page {props.page + 1}
  </button>
  </div>
 
) 
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  //Esta constante es para corregir la carga de conexiones lentas
  const [loading, setLoading] = useState(true);
  
  const [page, setPage]= useState(1)
  //Este hook con un arreglo vacio como segundo paramentro, permite reenderizar objetos
  
  useEffect(() => {
    //Función que permite usar sintaxis async await
    async function fetchData() {
      //Petición a la API
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    //llamado de función
    fetchData()
  }, [page]);


  return (
    <div className="container bg-dark">
      
      <NavPage page={page} setPage={setPage}/>
      
      {loading ? (
        <h1>Lading...</h1>
) : (
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
              
            </div>
              
          );
        })}
      </div>
)}
      <div class="text-center p-5"><h2><a href="https://rickandmortyapi.com/">Go to API</a></h2></div>
      <NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default CharacterList;