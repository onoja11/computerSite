import React, { useEffect, useState } from 'react';
import { Package, Mail } from 'lucide-react';
import { useAPI } from '../context/AppContext';


const AdminDashboard = () => {

  const { productAPI, messageAPI } = useAPI();
  const [stats, setStats] = useState({
    products: 0,
    messages: 0,
  });
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, messagesRes] = await Promise.all([
          productAPI.getAll(),
          messageAPI.getAll(),
        ]);

        const products = productsRes.data || [];
        const messages = messagesRes.data || [];

        // Count stats
        setStats({
          products: products.length,
          messages: messages.length,
        });
        

        // Combine both into one activity list
        const combined = [
          ...products.map((p) => ({
            id: p.id,
            type: 'product',
            title: p.name || 'Unnamed Product',
            created_at: p.created_at,
            updated_at: p.updated_at,
          })),
          ...messages.map((m) => ({
            id: m.id,
            type: 'message',
            title: m.subject || 'New Message',
            created_at: m.created_at,
            updated_at: m.updated_at,
          })),
        ];

        // Sort by most recent timestamp
        const sorted = combined
          .sort(
            (a, b) =>
              new Date(b.updated_at || b.created_at) -
              new Date(a.updated_at || a.created_at)
          )
          .slice(0, 4); // Get top 4

        setRecentActivities(sorted);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, [productAPI, messageAPI]);

  const statCards = [
    { label: 'Total Products', value: stats.products, color: 'from-blue-600 to-blue-400', icon: Package },
    { label: 'Messages', value: stats.messages, color: 'from-green-600 to-green-400', icon: Mail },
  ];

  const getActivityLabel = (activity) => {
    if (activity.type === 'product') return 'New product added';
    if (activity.type === 'message') return 'New message received';
    return 'Activity';
  };

  const timeAgo = (timestamp) => {
    const now = new Date();
    const then = new Date(timestamp);
    const diff = Math.floor((now - then) / 1000); // in seconds

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-blue-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-blue-200 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value ?? 0}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-blue-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivities.length > 0 ? (
            recentActivities.map((activity) => (
              <div
                key={`${activity.type}-${activity.id}`}
                className="flex items-center justify-between py-3 border-b border-blue-800 last:border-0"
              >
                <div>
                  <p className="text-white font-medium">{getActivityLabel(activity)}</p>
                  <p className="text-blue-300 text-sm">
                    {activity.title} • {timeAgo(activity.updated_at || activity.created_at)}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 ${
                    activity.type === 'product'
                      ? 'bg-blue-700 text-blue-200'
                      : 'bg-green-700 text-green-200'
                  } rounded-full text-xs`}
                >
                  {activity.type === 'product' ? 'Product' : 'Message'}
                </span>
              </div>
            ))
          ) : (
            <p className="text-blue-300 text-sm">No recent activity yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
