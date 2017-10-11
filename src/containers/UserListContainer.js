import { connect } from 'react-redux';
import { deleteUser } from '../action.js';
import UserList from '../components/UserList/UserList.js';

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDelClick(user) {
            dispatch(deleteUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);