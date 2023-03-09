import Card from './components/Card'
import Analise from './assets/analise.svg'
import Suporte24 from './assets/suporte24.svg'
import SuporteCelular from './assets/suporteCelular.svg'


function App() {
  return (
    <div className='Card-container'>
      <Card titulo="Suporte 24 - Seg A Sexta" subtitulo="Aqui as rotinas de monitoramento são executadas diariamente em busca de atividades indesejadas através dos servidores, opMSA CONSULTORIAliciosas de ataques, para que você possa descansar enquanto seu website continua completamente funcional." img={Suporte24}></Card>
      <Card titulo="Suporte Remoto" subtitulo="Sempre que tiver algum problema estaremos prontos para conectar em seu computador e resolver qualquer dúvida ou falha." img={SuporteCelular}></Card>
      <Card titulo="Instalação Remota" subtitulo="Para que você tenha a segurança de sempre fazer a instalação de aplicações de forma correta contrate nosso suporte de instalação." img={Analise}></Card>
    </div>
);
}

export default App;