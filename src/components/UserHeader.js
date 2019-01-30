import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions'

class UserHeader extends React.Component {
  // componentDidMount() {
  //   const { userId } = this.props; 
  //   this.props.fetchUser(userId);
  // }

  render() {
      console.log('UserHeader state, props : ', this.state, this.props)
      
      //1.Before ES6
      //const user = this.props.users.find(user => user.id === this.props.userId)
      
      //1.After ES6
      // const { userId, users } = this.props; 
      // const user = users.find(user => user.id === userId)
      
      const { user } = this.props;

      if (!user) {
        return null;
      }
      return (
          <div>{user.name}</div>
      )
  };


};

//2. Before  
// const mapStateToProps = state => {
//   console.log('UserHeader mapStateToProps state : ', state)
//   return { users: state.users }
// }

//2. After 
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId)}
}

// 3. Before removing fetchUser
// export default connect(mapStateToProps, {fetchUser})(UserHeader);

// 3. After removing fetchUser
export default connect(mapStateToProps)(UserHeader);

