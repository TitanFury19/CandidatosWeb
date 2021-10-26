import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { useStyles } from '../Styles'

const FormComponent = React.forwardRef((props, ref) => {
    const styles = useStyles();
    const error = props.error

    return (
        <div className={styles.modal}>
            <h3>{props.title}</h3>
            <TextField
                name="document"
                required
                className={styles.inputMaterial}
                label="Cédula"
                onChange={props.onChange}
                helperText={error && "Campo Obligatorio"} />
            <br />
            <TextField
                name="name"
                required
                className={styles.inputMaterial}
                label="Nombre"
                onChange={props.onChange}
                helperText={error && "Campo Obligatorio"} />
            <br />
            <TextField
                name="lastName"
                required
                className={styles.inputMaterial}
                label="Apellido"
                onChange={props.onChange}
                helperText={error && "Campo Obligatorio"} />
            <br />
            <TextField
                type="date"
                InputLabelProps={{ shrink: true, required: true }}
                name="birthday"
                className={styles.inputMaterial}
                label="Fechas de Nacimiento"
                onChange={props.onChange}
                helperText={error && "Campo Obligatorio"} />
            <br />
            <TextField
                name="actualJob"
                className={styles.inputMaterial}
                label="Trabajo Actual"
                onChange={props.onChange} />
            <br />
            <TextField
                name="salary"
                className={styles.inputMaterial}
                label="Expectativa Salarial"
                onChange={props.onChange} />
            <br />
            <TextField
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

export default FormComponent

