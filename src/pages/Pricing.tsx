import Main from "../components/Main";
import PageNav from "../components/PageNav";
import Section from "../components/Section";

const Product = () => {
  return (
    <Main>
      <PageNav />
      <Section>
        <div>
          <h2 className="text-6xl mb-12">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p className="text-2xl mb-8">
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Vitae vel labore mollitia
            iusto. Recusandae quos provident, laboriosam
            fugit voluptatem iste.
          </p>
        </div>
        <img
          className="w-full max-w-[52rem]"
          src="img-2.jpg"
          alt="overview of a large city with skyscrapers"
        />
      </Section>
    </Main>
  );
};

export default Product;
