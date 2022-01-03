# BlockchainSociete.org

Ce projet est un site statique pour [l'association blockchain et societe](http://blockchainsociete.org) généré avec [Hugo](https://gohugo.io).

La section évènements est générée à partir d'un template hugo dans lequel sont injectées les données provenant de l'api meetup.com

## Prérequis

- NodeJS >= 12
- Yarn ou NPM
- Optionnel, car téléchargé par le script d'install : Hugo extended >= 0.91

## Développer le site

### Avec Yarn


```bash
$ yarn
$ yarn fetch-events
$ yarn dev
```

### Avec NPM

```bash
$ npm -i
$ npm run fetch-events
$ npm run dev
```

## Générer le site

Hugo est automatiquement téléchargé et installé dans le répertoire `node_modules/.bin`.

Une fois les données récupérées (avec le script `fetch-events`), le site est généré dans le répertoire `/docs`.

### Avec Yarn


```bash
$ yarn
$ yarn fetch-events
$ yarn build
```

### Avec NPM

```bash
$ npm -i
$ npm run fetch-events
$ npm build
```
