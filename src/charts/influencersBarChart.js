import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function InfluencersBarChart() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const data = [
    { 
      name: 'Aime Rwanda 250', 
      instagram: 750,
      youtube: 0,
      twitter: 0
    },
    { 
      name: 'Clapton Kibonke', 
      instagram: 400,
      youtube: 450,
      twitter: 350
    },
    { 
      name: 'Nishimwe Naomi', 
      instagram: 1100,
      youtube: 1000,
      twitter: 0
    },
    { 
      name: 'Solange Nishimwe', 
      instagram: 600,
      youtube: 650,
      twitter: 550
    },
    { 
      name: 'Ngabo Karegeya', 
      instagram: 0,
      youtube: 0,
      twitter: 3200
    },
    { 
      name: 'Zuba Mutesi', 
      instagram: 950,
      youtube: 1000,
      twitter: 850
    },
    { 
      name: 'The Long Form', 
      instagram: 0,
      youtube: 800,
      twitter: 700
    }
  ];

  const filteredData = selectedPlatform === 'all' 
    ? data 
    : data.map(item => ({
        ...item,
        instagram: selectedPlatform === 'instagram' ? item.instagram : 0,
        youtube: selectedPlatform === 'youtube' ? item.youtube : 0,
        twitter: selectedPlatform === 'twitter' ? item.twitter : 0
      }));

  const formatYAxis = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const totalVisitors = payload.reduce((sum, entry) => sum + entry.value, 0);
      return (
        <div style={{
          backgroundColor: '#fff',
          border: '2px solid #e0e0e0',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', fontSize: '14px' }}>{label}</p>
          {payload.map((entry, index) => (
            entry.value > 0 && (
              <p key={index} style={{ margin: '4px 0', fontSize: '13px', color: entry.fill }}>
                <span style={{ fontWeight: '600' }}>{entry.name}:</span> {entry.value.toLocaleString()} visitors
              </p>
            )
          ))}
          <p style={{ margin: '8px 0 0 0', paddingTop: '8px', borderTop: '1px solid #e0e0e0', fontWeight: 'bold', fontSize: '13px' }}>
            Total: {totalVisitors.toLocaleString()} visitors
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Influencer Ad Performance</h1>
          <p className="text-gray-600">Track visitor engagement across Instagram, YouTube, and Twitter</p>
        </div>

        <div className="mb-6 flex gap-3 flex-wrap">
          <button
            onClick={() => setSelectedPlatform('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedPlatform === 'all' 
                ? 'bg-gray-900 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Platforms
          </button>
          <button
            onClick={() => setSelectedPlatform('instagram')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedPlatform === 'instagram' 
                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Instagram
          </button>
          <button
            onClick={() => setSelectedPlatform('youtube')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedPlatform === 'youtube' 
                ? 'bg-red-600 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            YouTube
          </button>
          <button
            onClick={() => setSelectedPlatform('twitter')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedPlatform === 'twitter' 
                ? 'bg-black text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            X (Twitter)
          </button>
        </div>

        <ResponsiveContainer width="100%" height={450}>
          <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={100}
              stroke="#666" 
              tick={{ fill: '#666', fontSize: 12, fontWeight: 500 }}
            />
            <YAxis 
              tickFormatter={formatYAxis}
              stroke="#666"
              tick={{ fill: '#666', fontSize: 13, fontWeight: 500 }}
              label={{ value: 'Visitors', angle: -90, position: 'insideLeft', style: { fill: '#666', fontWeight: 600 } }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="rect"
            />
            <Bar 
              dataKey="instagram" 
              name="Instagram"
              fill="url(#instagramGradient)" 
              radius={[6, 6, 0, 0]}
              stackId="a"
            />
            <Bar 
              dataKey="youtube" 
              name="YouTube"
              fill="#FF0000" 
              radius={[6, 6, 0, 0]}
              stackId="a"
            />
            <Bar 
              dataKey="twitter" 
              name="X (Twitter)"
              fill="#000000" 
              radius={[6, 6, 0, 0]}
              stackId="a"
            />
            <defs>
              <linearGradient id="instagramGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#833AB4" />
                <stop offset="50%" stopColor="#E1306C" />
                <stop offset="100%" stopColor="#FD1D1D" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>💡 Tip:</strong> Use the platform filters above to focus on specific channels or view all platforms stacked together for a complete performance overview.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfluencersBarChart;