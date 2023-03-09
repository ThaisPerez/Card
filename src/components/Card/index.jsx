import './styles.css'
import Icon from './../../assets/icon.svg'

export default function Card(props) {
  return (
    <div className="Card">
      <div className="Header">
        <img src={props.img} alt="" />
      </div>
      <div className="Content">
        <span>{props.titulo}</span>
        <p className="Container-card-subtitilo">{props.subtitulo}</p>
      </div>
      <div className="Footer">
        <button>Solicitar agora <img src={Icon} alt="" /> </button>

      </div>
    </div>
  )
}