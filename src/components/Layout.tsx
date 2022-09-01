import Sidebar from './Sidebar';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col md:flex-row font-sans text-xl w-full">
    <Sidebar />
    <main className="py-20 pl-20 w-full max-w-prose">{children}</main>
  </div>
);

export default Layout;
