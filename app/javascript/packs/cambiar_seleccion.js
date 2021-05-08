const selectConfiguracion = document.querySelector('#listado-de-opciones')

function cambiarConfiguracion(e) {
  console.log("cambiarConfiguracion")
  console.log("evento", e)
  console.log(e.target.value); // En la variable e.target.value se ve cual fue el select seleccionado

  const selectCountries = document.querySelector('#region_country_id')
  selectCountries.innerHTML = `<option value='1'>EStO FUE CAMBIADO por ${e.target.value}</option>`
}

selectConfiguracion.addEventListener('change', cambiarConfiguracion)
