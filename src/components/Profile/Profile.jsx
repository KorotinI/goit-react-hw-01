import css from "./Profile.module.css";

export const Profile = ({ image, username, tag, location,  stats }) => {
  return (
    <div className={css.card}>
      <div className={css.cardCont}>
        <img className={css.cardImage} src={image} width={260} alt="" />
        <p className={css.cardName}>{username}</p>
        <p className={css.cardTag}>{tag}</p>
        <p className={css.cardLocation}>{location}</p>
      </div>
    

      <ul className={css.cardList}>
        <li className={css.cardItem}>
          Followers: <span className={css.cardListText}>{stats.followers}</span>
        </li>
        <li className={css.cardItem}>
          Views: <span className={css.cardListText}>{stats.views}</span>
        </li>
        <li className={css.cardItem}>
          Likes: <span className={css.cardListText}>{stats.likes}</span>
        </li>
 </ul>
    </div>
);
};

export default Profile;