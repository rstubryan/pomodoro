import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/react';

const Show = ({ session }) => {
  return (
    <div>
      <h1>Pomodoro Session Details</h1>
      <p>User ID: {session.user_id}</p>
      <p>Type: {session.type}</p>
      <p>Duration: {session.duration} seconds</p>
      <p>Start Time: {session.start_time}</p>
      <p>End Time: {session.end_time}</p>
      <p>Completed: {session.completed ? 'Yes' : 'No'}</p>
      <Link href={`/pomodoro_sessions/${session.id}/edit`}>Edit</Link>
      <Link href="/pomodoro_sessions">Back to List</Link>
    </div>
  );
};

export default Show;