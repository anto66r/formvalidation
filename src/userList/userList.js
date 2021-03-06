import React from 'react';
import ListItem from './listItem';

import '../app.css';

const UserList = ({ users }) => (
  <ul className="list-group">
    {
      users.map(user => <ListItem {...user} key={ user.id }/>)
    }
  </ul>
);

export default UserList;
