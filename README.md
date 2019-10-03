# BlockchainSociete.org

Ce projet est un site statique pour [l'association blockchain et societe](http://blockchainsociete.org) généré avec [Hugo](https://gohugo.io).

La section évènements est générée à partir d'un template hugo dans lequel sont injectées les données provenant de l'api meetup.com

## Prérequis

- NodeJS >= 6
- Yarn ou NPM

## Générer le site

Hugo est automatiquement téléchargé et installé dans le répertoire `node_modules`.

Une fois les données récupérées, le site est généré dans le répertoire [`/docs`](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch).

### Avec Yarn


```bash
$ yarn
$ yarn build
```

### Avec NPM

```bash
$ npm -i
$ npm build
```
