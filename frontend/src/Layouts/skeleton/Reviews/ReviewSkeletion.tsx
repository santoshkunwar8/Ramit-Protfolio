import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Box sx={{display:"flex" ,flexWrap:"wrap" ,gap:"1rem", width:"100%"}}>
      { Array.from(new Array(12)).map((item, index) => (
        <Box key={index} sx={{ flex:1,minWidth:"250px"}}>
         
            <Box sx={{ pt: 0.5  ,gap:"10px"}} display={"flex"}>
            <Skeleton style={{background:'#8080806e'}} variant="circular" width={40} height={40} />
            <Box sx={{flex:1}}>
            
        <Skeleton sx={{flex:1}} animation="wave" height={"20px"} style={{background:'#8080806e'}}  width={"100%"}/>
                <Skeleton sx={{flex:1}} animation="wave" height={"20px"} style={{background:'#8080806e'}}  width={"90%"}/>
                </Box>  
            </Box>
        
            <Skeleton style={{background:"#8080806e"}}  width={"80%"} height={130} sx={{marginLeft:"auto"}}  />

        
        </Box>
      ))}
    </Box>
  );
}

export default function ReviewSkeletion() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
     
    </Box>
  );
}
