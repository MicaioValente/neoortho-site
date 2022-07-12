import * as S from './styles'
import Icon from './icon/Skeleton'
import { BsExclamationLg } from 'react-icons/bs'

export type Skeleton = {
    selectedCategory: number
    setSelectedCategory: Function
}

const Skeleton = ({ selectedCategory, setSelectedCategory }: Skeleton) => {
    return (
        <S.Container>
            <S.Row>
                <S.Head>
                    <S.Title>navegação pelo esqueleto</S.Title>
                    <S.ContainerIcon>
                        <BsExclamationLg color='#fff' />
                    </S.ContainerIcon>
                </S.Head>
            </S.Row>
            <S.ContainerSkeleton>
                <Icon selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </S.ContainerSkeleton>
        </S.Container>

    )
}

export default Skeleton
