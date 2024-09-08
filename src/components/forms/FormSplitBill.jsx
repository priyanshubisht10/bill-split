import { useState } from "react";
import Button from "../smallComponents/Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
   const [bill, setBill] = useState('');
   const [paidByUser, setPaidByUser] = useState('');
   const [whoIsPaying, setWhoIsPaying] = useState('user');
   const paidByFriend = bill ? bill - paidByUser : "";

   function handleSubmit(e) {
      e.preventDefault();

      if (!bill || !paidByUser) {
         return;
      }

      onSplitBill((whoIsPaying === 'user') ? paidByFriend : -paidByUser);
   }

   return (
      <form className="form-split-bill" onSubmit={handleSubmit}>
         <h2>Split a bill with {selectedFriend.name}</h2>

         <label>💸Bill Value</label>
         <input type="text" onChange={(e) => setBill(Number(e.target.value))} />

         <label>🤑Your expense</label>
         <input type="text" onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

         <label>🤑{selectedFriend.name}'s expense</label>
         <input type="text" disabled value={paidByFriend} />

         <label>🫶🏻Who is paying the bill</label>
         <select onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value='user'>Me</option>
            <option value='friend'>{selectedFriend.name}</option>
         </select>

         <Button>Split</Button>
      </form>)
}