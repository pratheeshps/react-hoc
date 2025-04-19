import React from 'react';
import useFetchApi from './useFetchApi';
import useSearchFilter from './useSearchFilter';
import withLoader from './withLoader';
import './style.css';

const UserList = ({ data }) => {
  const { onFilter, filteredData } = useSearchFilter(data, 'email');
  return (
    <div>
      <div>
        <input placeholder="Search" onChange={onFilter} />
      </div>
      {!filteredData || filteredData.length === 0 ? (
        <p>No data found!</p>
      ) : (
        <ul>
          {filteredData?.map((user) => (
            <li key={user.id} className="users">
              {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const UserListWithLoader = withLoader(UserList);

export default function App() {
  const state = useFetchApi('https://jsonplaceholder.typicode.com/users');

  return <UserListWithLoader state={state} />;
}
