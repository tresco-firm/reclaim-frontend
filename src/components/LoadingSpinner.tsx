const LoadingSpinner = () => (
  <div className="flex min-h-[60vh] items-center justify-center p-8">
    <div className="flex items-center justify-center w-16 h-16 border-4 rounded-full border-primary/20 border-t-primary animate-spin" />
  </div>
);

export default LoadingSpinner;
