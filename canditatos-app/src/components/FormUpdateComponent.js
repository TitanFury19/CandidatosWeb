import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { useStyles } from '../Styles'
import moment from 'moment';

const FormUpdateComponent = React.forwardRef((props, ref) => {
    const styles = useStyles();
    const error = props.error
    const candidato = props && props.value
    const now = moment(new Date()).format('yyyy-MM-DD')
    const fechaNacimiento = moment(candidato.birthday).format('yyyy-MM-DD')

    return (
        <div className={styles.modal}>
            <h3>{props.title}</h3>
            <TextField
                value={candidato && candidato.document}
                name="document"
                required
                className={styles.inputMaterial}
                label="Cédula"
                onChange={props.onChange}
                helperText={error && "Campo Obligatorio"} />
            <br />
            <TextField
                value={candidato && candidato.name}
                name="name"
                required
                className={styles.inputMaterial}
                label="Nombre"
                onChange={props.onChange}
                helperText={error && "Campo Obligatorio"} />
            <br />
            <TextField
                value={candidato && candidato.lastName}
                name="lastName"
                required
                className={styles.inputMaterial}
                label="Apellido"
                onChange={props.onChange}
                helperText={error && "Campo Obligatorio"} />
            <br />
            <TextField
                // value={moment(birthday).format('yyyy-MM-dd')}
                type="date"
                InputLabelProps={{ shrink: true, required: true }}
                name="birthday"
                className={styles.inputMaterial}
                label="Fechas de Nacimiento"
                onChange={props.onChange}
                defaultValue={fechaNacimiento || now}
                helperText={error && "Campo Obligatorio"} />
            <br />
            <TextField
                value={candidato && candidato.actualJob}
                name="actualJob"
                className={styles.inputMaterial}
                label="Trabajo Actual"
                onChange={props.onChange} />
            <br />
            <TextField
                value={candidato && candidato.salary}
                name="salary"
                className={styles.inputMaterial}
                label="Expectativa Salarial"
                onChange={props.onChange} />
            <br />
            <TextField
                value={candidato && candidato.observations}
                name="observations"
                className={styles.inputMaterial}
                label="Observaciones"
                onChange={props.onChange} />
            <br /><br />
            <div align="right">
                <Button color="primary" onClick={props.buttom}>{props.titleButtom}</Button>
                <Button onClick={props.cancel}>Cancelar</Button>
            </div>
        </div>
    )

})

export default FormUpdateComponent

