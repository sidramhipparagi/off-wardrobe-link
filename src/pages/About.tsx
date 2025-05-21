import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Off</h1>
          
          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              Welcome to our fashion haven, where style meets simplicity! We believe that fashion is best experienced one piece at a time. That's why we curate and showcase one unique fashion product every day, giving you the chance to discover, appreciate, and fall in love with the artistry of each item.
            </p>

            <p className="text-lg leading-relaxed">
              Our mission is to inspire you to explore fashion in a fresh, focused way. Whether it's a bold accessory, a timeless garment, or a trendy must-have, we handpick pieces that tell a story and spark joy. By presenting just one product daily, we invite you to slow down, connect with the craftsmanship, and find your next style obsession.
            </p>

            <p className="text-lg leading-relaxed">
              Join us on this daily journey of discovery, and let's celebrate fashion together—one stunning piece at a time.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-16 h-1 bg-[#80c41c]"></div>
            <div className="w-16 h-1 bg-[#F2FCE2]"></div>
            <div className="w-16 h-1 bg-[#80c41c]"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 