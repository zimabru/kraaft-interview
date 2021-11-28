import { Message, User } from './assets/types';
import Exchange from "./Exchange";

interface Props {
  className: string;
  currentUserId: string;
  messages: Message[];
  users: User[];
}


const Conversation = (props: Props) => {
  const {className,messages,currentUserId} = props;
  
  return <div className={className}>
      <div className="scroll">
      {messages.map((message)=> {
       return <Exchange message={message} users={props.users} currentId={currentUserId}/>
        })}
      </div>
     
       
          
    </div>
         
};

export default Conversation;
  