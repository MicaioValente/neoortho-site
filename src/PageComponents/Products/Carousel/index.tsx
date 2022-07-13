// import { Carousel } from 'react-responsive-carousel'
import * as S from './styles'
import Image1 from '../../../../public/assets/images/image1.png'
// import Carousel from 'carousel-react-rcdev'import { Carousel } from 'antd';
import { Button } from 'antd';
import { useRef } from 'react';
// import { CarouselRef } from 'antd/lib/carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Carousel, { ItemProps } from 'better-react-carousel'

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const CarouselComponent = () => {
    const { } = Carousel
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    }
    const ref = useRef<Carousel>(null)

    function prev() {
        // ref.current ?
    }
    function next() {
        // ref.current?.next()
    }

    function Conponent() {
        return (
            <S.Container style={{ marginLeft: 0 }}>
                <S.ContainerImage>
                    <S.ImageC src={Image1} />
                </S.ContainerImage>
                <S.ContainerText>
                    <S.Title>haste intramedular de fêmur</S.Title>
                    <S.Tag>tipo</S.Tag>
                </S.ContainerText>
                <S.ContainerHover>
                    <S.SubTitle style={{ color: '#7D55C7', fontSize: '12px', margin: 0 }}>VER ESPECIFICAÇÕES TÉCNICAS</S.SubTitle>
                </S.ContainerHover>
            </S.Container>
        )
    }

    return (
        <S.ContainerCarrousel>
            <Carousel
                cols={4} rows={1} gap={2}
                ref={ref}
                tabIndex={6}
                arrowLeft={
                    <S.Button className='ButtonLeft'>
                        <LeftOutlined style={{ color: '#fff' }} />
                    </S.Button>
                }
                arrowRight={
                    <S.Button style={{ marginLeft: '60px' }} >
                        <RightOutlined style={{ color: '#fff' }} />
                    </S.Button>
                }
            >
                <Carousel.Item>
                    <Conponent />
                </Carousel.Item>
                <Carousel.Item>
                    <Conponent />
                </Carousel.Item>
                <Carousel.Item>
                    <Conponent />
                </Carousel.Item>
                <Carousel.Item>
                    <Conponent />
                </Carousel.Item>
                <Carousel.Item>
                    <Conponent />
                </Carousel.Item>
                <Carousel.Item>
                    <Conponent />
                </Carousel.Item>
                <Carousel.Item>
                    <Conponent />
                </Carousel.Item>
                <Carousel.Item>
                    <Conponent />
                </Carousel.Item>
            </Carousel>
        </S.ContainerCarrousel>
    )
}
export default CarouselComponent