import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useAPI } from '../context/AppContext';

const AdminMessages = () => {
  const { messageAPI } = useAPI();
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all messages from API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await messageAPI.getAll();
        const data = Array.isArray(res.data) ? res.data : [];
        setMessages(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
      } catch (err) {
        console.error('Error fetching messages:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [messageAPI]);

  // Delete message
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await messageAPI.delete(id);
        setMessages((prev) => prev.filter((m) => m.id !== id));
        setSelectedMessage(null);
      } catch (err) {
        console.error('Error deleting message:', err);
      }
    }
  };

  if (loading) {
    return <p className="text-blue-300 text-center mt-10">Loading messages...</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">User Messages</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1 bg-blue-900 rounded-xl p-4 shadow-lg max-h-[calc(100vh-200px)] overflow-y-auto">
          {messages.length > 0 ? (
            <div className="space-y-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedMessage?.id === msg.id
                      ? 'bg-blue-700'
                      : 'bg-blue-950 hover:bg-blue-800'
                  }`}
                >
                  <p className="text-white font-semibold text-sm">{msg.name}</p>
                  <p className="text-blue-300 text-xs">{msg.phone_number}</p>
                  <p className="text-blue-200 text-xs truncate">{msg.title}</p>
                  <p className="text-blue-400 text-xs mt-2">
                    {new Date(msg.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-blue-300 text-center">No messages found.</p>
          )}
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2 bg-blue-900 rounded-xl p-6 shadow-lg">
          {selectedMessage ? (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {selectedMessage.title}
                  </h2>
                  <p className="text-blue-200 text-sm">
                    {selectedMessage.name} - {selectedMessage.phone_number}
                  </p>
                  <p className="text-blue-300 text-xs mt-1">
                    {new Date(selectedMessage.created_at).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(selectedMessage.id)}
                  className="p-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 bg-blue-950 rounded-lg">

                <p className="text-blue-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedMessage.message }}></p>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-blue-300">Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
