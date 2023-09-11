function validate(activity) {
    const patterns = {
      name: {
        pattern: /^\S[a-zA-Z\s]{1,20}\S$/,
        errorMessage: "El nombre debe ser con letras de A la Z y desde 3 hasta 30 caracteres",
      },
      difficulty: {
        pattern: /^(1|2|3|4|5)$/,
        errorMessage:
          "La dificultad debe ser igual o mayor 1, o igual o menor a 5",
      },
      duration: {
        pattern: /^(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24)$/,
        errorMessage: "La duración en horas debe ser igual o mayor 1, o igual o menor a 24",
      },
      season: {
        pattern: /^(Spring|Summer|Autumn|Winter)$/,
        errorMessage: "Debes seleccionar al menos una estación del año",
      },
    };
  
    let errorActivity = {};
  
    for (const error in patterns) {
      if (!patterns[error].pattern.test(activity[error])) {
        errorActivity[error] = patterns[error].errorMessage;
      }
    };
      return errorActivity;
  };

  export default validate;