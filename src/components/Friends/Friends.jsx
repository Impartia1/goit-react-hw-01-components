import css from './Friends.module.css';
import clsx from "clsx";
import PropTypes from 'prop-types';


const Friends = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({
                id,
                avatar,
                name,
                isOnline
            }) => {
                return (
                    <li className={css.item} key={id}>
                        <span className={clsx(
                            css.status,
                            {
                                [css.isOnline]: isOnline,
                            }
                        )}>{isOnline}</span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{ name }</p>
                    </li>
                )
            })} 
        </ul>
    )
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};

export default Friends;