import { useEffect, useState } from 'react'
import { ClientsWrapper } from './clients.styles'
import ClientItem from './ClientItem/ClientItem'
import { UserType } from '../../../utils/Types'
import { getClientsApi } from '../../../utils/api'

const Clients = () => {

 const [clientsData,setClientsData] =useState<UserType[]>([])



 



  useEffect(()=>{
    handleFetchClients()
  },[])


  const handleFetchClients=async()=>{


      try {
        const {data,status} = await  getClientsApi();  
        if(status===200){

          setClientsData(data.message)
        }

      } catch (error) {
            console.log(error)
      }
  }
  


  return (
    <ClientsWrapper>
        <div className='client_content'>

        <div className='vertical_line'>


        </div>
        <div className='client_content_text'>

        <div className="client_top">
            <div>

         <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/person-male--v6.png" alt="person-male--v6"/>
     
            </div>
            <h1 className='client_text'>My Clients</h1>
        </div>
        <div className='client_header_text'>

            <h1>Client Success Stories </h1>
             <h1>Websites Designed with Excellence </h1><h1> And rated with Satisfaction</h1>
        </div>
            </div>
        </div>
        <div className="client_data_box">

            {
                clientsData.slice(0,20).map(client=><ClientItem key={client._id} client={client} />)
            }
            {/* <ClientItem client={}/>                             */}
            {
                clientsData.length -20  > 0 ?
                <div className='client_data'>

            <p>{clientsData.length -20}+</p>
            <p>others</p>
    

            </div>:""
            }


        </div>
    </ClientsWrapper>
  )
}

export default Clients;

