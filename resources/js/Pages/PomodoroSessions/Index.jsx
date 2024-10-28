import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/react';

const Index = ({ sessions }) => {
  return (
    <div>
      <h1>Pomodoro Sessions</h1>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>
            <Link href={`/pomodoro_sessions/${session.id}`}>
              {session.type} - {session.duration} seconds
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/pomodoro_sessions/create">Create New Session</Link>
    </div>
  );
};

export default Index;