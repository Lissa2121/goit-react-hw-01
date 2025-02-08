import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.profileAccount}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.profileUser}
                />
                <p className={css.profileName}>{name}</p>
                <p className={css.profileInfo}>{tag}</p>
                <p className={css.profileInfo}>{location}</p>
            </div>

            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <span className={css.profileTitle}>Followers</span>
                    <span className={css.profileInformation}>{stats.followers}</span>
                </li>
                <li className={css.profileItem}>
                    <span className={css.profileTitle}>Views</span>
                    <span className={css.profileInformation}>{stats.views}</span>
                </li>
                <li className={css.profileItem}>
                    <span className={css.profileTitle}>Likes</span>
                    <span className={css.profileInformation}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;