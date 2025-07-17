function App() {
  return (
    <>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-semibold">ChatApp</h1>
      </header>

      {/* Main Content */}
      <main className="p-6 flex flex-col items-center bg-gray-100 min-h-screen">
        {/* Two Sections Side-by-Side */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 justify-center">
          {/* Chat Panel 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 flex flex-col items-center">
            {/* Logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Logo"
              className="w-20 h-20 mb-4"
            />

            {/* Title */}
            <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
              Welcome to my Chat App
            </h1>

            {/* Messages */}
            <div className="flex flex-col gap-3 w-full mb-4  bg-blue-300 p-2">
              <div className="bg-gray-100 text-gray-900 p-4 rounded-xl shadow w-3/4">
                <p className="text-sm">📩 Hello! How are you?</p>
              </div>
              <div className="bg-green-100 text-gray-900 p-4 rounded-xl shadow self-end w-3/4 text-right">
                <p className="text-sm">🟢 I'm good, thanks! And you?</p>
              </div>
            </div>

            {/* Input */}
            <div className="flex w-full gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>

          {/* Chat Panel 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 flex flex-col items-center">
            {/* Logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Logo"
              className="w-20 h-20 mb-4"
            />

            {/* Title */}
            <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
              Welcome to my Chat App
            </h1>

            {/* Messages */}
            <div className="flex flex-col gap-3 w-full mb-4 bg-blue-300 p-2">
              <div className="bg-gray-100 text-gray-900 p-4 rounded-xl shadow w-3/4">
                <p className="text-sm">📩 Hello! How are you?</p>
              </div>
              <div className="bg-green-100 text-gray-900 p-4 rounded-xl shadow self-end w-3/4 text-right">
                <p className="text-sm">🟢 I'm good, thanks! And you?</p>
              </div>
            </div>

            {/* Input */}
            <div className="flex w-full gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
