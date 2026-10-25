# Rapport - scan des styles SASS/CSS (heuristique)

> Généré automatiquement depuis `tools/scan-scss-unused.ps1` et `scan-sass-report.json`.

## Métadonnées
- Projet : marie-website
- Date du scan : 02/04/2026 09:04:42
- Script : `tools/scan-scss-unused.ps1`
- Emplacement du rapport brut : `scan-sass-report.json`

## Résumé chiffré
- Fichiers styles scannés : 31
- Fichiers code scannés : 104
- Sélecteurs/classes détectés : 386
- Mixins détectés : 17 (6 candidats non utilisés)
- Placeholders (%...) : 0
- Variables SASS ($...) : 0 (utilisation de CSS custom properties)

---

## 1) Mixins SASS candidats à suppression
(Enlever 1 par 1, tester le site après chaque suppression.)

- `truncate` — `src/scss/rules/_mixins.scss`
  - Note : Aucun `@include truncate` trouvé dans le projet.

- `paragraphe-txt-container` — `src/scss/rules/_mixins.scss`
  - Note : Aucun `@include paragraphe-txt-container` trouvé.

- `svg-secondary-color-text` — `src/scss/rules/_mixins.scss`
  - Note : Aucun `@include svg-secondary-color-text` trouvé.

- `svg-primary-color` — `src/scss/rules/_mixins.scss`
  - Note : Aucun `@include svg-primary-color` trouvé.

- `svg-tertiary-color` — `src/scss/rules/_mixins.scss`
  - Note : Aucun `@include svg-tertiary-color` trouvé.

- `svg-secondary-color` — `src/scss/rules/_mixins.scss`
  - Note : Aucun `@include svg-secondary-color` trouvé.

---

## 2) Placeholders
- Aucun placeholder `%...` détecté.

---

## 3) Variables SASS
- Aucune variable SASS `$name:` détectée. Le projet utilise des CSS custom properties (`--...`) définies dans `src/scss/rules/_main.scss`.

---

## 4) Classes CSS détectées comme non référencées (liste heuristique)
> Attention : recherche textuelle. Certaines classes (préfixe `p-`) sont appliquées par des composants UI (PrimeReact) au runtime et peuvent ne pas apparaître dans le code source.

Liste (extraits — voir la section Données brutes JSON pour la liste complète) :

- `lazy-load-image-background` — `public/css/index.css`
- `p-galleria`, `p-galleria-item-wrapper`, `p-galleria-item-container`, `p-galleria-item`, `p-galleria-thumbnail-wrapper` — `src/scss/fragments/BlogArticle.scss` (PrimeReact)
- `p-card-header`, `p-card-body`, `p-card-footer` — `src/scss/fragments/BlogCard.scss` (PrimeReact)
- `p-carousel-items-container` — `src/scss/fragments/ReviewContainer.scss` (PrimeReact)
- `p-carousel-content` — `src/scss/routes/Accueil.scss` (PrimeReact)
- `p-fieldset*`, `p-multistatecheckbox`, `p-checkbox-*`, `p-autocomplete*` — `src/scss/routes/Actues-et-News.scss` (PrimeReact)
- `bg-image-alternative-container-img-*`, `bg-image-container-img-*` — plusieurs fichiers `src/scss/routes/*.scss` (vérifier `className` passés aux composants d'image)
- `intervention-area` — `src/scss/routes/Offres.scss`
- `career-image-container` — `src/scss/routes/QuiSuisJe.scss`
- `size-*-hidden`, `size-*-visible`, `img-l-container`, `size-xxl-*` — `src/scss/index.scss`
- `p-panel-title` — `src/scss/OverridePrimeCSS.scss` (override PrimeReact)

---

## 5) Fichiers SASS/CSS non référencés (candidats à suppression ou archivage)
- Fichiers générés (safe to remove if you can rebuild):
  - `public/css/pages/Consultations.css`
  - `public/css/pages/Contact.css`
  - `public/css/pages/M5C.css`
  - `public/css/pages/Massage-assis-EAS.css`
  - `public/css/pages/Offres.css`
  - `public/css/pages/QuiSuisJe.css`
  - `public/css/pages/Reiki.css`
  - `public/css/index.css`
  - `public/css/OverridePrimeCSS.css`

- Fichiers `src/scss` marqués non référencés (vérifier import explicite avant suppression) :
  - `src/scss/fragments/McImageContainers/BgMcImageAlternativeContainer.scss`
  - `src/scss/fragments/McImageContainers/BgMcImageContainer.scss`
  - `src/scss/fragments/BlogArticle.scss`
  - `src/scss/fragments/BlogCard.scss`
  - `src/scss/fragments/Cta.scss`
  - `src/scss/fragments/PricesContainer.scss`
  - `src/scss/fragments/ReviewContainer.scss`
  - `src/scss/fragments/SocialNetworks.scss`
  - `src/scss/routes/Accueil.scss`
  - `src/scss/routes/Actues-et-News.scss`
  - `src/scss/routes/Blog.scss`
  - `src/scss/routes/Consultations.scss`
  - `src/scss/routes/Contact.scss`
  - `src/scss/routes/M5C.scss`
  - `src/scss/routes/Massage-assis-EAS.scss`
  - `src/scss/routes/Offres.scss`
  - `src/scss/routes/QuiSuisJe.scss`
  - `src/scss/routes/Reiki.scss`
  - `src/scss/rules/_main.scss`
  - `src/scss/rules/_mixins.scss`
  - `src/scss/index.scss`
  - `src/scss/OverridePrimeCSS.scss`

> NOTE : plusieurs fichiers `src/scss/*` ci-dessus sont en réalité importés par des composants (ex. `BlogArticle.scss` est importé par `BlogArticle.tsx`) — vérifier avant suppression.

---

## 6) Recommandations rapides (workflow sûr)
1. Archiver/supprimer les CSS générés dans `public/css/` puis `npm run build` pour regénérer. Committer les changements sur une branche dédiée.
2. Supprimer les mixins non utilisés (liste en section 1) un par un, tester visuellement après chaque suppression.
3. Pour chaque fichier `src/scss` marqué non référencé, exécuter `rg "<FileName>.scss"` pour confirmer s’il est importé ; si pas d’import → archiver/supprimer.
4. Regrouper overrides PrimeReact dans `src/scss/override/prime.scss`.
5. Ajouter un script `npm run clean-css` pour supprimer artefacts générés avant commit/build.

---

## 7) Données brutes (JSON)

```json
// Contenu complet de `scan-sass-report.json`
```

> Voir le fichier `scan-sass-report.json` à la racine pour l'export JSON complet.

---

### Suivant
- Si vous voulez, je peux créer une branche et appliquer les suppressions sûres (fichiers `public/css/*`) ou supprimer les mixins listés (une option par commit). Indiquez l’action souhaitée.

---

*Généré automatiquement.*
