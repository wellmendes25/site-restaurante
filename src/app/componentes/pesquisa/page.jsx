'use client'
import { useState } from "react";
import Card from "../card/page";
import { produtos } from "../dados/dados";
import categorias from "../dados/dados_button";
import Image from "next/image";
import estilos from './pesquisa.module.css'



export default function Pesquisa() {
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);
  const [textoFiltradoDigitado, setTextoFiltradoDigitado] = useState("")


  function filtrarPorCategoria(categoria) {
    setProdutosFiltrados(produtos.filter(produto => produto.categoria === categoria));
    setTextoFiltradoDigitado("");
  }

  function FiltraTextosCategorias(textodigitado) {
    setTextoFiltradoDigitado(textodigitado)
   setProdutosFiltrados(produtos.filter((restaurante) =>
      restaurante.categoria.toLowerCase().includes(textodigitado.toLowerCase()) ||  restaurante.nome.toLowerCase().includes(textodigitado.toLowerCase()) ||
      restaurante.descricao.toLowerCase().includes(textodigitado.toLowerCase()))
);
  };


  return ( 
    <div >
      <nav className={estilos.container_navegacao}>
        <div className={estilos.nav}>
          {categorias.map(categoria => (
        
           <button className={estilos.button} key={categoria.id} onClick={() => filtrarPorCategoria(categoria.categoria)}>
              {categoria.imagem && (
                <Image
                  src={categoria.imagem}
                  alt={categoria.categoria}
                  width={25}
                  height={25}
                />
              )}
              <span>{categoria.categoria}</span>
            </button>
          ))}
        
        </div>
        <div className={estilos.barra_pesquisa}>
          <input
          type="text"
          placeholder="digite algo aqui..."
          value={textoFiltradoDigitado}
          onChange={(event) => FiltraTextosCategorias(event.target.value)}
          />
        </div>
      </nav>

      <div className={estilos.card}>
        {produtosFiltrados.map(restaurante => (
          <Card
            key={restaurante.id}
            nome={restaurante.nome}
            descricao={restaurante.descricao}
            categoria={restaurante.categoria}
            imagem={restaurante.imagem}
            preco={restaurante.preco}
          />
        ))}
      </div>
    </div>
  );
}
