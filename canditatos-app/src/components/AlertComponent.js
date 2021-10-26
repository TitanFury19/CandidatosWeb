import swal from "sweetalert"

export const AlertComponet = (title, text, icon) => {

  swal({
    title: title,
    text: text,
    icon: icon,
    buttons: "Aceptar",
  })

}