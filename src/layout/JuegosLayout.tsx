type JuegosLayoutProps = {
  title: string;
  children: React.ReactNode;
};

function JuegosLayout({ children, title }: JuegosLayoutProps) {
  return (
    <main className="flex flex-col flex-1 p-5 gap-8">
      <h2 className="text-center font-semibold text-2xl">{title}</h2>
      <section className="flex-1 flex flex-col mt">{children}</section>
    </main>
  );
}
export default JuegosLayout;
