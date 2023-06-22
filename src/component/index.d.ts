import { FC } from 'react'

import { AddModalProps } from './AddModal'
import { DeleteModalProps } from './DeleteModal'
import { EditModalProps } from './EditModal'
import { ModalProviderProps, ModalState } from './ModalContext'

export type AddModal = FC<AddModalProps>
export type EditModal = FC<EditModalProps>
export type DeleteModal = FC<DeleteModalProps>
export type ModalContextProvider = FC<ModalProviderProps>
export type useModalContext = () => ModalState
