import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { serverTimestamp} from "firebase/firestore";






const checkoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", apellido: "", email: "", telefono: "" },

    onSubmit: (data) => {
      console.log("se envio");
      console.log(data);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string().required("El campo es obligatorio"),
      apellido: Yup.string().required("El campo es obligatorio"),
      email: Yup.string()
        .email("El email requiere un @")
        .required("El campo es obligatorio"),
      telefono: Yup.string().required("El campo es obligatorio"),
    }),
  });

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="filled"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Apellido"
          variant="filled"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <TextField
          label="Email"
          variant="filled"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Teléfono"
          variant="filled"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant="outlined" type="button">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default checkoutFormik;
