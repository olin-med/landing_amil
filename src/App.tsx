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

const CATEGORY_CARDS = [
  {
    title: "Amil Bronze",
    imageUrl: "/health.avif",
    content: (
      <p>
        Abrangência: capital. Não possui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Bronze Mais",
    imageUrl: "/health2.avif",
    content: (
      <p>
        Abrangência: interior e litoral. Não possui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Prata",
    imageUrl: "/familia1.avif",
    content: (
      <p>
        Abrangência nacional com excelente custo-benefício. A partir do Prata já inclui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Ouro",
    imageUrl: "/health1.avif",
    content: (
      <p>
        Cobertura com alguns hospitais de primeira linha. Possui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Platinum",
    imageUrl: "/running.avif",
    content: (
      <p>
        Rede top de hospitais e clínicas. Possui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Platinum Mais",
    imageUrl: "/plus.avif",
    content: (
      <p>
        Rede top com acesso ao Sírio-Libanês e Laboratório Alta. Possui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Black",
    imageUrl: "/pro.avif",
    content: (
      <p>
        Rede top completa. Possui reembolso.
      </p>
    ),
  },
]

const PRODUCT_CARDS = [
  {
    title: "Amil Bronze",
    content: (
      <p className="text-black">
        Plano com abrangência na capital. Não contempla reembolso.
      </p>
    ),
  },
  {
    title: "Amil Bronze Mais",
    content: (
      <p className="text-black">
        Plano com abrangência no interior e litoral. Não contempla reembolso.
      </p>
    ),
  },
  {
    title: "Amil Prata",
    content: (
      <p className="text-black">
        Abrangência nacional com excelente custo-benefício. Inclui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Ouro",
    content: (
      <p className="text-black">
        Cobertura em hospitais de padrão elevado. Inclui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Platinum",
    content: (
      <p className="text-black">
        Rede de hospitais de alta qualidade. Inclui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Platinum Mais",
    content: (
      <p className="text-black">
        Acesso a hospitais de referência, como Sírio-Libanês e Laboratório Alta. Inclui reembolso.
      </p>
    ),
  },
  {
    title: "Amil Black",
    content: (
      <p className="text-black">
        Rede completa de hospitais e clínicas de excelência. Inclui reembolso.
      </p>
    ),
  },
]


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
            Excelência e preço justo
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
          Excelência e preço justo
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
          Quer marcar consultas ou dúvidas sobre seu plano atual? <br className="hidden lg:block" />
          Já é cliente?
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
          <div>Não é cliente?</div>
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
          {CATEGORY_CARDS.map(({ title, imageUrl, content }) => (
            <CategoryCard
              key={title}
              title={title}
              imageUrl={imageUrl}
              mobileScrollTargetId="home2"
              desktopScrollTargetId="home"
            >
              {content}
            </CategoryCard>
          ))}
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
