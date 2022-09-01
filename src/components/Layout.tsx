import Sidebar from './Sidebar';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col md:flex-row font-sans text-xl">
    <Sidebar />
    <main className="p-20 max-w-prose">{children}</main>
  </div>
);

export default Layout;
