import { produtos } from "../dados/dados";
import Card from "../card/page";

export default function Produtos_filtrados(){
    return(
        <div>
            {
                 produtosFiltrados.map((restaurante) => (
                    <Card
                    key ={restaurante.id}
                    nome={restaurante.nome}
                    descricao= {restaurante.descricao}
                    imagem= {restaurante.imagem}
                    preco = {restaurante.preco}
                    />
                ))
            }
        </div>
    )
}