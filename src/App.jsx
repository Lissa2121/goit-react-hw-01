// import Profile from './components/Profile/Profile';
import Profile from './сomponents/Profile/Profile'
import userData from './userData.json'
// import FriendList from './components/FriendList/FriendList';
import FriendList from './сomponents/FriendList/FriendList'
import friends from './friends.json'
import transactions from './transactions.json'
// import TransactionHistory from './сomponents/TransactionHistory/TransactionHistory'
import TransactionHistory from './сomponents/TransactionHistory/TransactionHistory'

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />


    </>

  );
};

export default App