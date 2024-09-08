import Friend from "./Friend"

export default function FriendsList({ friends, onHandleSelectedFriend, selectedFriend }) {
   return (
     <ul>
       {
         friends.map((friend) => (
           <Friend friend={friend} key={friend.id} onHandleSelectedFriend={onHandleSelectedFriend} selectedFriend={selectedFriend} />
         ))
       }
     </ul>
   )
 }