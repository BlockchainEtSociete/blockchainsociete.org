# Comment utiliser les scripts de blockchainsociete.org

## Générer les évènements

```bash
node _scripts/events
```

Récupère la liste des évènements (passés et à venir), 
extrait les informations nécessaires 
puis export en json les données dans un fichier (`_scripts/events/hugo/data/events.json`) 
pour être lu par `hugo` le générateur de site statique.