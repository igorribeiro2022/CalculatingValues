import { Loading } from "./style";


function Loader() {
  
  return (
    <Loading>
      <svg width="200" height="200" viewBox="0 0 40 60" >
        <polygon className="triangle" fill="none" stroke="var(--black-1)" stroke-width="1" points="16,1 32,32 1,32" />
        <text className="carregando" x="-1" y="45" fill="var(--black-1)" >Carregando...</text>
      </svg>
    </Loading>
  );
}

export default Loader;
