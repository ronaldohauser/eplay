/* eslint-disable prettier/prettier */
import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'


const Product = () => (
    <Card>
        <img src="//placehold.it/222x250" />
        <Titulo>Nome do jogo</Titulo>
        <Tag>Categoria</Tag>
        <Tag>Windows</Tag>
        <Descricao>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit maiores, rerum distinctio repellat, deleniti amet architecto autem beatae placeat nulla. Consequuntur, rem fuga totam harum fugiat perferendis aut ratione?</Descricao>
    </Card>
)

export default Product