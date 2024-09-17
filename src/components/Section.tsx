import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  const { children } = props;

  return (
    <section className="w-[clamp(80rem, 80%, 90rem)] my-24 mx-auto grid grid-cols-2 gap-28 items-center">
      {children}
    </section>
  );
};

export default Section;
