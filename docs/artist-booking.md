# 🎵 FLOW STAGE MVP SIMPLIFIÉ
## Focus Booking Artistes ↔ Lieux - 12 Semaines

**Version:** MVP Focus  
**Date:** Décembre 2024  
**Objectif:** Prouver le matching avant complexité  
**Timeline:** 12 semaines développement  

---

## 🎯 **VISION MVP SIMPLIFIÉE**

### **🌟 Core Value Proposition**
**"Trouvez le lieu parfait pour votre musique en 3 clics"**
- **Artiste** upload sa démo → trouve **Lieux** compatibles
- **Lieu** définit ses critères → découvre **Artistes** adaptés
- **Matching intelligent** → **Négociation chat** → **Contrat signé**

### **📊 Success Metrics MVP**
- **100 artistes** + **50 lieux** inscrits
- **50 matches** mutuels générés
- **10 contrats** signés via plateforme
- **Proof of concept** : Le matching fonctionne !

---

## 👤 **UTILISATEURS MVP (2 TYPES UNIQUEMENT)**

### **🎤 ARTISTE (Solo/Groupe)**
#### **Profil Minimum**
- **Identité** : Nom de scène, localisation, contact
- **Musique** : Genre principal, 1 démo audio obligatoire
- **Niveau** : Émergent/Développement/Confirmé (auto-déclaré)
- **Disponibilités** : Dates libres prochains 3 mois
- **Budget** : Fourchette cachet souhaité

#### **Besoins MVP**
- Trouver lieux adaptés à son style + niveau
- Négocier dates + cachet facilement
- Signer contrat simple sécurisé

### **🏛️ LIEU (Salle/Bar/Festival)**
#### **Profil Minimum**
- **Identité** : Nom, adresse, contact, type lieu
- **Capacité** : Nombre places (slider 10-5000)
- **Genres** : Styles musicaux programmés habituellement
- **Planning** : Dates disponibles prochains 3 mois
- **Budget** : Fourchette budget par concert

#### **Besoins MVP**
- Découvrir artistes adaptés capacité + audience
- Programmer facilement son calendrier
- Contrôler budget + formaliser contrats

---

## 🛠️ **FONCTIONNALITÉS MVP CORE**

### **🔐 ÉTAPE 1 : INSCRIPTION SIMPLE (3 semaines)**

#### **Authentification Basique**
- **Email + Mot de passe** uniquement (pas social login MVP)
- **Vérification email** obligatoire
- **2 choix** : "Je suis un Artiste" / "Je gère un Lieu"

#### **Wizard Inscription 4 Étapes**
```
ÉTAPE 1 : Type utilisateur (Artiste vs Lieu)
ÉTAPE 2 : Identité (nom, localisation, contact)
ÉTAPE 3 : Upload obligatoire (démo audio OU photo lieu)
ÉTAPE 4 : Confirmation + validation email
```

#### **Validation Simplifiée**
- **Email vérifié** = compte actif immédiatement
- **Pas de vérification manuelle** MVP
- **Upload obligatoire** pour être matchable

### **🎭 ÉTAPE 2 : PROFIL ESSENTIEL (2 semaines)**

#### **Artiste - 6 Champs Obligatoires**
1. **Genre musical** : Liste déroulante 20 styles principaux
2. **Démo audio** : 1 fichier MP3 max 6 minutes
3. **Niveau** : Émergent (0-2 ans) / Développement (2-5 ans) / Confirmé (5+ ans)
4. **Localisation** : Ville + rayon action (50km/200km/500km/National)
5. **Cachet souhaité** : Fourchette (0-500€ / 500-2K€ / 2-5K€ / 5K€+)
6. **Disponibilités** : Calendrier simple 3 mois

#### **Lieu - 6 Champs Obligatoires**
1. **Type lieu** : Salle concert / Bar-pub / Club / Festival / Restaurant-scène
2. **Capacité** : Slider 10-5000 personnes
3. **Genres programmés** : 3 styles maximum habituels
4. **Localisation** : Adresse exacte + zone chalandise
5. **Budget concert** : Fourchette (0-500€ / 500-2K€ / 2-5K€ / 5K€+)
6. **Dates libres** : Calendrier programmation 3 mois

#### **Gamification Simple**
- **Progress bar** : 6/6 champs = "Profil Complet ✅"
- **Score matching** : Profil complet = +20% visibilité
- **Pas de niveaux** basique/expert MVP

### **🎯 ÉTAPE 3 : MATCHING BASIQUE (4 semaines)**

#### **Algorithme 5 Critères Simples**
```
1. GENRE MUSICAL (30%) : Compatibilité style exact ou proche
2. CAPACITÉ/NIVEAU (25%) : Artiste émergent → petites salles, etc.
3. BUDGET (20%) : Intersection fourchettes artiste ↔ lieu
4. GÉOGRAPHIE (15%) : Distance acceptable selon zone action
5. DISPONIBILITÉS (10%) : Au moins 1 date commune libre
```

#### **Interface Swipe Uniquement**
- **Cards artistes** pour lieux : Photo + nom + genre + score %
- **Cards lieux** pour artistes : Photo + nom + capacité + score %
- **Actions simples** : ❤️ Like / ❌ Pass / 👁️ Voir profil complet
- **Pas de filtres** avancés MVP (juste tri par score)

#### **Matching Mutuel Required**
- **Chat activé** seulement si Like ↔ Like
- **Notification** : "Vous avez un nouveau match !"
- **Pas de Super Like** MVP

### **💬 ÉTAPE 4 : CHAT SIMPLE (2 semaines)**

#### **Messagerie Basique**
- **Interface WhatsApp-style** : Messages texte uniquement
- **Pas de fichiers** partage MVP (email external si besoin)
- **Pas de messages vocaux** MVP
- **Status lu/non-lu** basique

#### **Templates 1er Contact**
- **3 templates artiste → lieu** : Présentation + demande date + lien démo
- **3 templates lieu → artiste** : Intérêt + proposition + infos pratiques
- **Message libre** aussi possible

#### **Pas d'IA Assistant** MVP
- **Suggestions simples** : "Proposer une date", "Parler du cachet"
- **Pas de traduction** automatique MVP
- **Pas d'aide négociation** MVP

### **📋 ÉTAPE 5 : CONTRAT & PAIEMENT SIMPLE (1 semaine)**

#### **Contrat PDF Pré-rempli**
- **1 seul template** : Contrat artiste-lieu standard France
- **Champs auto-remplis** : Noms, date, lieu, cachet négocié
- **Clauses fixes** : SACEM, assurance, annulation basique
- **Pas de modifications** possibles MVP

#### **Signature Électronique**
- **DocuSign API** : Signature légalement valide
- **Workflow simple** : Lieu signe → Artiste signe → Activé
- **Email confirmations** automatiques

#### **Paiement Stripe Basique**
- **Acompte 30%** à la signature par le lieu
- **Solde 70%** J-2 avant concert
- **Commission Flow Stage** : 10% flat tous montants
- **Pas d'escrow** complexe MVP : Direct Stripe → Artiste

---

## 📱 **UX/UI MVP SIMPLIFIÉ**

### **🎨 Design Minimal**
- **1 couleur principale** : Bleu Flow Stage
- **Typography simple** : Inter/Roboto système
- **Pas de thèmes** personnalisés MVP
- **Mobile-first** responsive basique

### **📄 Pages Essentielles (8 pages)**
1. **Landing** : Inscription Artiste vs Lieu
2. **Wizard inscription** : 4 étapes guidées
3. **Dashboard** : Profil + matches + messages
4. **Matching** : Interface swipe
5. **Profil détail** : Voir autres utilisateurs
6. **Chat** : Liste conversations + messages
7. **Contrat** : Génération + signature
8. **Settings** : Modification profil basique

### **Navigation Ultra-Simple**
```
📱 MENU MOBILE (4 onglets) :
├─ 🏠 Dashboard (profil + stats)
├─ 🎯 Matching (découverte)
├─ 💬 Messages (conversations)
└─ ⚙️ Profil (édition)
```

---

## 🛠️ **STACK TECHNIQUE MVP**

### **Frontend Léger**
- **React + TypeScript** : Mais version simple
- **Tailwind CSS** : Styling rapide
- **React Router** : Navigation
- **Axios** : API calls
- **Socket.io client** : Chat temps réel

### **Backend Minimal**
- **Node.js + Express** : API REST
- **PostgreSQL** : Base données relationnelle
- **Prisma ORM** : Queries simplifiées
- **Socket.io** : Chat temps réel
- **AWS S3** : Stockage démos audio

### **Services Externes Minimum**
- **Stripe** : Paiements uniquement
- **DocuSign** : Signatures uniquement
- **SendGrid** : Emails transactionnels
- **Mapbox** : Géolocalisation basique
- **Auth0** : PAS MVP (auth custom simple)

---

## 📅 **TIMELINE DÉVELOPPEMENT 12 SEMAINES**

### **🗓️ SEMAINES 1-3 : FONDATIONS**
```
Semaine 1 :
├─ Setup projet (React/Node/PostgreSQL)
├─ Architecture base + CI/CD basique
├─ Authentification email/password
└─ Landing page + wizard inscription

Semaine 2 :
├─ Modèles base données (User/Profile/Match)
├─ Upload audio S3 + player simple
├─ Interface profil artiste/lieu
└─ Validation profil complet

Semaine 3 :
├─ Algorithme matching 5 critères
├─ Interface swipe React
├─ Génération matches + storage
└─ Tests unitaires core features
```

### **🗓️ SEMAINES 4-6 : MATCHING**
```
Semaine 4 :
├─ Affichage cards artistes/lieux
├─ Actions like/pass + animations
├─ Profils détail consultation
└─ Scoring affiché sur cards

Semaine 5 :
├─ Système matches mutuels
├─ Notifications nouveau match
├─ Dashboard stats basiques
└─ Optimisation algorithme

Semaine 6 :
├─ Interface mobile responsive
├─ Performance matching (<2s)
├─ Analytics basiques intégrées
└─ Beta testing 10 utilisateurs
```

### **🗓️ SEMAINES 7-9 : COMMUNICATION**
```
Semaine 7 :
├─ Chat temps réel Socket.io
├─ Interface messages simple
├─ Templates 1er contact
└─ Notifications messages

Semaine 8 :
├─ Historique conversations
├─ Status lu/non-lu
├─ Recherche dans messages
└─ Optimisation mobile chat

Semaine 9 :
├─ Modération basique (spam)
├─ Blocage utilisateurs
├─ Export conversations PDF
└─ Tests charge communication
```

### **🗓️ SEMAINES 10-12 : TRANSACTIONS**
```
Semaine 10 :
├─ Génération contrats PDF
├─ Templates juridiques basiques
├─ Pré-remplissage automatique
└─ Intégration DocuSign

Semaine 11 :
├─ Workflow signature 2 parties
├─ Intégration Stripe paiements
├─ Commission 10% automatique
└─ Emails confirmations

Semaine 12 :
├─ Tests end-to-end complets
├─ Fix bugs critiques
├─ Documentation utilisateur
└─ Préparation lancement !
```

---

## ✅ **CRITÈRES ACCEPTATION MVP**

### **🎯 Fonctionnel**
- [ ] **100% parcours** : Inscription → Match → Chat → Contrat → Paiement
- [ ] **Matching précis** : Score >80% = 70% satisfaction utilisateurs test
- [ ] **Chat fluide** : Messages temps réel <1s latence
- [ ] **Contrats valides** : PDF + signature légalement conformes
- [ ] **Paiements sécurisés** : Stripe + commission automatique

### **📱 Technique**
- [ ] **Performance** : Pages <2s chargement, 99% uptime
- [ ] **Mobile** : Responsive parfait iOS/Android
- [ ] **Sécurité** : HTTPS + validation inputs + RGPD basique
- [ ] **Scalabilité** : Support 500 utilisateurs simultanés
- [ ] **Monitoring** : Logs + alertes + métriques basiques

### **👥 Business**
- [ ] **Adoption** : 100 artistes + 50 lieux inscrits
- [ ] **Engagement** : 30% users actifs semaine après inscription
- [ ] **Conversion** : 20% matches → contacts, 10% contacts → contrats
- [ ] **Satisfaction** : NPS >30 (acceptable MVP)
- [ ] **Revenus** : 10 contrats = 5K€ commission = proof of concept

---

## 🚀 **STRATÉGIE LANCEMENT MVP**

### **🎭 Beta Privée (50 utilisateurs)**
#### **25 Artistes Sélectionnés**
- **Genres diversifiés** : 5 jazz, 5 rock, 5 électro, 5 chanson française, 5 world
- **Niveaux mixtes** : 10 émergents, 10 développement, 5 confirmés
- **Géographie** : 15 Paris, 5 Lyon, 5 autres villes
- **Engagement** : Commitment tester 2 semaines + feedback détaillé

#### **25 Lieux Engagés**
- **Types variés** : 10 bars, 8 salles, 4 festivals, 3 restaurants
- **Capacités étalées** : 5 <100 places, 10 100-300, 7 300-1000, 3 >1000
- **Ouverture** : Programmateurs curieux innovation + besoin artistes
- **Localisation** : Même zones que artistes pour maximiser matches

### **🎯 Objectifs Beta 4 Semaines**
- **Week 1** : Onboarding 50 utilisateurs + profils complets
- **Week 2** : 100+ matches générés + 20 conversations démarrées  
- **Week 3** : 5 négociations avancées + feedback UX/bugs
- **Week 4** : 2 contrats signés + testimonials + amélirations

### **📢 Lancement Public (Post-Beta)**
- **Content marketing** : "Comment Flow Stage a aidé X artiste trouver sa salle"
- **Partenariats** : SACEM, CNM, écoles musique pour annonce
- **Event** : Showcase live artistes Flow Stage
- **Press** : DP innovation + interviews fondateurs
- **SEO** : "booking artiste", "trouver salle concert", "organiser concert"

---

## 💰 **BUSINESS MODEL MVP**

### **💸 Revenus Simplifiés**
- **Commission unique** : 10% sur tous contrats (pas de dégressif MVP)
- **Pas d'abonnements** MVP
- **Pas de marketplace** MVP
- **100% transaction-based** = alignement intérêts

### **📊 Projections MVP 6 Mois**
```
MOIS 1-2 (BETA) :
├─ 0€ revenus (gratuit beta testeurs)
├─ Focus 100% apprentissage + amélioration
└─ Objectif : Product-market fit

MOIS 3-4 (LANCEMENT) :
├─ 50 artistes + 25 lieux actifs
├─ 10 contrats/mois moyenne 1,500€
├─ 1,500€ revenus/mois (10% commission)
└─ Objectif : Traction + bouche-à-oreille

MOIS 5-6 (CROISSANCE) :
├─ 150 artistes + 75 lieux actifs  
├─ 25 contrats/mois moyenne 2,000€
├─ 5,000€ revenus/mois
└─ Objectif : Viabilité économique visible
```

### **🎯 Break-Even MVP**
- **50 contrats/mois** × 2,000€ moyenne × 10% = **10,000€ MRR**
- **Coûts MVP** : 8,000€/mois (2 développeurs + infra + tools)
- **Break-even** : Mois 9-12 si croissance linéaire
- **Objectif réaliste** : Proof of concept pour lever série A

---

## 🏆 **POURQUOI CE MVP VA MARCHER**

### **🎯 Focus Extrême**
- **1 problème** : Matching artiste-lieu efficace
- **1 solution** : Algorithme intelligent + workflow simple
- **2 personas** : Artiste et Lieu uniquement
- **12 semaines** : Exécution rapide + feedback quick

### **💡 Différenciation Immédiate**
- **Vs Plateformes généralistes** : Spécialisé musique live
- **Vs Réseaux sociaux** : Matching algorithmique vs post aléatoire  
- **Vs Annuaires** : Workflow complet négociation + contrat
- **Vs Email/téléphone** : Interface moderne + sécurisation juridique

### **🚀 Scalabilité Évidente**
- **MVP prouve concept** → Ajout bookers naturel
- **Base artiste/lieu** → Extension services (transport, technique)
- **France validée** → Expansion internationale facilité
- **Matching music** → Autres industries créatives

---

## 🎵 **NEXT STEPS IMMÉDIATS**

### **📅 Semaine Prochaine**
1. **Validation équipe** : CTO + 1 développeur senior recrutés
2. **Architecture finale** : Stack confirmé + setup environnements
3. **Design system** : Wireframes + mockups 8 pages clés
4. **Beta liste** : 50 early adopters identifiés + engagés
5. **Legal check** : Template contrat validé juriste

### **🎯 Mois Prochain**
1. **Développement sprint 1** : Auth + profils + upload
2. **Algorithme matching** : Implémentation 5 critères
3. **UI/UX testing** : Prototype clickable + user tests
4. **Infrastructure** : Production setup + monitoring
5. **Beta preparation** : Onboarding process + support

**🚀 Objectif : MVP fonctionnel en 12 semaines avec premiers contrats signés ! 🎵**