# CHIFFON RH — démonstrateur de tri de candidatures

## Installation sur GitHub Pages

1. Créer un dépôt GitHub (par exemple `chiffon-rh`).
2. Déposer **à la racine** les fichiers `index.html`, `style.css`, `data.js`, `app.js`.
3. Aller dans **Settings → Pages → Build and deployment → Deploy from a branch**, choisir `main` et `/(root)`, puis enregistrer.
4. Ouvrir l'adresse GitHub Pages fournie dans les paramètres du dépôt.

Aucun serveur et aucune clé API ne sont nécessaires pour ce prototype. Il repose sur une correspondance déterministe de mots-clés, **pas sur un modèle d'IA générative**. Les critères sont modifiables dans l'interface. Les 15 exemples fictifs proviennent de l'annexe 2 de l'exercice CHIFFON.

## Fonctions incluses

- 6 référentiels de postes RH contextualisés pour CHIFFON ; modification des mots-clés, des poids (1–5), des critères essentiels et des questions d'entretien.
- Import local PDF texte / DOCX / TXT ; analyse des 15 profils fictifs ; pourcentage pondéré de critères détectés ; catégories « Entretien conseillé », « À approfondir » et « Non prioritaire ».
- Une absence de critère essentiel bloque au maximum la catégorie « Entretien conseillé » et déclenche une alerte, **pas une exclusion automatique**.
- Questions d'entretien suggérées, avis manuel du recruteur, filtre et export CSV de synthèse.
- Aucun upload des CV sur GitHub ni vers un serveur applicatif ; fichiers chargés uniquement dans la mémoire de l'onglet (pas de base de données ni d'historique).

**Attention :** les dépendances pdf.js et Mammoth sont chargées depuis CDNJS. Les fichiers sont extraits dans le navigateur ; une politique de sécurité plus stricte imposerait de vendorer/auditer les librairies et de les servir localement. Le prototype n'offre ni authentification, ni collaboration, ni stockage des CV pendant 12 mois. Les PDF constitués d'images nécessitent un OCR non inclus. Le moteur n'utilise ni sémantique profonde ni vérification d'expérience.

## Architecture recommandée pour conserver les CV 12 mois

Ne **jamais** committer des CV, exports nominatifs, secrets ou clés d'API dans GitHub, même dans un dépôt privé ; Git conserve l'historique. GitHub Pages héberge seulement l'interface statique.

Pour la production, prévoir :

- **Interface** : React ou HTML/JS sur GitHub Pages (ou autre hébergement). **Authentification forte** des recruteurs ; ne pas laisser accessible au public un accès aux candidatures.
- **API** : backend avec validation des droits par utilisateur. Toutes les opérations de lecture, export ou suppression passent par cette API.
- **Stockage sécurisé** : bucket **privé** chiffré de type S3, Supabase Storage ou OVHcloud Object Storage, hébergé de préférence dans l'UE, avec liens temporaires et permissions côté serveur.
- **Base de données** : PostgreSQL (candidat, finalité, date de collecte, date du dernier contact, information donnée, base légale, date d'expiration, état du recrutement, traces d'accès).
- **Expiration** : calculer `expires_at = date de référence + 12 mois` selon la politique validée ; tâche serveur quotidienne purgeant fichiers et métadonnées expirés. Prévoir également la suppression sur demande, le sort des sauvegardes et les éventuelles obligations de conservation probatoire distinctes.
- **RGPD** : informer le candidat, documenter la base légale et la finalité du vivier, faciliter opposition et effacement, contrat de sous-traitance, registre, gestion des accès et vérification de la nécessité d'une AIPD. La CNIL recommande en principe une durée de vivier n'excédant pas **2 ans depuis le dernier contact** ; **1 an est une politique plus courte envisageable** si adaptée et documentée.
- **Décisions** : aucune exclusion purement automatique ; critères uniquement liés à l'emploi, contrôle des biais, mesure des faux négatifs, traçabilité des validations humaines.

**Important :** ce dépôt est un démonstrateur fonctionnel du moteur de prétri, **pas** la solution de conservation et d'accès sécurisés prête à déployer. Pour une vraie CVthèque, il faut développer/brancher le backend décrit plus haut.

## Méthode de score

Pour chaque critère, un mot-clé ou synonyme est recherché (casse/accents ignorés, expressions entières). Score = `100 × somme des poids des critères trouvés / somme des poids de tous les critères`, arrondi. Seuils par défaut : 75 % « Entretien conseillé », 45 % « À approfondir », sinon « Non prioritaire ». Si un critère essentiel n'est pas repéré, un score supérieur à 75 % devient « À approfondir ». **Le pourcentage ne représente pas une chance d'embauche ni la qualité intrinsèque du candidat.** Un absence de mot-clé peut être un faux négatif.

## Sources utiles

- CNIL, Guide du recrutement : https://www.cnil.fr/fr/le-guide-du-recrutement
- CNIL, référentiel de conservation RH (2026) : https://cnil.fr/sites/default/files/2026-04/referentiel_durees_de_conservation_gestion_des_ressources_humaines.pdf
- GitHub Pages : https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
