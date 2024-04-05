# Gestionnaire de variable

Ce plugin permet de gérer de façon plus simple et plus intuitive les variables de texte dans Indesign

## Fonctionnement

Le plugin ajoute un panneau qui :
- affiche les variables du document ouvert, et permet de les supprimer ou de les insérer dans le/les blocs sélectionné(s) ou à l'emplacement du curseur ;
- permet d'ajouter une variable.

Lorsqu'une variable est supprimée, toutes ses occurences restent présentes dans le document sous forme de texte classique.

## Développement

Pour avoir une interface dynamique, le plugin utilise `React`. La document des plugin UXP n'étant pas des plus claire, le code est en parti mal structuré.


### Modifier le projet 

Une fois le projet téléchargé, il faut installer les dépendances `npm`

```
npm install
```

Ensuite, vous pouver build le projet (en mode development ou en lode production), ou observer les changements.

```
npm run dev
npm run build
npm run watch
```



### Charger le projet dans InDesign
Pour charger le projet, il faut l'application **UXP Developer Tools**.
1. Ouvrir l'application **InDesign**
2. Compiler le projet avec un `npm run dev` ou `npm run watch`
3. Ajouter ce plugin dans **UXP Developer Tools** choisissant le fichier `dist/manifest.json`

### Historique des versions
|Version|Notes|
|---|---|
| 1.1.0 | Ajout des différents thèmes de couleur pour correspondre au thème choisi par l'utilisateur|
| 1.0.0 | Première version fonctionnelle du plugin |

