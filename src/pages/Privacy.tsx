import { useI18n } from "../stores/i18n"; // Ajusta la ruta si es necesario
import { NavHero } from "../components/NavHero"; // Ajusta la ruta si es necesario
import "./LegalPages.css";

export const Privacy = () => {
  const { t } = useI18n();

  return (
    <>
      <NavHero />
      <main className="legal-page-container">
        <h1>{t("privacyPage.title")}</h1>
        <p className="last-updated">{t("privacyPage.lastUpdated")}</p>

        {Object.keys(t("privacyPage.sections", { returnObjects: true })).map(
          (sectionKey) => (
            <section key={sectionKey}>
              <h2>{t(`privacyPage.sections.${sectionKey}.title`)}</h2>
              <p>{t(`privacyPage.sections.${sectionKey}.content`)}</p>
            </section>
          )
        )}
      </main>
    </>
  );
};
