import React from 'react'

import * as S from './styles'

type Props = {
  id?: string
  children: React.ReactNode
}

const Container = ({ children, id }: Props) => (
  <S.Container id={id}>{children}</S.Container>
)

export default Container
