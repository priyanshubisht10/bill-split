import Button from "./smallComponents/Button";

export default function Friend({ friend, onHandleSelectedFriend, selectedFriend }) {
   let isSelected;
   if (selectedFriend === null) {
      isSelected = false;
   } else {
      isSelected = selectedFriend.id === friend.id;
   }

   return (
      <li className={isSelected ? "selected" : ""}>
         <img src={friend.image} alt={friend.name}></img>
         <h3>{friend.name}</h3>
         {friend.balance < 0 && (
            <p className="red">You owe {friend.name} {Math.abs(friend.balance)} rupees</p>
         )}
         {friend.balance > 0 && (
            <p className="green">{friend.name} owes you {friend.balance} rupees</p>
         )}
         {friend.balance === 0 && (
            <p className="grey">You and {friend.name} are even!</p>
         )}

         {(isSelected) && <Button onClickBtn={() => onHandleSelectedFriend(null)} children="Close" />}
         {(!isSelected) && <Button onClickBtn={() => onHandleSelectedFriend(friend)} children="Select" />}
      </li>
   )
}