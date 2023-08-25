
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
function Media() {


  return (
    <Box sx={{display:"flex" ,flexWrap:"wrap" ,gap:"2rem ", width:"100%"}}>
      { Array.from(new Array(12)).map((item, index) => (
        <Box key={index} sx={{ flex:1,minWidth:"250px"}}>
         
            <Box sx={{ pt: 0.5  ,gap:"10px"}} display={"flex"}>
            <Skeleton style={{background:'#8080806e'}} variant="circular" width={40} height={40} />
            <Box sx={{flex:1}}>
            
        <Skeleton sx={{flex:1}} animation="wave" height={"20px"} style={{background:'#8080806e'}}  width={"100%"}/>
                <Skeleton sx={{flex:1}} animation="wave" height={"20px"} style={{background:'#8080806e'}}  width={"90%"}/>
                </Box>  
            </Box>
        
            <Skeleton style={{background:"#8080806e"}}  width={"100%"} height={130} sx={{marginLeft:"auto"}}  />

        
        </Box>
      ))}
    </Box>
  );
}

export default function WorkSkeleton() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media  />
     
    </Box>
  );
}
