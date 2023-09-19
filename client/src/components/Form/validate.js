function validate(input) {
  let errors = {};

  if(!input.name) {
    errors.name = "Debe ingresar un nombre para la actividad";
  } else if (!/^\S[a-zA-Z\s]{1,20}\S$/.test(input.name)) {
    errors.name = "El nombre debe ser con letras de A la Z y desde 3 hasta 30 caracteres";
  }
    
  if (!input.difficulty) {
    errors.difficulty = "Debe seleccionar una dificultad";
  }

  if (!input.duration) {
    errors.duration = "Debe seleccionar una duración en hs";
  }

  if (!input.season) {
    errors.season = "Debes seleccionar al menos una estación del año";
  }

  if (!input.countries) {
    errors.countries = "Debes seleccionar al menos un ispa";
  }
  return errors;
};

export default validate;