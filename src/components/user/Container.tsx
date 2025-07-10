const Container = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className: string;
}>) => {
  return <div className={`w-full ${className}`}>{children}</div>;
};

export default Container;
