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
            </TimeStamp></TypeOfMesage>
            
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
background-color:#dcf8c6;
`;
const Reciever = styled(MessageElement)`
background-color:whitesmoke;
text-align:left;
`;
const TimeStamp =styled.span`
color:grey;
padding:10px;
font-size:9px;
position:absolute;
bottom:0;
text-align:right;
right:0;
;
`;