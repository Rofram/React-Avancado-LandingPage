import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  subTitle: string
  children: React.ReactNode
}

const CardModule = ({ title, subTitle, children }: Props) => (
  <S.Card>
    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.TitleWrapper>

    <S.Content>{children}</S.Content>
  </S.Card>
)

export default CardModule
