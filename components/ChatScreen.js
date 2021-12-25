import styled from "styled-components";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { Avatar, IconButton } from "@material-ui/core";
import getRecipientEmail from "../utils/getRecipientEmail";
import MoreVert from "@mui/icons-material/MoreVert";
import { AttachFile, InsertEmoticon, Mic } from "@mui/icons-material";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from './Message';
import firebase from "firebase";
import { useRef, useState } from "react";
import TimeAgo from "timeago-react";


function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef(null);
  const router = useRouter();
const [messagesSnapshot]=useCollection(db.collection('chats').doc(router.query.id).collection('messages').orderBy('timestamp','asc'))
const [recipientSnapshot]=useCollection(db.collection('users').where('email','==',getRecipientEmail(chat.users,user)))


const showMessages =()=>{
if(messagesSnapshot){
  return messagesSnapshot.docs.map(message=>(
    <Message key={message.id} user={message.data().user} message={{
      ...message.data(),
      timestamp:message.data().timestamp?.toDate().getTime()
    }} />
  ))
}else{
  return JSON.parse(messages).map(message=>(
    <Message key={message.id} user={message.user} message={message}/>
  ))
}    
};

const scrollToBottom=()=>{
  endOfMessagesRef.current.scrollIntoView({
    behavior:'smooth',
    block:"start"
  })
}

const sendMessage = (e)=>{
e.preventDefault();
db.collection('users').doc(user.uid).set({
  lastSeen:firebase.firestore.FieldValue.serverTimestamp(),
},{merge:true});

db.collection('chats').doc(router.query.id).collection('messages').add({
  timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  message:input,
  user:user.email,
  photoURL:user.photoURL,
})

setInput("");
scrollToBottom();
}

const recipientEmail=getRecipientEmail(chat.users,user);
const recipient = recipientSnapshot?.docs?.[0]?.data();
  return (
    <Container>
      <Header>
        {recipient?(
          <Avatar src={recipient?.photoUrl} />
        ):<Avatar>{recipientEmail[0]}</Avatar>}

        <HeaderInformation>
            <h3>{recipientEmail}</h3>
            {recipientSnapshot ? (
              <p>Last active: {'  '} {recipient?.lastSeen?.toDate()? (
                <TimeAgo datetime={recipient?.lastSeen?.toDate()}/>
                
              ): "Unavailable"}</p>
            ):(
              <p>Loading Last active...</p>
            )}
        </HeaderInformation>
        {/* <HeaderIcons>
<IconButton>
    <AttachFile/>
</IconButton>
<IconButton>
    <MoreVert/>
</IconButton>
        </HeaderIcons> */}
      </Header>

<MessageContainer>
{showMessages()}
    <EndofMessage ref={endOfMessagesRef}/>
</MessageContainer>
<InputContainer>
<InsertEmoticon/>
<Input value={input} onChange={e=> setInput(e.target.value)}/>
<button hidden disabled={!input} type='submit' onClick={sendMessage}>Send Message</button>
<Mic/>
</InputContainer>
    </Container>
  );
}

export default ChatScreen;

const Container = styled.div``;
const Header = styled.div`
position:sticky;
background-color:white;
z-index:100;
top:0;
justify-content:center;
flex-direction:column;
display:flex;
padding:11px;
align-items:center;
border-bottom:1px solid whitesmoke;
`;
const HeaderInformation=styled.div`
margin-left:15px;
flex:1;
text-align:center;

> h3{
    margin-bottom:3px;
    font-size:16px;
}

>p{
    font-size:12px;
    color:grey;
}
`;
const EndofMessage=styled.div``;
const HeaderIcons=styled.div``;

const MessageContainer=styled.div`
padding:30px;
background-color:#ffffff;
min-height:90vh;
`;

const Input = styled.input`
flex:1;
outline:0;
border:none;
border-radius:10px;
background-color:whitesmoke;
padding:20px;
margin-left:15px;
margin-right:15px;
`;

const InputContainer = styled.form`
display:flex;
align-items:center;
padding:10px;
position:sticky;
bottom:0;
background-color:white;
z-index:100;
`;