import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";


function Login() {

  const signIn=()=>{
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <Container>
      <Head>
        <title>Antleria Login</title>
        <link rel="icon" href="/antleria_logo.svg" />
      </Head>

      <LoginContainer>
       <img src="/antleria_logo.svg"/>
<p style={{fontFamily: "Inter",
fontSize: "32px",
fontStyle: "normal",
fontWeight: 700,
margin:0,padding:0,
lineHeight:"48px",
position:"relative",
top:"-64px"
}}>Antleria</p>

        <Button style={{padding:"8px 64px",fontFamily: "Inter",
fontSize: "16px",fontStyle: "normal",fontWeight: 700,lineHeight: "29px",letterSpacing: "0.4px",backgroundColor:"#0D0D0D",color:"#E4E4E4",textTransform:"none",borderRadius:"12px"}} onClick={signIn}><img style={{width:"48px",height:"48px",position:"relative",right:"21px"}} src="https://s3-alpha-sig.figma.com/img/fc8c/8310/796fc8eeb0eec56e7bb60a0ae649d969?Expires=1641168000&Signature=GY0h4KcqiFlnrqVTYnhjT~i8CmZfeGzXXwj28GehQhEmennczRz9w0NLMHByMtJYbTV2uZdtkkoceLgxBCfft-kDhEHt8W~077GEfO0VsiDFKOJCkyFB9vm64kf1o56uTvlrgKV1V6f9ty2FLFvSK0iYK7Nw~3w6zmv17cx-6lKqtW5L0wY4sNbXQp3x0euwSk9EleAI1Taj2LeHqOhCVSQjMnD3a4t8lZTtQnoeNzQw2hmr8gm67D2PWA5Jm69TWLUqwwXuc7x8jyeqnPgOid-99vlVWWR8nVMJHOqCcJVOdhSfLpuNnC1sOa5Pd~E~na1yH08gQjwKSlEZuAnbsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>Login With Google</Button>

<img style={{width:"119px",position:"relative",top:"20px"}} src="https://s3-alpha-sig.figma.com/img/d1bb/4b9d/3a61e5ef21016ca94df39dc84e480f72?Expires=1641168000&Signature=SVnOTsx0W9p8n3BWWUq0reShWcmyHmSQzTPM7WzyPVZnyAASFxeCIHUma4b7Xv5-edNGGPXrHk-RczQegRsSfZBevORA6GFpxujWwapGgp2mFqBuz9Mq0cMJhEhhuwhDR8yr8B5y03ulA34eU1IRgde5Am1XmkpInIiYIPGv6vZCOrg6SJPeyBCAxPbmaXdcdj2rod9M8RQ9TD6l3ifNWhGbC1pH4YTlbp2YDvcGokRmVtf3lc3m0cKXyIdaO1cdZPFDxlMRgiYbEF6BqluQ~vnIKZ36wi2xcDIPczfbTm~Lv0RMvGgJzUD28Pfn8~jIrWQS0hlf1ADUVyMypx2HEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
      <h2 style={{fontFamily: "Inter",fontSize: "20px",fontStyle: "normal",fontWeight: 700,lineHeight: "24px",letterSpacing: "0em",color:"#2F2F2F",margin:0,padding:0
}}>The Royal Flush</h2>
      
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  /* display:grid;
  place-items:center;
  height:100vh; */
  `;

const LoginContainer = styled.div`
  align-items:center;
  display:flex;
  flex-direction:column;
  background:white;
  `;

  