import React from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main = (props: MainProps) => {
  const { children } = props;
  return (
    <main className="m-10 py-10 px-20 bg-dark-1 h-hero">
      {children}
    </main>
  );
};

export default Main;
