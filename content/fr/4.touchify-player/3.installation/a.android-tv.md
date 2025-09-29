---
title: Guide d'installation Android TV
description: Installer l'application Touchify Player sur un périphérique Android TV et configurer un mode kiosque sécurisé.
navigation:
    title: Android TV
    icon: i-lucide-tv
seo:
    title: Guide d'installation de Touchify Player sur Android TV
    description: Découvrez comment l'application Touchify Player peut s'installer et s'exécuter en mode kiosque sécurisé sur des écrans avec un stick Android TV
---

## Configuration initiale

### Compte Google

Généralement Android TV demande de connecter l'appareil avec un compte Google. Vous pouvez créer un compte spécifique pour votre projet, par exemple *mycustomer.mycompany.signage@gmail.com*.

Sur certains appareils il est possible d'ignorer cette étape. Auquel cas, Google Play ne sera pas disponible et l'installation d'application nécessitera de connecter l'appareil à un ordinateur.
Plus d'informations dans la section [Installer une application avec ADB](#utiliser-adb-pour-installer-une-application-optionnel).

### Premier démarrage

Avant de commencer l'installation de Touchify sur votre player Android TV, quelques étapes sont nécessaires pour démarrer le player.
Commencez par brancher le player à votre écran et à l'alimentation puis suivez les instructions sur l'écran :

1. Associer la télécommande
2. Sélectionner la langue de l'interface et la région
3. Passer l'étape **"Configurer le rapidement la TV avec votre téléphone Android"**
4. Connecter le player à votre réseau Wi-Fi
5. Se connecter avec un compte Google
6. Accepter les **"Conditions d'utilisation"**
7. Sur l'étape **"Services Google"** :
    - Décocher **"Utiliser la position"**
    - Décocher **"Aider à améliorer Android"**
    - Cliquer **"Accepter"**
8. Sur l'étape **"Google Assistant"**, sélectionner **"Non, merci"**
9. Sur l'étape **"Installer d'autres applications"**, décocher **"Installer toutes les applis suivantes"**, puis **"Continuer"**
10. Sur l'étape **"Rester informé"**, sélectionner **"Non, merci"**
11. Sur l'étape **"Sélectionner vos abonnements"**, cliquer sur **"Continuer"**

## Installer les prérequis

### Installer l'application Downloader

1. Ouvrir "Google Play"
2. Rechercher "Downloader"
3. Sélectionner "Downloader by AFTVnews"
4. Cliquer sur "Installer"

*Note : Si Google Play n'est pas disponible, utiliser ADB pour installer Touchify directement. Plus d'informations dans la section [Installer une application avec ADB](#utiliser-adb-pour-installer-une-application-optionnel).*

![Téléchargement de Downloader sur Google Play](/4-touchify-player/3-installation/a-android-tv/fr-player-androidtv-downloader.webp)

### Mettre à jour la webview

1. Ouvrir **"Google Play"**
2. Rechercher **"webview"**
3. Sélectionner **"Android System Webview"**
4. Cliquer sur **"Mettre à jour"**

*Note : Si Google Play n'est pas disponible, utiliser ADB pour mettre à jour la webview. Plus d'informations dans la section [Installer une application avec ADB](#utiliser-adb-pour-installer-une-application-optionnel).*

![Téléchargement de WebView sur Google Play](/4-touchify-player/3-installation/a-android-tv/fr-player-androidtv-webview.webp)

## Configurer le player

### Mettre à jour le système

1. Naviguer dans les paramètres du player *(en haut à droite de l'écran)*
2. Naviguer dans **"Préférences relative à l'appareil"** puis **"A propos"**
3. Cliquer sur **"Mise à jour du système"**
4. Si une mise à jour est disponible, l'installer

### Supprimer les restrictions du player

::note
En restant sur la page "A propos", commencer à l'étape 3.
::

1. Naviguer dans les paramètres du player *(en haut à droite de l'écran)*
2. Naviguer dans **"Préférences relative à l'appareil"** puis **"A propos"**
3. Naviguer sur **"Build"**
4. Cliquer **7** fois sur **"Build"**

### Changer le nom du périphérique

::note
En restant sur la page "A propos", commencer à l'étape 3.
::

1. Naviguer dans les paramètres du player *(en haut à droite de l'écran)*
2. Naviguer dans **"Préférences relative à l'appareil"** puis **"A propos"**
3. Cliquer sur **"Nom de l'appareil"** puis **"Modifier"**
4. Sélectionner **"Saisir un nom personnalisé"**
5. Saisir un nom identifiable *(ex : screen-client-1)*
6. Cliquer sur **"Entrée"** sur le clavier

### Désactiver l'écran de veille

1. Naviguer dans les paramètres du player *(en haut à droite de l'écran)*
2. Naviguer dans **"Préférences relative à l'appareil"** puis **"Options pour les développeurs"**
3. Activer **"Ecran toujours actif"**
4. Cliquer sur **"Retour"** pour retour sur la page de **"Préférences relative à l'appareil"**
5. Naviguer dans **"Economiseur d'écran"**
6. Dans **"Economiseur d'écran"**, sélectionner **"Sommeil"**
7. Dans **"Mettre l'appareil en veille"**, sélectionner **"Jamais"**

### Supprimer les applications

::tip
Il est conseillé de supprimer ou désactiver les applications non utilisées.
::

::note
Note : il est possible d'utiliser l'application ADB TV pour simplifier cette opération (réf. section [Installer l'application ADB TV](#utiliser-adb-pour-installer-une-application-optionnel))
::

1. Naviguer dans les paramètres du player *(en haut à droite de l'écran)*
2. Naviguer dans **"Applications"**
3. Sélectionner une application à supprimer
4. Cliquer sur **"Désinstaller"** ou **"Désactiver"**

### Mettre à jour les applications

1. Ouvrir le **"Google Play"**
2. Cliquer sur l'icone de l'utilisateur en haut à droite de l'écran
3. Naviguer sur **"Gérer les applications et les jeux"** puis **"Mise à jour"**
4. Cliquer sur **"Tout mettre à jour"**

### Autoriser Downloader à installer des applications

1. Naviguer dans les paramètres du player *(en haut à droite de l'écran)*
2. Naviguer dans **"Applications"** puis **"Sécurité et restrictions"** puis **"Sources inconnues"**
3. Cocher **"Downloader"**

### Désactiver les recommandations et la synchronisation

1. Naviguer dans les paramètres du player *(en haut à droite de l'écran)*
2. Naviguer dans **"Comptes et connexion"**
3. Sélectionner votre compte
4. Décocher **"Jouer automatiquement les trailers"**
5. Cocher **"Applications uniquement"** et cliquer sur **"Activer"**
6. Décocher les synchronisations **"Agenda"**, **"Contacts"**, et **"Google Play Films et TV"**

## Installer Touchify Player

Sur l'écran d'accueil :

1. Ouvrir **"Downloader"**
2. Autoriser **"Downloader"** à accéder aux photos, contenus multimédias et fichiers sur votre appareil
3. Dans la barre d'adresse, entrer l'URL suivante : **get.touchify.io/android**
4. Après le téléchargement, une fenêtre de confirmation apparaît, cliquer sur **"Installer"**
5. Après l'installation, cliquer sur **"OK"** *(ne pas ouvrir l'application pour l'instant)*

![Téléchargement de Touchify Player sur Downloader](/4-touchify-player/3-installation/a-android-tv/fr-player-androidtv-download.webp)

![Installation de Touchify Player sur Downloader](/4-touchify-player/3-installation/a-android-tv/fr-player-androidtv-installe.webp)

## Ajouter les permissions à Touchify Player

### Autoriser l'application à se lancer au démarrage

1. Naviguer dans les paramètres du player *(en haut à droite de l'écran)*
2. Naviguer dans **"Applications"**, puis **"Accès spécifiques des applications"**, puis **"Superposer aux autres applications"**
3. Activer **"Touchify Player"**
4. Il est recommandé de **désactiver toutes les autres applications**

![Autoriser la superposition de Touchify dans les paramètres d'Android TV](/4-touchify-player/3-installation/a-android-tv/fr-player-androidtv-superposition.webp)

### Autoriser l'application à se mettre à jour

1. Retourner dans le menu **"Applications"**
1. Naviguer dans **"Sécurité et restrictions"** puis **"Sources inconnues"**
1. Activer **"Touchify Player"**
1. Eventuellement, désactiver **"Downloader"**

![Autoriser la mise à jour de Touchify dans les paramètres d'Android TV](/4-touchify-player/3-installation/a-android-tv/fr-player-androidtv-maj.webp)

## Associer l'écran à votre compte

Depuis l'écran d'accueil :

1. Ouvrir **"Touchify Player"**
2. Entrer votre clé de déploiement (voir [Introduction à Touchify Publisher](../../touchify-publisher/introduction))

![Association d'un écran sur Android TV](/4-touchify-player/3-installation/a-android-tv/fr-player-androidtv-association.webp)

::note
Au premier démarrage, une popup s'affiche pour vous inviter à lancer automatiquement Touchify Player au démarrage de l'appareil, cliquer sur **"Activer"**.
::

![Autorisation de démarrage automatique de Touchify sur Android TV](/4-touchify-player/3-installation/a-android-tv/fr-player-androidtv-boot.webp)

## Utiliser ADB pour installer une application (optionnel)

### Où trouver ADB ?

Si les outils de développement Android sont installés sur votre ordinateur, ADB se trouve dans le dossier *platform-tools* du SDK, par exemple *AppData/Local/Android/Sdk/platform-tools*.

Vous pouvez également télécharger ADB sur [Google Android Developpers](https://developer.android.com/studio/releases/platform-tools).

### Où trouver les applications ?

Plusieurs sites référencent les applications Android, par exemple [APK Mirror](https://www.apkmirror.com/).

Rechercher une application et sélectionner la version la plus récente correspondant à votre version d'Android.

L'application Touchify Player est accessible sur notre site Internet :

::u-button{variant="primary" to="https://get.touchify.io" target="_blank" icon="i-lucide-download"}
Télécharger Touchify Player
::

### Installer une application

En ligne de commande, dans le dossier contenant ADB :

```bash
adb install -r "PATH\TO\FILE\package.apk"
```

## Configurer un mode kiosque avancé (optionnel)

### Installer l'application ADB TV

::note
Si l'appareil est déjà connecté via ADB, vous pouvez ignorer cette étape. L'application ADB TV permet un accès à ADB directement depuis l'appareil.
::

A partir du Google Play, rechercher l'application ADB TV puis installer.

Si le Google Play n'est pas disponible, installer l'application avec ADB.

### Définir Touchify comme application d'Accueil

Exécuter la commande suivante pour définir Touchify comme application d'Accueil

```bash
## A partir d'une ligne de commande
adb shell pm set-home-activity co.touchify.player/co.touchify.cordova.plugin.launcher.LauncherActivity

## A partir de la console ADB TV
pm set-home-activity co.touchify.player/co.touchify.cordova.plugin.launcher.LauncherActivity
```

Exécuter la commande suivante pour désactiver l'application d'accueil par défaut :

```bash
## A partir d'une ligne de commande
adb shell pm disable-user --user 0 com.google.android.tvlauncher

## A partir de la console ADB TV
pm disable-user --user 0 com.google.android.tvlauncher
```

### Rétablir l'écran d'accueil par défaut

Exécuter les commandes suivantes pour rétablir l'écran d'accueil par défaut :

```bash
## A partir d'une ligne de commande
adb shell pm enable --user 0 com.google.android.tvlauncher
adb shell pm set-home-activity com.google.android.tvlauncher/.MainActivity

## A partir de la console ADB TV
pm enable --user 0 com.google.android.tvlauncher
pm set-home-activity com.google.android.tvlauncher/.MainActivity
```
