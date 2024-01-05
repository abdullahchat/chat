import { useState } from 'react';
import axios from 'axios';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': '55a62482-639e-4540-ae53-fadd479ca13f',
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      if (isRegistering) {
        // Create a new user account
        await axios.post('https://api.chatengine.io/users/', { username, secret: password });
      }

      // Authenticate the user
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError(isRegistering ? 'Oops, registration failed.' : 'Oops, incorrect credentials.');
    }
  };

  const toggleRegistration = () => {
    setIsRegistering((prev) => !prev);
    setError('');
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">ABDULLAHCHAT</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>{isRegistering ? 'Register' : 'Start chatting'}</span>
            </button>
          </div>
        </form>
        <div align="center" style={{ marginTop: '10px' }}>
          <button className="button" onClick={toggleRegistration}>
            <span>{isRegistering ? 'Already have an account? Login' : 'Create an account'}</span>
          </button>
        </div>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default Modal;
