interface RowProps {
  children: React.ReactNode;
}

const Row = (props: RowProps) => {
  const { children } = props;

  return (
    <div className="flex flex-col gap-2 relative">
      {children}
    </div>
  );
};

export default Row;
