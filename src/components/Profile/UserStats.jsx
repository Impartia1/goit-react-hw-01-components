import css from './UserStats.module.css';
import PropTypes from 'prop-types';

const UserStats = (
    { user:
        { stats: { followers, likes, views }, },
    }
) => {
    return (
        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    )
};

UserStats.propTypes = {
    user: PropTypes.shape({
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
        }),
    }),
};
export default UserStats;