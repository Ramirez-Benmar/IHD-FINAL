const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-primary gradient-sheen animate-pulse">
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-16 pt-28">
        {/* Hero skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-48 bg-secondary/40 rounded"></div>
          <div className="h-12 w-3/4 bg-secondary/40 rounded"></div>
          <div className="h-6 w-2/3 bg-secondary/40 rounded"></div>
        </div>

        {/* Content cards skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="section-card p-6 space-y-4">
              <div className="h-20 w-20 bg-secondary/40 rounded-2xl"></div>
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-secondary/40 rounded"></div>
                <div className="h-4 w-full bg-secondary/40 rounded"></div>
                <div className="h-4 w-5/6 bg-secondary/40 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
