const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="rounded border border-white p-2">{children}</div>;
};

export { Card };
