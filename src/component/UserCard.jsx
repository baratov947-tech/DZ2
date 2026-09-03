import styles from './UserCard.module.css';

export default function UserCard({ user }) {
    const handleClick = () => {
        console.log(user);
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            {user.isPremium && <span className={styles.badge}>Премиум</span>}
            <img src={user.avatar} alt={user.name} className={styles.avatar} />
            <h3>{user.name}</h3>
            <p><b>Возраст:</b> {user.age}</p>
            <p><b>Профессия:</b> {user.role}</p>
            <p><b>Город:</b> {user.city}</p>
        </div>
    );
}