import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

import {
  PRESENTED_BY, VERSION, CONTACT, GITHUB
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Bienvenido a Wordle en español.<br/>
        (Spanish Wordle)
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Un rompecabezas de palabras diario.
      </p>
      <br/>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivina la palabra en 6 intentos. Después de cada intento, el color de las fichas se
         cambia para mostrar qué tan cerca estuvo para completar la palabra.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
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

      <div className="mb-1 mt-4 flex justify-center">
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

      <div className="mb-1 mt-4 flex justify-center">
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
      <div dangerouslySetInnerHTML={{__html: PRESENTED_BY}}/>
      <br/>
      <div dangerouslySetInnerHTML={{__html: VERSION}}/>
      <br/>
      <div dangerouslySetInnerHTML={{__html: CONTACT}}/>
		  <br/>
      <div dangerouslySetInnerHTML={{__html: GITHUB}}/>
      </p>
    </BaseModal>
  )
}
