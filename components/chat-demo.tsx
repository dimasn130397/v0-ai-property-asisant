'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const chatMessages = [
  {
    role: 'user',
    content: 'Cari rumah 3 kamar dengan carport 2 mobil di Denpasar Selatan',
  },
  {
    role: 'assistant',
    content: '🏡 Rumah tersedia di Denpasar Selatan\n\n💰 Harga mulai Rp850 juta\n🛏 3 kamar tidur\n🚗 Carport 2 mobil\n🏊 Kolam renang pribadi\n📍 Lokasi strategis dekat pusat kota\n\nApakah Anda ingin dijadwalkan survey?',
  },
  {
    role: 'user',
    content: 'Ya, saya tertarik. Kapan bisa survey?',
  },
  {
    role: 'assistant',
    content: '✅ Baik! Saya telah menjadwalkan survey untuk Anda.\n\n📅 Tanggal: 15 Juni 2024\n🕐 Waktu: 10:00 - 11:00 AM\n📍 Lokasi: Denpasar Selatan\n👤 Agen: Budi Santoso\n📞 Kontak: +62-812-345-6789\n\nKonfirmasi survey telah dikirim ke email Anda.',
  }
];

export default function ChatDemo() {
  const [inputValue, setInputValue] = useState('');
  const [displayedMessages, setDisplayedMessages] = useState(chatMessages.slice(0, 2));

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setDisplayedMessages([...displayedMessages, { role: 'user', content: inputValue }]);
      setTimeout(() => {
        const nextMessage = chatMessages.find(msg => 
          msg.role === 'assistant' && 
          displayedMessages.concat([{ role: 'user', content: inputValue }]).filter(m => m.role === 'user').length === 
          chatMessages.filter(m => m.role === 'user' && displayedMessages.concat([{ role: 'user', content: inputValue }]).map(m => m.content).includes(m.content)).length
        );
        if (nextMessage) {
          setDisplayedMessages(prev => [...prev, nextMessage]);
        }
      }, 500);
      setInputValue('');
    }
  };

  return (
    <section className="relative py-20 lg:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AI Chat Demo
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Experience our intelligent property assistant in action
          </p>
        </div>

        {/* Chat box */}
        <div className="rounded-3xl border border-blue-500/30 bg-blue-500/5 overflow-hidden glow-blue backdrop-blur-sm">
          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 scroll-smooth">
            {displayedMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl whitespace-pre-wrap text-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-blue-950/40 text-blue-100 border border-blue-500/30 rounded-bl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="border-t border-blue-500/20 p-4 bg-blue-950/20">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about properties in Indonesian..."
                className="flex-1 px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl glow-blue"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sample prompts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {[
            'Rumah di Denpasar Selatan',
            'Harga maksimal Rp1 miliar',
            'Jadwalkan survey sekarang'
          ].map((prompt, i) => (
            <button
              key={i}
              onClick={() => setInputValue(prompt)}
              className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-400/40 text-blue-300 text-sm transition-all hover:glow-blue"
            >
              Try: "{prompt}"
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
