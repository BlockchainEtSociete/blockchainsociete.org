# BlockchainSociete.org

Ce projet est un site statique pour [l'association blockchain et societe](http://blockchainsociete.org) généré avec [Hugo](https://gohugo.io).

La section évènements est générée à partir d'un template hugo dans lequel sont injectées les données provenant de l'api meetup.com

## Prérequis

- [Hugo](https://gohugo.io/getting-started/quick-start/)

## Générer le site

### Manuellemment

```bash
node .
```

Une fois les données récupérées, le site est généré dans le répertoire [`/docs`](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch)

### Via Travis CI
Une pipeline Travis existe dans le fichier .travis.yml :
 * Génération du site via Hugo
 * Push d'une nouvelle branche sur GitHub possédant un commit avec le nouveau contenu du site. Il faut créer les variables d'environnement suivantes dans Travis :
   * EMAIL / USERNAME du compte GitHub
   * TRAVIS_SECURE_TOKEN_NAME : token généré depuis les paramètres d'un compte GitHub dans Settings > Developer settings > Personal access tokens > créer un token avec seulemement le scope `repo/public_repo`
   * GITHUB_REPO exemple : github.com/blockchainetsociete/blockchainsociete.org.git