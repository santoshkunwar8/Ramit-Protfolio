import { ClientItemWrapper } from './ClientItem.styles'
type ClientItemProps={
  client:{
    name:String,
    img:String,
  }
}
const ClientItem:React.FC<ClientItemProps> = ({client}) => {
  return (
    <ClientItemWrapper>
        <img src={ client.img} alt="clientImg" />
        <button>
          {client.name}
        </button>
    </ClientItemWrapper>
  )
}

export default ClientItem