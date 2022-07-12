import { Carousel } from 'react-responsive-carousel'
import * as S from './styles'
import Image1 from '../../../../public/assets/images/image1.png'

const CarouselComponent = () => {
    return (
        <Carousel
        >
            <S.Container>
                <S.ContainerImage>
                    <S.ImageC src={Image1} />
                </S.ContainerImage>
                <S.ContainerText>
                    <S.Title>haste intramedular de fêmur</S.Title>
                    <S.Tag>tipo</S.Tag>
                </S.ContainerText>
                <S.ContainerHover>
                    <S.Title style={{ color: '#7D55C7', fontSize: '12px' }}>VER ESPECIFICAÇÕES TÉCNICAS</S.Title>
                </S.ContainerHover>
            </S.Container>
            <S.Container>
                <S.ContainerImage>
                    <S.ImageC src={Image1} />
                </S.ContainerImage>
                <S.ContainerText>
                    <S.Title>haste intramedular de fêmur</S.Title>
                    <S.Tag>tipo</S.Tag>
                </S.ContainerText>
                <S.ContainerHover>
                    <S.Title style={{ color: '#7D55C7', fontSize: '12px' }}>VER ESPECIFICAÇÕES TÉCNICAS</S.Title>
                </S.ContainerHover>
            </S.Container>
            <S.Container>
                <S.ContainerImage>
                    <S.ImageC src={Image1} />
                </S.ContainerImage>
                <S.ContainerText>
                    <S.Title>haste intramedular de fêmur</S.Title>
                    <S.Tag>tipo</S.Tag>
                </S.ContainerText>
                <S.ContainerHover>
                    <S.Title style={{ color: '#7D55C7', fontSize: '12px' }}>VER ESPECIFICAÇÕES TÉCNICAS</S.Title>
                </S.ContainerHover>
            </S.Container>


        </Carousel>
    )
}

export default CarouselComponent