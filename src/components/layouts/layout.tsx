const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      {children}
    </div>
  );
};
export default Layout;
