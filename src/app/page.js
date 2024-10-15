import estilos from "./page.module.css";
import Pesquisa from "./componentes/pesquisa/page";
import BannerFoto from "./componentes/foto-banner/page";

export default function Home() {
  return (
    <main className={estilos.main}>
    <section className={estilos.section}>
     <BannerFoto/>
      <Pesquisa/>
    </section>
    
 
    </main>
  );
}
