import './App.css';
import React, { useEffect, useState } from 'react';
import logo from "./assets/img/banreservas-logo.png"
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Modal,
  Button,
  CircularProgress,
  Box
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { useStyles } from './Styles'
import { getCandidatos, postCandidatos, updateCandidato, deleteCandidato } from './services/CandidateServices';
import { dateformat } from './utils/dateFormat';
import FormComponent from './components/FormComponent';
import FormUpdateComponent from './components/FormUpdateComponent';
import FormEraseComponent from './components/FormEraseComponent';

function App() {

  const styles = useStyles();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalErase, setModalErase] = useState(false);
  const [error, setError] = useState(false)
  const [fields, setFields] = useState({
    document: "",
    name: "",
    lastName: "",
    birthday: "",
    actualJob: "",
    salary: "",
    observations: "",
  })

  const handleNewCandidateModal = () => {
    setModalInsert(!modalInsert);
  }

  const handleUpdateCandidateModal = () => {
    setModalUpdate(!modalUpdate);
  }

  const handleDeleteCandidateModal = () => {
    setModalErase(!modalErase);
  }

  const doRequest = async (event) => {
    const request = {};
    setIsLoading(true)
    getCandidatos(request)
      .then(res => {
        setIsLoading(false)
        setData(res)
      })
  }

  const createNewCandidate = async () => {
    if (!fields.document ||
      !fields.name ||
      !fields.lastName ||
      !fields.birthday
    ) {
      setError(true)
      return
    };
    const request = {
      cedula: fields.document,
      nombre: fields.name,
      apellido: fields.lastName,
      fechaNacimiento: fields.birthday,
      trabajoActual: fields.actualJob,
      expectativaSalarial: fields.salary,
      observaciones: fields.observations
    };
    setIsLoading(true)
    postCandidatos(request)
      .then(() => {
        setIsLoading(false)
        doRequest();
      })
      handleNewCandidateModal();
    setError(false)
  }

  const deleteCandidateSelected = async () =>{
    const request = {
      id: fields &&  fields.id
    };
    deleteCandidato(request)
    .then(() => {
      doRequest();
      handleDeleteCandidateModal();
    })
  }

  const selectCandidate = (action, item) => {
    if (action === 'edit') {
      setFields({
        id: item.id,
        document: item.cedula,
        name: item.nombre,
        lastName: item.apellido,
        birthday: item.fechaNacimiento,
        actualJob: item.trabajoActual,
        salary: item.expectativaSalarial,
        observations: item.observaciones,
      })
      handleUpdateCandidateModal()
    }else if(action === 'erase'){
      setFields({
        id: item.id,
        name: item.nombre,
      })
      handleDeleteCandidateModal()
    }
  }

  const updateCandidate = async () => {
    if (!fields.document ||
      !fields.name ||
      !fields.lastName ||
      !fields.birthday
    ) {
      setError(true)
      return
    };
    const request = {
      idCandidato: {
        id: fields && fields.id
      },
      datosCandidato: {
        cedula: fields.document,
        nombre: fields.name,
        apellido: fields.lastName,
        fechaNacimiento: fields.birthday,
        trabajoActual: fields.actualJob,
        expectativaSalarial: fields.salary,
        observaciones: fields.observations
      }
    };
    updateCandidato(request)
      .then(() => {
        doRequest();
      })
    handleUpdateCandidateModal()
    setFields({})
    setError(false)
  }

  useEffect(async () => {
    await doRequest();
  }, [])

  const handleChange = e => {
    setFields(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="App">
      <div className="Content">
        <img className="image_logo" src={logo} alt='app' />
        <br />
        <div className='headerContent'>
          <h1 className="title"> Listado de Candidatos </h1>
          <Button onClick={() => handleNewCandidateModal()} style={{ backgroundColor: '#2eade5', color: 'white', margin: 10 }}>Agregar Nuevo Candidato +</Button>
        </div>
        <br /><br />
        {isLoading ?
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
          :
          <TableContainer style={{ alignSelf: 'center' }}>
            <Table>
              <TableHead style={{
                backgroundColor: 'lightgray',
                fontWeight: 'bold'
              }}>
                <TableRow>
                  <TableCell>Cédula</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell>Fecha de Nacimiento</TableCell>
                  <TableCell>Trabajo Actual</TableCell>
                  <TableCell>Expectativa Salarial</TableCell>
                  <TableCell>Observaciones</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data && data.length > 0
                  && data.map(item => (
                    <TableRow key={item.id}>
                      <TableCell>{item.cedula}</TableCell>
                      <TableCell>{item.nombre}</TableCell>
                      <TableCell>{item.apellido}</TableCell>
                      <TableCell> {dateformat(item.fechaNacimiento)}</TableCell>
                      <TableCell>{item.trabajoActual}</TableCell>
                      <TableCell>{item.expectativaSalarial}</TableCell>
                      <TableCell>{item.observaciones}</TableCell>
                      <TableCell>
                        <Edit className={styles.icons} onClick={() => selectCandidate('edit', item)} />
                        &nbsp;&nbsp;&nbsp;
                        <Delete className={styles.icons} onClick={() => selectCandidate('erase', item)} />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>

            </Table>
          </TableContainer>
        }
        <Modal
          open={modalInsert}
          onClose={handleNewCandidateModal}>
          <FormComponent
            title={"Nuevo Candidato"}
            onChange={handleChange}
            buttom={() => createNewCandidate()}
            titleButtom={'Aceptar'}
            cancel={() => handleNewCandidateModal()}
            error={error}
          />
        </Modal>

        <Modal
          open={modalUpdate}
          onClose={handleUpdateCandidateModal}>
          <FormUpdateComponent
            title={"Editar Candidato"}
            onChange={handleChange}
            buttom={() => updateCandidate()}
            titleButtom={'Aceptar'}
            cancel={() => handleUpdateCandidateModal()}
            error={error}
            value={fields} />
        </Modal>

        <Modal
          open={modalErase}
          onClose={handleDeleteCandidateModal}
        >
          <FormEraseComponent
           value={fields}
            deleteButtom={() => deleteCandidateSelected()}
            close={() => handleDeleteCandidateModal()}
          />
        </Modal>
      </div>

    </div>
  );
}

export default App;
