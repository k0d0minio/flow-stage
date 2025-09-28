# 🚀 FLOW STAGE MVP - SPÉCIFICATIONS INSCRIPTION
## Documentation Fonctionnelle Complète

**Version:** 1.0  
**Date:** Décembre 2024  
**Module:** Inscription & Authentification  
**Priorité:** CRITIQUE - Première impression utilisateur  

---

## 🎯 **OVERVIEW & OBJECTIFS**

### **📋 Objectifs Business**
- **Conversion maximale** : Réduire friction inscription à <2 minutes pour inscription minimale
- **Données qualité** : Collecter infos essentielles pour matching efficace dès l'inscription
- **Segmentation précise** : Identifier persona pour parcours personnalisé
- **Compliance** : Respecter RGPD et réglementations européennes
- **Gamification** : Motivation completion profil avec progress tracking

### **🎮 Système de Gamification Intégré**
- **Progress bar animée** avec célébrations micro-étapes (confettis, sons)
- **Score completion profil** visible en permanence (0-100%)
- **Badges achievement** débloqués progressivement ("Profil vérifié", "Premier upload", etc.)
- **Motivation hooks** pour inciter completion complète ("Votre profil est 73% complet")

---

## 🔐 **MÉTHODES D'AUTHENTIFICATION**

### **🎯 4 Méthodes de Connexion Supportées**

#### **1. 📧 Email + Mot de Passe Classique**
- **Champs** : Email, mot de passe, confirmation mot de passe
- **Validation** : Email valide, mot de passe fort (8+ caractères, majuscule, chiffre, caractère spécial)
- **Vérification** : Email de confirmation obligatoire avant accès complet

#### **2. 🌐 Login Social (4 providers)**
- **Google** : OAuth 2.0, récupération nom/email/photo
- **Facebook** : Facebook Login, récupération profil de base
- **Apple** : Sign in with Apple, respect de la confidentialité Apple
- **LinkedIn** : OAuth LinkedIn, ideal pour bookers professionnels
- **Auto-completion** : Pré-remplissage profil avec données récupérées

#### **3. 📱 Numéro de Téléphone + SMS**
- **Process** : Saisie numéro → Code SMS 6 chiffres → Validation
- **Format** : International (+33, +32, +41, etc.)
- **Limite** : 3 tentatives par 15 minutes, puis blocage temporaire

#### **4. ✨ Magic Link (Email sans mot de passe)**
- **Process** : Saisie email → Lien cliquable par email → Connexion automatique
- **Sécurité** : Token temporaire 15 minutes, usage unique
- **UX** : "Vérifiez votre boîte mail et cliquez sur le lien"

---

## 🎭 **TYPES D'UTILISATEURS & SOUS-CATÉGORIES**

### **👤 Sélection Type Principal (3 choix)**

#### **🎤 ARTISTE**
- **Description** : Musicien, chanteur, groupe musical
- **Sous-catégories obligatoires** :
  - **Formation** : Solo / Duo / Groupe (3-6) / Orchestre (7+) / Hybride
  - **Genre musical principal** : Liste déroulante 30+ genres organisés par familles
  - **Niveau** : Émergent (0-2 ans) / Développement (2-5 ans) / Confirmé (5+ ans) / Professionnel (label/manager)

#### **🏛️ LIEU**
- **Description** : Salle, festival, bar, commune, camping
- **Sous-catégories obligatoires** :
  - **Type de lieu** : 
    - Culturels (salle concert, théâtre, opéra, centre culturel)
    - Bars & Clubs (bar/pub, club, lounge, restaurant avec scène)
    - Festivals & Événements (festival, scène extérieure, événement privé)
    - Secteur Public (commune/mairie, école/université, bibliothèque)
    - Tourisme & Loisirs (camping, resort/village vacances, hôtel)
  - **Capacité d'accueil** : Slider 10-5000 personnes avec catégories auto (Intimiste/Petite/Moyenne/Grande/Très grande)
  - **Configuration** : Intérieur/Extérieur/Modulable/Acoustique naturelle (cases à cocher)

#### **💼 BOOKER**
- **Description** : Agent, producteur, agence, programmateur public
- **Sous-catégories obligatoires** :
  - **Type activité** :
    - Booker Indépendant (gestion directe artistes)
    - Employé Agence (booker salarié)
    - Directeur Agence (propriétaire/directeur)
    - Programmateur Public (commune, intercommunalité, festival public)
  - **Expérience** : <1 an / 1-3 ans / 3-5 ans / 5-10 ans / 10+ ans
  - **Portfolio actuel** : Zone texte libre OU lien site web professionnel
  - **Spécialisations** : Cases à cocher genres + niveau artistes (émergent/confirmé/international)

---

## 🔒 **MATRICE DE VÉRIFICATION**

### **📋 Vérifications Requises par Type Utilisateur**

| Type Utilisateur | Email | Téléphone | Document ID | Validation Manuelle | Délai |
|-----------------|-------|-----------|-------------|-------------------|-------|
| **Artiste Solo** | ✅ Obligatoire | ❌ Optionnel | ❌ Non | ❌ Automatique | Immédiat |
| **Artiste Groupe** | ✅ Obligatoire | ❌ Optionnel | ❌ Non | ❌ Automatique | Immédiat |
| **Lieu Privé** | ✅ Obligatoire | ✅ Recommandé | ❌ Non | ❌ Automatique | Immédiat |
| **Lieu Public** | ✅ Obligatoire | ✅ Obligatoire | ✅ SIRET/SIREN | ✅ Manuelle | 24-48h |
| **Booker Indé** | ✅ Obligatoire | ✅ Obligatoire | ❌ Portfolio requis | ✅ Manuelle | 24-48h |
| **Agence Booking** | ✅ Obligatoire | ✅ Obligatoire | ✅ SIRET/SIREN | ✅ Manuelle | 48-72h |
| **Commune** | ✅ Obligatoire | ✅ Obligatoire | ✅ Code INSEE | ✅ Manuelle | 72h |

### **📄 Documents d'Identité Requis**
- **SIRET/SIREN** : Pour entités légales (lieux publics, agences)
- **Code INSEE** : Pour communes et collectivités
- **Portfolio** : Pour bookers indépendants (liste artistes ou lien site)
- **RIB** : Optionnel à l'inscription, requis avant première transaction

---

## 🧙‍♂️ **ARCHITECTURE WIZARD INSCRIPTION**

### **📊 Flux en 7 Étapes Maximum**

#### **ÉTAPE 1 : Méthode d'Authentification (10%)**
- **Écran d'accueil** avec 4 boutons méthodes auth
- **Design** : Cards visuelles avec icônes, descriptions courtes
- **Fallback** : Lien "Déjà inscrit ? Se connecter"

#### **ÉTAPE 2 : Type Utilisateur Principal (25%)**
- **3 cards** Artiste/Lieu/Booker avec icônes, descriptions, bénéfices listés
- **Visual feedback** : Hover effects, sélection claire
- **Badge "PRO"** sur card Booker pour valoriser

#### **ÉTAPE 3 : Sous-catégorie Spécialisée (40%)**
- **Formulaire adaptatif** selon choix étape 2
- **Validation temps réel** champs obligatoires
- **Suggestions intelligentes** (ex: genres populaires en premier)

#### **ÉTAPE 4 : Informations Essentielles (65%)**
- **Nom/Prénom** (ou nom de scène, lieu, agence)
- **Description courte** (50 caractères max pour accroche)
- **Site web/réseaux sociaux** optionnels

#### **ÉTAPE 5 : Localisation & Zone d'Activité (80%)**
- **Géolocalisation** avec détection auto (permission utilisateur)
- **Zone d'activité** : Local/Régional/National/International
- **Pays ciblés** si international (cases à cocher Europe)

#### **ÉTAPE 6 : Upload Obligatoire (100%)**
- **Artistes** : Démo audio obligatoire (MP3/WAV, 25MB max, 6min max)
- **Lieux** : Photo lieu obligatoire (JPG/PNG, 10MB max)
- **Bookers** : Logo/photo profil (optionnel pour MVP)

#### **ÉTAPE 7 : Validation Finale**
- **Récapitulatif** informations saisies
- **Consentements RGPD** (cases obligatoires)
- **Opt-in marketing** (optionnel)
- **Confirmation** et redirection dashboard

### **🎮 Gamification du Wizard**
- **Progress bar animée** avec pourcentages
- **Célébrations micro** : Animation + son à chaque étape validée
- **Messages encourageants** : "Excellent choix !", "Plus qu'une étape !"
- **Badges temps réel** : "Profil vérifié", "Premier upload", "Inscription complète"

---

## 📍 **GESTION GÉOLOCALISATION**

### **🌍 Détection Localisation**
- **Permission navigateur** : Demande autorisation géolocalisation
- **Fallback manuel** : Saisie ville/adresse si refus/échec
- **Autocomplétion** : Suggestions villes/régions pendant saisie
- **Validation** : Vérification coordonnées GPS + adresse cohérente

### **🗺️ Zone d'Activité**
- **Local** : 50km rayon autour localisation principale
- **Régional** : Région administrative française + départements limitrophes
- **National** : Toute la France métropolitaine + DOM-TOM
- **International** : Sélection pays Europe (BE, CH, LU, DE, ES, IT, UK...)

### **🚐 Mobilité (Informations Complémentaires)**
- **Véhicule personnel** : Petites distances, flexibilité
- **Transports publics** : Villes bien desservies
- **Van/Camion équipé** : Groupes avec matériel
- **Avion** : Longues distances, artistes confirmés

---

## 📤 **UPLOADS OBLIGATOIRES PAR TYPE**

### **🎵 Artistes : Démo Audio**
- **Formats acceptés** : MP3, WAV, FLAC, M4A
- **Taille limite** : 25 MB maximum
- **Durée limite** : 6 minutes maximum
- **Alternatives** :
  - Upload direct depuis appareil
  - Lien Spotify/SoundCloud/YouTube
  - Enregistrement direct micro (feature avancée)
- **Player intégré** : Test écoute avant validation
- **Metadata** : Extraction automatique titre/artiste si disponible

### **📸 Lieux : Photo du Lieu**
- **Formats acceptés** : JPG, PNG, WebP
- **Taille limite** : 10 MB maximum
- **Résolution min** : 800x600 pixels
- **Conseils auto** : "Montrez votre scène ou espace principal"
- **Compression auto** : Optimisation automatique pour web
- **Preview** : Aperçu avec recadrage suggéré

### **💼 Bookers : Logo/Photo Profil (Optionnel MVP)**
- **Formats acceptés** : JPG, PNG
- **Taille limite** : 5 MB maximum
- **Suggestion** : Logo agence ou photo professionnelle
- **Avatar par défaut** : Initiales si pas d'upload

---

## 🛡️ **SÉCURITÉ & RGPD**

### **🔒 Mesures Sécurité**
- **Rate limiting** : 5 tentatives connexion / 15 minutes
- **Tokens sécurisés** : JWT avec expiration courte (24h)
- **Validation côté serveur** : Double validation tous champs critiques
- **Logs audit** : Traçabilité tentatives connexion/inscription
- **Protection CSRF** : Tokens anti-cross-site request forgery

### **📋 Conformité RGPD**
- **Consentements explicites** :
  - ✅ "J'accepte les Conditions d'Utilisation" (obligatoire)
  - ✅ "J'accepte la Politique de Confidentialité" (obligatoire)
  - ❌ "J'accepte de recevoir des emails marketing" (optionnel)
- **Finalités claires** : Explication usage données pour matching
- **Droits utilisateur** : Accès, rectification, suppression, portabilité
- **Retention données** : Suppression automatique comptes inactifs 3 ans

---

## 💾 **SAUVEGARDE & REPRISE**

### **🔄 Fonctionnalités Persistance**
- **Sauvegarde automatique** : Toutes les 30 secondes pendant saisie
- **Reprise session** : Lien "Reprendre inscription" si abandon
- **Expiration** : Données sauvegardées 7 jours puis suppression
- **Navigation** : Possibilité retour étapes précédentes sans perte
- **Sortie accidentelle** : Warning "Vous allez perdre vos modifications"

### **📱 Compatibilité Multi-Device**
- **Responsive design** : Optimisé mobile/tablette/desktop
- **Touch-friendly** : Boutons suffisamment grands, swipe gestures
- **Performance** : Temps chargement <3 secondes sur 3G
- **Offline** : Gestion déconnexions temporaires avec re-sync auto

---

## 📊 **ANALYTICS & TRACKING**

### **📈 Métriques Business Critiques**
- **Taux conversion par étape** : % utilisateurs passant étape suivante
- **Abandon points** : Identification étapes à fort abandon
- **Temps completion** : Durée moyenne inscription complète
- **Méthode auth préférée** : Répartition usage 4 méthodes
- **Type utilisateur** : Répartition Artiste/Lieu/Booker
- **Géolocalisation** : Mapping régions fortes/faibles adoption

### **🔍 Events de Tracking**
- `inscription_started` : Clic "S'inscrire"
- `auth_method_selected` : Choix méthode authentification
- `user_type_selected` : Choix type utilisateur
- `step_completed` : Validation chaque étape
- `upload_completed` : Upload réussi démo/photo
- `inscription_finished` : Inscription 100% terminée
- `inscription_abandoned` : Sortie avant completion

---

## ✅ **CRITÈRES D'ACCEPTATION MVP**

### **🎯 Fonctionnalités Core Minimales**
- [ ] **4 méthodes auth** fonctionnelles avec fallbacks
- [ ] **Wizard 7 étapes** avec progress tracking
- [ ] **Upload obligatoire** selon type utilisateur
- [ ] **Géolocalisation** avec détection auto
- [ ] **Validation manuelle** bookers/lieux publics
- [ ] **Sauvegarde/reprise** inscription
- [ ] **RGPD compliance** avec consentements

### **🎮 Gamification MVP**
- [ ] **Progress bar animée** avec pourcentages
- [ ] **Célébrations étapes** (animations + sons)
- [ ] **Score completion** profil visible
- [ ] **3 badges minimum** : "Vérifié", "Upload", "Complet"

### **📱 UX/Performance**
- [ ] **Responsive design** mobile/desktop
- [ ] **Temps chargement** <3s sur connexion normale
- [ ] **Taux conversion** >70% étape 1 → étape 7
- [ ] **Abandon rate** <30% sur inscription complète

### **🔒 Sécurité/Compliance**
- [ ] **Tests sécurité** validation inputs
- [ ] **RGPD audit** conformité réglementaire
- [ ] **Performance load** 100 inscriptions simultanées
- [ ] **Backup/recovery** données utilisateur

---

## 🚀 **PRIORISATION DÉVELOPPEMENT**

### **🥇 Phase 1 (MVP Core - 4 semaines)**
1. **Authentification email/password** + vérification email
2. **Wizard 7 étapes** version basique
3. **Types utilisateurs** avec sous-catégories
4. **Upload démo/photo** fonctionnel
5. **Base données** structure complète

### **🥈 Phase 2 (Amélioration UX - 2 semaines)**
1. **Login social** (Google + LinkedIn priorité)
2. **Gamification** progress bar + badges
3. **Géolocalisation** avec autocomplétion
4. **Sauvegarde/reprise** inscription

### **🥉 Phase 3 (Fonctionnalités Avancées - 2 semaines)**
1. **Magic link** + SMS auth
2. **Validation manuelle** workflow admin
3. **Analytics** tracking complet
4. **Optimisations** performance mobile

**🎯 Objectif : MVP utilisable en 8 semaines maximum avec focus sur conversion et qualité données !**