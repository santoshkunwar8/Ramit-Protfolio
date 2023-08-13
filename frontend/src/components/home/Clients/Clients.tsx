import React from 'react'
import { ClientsWrapper } from './clients.styles'
import ClientItem from './ClientItem/ClientItem'

const Clients = () => {
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
                clientArr.map(client=><ClientItem key={client.name} client={client}/>)
            }
            {/* <ClientItem client={}/>                             */}
            <div className='client_data'>

            <p>28+</p>
            <p>others</p>
    
                {/* <img src={ } alt="clientImg" /> */}
        <button>
          {/* {client.name} */}
        </button>
            </div>


        </div>
    </ClientsWrapper>
  )
}

export default Clients;


const clientArr=[
    {
        name:"Rajiv Stha",
        img:"https://images.pexels.com/photos/15664597/pexels-photo-15664597/free-photo-of-portrait-of-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name:"FullStack Kyle",
        img:"https://images.pexels.com/photos/13087560/pexels-photo-13087560.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        name:"Tan Weinja",
        img:"https://images.pexels.com/photos/17859453/pexels-photo-17859453/free-photo-of-women-color-light.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        name:"Jenney",
        img:"https://images.pexels.com/photos/10027305/pexels-photo-10027305.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        name:"Richael",
        img:"https://images.pexels.com/photos/17910786/pexels-photo-17910786.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
       {
        name:"Rajiv Stha",
        img:"https://images.pexels.com/photos/15664597/pexels-photo-15664597/free-photo-of-portrait-of-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name:"FullStack Kyle",
        img:"https://images.pexels.com/photos/13087560/pexels-photo-13087560.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        name:"Tan Weinja",
        img:"https://images.pexels.com/photos/17859453/pexels-photo-17859453/free-photo-of-women-color-light.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        name:"Jenney",
        img:"https://images.pexels.com/photos/10027305/pexels-photo-10027305.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        name:"Richael",
        img:"https://images.pexels.com/photos/17910786/pexels-photo-17910786.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
]


