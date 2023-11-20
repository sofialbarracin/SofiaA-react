import { ConstructionOutlined } from "@mui/icons-material";
import { useState } from "react";

const Checkout = () => {
  // const [ nombre, setNombre] = useState("")
  //  const [ apellido, setApellido ] = useState("")
  // const [ email, setEmail ] = useState("")

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors ] = useState({
    nombre: null,
    apellido: null,
    email: null, 
  })

const capturarDatos = (e)=>{
  setUserInfo({...userInfo, [e.target.name]: e.target.value})

};

  const enviarFormulario = (e) => {
    e.preventDefault();

    if(userInfo.nombre.length < 5 || !userInfo.email.includes("@")) {
      if(userInfo.nombre.length < 5){
        setErrors({
          ...errors,
          nombre: "El nombre debe terna l menosa ",
        });
      }

      //setErrors({...errors, nombre: "el nombre debe tener 5 caracteres"})
      //return
    

    if( !userInfo.email.includes("@")){
      setErrors({...errors, email: "No corresponde a un email valido"})
      return;
    }
    return;
  }


    console.log(userInfo);
  };
console.log(errors)
  return (
    <div>
      <h1>estoy en el check out</h1>

      <form onSubmit={enviarFormulario}>
        <input  type="text" name="nombre" 
        onChange={capturarDatos} 
        placeholder="Nombre" />
        <span style={{ color: "crimson", fontSize: "0.5rem"}}>{errors.nombre}</span>
        <input type="text" name="apellido" 
        onChange={capturarDatos} 
        placeholder="Apellido"/>
        <span style={{ color: "rojo"}}>{errors.apellido}</span>
        <input type="text" name="email" 
        onChange={capturarDatos} 
        placeholder="Email"/>
        <span style={{ color: "rojo"}}>{errors.email}</span>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
