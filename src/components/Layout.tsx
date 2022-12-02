import Sidebar from './Sidebar';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col md:flex-row font-sans text-xl w-full">
    <Sidebar />
    <div className="flex flex-col main-content">
      <main className="w-full max-w-[720px] pr-4 py-10 pl-5 md:py-20 md:pl-20">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
