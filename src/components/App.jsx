import Profile from 'components/Profile/Profile';
import Stats from './Statistics/Stats';
import Friends from './Friends/Friends';
import Transactions from './Transactions/Transactions';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
     
      <Profile
        user={user}
      />

      <Stats
        data={data}
      />
      <Friends
        friends={friends}
      />

      <Transactions
        transactions={transactions}
      />
    </div>
  );
};
