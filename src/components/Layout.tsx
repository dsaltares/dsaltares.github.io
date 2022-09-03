import Sidebar from './Sidebar';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col md:flex-row font-sans text-xl w-full">
    <Sidebar />
    <main className="my-20 ml-20 mr-2 w-full max-w-[720px]">{children}</main>
  </div>
);

export default Layout;
