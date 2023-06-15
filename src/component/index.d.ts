import { FC } from 'react'

import { AddModalProps } from './AddModal'
import { DeleteModalProps } from './DeleteModal'
import { EditModalProps } from './EditModal'
import { ModalProviderProps, ModalState } from './ModalContext'

export const AddModal: FC<AddModalProps>
export const EditModal: FC<EditModalProps>
export const DeleteModal: FC<DeleteModalProps>
export const ModalContextProvider: FC<ModalProviderProps>
export const useModalContext: () => ModalState
