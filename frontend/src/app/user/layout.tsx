import Navbar from "@/components/Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="user-progress-tracking">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
