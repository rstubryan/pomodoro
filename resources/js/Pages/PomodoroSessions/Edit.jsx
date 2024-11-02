import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { router } from '@inertiajs/react';

const Edit = ({ session }) => {
  const [form, setForm] = useState({
    user_id: session.user_id,
    type: session.type,
    duration: session.duration,
    start_time: session.start_time ? new Date(session.start_time).toISOString().slice(0, 16) : '',
    end_time: session.end_time ? new Date(session.end_time).toISOString().slice(0, 16) : '',
    completed: session.completed,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newForm = { ...form, [name]: type === 'checkbox' ? checked : value };

    if (name === 'type') {
      switch (value) {
        case 'work':
          newForm.duration = 1500; // 25 minutes
          break;
        case 'short_break':
          newForm.duration = 300; // 5 minutes
          break;
        case 'long_break':
          newForm.duration = 900; // 15 minutes
          break;
        default:
          newForm.duration = 1500; // default to 25 minutes
      }
    }

    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.put(`/pomodoro_sessions/${session.id}`, form);
  };

  return (
    <div>
      <h1>Edit Pomodoro Session</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="text" name="user_id" value={form.user_id} onChange={handleChange} readOnly />
        </div>
        <div>
          <label>Type:</label>
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="work">Work</option>
            <option value="short_break">Short Break</option>
            <option value="long_break">Long Break</option>
          </select>
        </div>
        <div>
          <label>Duration (seconds):</label>
          <input type="number" name="duration" value={form.duration} onChange={handleChange} readOnly />
        </div>
        <div>
          <label>Start Time:</label>
          <input type="datetime-local" name="start_time" value={form.start_time} onChange={handleChange} />
        </div>
        <div>
          <label>End Time:</label>
          <input type="datetime-local" name="end_time" value={form.end_time} onChange={handleChange} />
        </div>
        <div>
          <label>Completed:</label>
          <input type="checkbox" name="completed" checked={form.completed} onChange={(e) => setForm({ ...form, completed: e.target.checked })} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;