'use client'
import estilos from './card.module.css'
import Image from 'next/image'

const Card = ({ nome, descricao, imagem, preco, categoria }) =>  {



    return(
        
      <div className={estilos.card}>
        
      <Image src={imagem} alt={nome} className={estilos.imagem}/>
      
      <h2>{nome}</h2>
      <p className={estilos.fonte_Estilizada}>{categoria}</p>
      <p>{descricao}</p>
      <p className={estilos.preco}>R${preco}</p>
      
      </div>
       
    )
}

export default Card;