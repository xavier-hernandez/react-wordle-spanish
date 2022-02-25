import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivina la palabra en 6 intentos. Después de cada intento, el color de las fichas se
         cambia para mostrar qué tan cerca estuvo tu conjetura de la palabra.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="J"
          status="correct"
        />
        <Cell value="U" />
        <Cell value="G" />
        <Cell value="A" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra J está en la palabra y en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
        <Cell value="C" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra N está en la palabra pero en el lugar equivocado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="V" />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra U no está en la palabra en ningún lugar.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
		    Presentado en español por Xavier Hernandez<br/> y Kelly Vargas.
		    <br/><br/>
        <a href="https://www.cognitoforms.com/Xavier8/WordleDeEspanolSoporte" className="underline font-bold">Preguntas o Problemas?</a>
		    <br/><br/>
		    Este es un clon de cwackerfuss/react-wordle<br/> <a href="https://github.com/cwackerfuss/react-wordle" className="underline font-bold"> mira el código aquí</a>
      </p>
    </BaseModal>
  )
}
