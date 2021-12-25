import styled from "styled-components"
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../firebase'
import moment from 'moment'
function Message({user, message}) {
    const [userLoggedIn]= useAuthState(auth);
const TypeOfMesage=user === userLoggedIn.email ? Sender : Reciever;
    return (
        <Conatiner>
            <TypeOfMesage>{message.message}
            <TimeStamp>
            {message.timestamp ? moment(message.timestamp).format('LT') : "..."}
            </TimeStamp>
            </TypeOfMesage>
            
        </Conatiner>
    )
}

export default Message
const Conatiner=styled.div``;

const MessageElement=styled.p`
width:fit-content;
padding:15px;
border-radius:8px;
margin:10px;
min-width:60px;
padding-bottom:26px;
position:relative;
text-align:center;
`;
const Sender =styled(MessageElement)`
margin-left:auto;
border-radius:8px 0 8px 8px;
background-color:#2C6BED;
color:white;
`;
const Reciever = styled(MessageElement)`

text-align:left;
background-color:#F6F6F6;
border-radius:0 8px 8px 8px;
`;
const TimeStamp =styled.span`
color:#white;
font-size:9px;
padding:10px;
position:absolute;
bottom:0;
text-align:right;
right:0;
;
`;