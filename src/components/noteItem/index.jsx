import {FiPlus, FiX} from "react-icons/fi"
import {Container} from './style'

export function NewItem({value, isNew=false, onClick, ...rest}) {

  return(
    <Container isNew={isNew}>

      <input 
      type="text" 
      value={value}  
      readOnly={!isNew}
      {...rest}
      />

      <button 
      type="button" 
      onClick={onClick}
      className={isNew ? "btn-add ": "btn-del"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}