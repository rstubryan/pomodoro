import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { router } from '@inertiajs/react';

const Create = () => {
  const [form, setForm] = useState({
    user_id: 1, // Set user_id manually
    type: 'work', // default to 'work'
    duration: 1500, // default to 1500 seconds (25 minutes)
    start_time: '',
    end_time: '',
    completed: false,
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
    if (form.start_time) {
      const startTime = new Date(form.start_time);
      const endTime = new Date(startTime.getTime() + form.duration * 1000); // Convert seconds to milliseconds
      const updatedForm = { ...form, end_time: endTime.toISOString().slice(0, 16) };
      setForm(updatedForm);
      router.post('/pomodoro_sessions', updatedForm);
    } else {
      router.post('/pomodoro_sessions', form);
    }
  };

  return (
    <div>
      <h1>Create Pomodoro Session</h1>
      <form onSubmit={handleSubmit}>
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
          <input type="datetime-local" name="end_time" value={form.end_time} onChange={handleChange} readOnly />
        </div>
        <div>
          <label>Completed:</label>
          <input type="checkbox" name="completed" checked={form.completed} onChange={handleChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;