import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import {  MyTextInput } from '../components'

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Formik Register Page</h1>

            <Formik
                initialValues={{
                    firstName: '',                  
                    email: '',
                    password: '',
                    passwordConfirmation: ''

                }}
                onSubmit={ ( values ) => {
                    console.log( values )
                }}
                validationSchema={Yup.object({
                        name: Yup.string()
                                        .min(2, 'Debe tener 2 caracteres minimo')
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('Requerido'),                       
                        email:     Yup.string()
                                        .email('El correo no tiene un formato válido')
                                        .required('Requerido'),
                        password:  Yup.string()
                                        .min(6, 'Debe tener 6 caracteres minimo')
                                        .required('Requerido'),
                        passwordConfirmation: Yup.string()
                                        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
                        // file: Yup.mixed()
                        //                 .test('required', "You need to provide a file", (value) =>{
                        //                     return value && value.length
                        //                 } )
                        //                 .test("fileSize", "The file is too large", (value, context) => {
                        //                     return value && value[0] && value[0].size <= 200000;
                        //                 })
                        //                 .test("type", "We only support jpeg", function (value) {
                        //                     return value && value[0] && value[0].type === "image/jpeg";
                        //                 }),
                       
                    })
                }>

                    {({handleReset}) => (
                            <Form>
                                <MyTextInput
                                  label="Nombre"
                                  name="name" 
                                  placeholder="Nombre"
                                />
      
                                <MyTextInput
                                  label="Correo"
                                  name="email" 
                                  placeholder="Correo"
                                  type="email"
                                />  

                                <MyTextInput
                                  label="Contraseña"
                                  name="password"                                 
                                  type="password"
                                />

                                <MyTextInput
                                  label="Confirmar Contraseña"
                                  name="passwordConfirmation"                                 
                                  type="password"
                                />
                            
                                <button type="submit">Enviar</button>

                                <button type="button" onClick={handleReset}>Limpiar Formulario</button>
                            </Form>
                        )
                    }                

            </Formik>            

        </div>
    )
}
