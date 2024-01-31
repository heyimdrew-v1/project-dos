import React from 'react';

function CurrentTime() {
  // Get current date and time
  const now = new Date();

  // Format the date and time
  const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

  // Return JSX to display the formatted date and time
  return (
    <div>
      <h2>Current Time and Date</h2>
      <p>{formattedDateTime}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Current Time App</h1>
      </header>
      <CurrentTime />
    </div>
  );
}

export default App;
