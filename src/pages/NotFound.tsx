import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <main className="min-h-screen bg-primary gradient-sheen flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="font-heading text-9xl text-accent">404</h1>
          <h2 className="font-heading text-3xl md:text-4xl">Page Not Found</h2>
          <p className="text-lg text-gray-300">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-400">
            Redirecting to homepage in <span className="text-accent font-bold">{countdown}</span> seconds...
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_10px_rgba(123,5,186,0.25)]"
          >
            Go Home Now
          </button>
        </div>

        <div className="pt-8 space-y-2">
          <p className="text-sm text-gray-400">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/services')}
              className="text-sm text-gray-300 hover:text-accent transition"
            >
              Services
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="text-sm text-gray-300 hover:text-accent transition"
            >
              Projects
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-sm text-gray-300 hover:text-accent transition"
            >
              About
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-sm text-gray-300 hover:text-accent transition"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
