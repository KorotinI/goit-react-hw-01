import clsx from 'clsx';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  const { image, isActive, name: username } = friend;
  return (
    <li className={styles.friendListItem}>
      <div>
        <img src={image} alt={username} className={styles.friendImage} />
        <h2>{username}</h2>
        <p
          className={clsx({
            [styles.userActive]: isActive,
            [styles.userUnactive]: !isActive,
          })}
        >
          {isActive ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;