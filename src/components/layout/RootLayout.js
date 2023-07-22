import Navbar from "@/shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
