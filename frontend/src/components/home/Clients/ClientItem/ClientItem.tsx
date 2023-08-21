import { UserType } from '../../../../utils/Types'
import { ClientItemWrapper } from './ClientItem.styles'
type ClientItemProps={
  client:UserType
}
const ClientItem:React.FC<ClientItemProps> = ({client}) => {
  return (
    <ClientItemWrapper>
        <img src={ client.profileImg} alt="clientImg" />
        <button>
          {client.username}
        </button>
    </ClientItemWrapper>
  )
}

export default ClientItem