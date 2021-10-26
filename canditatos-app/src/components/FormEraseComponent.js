import React from 'react';
import { Button } from '@material-ui/core'
import { useStyles } from '../Styles'

const FormEraseComponent = React.forwardRef((props, ref) => {
    const candidato = props && props.value
    const styles = useStyles();

    return (
        <div className={styles.modal}>
            <p>Estás seguro que desea eliminar el candidato <b>{candidato && candidato.name}</b> ? </p>
            <div align="right">
                <Button color="secondary" onClick={props.deleteButtom}>Aceptar</Button>
                <Button onClick={props.close}>Cancelar</Button>

            </div>

        </div>
    )
})

export default FormEraseComponent