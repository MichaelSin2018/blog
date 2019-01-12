import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
  componentDidMount() {
    const { userId } = this.props; 
    this.props.fetchUser(userId);
  }

  render() {
      console.log('UserHeader props : ', this.props)
      const { userId, users} = this.props; 
      const user = users.find(user => user.id === userId)
      console.log('##', userId, user)
      if (!user) {
        return null;
      }
      return (
          <div>{user.name}</div>
      )
  };


};

const mapStateToProps = state => {
  console.log('UserHeader mapStateToProps state : ', state)
  return { users: state.users }
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);

