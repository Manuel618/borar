import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Contador() {
  const [contador, setcontador] = useState(0);
const sumar = () => {
    let contador1 = contador;
    contador1++;
    setcontador(contador1);
}
const restar = () => {
    let contador1 = contador;
    contador1--;
    setcontador(contador1);
}
const inicialisar =() =>{
    setcontador(0);
}
  return (
    <>
      <p>contador: {contador}</p>
      <p>
        <Button variant="primary" onClick={sumar}>+</Button>{' '}
        <Button variant="secondary" onClick={restar}>-</Button>{' '}
        <Button variant="success" onClick={inicialisar}>Reset</Button>{' '}
      </p>
    </>
  );
}

export default Contador;
