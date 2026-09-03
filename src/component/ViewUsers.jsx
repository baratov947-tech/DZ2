import UserCard from './UserCard';
import styles from './ViewUsers.module.css';

export default function ViewUsers() {
    const users = [
        { id: 1, name: 'Жаныбек', age: 25, role: 'Разработчик', city: 'Бишкек', avatar: 'https://i.pravatar.cc/150?img=1', isPremium: true },
        { id: 2, name: 'Малой', age: 28, role: 'Дизайнер', city: 'Москва', avatar: 'https://i.pravatar.cc/150?img=2', isPremium: true },
        { id: 3, name: 'Румиль', age: 30, role: 'Менеджер', city: 'Алматы', avatar: 'https://i.pravatar.cc/150?img=3', isPremium: true },
        { id: 4, name: 'Наиль', age: 22, role: 'Маркетолог', city: 'Кант', avatar: 'https://i.pravatar.cc/150?img=4', isPremium: true },
        { id: 5, name: 'Даша', age: 35, role: 'Аналитик', city: 'Ташкент', avatar: 'https://i.pravatar.cc/150?img=5', isPremium: true },
        { id: 6, name: 'Клоун', age: 27, role: 'Тестировщик', city: 'Бишкек', avatar: 'https://i.pravatar.cc/150?img=6', isPremium: true },
        { id: 7, name: 'Ислам', age: 32, role: 'DevOps', city: 'Астана', avatar: 'https://i.pravatar.cc/150?img=7', isPremium: true },
        { id: 8, name: 'Ольга', age: 24, role: 'Копирайтер', city: 'Ош', avatar: 'https://i.pravatar.cc/150?img=8', isPremium: true },
        { id: 9, name: 'Саша', age: 29, role: 'Бэкендер', city: 'Москва', avatar: 'https://i.pravatar.cc/150?img=9', isPremium: true },
        { id: 10, name: 'Наталья', age: 26, role: 'HR', city: 'Бишкек', avatar: 'https://i.pravatar.cc/150?img=10', isPremium: true },
        { id: 11, name: 'Артем', age: 31, role: 'Фронтендер', city: 'Кант', avatar: 'https://i.pravatar.cc/150?img=11', isPremium: false },
        { id: 12, name: 'Улыбака', age: 23, role: 'SMM', city: 'Алматы', avatar: 'https://i.pravatar.cc/150?img=12', isPremium: false },
        { id: 13, name: 'Наруто', age: 28, role: 'Тимлид', city: 'Бишкек', avatar: 'https://i.pravatar.cc/150?img=13', isPremium: false },
        { id: 14, name: 'Виктор', age: 26, role: 'SEO', city: 'Москва', avatar: 'https://i.pravatar.cc/150?img=14', isPremium: false },
        { id: 15, name: 'Роман', age: 34, role: 'Архитектор', city: 'Ташкент', avatar: 'https://i.pravatar.cc/150?img=15', isPremium: false },
        { id: 16, name: 'Юлия', age: 21, role: 'Стажер', city: 'Ош', avatar: 'https://i.pravatar.cc/150?img=16', isPremium: false },
        { id: 17, name: 'Денис', age: 29, role: 'Админ', city: 'Бишкек', avatar: 'https://i.pravatar.cc/150?img=17', isPremium: false },
        { id: 18, name: 'Лысик', age: 27, role: 'Редактор', city: 'Астана', avatar: 'https://i.pravatar.cc/150?img=18', isPremium: false },
        { id: 19, name: 'МАтильда', age: 33, role: 'Продукт', city: 'Москва', avatar: 'https://i.pravatar.cc/150?img=19', isPremium: false },
        { id: 20, name: 'Дарья', age: 25, role: 'Иллюстратор', city: 'Кант', avatar: 'https://i.pravatar.cc/150?img=20', isPremium: false }
    ];

    return (
        <div className={styles.wrapper}>
            <h2>Список пользователей</h2>
            <div className={styles.grid}>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}