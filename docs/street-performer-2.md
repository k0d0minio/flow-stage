# EXTENSION MUNICIPALE FLOW STAGE
## Événementiel Public & Artistes de Rue - Feature 5

**Version:** 1.0  
**Date:** Décembre 2024  
**Scope:** Communes, intercommunalités, artistes de rue, spectacles déambulants

---

## 🏛️ 1. MARCHÉ MUNICIPAL - OPPORTUNITY ANALYSIS

### 1.1 Taille du Marché Municipal

**MARCHÉ ADDRESSABLE FRANCE :**
- **35,000+ communes** françaises
- **2,500+ intercommunalités** 
- **Budget culture municipal total :** 8.2 milliards € annuels
- **Budget événementiel :** ~15% = 1.23 milliards €

**SEGMENTATION PRIORITAIRE :**
- **Communes 2000-50,000 habitants :** 4,500 communes = 400M€ budget événementiel
- **Intercommunalités actives :** 800 structures = 200M€ budget
- **SAM Municipal :** 600M€ potentiel
- **Commission cible 5-8% :** 30-48M€ revenus potentiels

### 1.2 Pain Points Municipaux Actuels

**POUR LES COMMUNES :**
- **Recherche artistes laborieuse :** Démarchage téléphonique, bouche-à-oreille
- **Méconnaissance offre locale :** Artistes région non identifiés
- **Conformité administrative :** Code marchés publics complexe
- **Budget optimisation :** Difficile comparer qualité/prix
- **Gestion risques :** Assurances, responsabilités, annulations

**POUR LES ARTISTES DE RUE :**
- **Accès marché difficile :** Réseaux fermés, relations personnelles
- **Administratif rebutant :** Procédures publiques complexes
- **Visibilité limitée :** Pas de canal marketing vers communes
- **Saisonnalité forte :** Pic été, creuse hiver
- **Tarification délicate :** Prix public vs privé

### 1.3 Typologie Événements Municipaux

**ÉVÉNEMENTS RÉCURRENTS ANNUELS :**
- **Fêtes locales :** Fête de la musique, vide-greniers, kermesses (budget 2-15K€)
- **Marchés de Noël :** Animations déambulation, spectacles enfants (5-25K€)
- **Festivals municipaux :** Événements pluridisciplinaires (10-100K€)
- **Commémorations :** 8 mai, 11 novembre, animations patrimoniales (1-5K€)

**ÉVÉNEMENTS PONCTUELS :**
- **Inaugurations :** Équipements publics, animations protocolaires (2-8K€)
- **Manifestations sportives :** Animations connexes, village départ/arrivée (5-20K€)
- **Événements culturels :** Expositions, vernissages, médiations (3-12K€)
- **Actions sociales :** Téléthon, journées solidarité, animations intergénérationnelles (2-10K€)

---

## 🎭 2. ÉCOSYSTÈME ARTISTES DE RUE

### 2.1 Typologie Artistes Ciblés

**SPECTACLES DÉAMBULANTS :**
- **Échassiers/géants :** Processions, défilés, animations grand public
- **Fanfares mobiles :** Musiques actuelles, jazz, world music en déambulation
- **Théâtre de rue :** Comédies, sketches, interventions surprises
- **Danse urbaine :** Hip-hop, breakdance, performances chorégraphiques

**SPECTACLES FIXES EXTÉRIEURS :**
- **Cirque contemporain :** Acrobatie, jonglage, équilibre (chapiteaux légers)
- **Magie de rue :** Close-up, grandes illusions, spectacles participatifs
- **Musique acoustique :** Concerts intimistes, world music, chanson française
- **Contes et marionnettes :** Spectacles jeune public, traditions orales

**ATELIERS PARTICIPATIFS :**
- **Arts plastiques :** Fresques collectives, sculptures éphémères
- **Musique participative :** Percussions, chants collectifs, orchestres improvisés
- **Danse collective :** Initiations, flashmobs, bals populaires
- **Artisanat créatif :** Démonstrations métiers d'art, ateliers DIY

### 2.2 Contraintes Spécifiques Arts de Rue

**TECHNIQUES :**
- **Autonomie énergétique :** Spectacles sans branchement électrique
- **Adaptabilité météo :** Solutions repli en cas de pluie/vent
- **Mobilité :** Transport facile, montage/démontage rapide
- **Acoustique :** Sonorisation adaptée espaces ouverts

**LÉGALES & SÉCURITAIRES :**
- **Assurance RC :** Responsabilité civile professionnelle obligatoire
- **Déclarations préalables :** SACEM, spectacle vivant, sécurité
- **Accessibilité PMR :** Adaptation handicaps sensoriels/moteurs
- **Sécurité publique :** Protocoles foule, évacuation, premiers secours

**ARTISTIQUES :**
- **Tout public :** Contenus adaptés présence enfants/familles
- **Interactivité :** Capacité engager public amateur
- **Durée modulable :** Spectacles 20mn à 2h selon programmation
- **Répétabilité :** Plusieurs représentations/jour possible

---

## 🏗️ 3. FONCTIONNALITÉS TECHNIQUES DÉTAILLÉES

### 3.1 Matching Algorithm Municipal Spécialisé

**CRITÈRES DE SCORING ADAPTÉS :**

```python
def municipal_matching_score(artist, event, municipality):
    """
    Algorithme spécialisé événementiel public
    Pondération adaptée contraintes municipales
    """
    
    # Budget compatibility (30% - crucial pour public)
    budget_score = calculate_budget_fit(
        artist.tariff_public, 
        event.budget_artistique,
        municipality.procurement_rules
    )
    
    # Geographic proximity (25% - économies déplacement)
    geo_score = calculate_distance_bonus(
        artist.location, 
        municipality.location,
        local_preference_bonus=True
    )
    
    # Public space suitability (20%)
    space_score = match_technical_requirements(
        artist.space_needs,
        event.venue_constraints,
        weather_factor=True
    )
    
    # Audience appropriateness (15%)
    audience_score = match_target_audience(
        artist.target_demographics,
        event.expected_audience,
        municipality.population_profile
    )
    
    # Municipal experience (10%)
    experience_score = calculate_public_sector_experience(
        artist.municipal_history,
        artist.certifications,
        artist.insurance_compliance
    )
    
    return weighted_municipal_score([
        budget_score * 0.30,
        geo_score * 0.25,
        space_score * 0.20,
        audience_score * 0.15,
        experience_score * 0.10
    ])
```

### 3.2 Interface Commune - Dashboard Spécialisé

**SECTIONS PRINCIPALES :**

**Planning Événementiel Annuel :**
```
┌─ CALENDRIER MUNICIPAL 2025 ─────────────────┐
│                                             │
│ MARS     │ JUIN        │ SEPTEMBRE         │
│ • Printemps │ • Fête Musique │ • Rentrée   │
│   des Arts   │ • Festival Été │   Culturelle │
│ Budget: 8K€ │ Budget: 25K€   │ Budget: 12K€ │
│ [PLANIFIER] │ [EN COURS]     │ [PLANIFIER]  │
│                                             │
│ + AJOUTER NOUVEL ÉVÉNEMENT                 │
└─────────────────────────────────────────────┘
```

**Catalogue Artistes Filtré :**
```
┌─ RECHERCHE ARTISTES ───────────────────────┐
│                                            │
│ Type événement: [Fête locale ▼]           │
│ Budget max: [15,000€] Participants: [500]  │
│ Date: [15/06/2025] Durée: [2h]            │
│ Lieu: [Place centrale ▼] Météo: [☀️🌧️]    │
│                                            │
│ 🔍 RECHERCHER - 247 artistes trouvés      │
│                                            │
│ ⭐ RECOMMANDATIONS POUR VOUS:              │
│ 🎪 Cie des Échassiers Dorés (Local - 12K€)│
│ 🎵 Fanfare du Soleil (50km - 8K€)         │
│ 🎭 Théâtre Mobile Rigolade (80km - 10K€)  │
└────────────────────────────────────────────┘
```

### 3.3 Workflow Marchés Publics Intégré

**PROCESSUS AUTOMATISÉ :**

**1. Évaluation Seuils :**
```
Budget événement < 25K€ HT
├─ Procédure adaptée (libre choix)
├─ 3 devis recommandés
└─ Génération bon de commande

Budget événement > 25K€ HT  
├─ Appel d'offres obligatoire
├─ Publication BOAMP automatique
├─ Dématérialisation AWS/plateforme régionale
└─ Workflow évaluation transparent
```

**2. Génération Documents Conformes :**
- **Cahier charges technique** auto-généré
- **Règlement consultation** adapté spectacle vivant
- **Acte d'engagement** artiste avec clauses type
- **Bordereau prix** détaillé (spectacle/déplacement/hébergement)

**3. Suivi Administratif Automatique :**
- **Notifications délais** réglementaires
- **Contrôle conformité** pièces justificatives
- **Validation juridique** avant signature
- **Archivage réglementaire** 10 ans

### 3.4 Gestion Budgétaire Municipale

**OUTILS BUDGET PUBLIC :**

**Simulation Coûts Complets :**
```
┌─ SIMULATEUR COÛT ÉVÉNEMENT ──────────────┐
│                                          │
│ 🎪 Spectacle "Fanfare Joyeuse"          │
│ ├─ Cachet artistique: 8,000€            │
│ ├─ Frais déplacement: 200€              │
│ ├─ Hébergement (1 nuit): 150€           │
│ ├─ Repas équipe: 100€                   │
│ ├─ Assurance événement: 300€            │
│ ├─ SACEM (déclaration): 150€            │
│ └─ TOTAL HT: 8,900€                     │
│                                          │
│ 💰 IMPACT BUDGET CULTURE 2025:          │
│ Enveloppe restante: 16,100€/25,000€     │
│ % consommé: 64%                         │
│                                          │
│ [VALIDER] [MODIFIER] [ALTERNATIVES]     │
└──────────────────────────────────────────┘
```

**Suivi Multi-Exercices :**
- **Budget prévisionnel** N+1, N+2, N+3
- **Analyse dépenses** par type événement
- **Benchmark** coûts vs communes similaires
- **Indicateurs performance** (€/habitant/événement)

---

## 📊 4. BUSINESS MODEL MUNICIPAL

### 4.1 Modèle de Revenus Adapté

**STRUCTURE TARIFAIRE DIFFÉRENCIÉE :**

**Pour les Communes :**
- **Abonnement annuel :** 299€/an (communes <5000 hab) à 999€/an (>20,000 hab)
- **Commission sur contrats :** 3-5% (vs 8-12% secteur privé)
- **Services premium :** Formation équipes, conseil stratégique (150€/jour)

**Pour les Artistes :**
- **Inscription gratuite** profil de base
- **Abonnement Pro :** 79€/an (visibilité renforcée, stats avancées)
- **Commission succès :** 5% sur contrats municipaux signés

**Services Connexes :**
- **Formation municipale :** 500€/session (événementiel, marchés publics)
- **Conseil stratégie culturelle :** 800€/jour expert
- **Audit programmation :** 2500€ diagnostic complet

### 4.2 Projections Financières Municipal

**REVENUS PRÉVISIONNELS 3 ANS :**

| Métrique | An 1 | An 2 | An 3 |
|----------|------|------|------|
| **Communes abonnées** | 50 | 200 | 500 |
| **Artistes Pro** | 100 | 400 | 800 |
| **Contrats/mois** | 20 | 80 | 150 |
| **Panier moyen contrat** | 8,000€ | 9,500€ | 11,000€ |
| **Revenus abonnements** | 35K€ | 140K€ | 350K€ |
| **Commissions contrats** | 48K€ | 228K€ | 495K€ |
| **Services conseil** | 15K€ | 60K€ | 120K€ |
| **TOTAL MUNICIPAL** | **98K€** | **428K€** | **965K€** |

### 4.3 Partenariats Institutionnels

**PARTENAIRES STRATÉGIQUES :**

**Associations d'Élus :**
- **AMF (Association Maires de France) :** Labellisation solution
- **AMGVF (Grandes Villes) :** Pilote métropoles
- **ADCF (Intercommunalités) :** Déploiement territorial

**Organismes Publics :**
- **CNFPT :** Formation agents territoriaux
- **Caisse des Dépôts :** Financement équipements culturels
- **DRAC régionales :** Soutien développement artistique

**Réseaux Culturels :**
- **FNCC (Collectivités Culturelles) :** Expertise programmation
- **Réseau SMAC :** Passerelles musiques actuelles
- **Fédération Arts de la Rue :** Certification artistes

---

## 🎯 5. STRATÉGIE DÉPLOIEMENT MUNICIPAL

### 5.1 Go-to-Market Spécifique

**PHASE PILOTE (2026 Q2-Q3) :**
- **Sélection 10 communes** test (2K-15K habitants)
- **Régions cibles :** Nouvelle-Aquitaine, Occitanie (forte densité festivals)
- **Événements pilotes :** Fêtes été 2026 (timing idéal)
- **Accompagnement premium :** Formation + support dédié

**SCALING TERRITORIAL (2026 Q4-2027) :**
- **Expansion régionale :** 3-5 nouvelles régions
- **Partenariats départementaux :** Conseils départementaux prescripteurs
- **Réseaux intercommunaux :** Déploiement groupé territoires
- **Communication ciblée :** Presse spécialisée collectivités

### 5.2 Stratégie Acquisition Communes

**CANAUX D'ACQUISITION :**

**Marketing Direct :**
- **Salons spécialisés :** Salon des Maires, Cap'Com, rencontres culturelles
- **Webinaires métier :** "Optimiser budget événementiel municipal"
- **Presse territoriale :** Gazette Communes, Courrier des Maires
- **Réseaux sociaux :** LinkedIn pages dédiées responsables culture

**Prescription Institutionnelle :**
- **CNFPT formations :** Modules événementiel incluant Flow Stage
- **Réseaux d'élus :** Témoignages pairs, retours d'expérience
- **Consultants spécialisés :** Bureaux d'études culturelles partenaires
- **Fédérations artistiques :** Recommandation bidirectionnelle

### 5.3 Acquisition Artistes de Rue

**STRATÉGIE SPÉCIALISÉE :**

**Réseaux Existants :**
- **Festivals arts de rue :** Aurillac, Chalon-sur-Saône, présence terrain
- **Écoles spécialisées :** CNAC, écoles cirque, formations arts de rue
- **Compagnies établies :** Partenariats prescripteurs junior artistes
- **Collectifs régionaux :** Réseaux territoriaux existants

**Outils Dédiés :**
- **Profil "Municipal Ready" :** Certification spéciale événementiel public
- **Kit administratif :** Templates conformes, assurances partenaires
- **Formation incluse :** "Réussir dans l'événementiel municipal"
- **Mise en avant :** Visibilité priority communes de la région

---

## ⚖️ 6. CONFORMITÉ & ASPECTS LÉGAUX

### 6.1 Code des Marchés Publics

**SEUILS RÉGLEMENTAIRES 2024 :**
- **< 25,000€ HT :** Procédure adaptée, libre choix fournisseur
- **25,000-214,000€ HT :** Procédure adaptée, publicité/mise en concurrence
- **> 214,000€ HT :** Appel d'offres ouvert, JOUE obligatoire

**INTÉGRATION WORKFLOW :**
- **Détection automatique** seuil selon budget
- **Génération procédure** adaptée au montant
- **Notifications obligatoires** délais règlementaires
- **Archivage conforme** durées légales

### 6.2 Droit du Spectacle Vivant

**CONFORMITÉ ARTISTES :**
- **Licence entrepreneur spectacle :** Vérification validité
- **Déclarations obligatoires :** SACEM, GUSO, sécurité sociale
- **Assurances professionnelles :** RC, protection juridique
- **Certificats