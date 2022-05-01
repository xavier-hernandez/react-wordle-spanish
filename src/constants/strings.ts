export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = 'Juego copiado al portapapeles'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'No hay suficientes letras'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'El modo difícil solo se puede habilitar al principio!'
export const HARD_MODE_DESCRIPTION =
  'Cualquier pista revelada debe usarse en conjeturas posteriores'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para mejorar la vista del color'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Debe usar ${guess} en la posición ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Supongo que debe contener ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estadísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribución de conjeturas'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'Compartir Resultados'
export const TOTAL_TRIES_TEXT = 'Intentos totales'
export const SUCCESS_RATE_TEXT = 'Tasa de éxito'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Est� utilizando un navegador integrado y puede tener problemas para compartir o guardar sus resultados. Le recomendamos que utilice el navegador predeterminado de su dispositivo."