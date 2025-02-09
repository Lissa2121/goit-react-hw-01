import FriendsListItem from "./FriendsListItem";
import css from "./FriendList.module.css";

const FriendList = ({friends}) => {
    return (
        <ul className={css.friend}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendsListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    
                    />


                </li>
            )
            
            )
            }

        </ul>
        
    )
}

export default FriendList;