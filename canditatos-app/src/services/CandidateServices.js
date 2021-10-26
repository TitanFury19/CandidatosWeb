import BaseApi from "./BaseApi";
import { AlertComponet } from "../components/AlertComponent";

const candidatosUrl = 'api/CandidatosEvaluados'

const successCreateMessage = "Candidato registrado con éxito"
const successUpdateMessage = "Candidato actualizado con éxito"

const updateCandidatosUrl = id => {
    return `api/CandidatosEvaluados/${id}`
}
const deleteCandidatosUrl = id => {
    return `api/CandidatosEvaluados/${id}`
}

const getCandidatos = request =>
    BaseApi.get(candidatosUrl, request)
        .then(res => {
            const _data = res.data
            if (_data && _data.length > 0) {
                return _data
            }else {
                return []
            }
        }).catch((error) => {
            AlertComponet('Advertencia', 'Parece que ocurrio un error en la conexion', 'error')
            console.log(error)
        })

const postCandidatos = request =>
    BaseApi.post(candidatosUrl, request)
        .then(res => {
            const _data = res.data
            if (_data && _data.message === successCreateMessage) {
                AlertComponet('Aviso', _data.message, 'success')
            }
        }).catch((error) => {
            AlertComponet('Advertencia', 'Cedula existente o problemas en la conexión', 'error')
        })

const updateCandidato = request =>
    BaseApi.put(updateCandidatosUrl(request.idCandidato.id), request.datosCandidato)
        .then(res => {
            const _data = res.data
            if (_data && _data.message === successUpdateMessage) {
                AlertComponet('Aviso', _data.message, 'success')
            }
        }).catch((error) => {
            console.log(error)
            AlertComponet('Advertencia', 'Ocurrio un error al momento de actualizar', 'error')
        })


const deleteCandidato = request => 
    BaseApi.delete(deleteCandidatosUrl(request.id))
        .then(res => {
            const _data = res.data
            if (_data && _data.message) {
                AlertComponet('Aviso', _data.message, 'success')
            }
        }).catch((error) => {
            console.log(error)
            AlertComponet('Advertencia', 'No se pudo eliminar el candidato seleccionado', 'error')
        })


export {
    getCandidatos,
    postCandidatos,
    updateCandidato,
    deleteCandidato
}