import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({guardarBusquedaLetra}) => {

    //  State del Formulario
    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    
    const [error, guardarError] = useState(false);

    //Extraer los datos de busqueda
    const { artista, cancion } = busqueda;

    //Función a cadainput para leer su contenido
    const actualizarState = e => {

        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });

    }

    //Funcion para validar y enviar al componente principal
    const buscarInformacion = (e) => {
        e.preventDefault();

        //Validar
        if (artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }
        
        //Validado todo se pasa al componente principal
        guardarError(false);
        guardarBusquedaLetra(busqueda)
    }

    return (
      <div className="bg-info">
        {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

        <div className="container">
          <div className="row">
            <form
              className="col card text-white bg-transparent mb-5 pt-5 pb-2"
              onSubmit={buscarInformacion}
            >
              <fieldset>
                <legend className="text-center">
                  Buscador Letras Canciones
                </legend>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Artista</label>
                      <input
                        type="text"
                        className="form-control"
                        name="artista"
                        placeholder="Nombre Artista"
                        value={artista}
                        onChange={actualizarState}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Canción</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cancion"
                        placeholder="Nombre Canción"
                        value={cancion}
                        onChange={actualizarState}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary float-right">
                  Consultar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
}

Formulario.propTypes = {
  guardarBusquedaLetra: PropTypes.func.isRequired
};
 
export default Formulario;