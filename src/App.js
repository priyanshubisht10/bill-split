import { useState } from "react";
import FriendsList from "./components/FriendList";
import FormAddFriend from "./components/forms/FormAddFriend";
import FormSplitBill from "./components/forms/FormSplitBill";
import Button from "./components/smallComponents/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Priyanshu",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Kanika",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
  {
    id: 499476,
    name: "Ashish",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {
  const [friendsList, setFriendList] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSplitBill(amt) {
    // console.log(amt);
    setFriendList((friends) => friends.map(friend => friend.id === selectedFriend?.id ? { ...friend, balance: amt } : friend))
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend(friend);
    console.log(friend);
  }

  function handleAddFriendInList(newFriend) {
    setFriendList(friendsList => [...friendsList, newFriend]);
    setAddFriend(!addFriend)
  }

  function handleAddFriendButtonClick() {
    setAddFriend(!addFriend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friendsList} onHandleSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend} />
        {(addFriend) ? <FormAddFriend onAddFriendInList={handleAddFriendInList} /> : <div />}
        {(addFriend) ? <Button children="Close" onClickBtn={handleAddFriendButtonClick} /> : <Button children="Add Friend" onClickBtn={handleAddFriendButtonClick} />}
      </div>
      {(selectedFriend) && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
