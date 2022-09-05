import Sidebar from './Sidebar';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col md:flex-row font-sans text-xl w-full">
    <Sidebar />
    <div className="w-full pr-4 py-10 pl-5 md:py-20 md:pl-20">
      <main className="w-full max-w-[720px]">{children}</main>
    </div>
  </div>
);

export default Layout;
