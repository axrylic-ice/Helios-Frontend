export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <main className="flex-1">{children}</main>
    </div>
  );
}