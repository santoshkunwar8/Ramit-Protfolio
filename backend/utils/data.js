class EmailHtmlService{



getResetPasswordHtml=({emailHash})=>{
    return `<div>
    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/352850187_808709043911745_566344590095350869_n.jpg?stp=dst-jpg_p403x403&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Rqrey-x9sZ8AX9n27lg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTRKzT-KFPaeoRLfSDMnnD-2bSQylVJ8XczY2N3QVFdkQ&oe=64A91F73" width="200px" style="border-radius:4px"/> <br/>
     <h1 style="color:#0e0b3d" > Reset your password  </h1> </br>
      </br> <h4 style="color:#0e0b3d">Click the button below to reset  your password. </h4> <br/> <a style="background:#686de0;height:40px; text-decoration:none;  padding:8px ; cursor:pointer;letter-spacing:1px; border-radius:4px;text-align:center;color:white;" href="${process.env.FRONTEND_URL}/account/resetpassword/${emailHash}"> RESET PASSWORD </a> </br> <br> <br>  </div>`
}


}