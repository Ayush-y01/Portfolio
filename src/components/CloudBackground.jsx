export default function CloudBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#8ed0f5]" />

      <div className="cloud-track cloud-slow bg-blue-400">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-1" />
      </div>

      <div className="cloud-track cloud-medium">
        <div className="cloud cloud-2" />
        <div className="cloud cloud-2" />
      </div>

      <div className="cloud-track cloud-fast">
        <div className="cloud cloud-3" />
        <div className="cloud cloud-3" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_20%,rgba(255,255,255,0.12)_100%)]" />
    </div>
  );
}