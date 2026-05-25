
export default function layout({
  herosection,
  children,
}: {
  herosection: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      {herosection}
      {children}
    </div>
  );
}
