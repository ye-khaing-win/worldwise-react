import Main from "../components/Main";
import PageNav from "../components/PageNav";
import Section from "../components/Section";

const Product = () => {
  return (
    <Main>
      <PageNav />
      <Section>
        <img
          className="w-full max-w-[52rem]"
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2 className="text-6xl mb-12">
            About WorldWide.
          </h2>
          <p className="text-2xl mb-8">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo est dicta illum vero
            culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat
            debitis, laboriosam at fuga perspiciatis?
          </p>
          <p className="text-2xl mb-8">
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis doloribus libero sunt
            expedita ratione iusto, magni, id sapiente sequi
            officiis et.
          </p>
        </div>
      </Section>
    </Main>
  );
};

export default Product;
