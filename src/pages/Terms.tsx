import { useI18n } from "../stores/i18n"; // Ajusta la ruta si es necesario
import { NavHero } from "../components/NavHero"; // Ajusta la ruta si es necesario
import "./LegalPages.css";

export const Terms = () => {
  const { t } = useI18n();

  return (
    <>
      <NavHero />
      <main className="legal-page-container">
        <h1>{t("termsPage.title")}</h1>
        <p className="last-updated">{t("termsPage.lastUpdated")}</p>

        {Object.keys(t("termsPage.sections", { returnObjects: true })).map(
          (sectionKey) => (
            <section key={sectionKey}>
              <h2>{t(`termsPage.sections.${sectionKey}.title`)}</h2>
              <p>{t(`termsPage.sections.${sectionKey}.content`)}</p>
            </section>
          )
        )}
      </main>
    </>
  );
};
