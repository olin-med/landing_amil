// src/App.tsx
import PageContainer from "./components/PageContainer"
import FormField from "./components/FormField"
import NavBar from "./components/NavBar"
import Button from "./components/LinkButton"
import FormButton from "./components/FormButton"
import CategoryCard from "./components/CategoryCard"
import VerticalCard from "./components/VerticalCard"
import MobileWhatsAppFloating from "./components/MobileWhatsAppFloating"
import Footer from "./components/Footer"
import familyBg from "/familia_sofa1.avif"
import corporateBg from "/bgCorporate.avif"

const PRODUCT_CARDS = [
  {
    title: "Amil Fácil",
    content: (
      <p className="text-gray-700">
        Planos médicos com abrangência nacional ou regional, oferecendo a opção de
        coparticipação e de reembolso.
      </p>
    ),
  },
  {
    title: "Amil",
    content: (
      <p className="text-gray-700">
        Criada com os conceitos de simplicidade, eficiência e cuidado, a Amil
        oferece planos regionais com excelente custo-benefício.
      </p>
    ),
  },
  {
    title: "Amil One",
    content: (
      <p className="text-gray-700">
        Líder no segmento <em>premium</em>, a Amil One alia conveniência e
        exclusividade para entregar a melhor experiência em saúde e bem-estar.
      </p>
    ),
  },
  {
    title: "Amil Dental",
    content: (
      <p className="text-gray-700">
        Os melhores planos e profissionais mais capacitados para você, sua família
        ou empresa a um preço que cabe no seu bolso.
      </p>
    ),
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* ─── MOBILE: header over background, form below ─── */}
      <section className="block lg:hidden">
        <div
          className="w-full py-16 px-4 flex items-center min-h-[450px] relative justify-center"
          style={{
            backgroundImage: `url(${familyBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#3d1cff66",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="text-white text-3xl md:text-4xl font-bold text-center leading-tight">
            <p className="text-[#3d1cff]">Amil,</p>
            Execência e preço justo
            <p className="mt-4 text-base md:text-lg font-normal opacity-80">
              Seu caminho para proteção completa
            </p>
          </div>
        </div>
      </section>

      {/* ─── DESKTOP: side-by-side with background ─── */}
      <PageContainer
        id="home"
        className="hidden lg:flex py-16 px-4 flex-row justify-center items-center gap-x-20"
        style={{
          backgroundImage: `url(${familyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#3d1cff66",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-right leading-tight">
          <p className="text-[#3d1cff]">Amil,</p>
          Execência e preço justo
          <p className="mt-4 text-base md:text-lg lg:text-2xl font-normal opacity-80 text-center lg:text-right">
            Seu caminho para proteção completa
          </p>
        </div>

        <FormField
          id="name"
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4"
          name="name"
          value=""
        />
      </PageContainer>

      

      {/* BENEFITS */}
      <PageContainer
        id="benefits"
        className="
          bg-gray-200
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-4 lg:gap-x-40
        "
      >
        <div className="text-base md:text-lg lg:text-xl lg:text-right text-black">
          Quer Marcar Consultas ou dúvidas sobre seu plano atual? <br className="hidden lg:block" />
          Já é Cliente?
        </div>
        <Button
          id="submit"
          type="submit"
          className="mt-4 lg:mt-0 cursor-pointer"
          link="https://www.amil.com.br/beneficiario/#/"
        >
          Visite a Central de Clientes
        </Button>
      </PageContainer>

      {/* ADVERTISING */}
      <PageContainer
        id="advertising"
        className="
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-8 lg:gap-x-40
        "
        style={{
          backgroundImage: `url(${corporateBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#3d1cff66",
          backgroundBlendMode: "overlay",
        }}
      > 
        <FormButton
          mobileScrollTargetId="home2"
          desktopScrollTargetId="home"
          className="bg-white text-blue-900 hover:bg-[#00d896] hover:text-white transition duration-300"
        >
          Solicitar Cotação
        </FormButton>
        <div className="text-white space-y-2 text-base md:text-lg lg:text-xl">
          <div>Não é Cliente?</div>
          <div>Quer saber mais sobre nossos planos?</div>
        </div>
      </PageContainer>

      {/* CATEGORIES */}
      <PageContainer
        id="categories"
        className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Nossas Categorias de Planos
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <CategoryCard id="category1" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="Amil Fácil" imageUrl="/health.avif">
            <p>
              Planos médicos com abrangência nacional ou regional, oferecendo a opção de
              coparticipação e de reembolso.
            </p>
          </CategoryCard>
          <CategoryCard id="category2" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="Amil" imageUrl="/health2.avif">
            <p>
              Criada com os conceitos de simplicidade, eficiência e cuidado, a Amil Fácil
              oferece planos regionais com excelente custo-benefício.
            </p>
          </CategoryCard>
          <CategoryCard id="category3" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="Amil One" imageUrl="/familia1.avif">
            <p>
              Líder no segmento <em>premium</em>, a Amil One alia conveniência e
              exclusividade para entregar a melhor experiência em saúde e bem-estar.
            </p>
          </CategoryCard>
          <CategoryCard id="category4" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="Amil Dental" imageUrl="/health1.avif">
            <p>
              Os melhores planos e profissionais mais capacitados para você, sua família
              ou empresa a um preço que cabe no seu bolso.
            </p>
          </CategoryCard>
        </div>
      </PageContainer>

      {/* PRODUCTS */}
      <PageContainer
        id="products"
        className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-y-8">
          <h2 className="text-center lg:text-left text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            Conheça os Nossos Produtos
          </h2>
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-y-8 lg:gap-x-40">
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
              {PRODUCT_CARDS.map(({ title, content }) => (
                <VerticalCard key={title} title={title}>
                  {content}
                </VerticalCard>
              ))}
            </div>
            <div className="w-full lg:w-1/2 h-[350px] flex justify-center">
              <img
                src="/running.avif"
                alt="Detalhes dos produtos"
                className="h-full w-auto object-cover shadow-lg rounded"
              />
            </div>
          </div>
        </div>
      </PageContainer>
      {/* ─── MOBILE FORM ─── */}
      <PageContainer id="home2" className="block lg:hidden bg-gray-200">
        <div className="px-4 pb-16">
          <FormField
            id="name"
            name="name"
            value=""
            className="w-full sm:w-3/4 md:w-1/2 mx-auto"
          />
        </div>
      </PageContainer>

      {/* Mobile WhatsApp Button */}
      <div className="flex flex-col">
        <MobileWhatsAppFloating />
      </div>

      <Footer />
    </div>
  );
}

export default App;
