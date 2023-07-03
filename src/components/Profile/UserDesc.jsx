import css from './UserDesc.module.css';
import PropTypes from 'prop-types';
// var PropTypes = require('prop-types');
const UserDesc = (
    {
        user:
        { username, tag, location, avatar }
        
    }
) => {

    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={ avatar }
                    alt="User avatar"
                    className={ css.avatar }
                />
                <p className={ css.name }>{username}</p>
                <p className={ css.tag }>@{ tag }</p>
                <p className={ css.location }>{ location }</p>
            </div>

        </div>
    )

}

UserDesc.propTypes = {
    user: PropTypes.shape(
        {
            avatar: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
        }
    ),
};

export default UserDesc;