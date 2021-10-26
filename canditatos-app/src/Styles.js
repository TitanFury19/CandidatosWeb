import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  icons: {
    cursor: 'pointer'
  },
  inputMaterial: {
    width: '100%',

    marginBottom: 10,
    justifyContent: 'center'
  },

  tableHead: {
    backgroundColor: '#2eade5',
    color: 'white',
  },

}));
