export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {children}
        Next.js is cool!
      </div>
    );
  }
