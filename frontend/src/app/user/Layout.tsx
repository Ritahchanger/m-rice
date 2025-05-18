const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="user-progress-tracking">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
