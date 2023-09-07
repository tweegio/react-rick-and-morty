
import CharacterList from "./components/CharacterList"



function App(){


  
return   <div classname="container d-flex justify-content-center align-items-center vh-100">
<div className='bg-dark text-white'>
  <h1 className='text-center text-primary  py-4 font-weight-bold'>Rick and Morty's API</h1>

  <CharacterList/>
  

  </div>;
  </div>


}


export default App