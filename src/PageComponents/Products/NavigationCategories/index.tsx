import * as S from './styles'
import { BsExclamationLg } from 'react-icons/bs'
import { Paragraph } from '../../../components/Paragraph'
import { useState } from 'react'
import Categorias from './mock'
import Skeleton from '../skeleton'
import Carousel from '../Carousel';

export type TypesCategories = {
    name: string,
    id: number
}

export type SubCategory = {
    name: string,
    id: number,
    types: TypesCategories[]
}

export type Category = {
    name: string
    id: number
    subCategory: SubCategory[]
}

const SubCategories = (id: number) => {
    console.log(id)
}

const Types = (id: number) => {
    console.log(id)
}

const Products = (id: number) => {
    console.log(id)
}

const NavigationCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0)
    const [selectedSubCategory, setSelectedSubCategory] = useState<number>(0)
    const [selectedTypes, setSelectedTypes] = useState<number>(0)

    const TypesComponent = (e: Category) => {
        if (selectedSubCategory) {
            const typesSelected = e.subCategory.filter(e => e.id === selectedSubCategory)
            if (typesSelected.length <= 0) return
            if (typesSelected[0].types.length <= 0) return
            return (
                <>
                    <Paragraph style={{ fontSize: '12px' }}>Tipos</Paragraph>
                    <S.ContainerCategorias>
                        {typesSelected[0]?.types.map((e: TypesCategories, i: any) => {
                            return (
                                <>
                                    <S.ContainerTextCategories
                                        key={i}
                                        selected={e.id === selectedTypes}
                                        onClick={() => { setSelectedTypes(e.id === selectedTypes ? 0 : e.id), Products(e.id) }}
                                    >
                                        <S.Paragraph>{e.name}</S.Paragraph>
                                    </S.ContainerTextCategories>
                                </>
                            )
                        })}
                    </S.ContainerCategorias>
                </>
            )
        }
    }


    const SubCategoriesComponent = () => {
        if (selectedCategory) {
            const categoriaSelected = Categorias.filter(e => e.id === selectedCategory)
            return (
                <>
                    <Paragraph style={{ fontSize: '12px' }}>SUBCATEGORIA</Paragraph>
                    <S.ContainerCategorias>
                        {categoriaSelected[0].subCategory.map((e: SubCategory, i: any) => {
                            return (
                                <>
                                    <S.ContainerTextCategories
                                        key={i}
                                        selected={e.id === selectedSubCategory}
                                        onClick={() => { setSelectedSubCategory(e.id === selectedSubCategory ? 0 : e.id), Types(e.id) }}
                                    >
                                        <S.Paragraph>{e.name}</S.Paragraph>
                                    </S.ContainerTextCategories>

                                </>
                            )
                        })}
                    </S.ContainerCategorias>
                    {TypesComponent(categoriaSelected[0])}
                </>
            )
        }
    }

    return (
        <>
            <Skeleton
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <S.Container>
                <S.Row>
                    <S.Head>
                        <S.Title>navegação por categorias</S.Title>
                        <S.ContainerIcon>
                            <BsExclamationLg color='#fff' />
                        </S.ContainerIcon>
                    </S.Head>
                    <S.Categories>
                        <Paragraph style={{ fontSize: '12px' }}>CATEGORIA PRINCIPAL</Paragraph>
                        <S.ContainerCategorias>
                            {Categorias.map((e: any, i) => {
                                return (
                                    <S.ContainerTextCategories
                                        selected={e.id === selectedCategory}
                                        key={i}
                                        onClick={() => {
                                            setSelectedCategory(e.id === selectedCategory ? 0 : e.id),
                                                setSelectedSubCategory(0),
                                                setSelectedTypes(0),
                                                SubCategories(e.id)
                                        }}
                                    >
                                        <S.Paragraph>{e.name}</S.Paragraph>
                                    </S.ContainerTextCategories>
                                )
                            })}
                        </S.ContainerCategorias>
                        {SubCategoriesComponent()}
                        <S.ContainerCarrousel>
                            <Carousel />
                        </S.ContainerCarrousel>
                    </S.Categories>
                </S.Row>
            </S.Container >
        </>

    )
}

export default NavigationCategories