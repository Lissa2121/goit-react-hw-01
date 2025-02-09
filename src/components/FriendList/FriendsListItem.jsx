import css from "./FriendList.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.friendsListItem}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.friendName}>{name}</p>
  <p className={`${css.friendStatus} ${isOnline ? css.online : css.offline}`}>
    {isOnline ? "Online" : "Offline"}
</p>
</div>

    );
};

export default FriendsListItem;
