import { useState } from "react";
import Button from "../smallComponents/Button";

export default function FormAddFriend({ onAddFriendInList }) {

   const [friend, setFriend] = useState({ name: "", image: "https://i.pravatar.cc/48" });

   function handleSubmit(e) {
      e.preventDefault();
      if (!friend.image || !friend.name) {
         return;
      }
      const id = crypto.randomUUID();
      const newFriend = { ...friend, balance: 0, id, image: `${friend.image}?=${id}` };
      onAddFriendInList(newFriend)
      setFriend(friend.name = "")
      console.log(newFriend);
   }

   return (
      <form className="form-add-friend" onSubmit={handleSubmit}>
         <label>🫶🏻Name</label>
         <input type="text" onChange={(e) => setFriend(friend => ({ ...friend, name: e.target.value }))} />

         <label>🫶🏻Image URL</label>
         <input type="text" onChange={(e) => setFriend(friend => ({ ...friend, image: e.target.value }))} />

         <Button>Add</Button>
      </form>
   )
}