# Mode opératoire — relancer l'analyse SASS/CSS

But : expliquer pas à pas comment relancer l'analyse heuristique des styles (classes, mixins, placeholders, variables, fichiers non référencés) et comment interpréter/agir sur les résultats.

---

## Prérequis
- Windows + PowerShell (par défaut dans VS Code)
- Node/npm (pour rebuilds/tests si besoin)
- (Optionnel mais recommandé) ripgrep `rg` pour recherches rapides (https://github.com/BurntSushi/ripgrep) ; sinon on utilise `Select-String` de PowerShell ou la recherche de VS Code.
- Repo ouvert dans VS Code (racine = dossier du projet)

## Fichiers utiles dans le repo
- Script d'analyse : `tools/scan-scss-unused.ps1`
- Rapport brut JSON (généré par le script) : `scan-sass-report.json`
- Rapport résumé Markdown : `reports/scan-scss-unused.md`

---

## Commandes de base (PowerShell)
Exécuter le scan (depuis la racine du projet) :

```powershell
# exécute le script et écrit la sortie JSON
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\scan-scss-unused.ps1 > scan-sass-report.json
```

Ouvrir le rapport Markdown dans VS Code :

```powershell
code .\reports\scan-scss-unused.md
```

Relancer la recherche d'un fichier ou d'une classe (ripgrep rapide) :

```powershell
# chercher tous les imports contenant BlogArticle.scss
rg "BlogArticle.scss" -n

# chercher l'usage d'une classe .ma-classe dans le code
rg "\.ma-classe\b" -n
```

Si `rg` n'est pas disponible, utiliser `Select-String` :

```powershell
Get-ChildItem -Recurse -Include *.ts,*.tsx,*.js,*.jsx,*.scss,*.css,*.html | Select-String -Pattern "BlogArticle.scss" -SimpleMatch
```

---

## Interpréter `scan-sass-report.json`
Le fichier contient :
- `summary` : compteurs (fichiers scannés, nombre d'éléments)
- `unused` : sections `classes`, `mixins`, `placeholders`, `variables`, `unreferencedFiles`

Pour chaque élément listé :
- `name` : nom de la classe/mixin/variable/placeholder
- `file` : chemin complet du fichier où c'est défini
- `note` : commentaire heuristique (par ex. "aucun @include trouvé")

Important : le scan est heuristique (textuel). Les faux-positifs fréquents :
- classes ajoutées dynamiquement (ex. via `className` construit, utilitaires JS),
- classes ajoutées par runtime de composants UI (PrimeReact : préfixe `p-`),
- imports via build ou références par nom de fichier non détectées si import fait sans extension.

---

## Vérifications recommandées avant suppression
Pour chaque élément marqué "non utilisé" :
1. Rechercher le nom exact dans tout le projet (`rg "nom" -n`).
2. Si c'est une `class` : vérifier les `className` passés aux composants (JSX) — parfois la classe utilisée est une partie seulement du nom, ou préfixée dynamiquement.
3. Si c'est un `mixin` : rechercher `@include nom` et `@include mixins.nom`.
4. Si c'est un `fichier` : rechercher `import 'chemin/vers/fichier.scss'` ou `@use` / `@forward`.

Si aucune occurrence réelle n'est trouvée :
- Archiver le fichier ou supprimer dans une branche dédiée (voir ci‑dessous), puis `npm run build` / test visuel.

---

## Workflow sûr (recommandé)
1. Créer une branche Git dédiée :

```powershell
git checkout -b chore/cleanup-scss
```

2. Commencer par les suppressions faibles-risque :
   - fichiers générés/artefacts (`public/css/*.css`) — vous pouvez les supprimer car le build les regénérera.
   - mixins clairement orphelins (après vérification) un par un.

3. Pour chaque changement :
   - Committez (un commit par type de suppression). Exemple :

```powershell
git add -A
git commit -m "chore: remove generated public css files"
```

4. Rebuild & test local :

```powershell
# install/build si nécessaire
npm ci
npm run build
# ou lancer dev server
npm run dev
```

5. Test visuel : naviguer sur les pages principales (Accueil, Offres, Contact, pages où les styles sont importants) et vérifier qu'il n'y a pas de régressions.

6. Si tout est OK, ouvrir une PR vers la branche principale.

---

## Exemples rapides de recherches utiles
- Trouver tous les mixins définis :

```powershell
rg "@mixin\s+([A-Za-z0-9_-]+)" src -n
```

- Trouver tous les `@include` :

```powershell
rg "@include" src -n
```

- Lister tous les fichiers `.scss` non importés (heuristique) :

```powershell
rg "\.scss" -n | rg -v "node_modules|build|public"
```

---

## Ajuster le script `tools/scan-scss-unused.ps1`
- Pour exclure d'autres dossiers (ex : `public`), éditez la variable `$excludeDirs` au début du script.
- Pour ajouter des extensions à scanner, modifiez `$searchExts`.
- Si `Select-String` lève des erreurs à cause d'espaces dans les chemins, le script a déjà été corrigé pour utiliser une liste de chemins ; conservez cette approche si vous manipulez le script.

---

## Limitations connues
- Analyse textuelle → ne détecte pas les usages générés dynamiquement ou les classes ajoutées par le runtime (PrimeReact, etc.).
- Pas d'analyse AST/TypeScript : des usages comme `classNames('foo', condition && 'bar')` peuvent échapper à la détection précise.
- Ne détecte pas les variables SASS si elles sont importées via d'autres mécanismes spécifiques (rare dans ce repo car on utilise `--custom properties`).

---

## Trucs & astuces
- Pour vérifier si une `className` est utilisée indirectement, inspecter runtime DOM dans le navigateur (DevTools) en ouvrant une page et en cherchant la classe.
- Conserver une copie (archive) d'un fichier supprimé dans un dossier `archive/scss/` avant suppression finale.

---

## Support / suivi
- Rapport généré automatiquement : `scan-sass-report.json`.
- Résumé lisible : `reports/scan-scss-unused.md`.
- Contactez-moi si vous voulez que j’applique les suppressions sûres automatiquement sur une branche (ex : suppression `public/css/*` ou purge des mixins listés).

---

Fin du mode opératoire.
