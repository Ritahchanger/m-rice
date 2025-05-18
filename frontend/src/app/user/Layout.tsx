import Navbar from "@/components/Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="user-progress-tracking">
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
