import css from './Profile.module.css';
import UserDesc from './UserDesc';
import UserStats from './UserStats';

const Profile = ({ user }) => {
    return (
        <div className={css.profile}>
            <UserDesc user={user} />

            <UserStats user={user} />
        </div>
    )
};

export default Profile;