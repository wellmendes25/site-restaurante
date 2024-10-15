import estilos from './fotoBanner.module.css';
import Banner from '../../../../public/banner.png'
import Image from 'next/image';

export default function BannerFoto(){
    return(
        <div className={estilos.container}>
            <div className={estilos.texto}>
                <h1>
                    Restaurante
                </h1>
                <p>
                De pratos classicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.
                </p>
            </div>
            <Image
            className={estilos.imagem}
            src={Banner}
            />
        </div>
    )
}