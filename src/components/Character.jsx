//En lugar de props en la función solo uso "caracter"
function Character({ character }) {
  return (
    <div className="text-center p-5" key={character.id}>
    <h3>{character.name}</h3>
    <img class="border border-primary rounded-circle" src={character.image} alt={character.name}/>
<p>{character.name.origin}</p>
</div>
  );
}

export default Character;