MNA.add('c4', {
  titre: 'Cours 4 – Les documents du M&A',
  sous: 'Teaser, NDA, IM, LOI, NBO, SPA, SHA, TSA… et l\'assurance W&I',
  resume: 'Quel document à quel moment, lequel est contraignant, ce que contient le SPA (conditions, MAC, garanties, indemnités, baskets, caps) et comment fonctionne la W&I.',
  sections: [
    { t: '1. La carte des documents (à connaître par phase)', h: `
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>① Pré-deal</h4><ul><li><b>EL</b> – Engagement Letter</li><li><b>Teaser</b></li><li><b>NDA</b> (ou CA)</li><li><b>IM / CIM</b></li><li><b>VDD report</b></li><li><b>PL / BIL</b></li></ul></div>
 <div class="col-box yellow"><h4>② Deal – préliminaire</h4><ul><li><b>EOI / IOI</b></li><li><b>MOU</b></li><li><b>LOI</b></li><li><b>MP</b> – Management Presentation</li><li><b>TS / HOT / HOA</b> – Term Sheet</li><li><b>NBO</b></li></ul></div>
 <div class="col-box red"><h4>③ Deal – confirmatoire</h4><ul><li><b>DD Report</b></li><li><b>BO</b> – Binding Offer</li><li><b>FO</b> – Fairness Opinion</li></ul></div>
 <div class="col-box green"><h4>④ Deal – finalisation</h4><ul><li><b>SPA</b></li><li><b>SHA</b></li><li><b>CM</b> – Closing Memorandum</li><li><b>TSA</b></li></ul></div>
</div><div class="cap">Après le closing (post-deal) : ajustements de prix, earn-out, options put/call prévues dans le SPA. Pas de nouveau document spécifique.</div></div>
<div class="box tip"><b>Pour retenir la logique :</b> on <b>trouve</b> (teaser, NDA, IM) → on <b>manifeste son intérêt</b> (EOI, LOI, NBO) → on <b>vérifie</b> (DD, MP) → on <b>s\'engage</b> (BO, SPA) → on <b>boucle et accompagne</b> (CM, TSA, SHA).</div>` },

    { t: '2. Phase pré-deal', h: `
<div class="tblwrap"><table>
<tr><th>Document</th><th>À quoi ça sert</th><th>Points clés</th></tr>
<tr><td><b>Engagement Letter (EL)</b></td><td>Contrat entre le <b>client</b> (la société qui veut vendre/acheter) et la <b>banque / conseil</b> : mission, conditions, coûts, délais.</td><td>Moins formel qu\'un contrat mais <b>juridiquement contraignant</b>. Contenu : parties, type de service, détails, responsabilités, disclaimer, durée/résiliation.</td></tr>
<tr><td><b>Teaser</b></td><td>Résumé de <b>1-2 pages</b> pour <b>attirer</b> des acheteurs.</td><td><b>Anonyme</b> (pas de nom de la cible). Mise en avant des points forts. Étapes : Teaser → NDA → IM.</td></tr>
<tr><td><b>NDA / CA</b></td><td>Garder <b>confidentielles</b> les informations échangées, utilisables <i>uniquement</i> pour évaluer la transaction.</td><td>NDA = plutôt <b>unilatéral</b> (une partie divulgue) ; CA = plutôt <b>bilatéral</b> (partenariats). En pratique quasi synonymes.</td></tr>
<tr><td><b>Information Memorandum (IM / CIM)</b></td><td>Document de <b>50+ pages</b> : activité, financiers, management, marché.</td><td>Le nom de la cible est <b>révélé</b> (après NDA). <b>Non contraignant</b>, document <b>marketing</b> (« make-up »). Objectif : vendre à la valeur maximale.</td></tr>
<tr><td><b>Vendor Due Diligence (VDD)</b></td><td><b>Pré-DD</b> réalisée par le <b>vendeur</b> sur lui-même (« sale-ready »).</td><td>Donne le contrôle du process et du timing, valide le business plan, prépare l\'<b>equity story</b>. Plus il ressemble à la vraie DD, mieux c\'est.</td></tr>
<tr><td><b>Process Letter (PL) / Bid Instruction Letter (BIL)</b></td><td>Cadre de l\'<b>enchère</b> : calendrier, instructions, contacts, conditions que les offres doivent contenir.</td><td>Accompagne le CIM. Sans date limite claire, les acheteurs « attendent » (analogie du marathon).</td></tr>
</table></div>` },

    { t: '3. Phase deal – documents préliminaires', h: `
<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Les accords « non contraignants »</b> : LOI, MOU, EOI/IOI, TS, NBO. Ils expriment une intention, pas un engagement ferme. Mais attention : <b>certaines clauses sont souvent contraignantes</b> (confidentialité, exclusivité…), et un tribunal américain (2019) a jugé une LOI contraignante quand elle contenait tous les éléments essentiels.</div>

<div class="tblwrap"><table>
<tr><th>Document</th><th>Ce que c\'est</th><th>Différence clé</th></tr>
<tr><td><b>EOI / IOI</b><br>(Expression / Indication of Interest)</td><td>L\'acheteur indique <b>l\'intérêt</b> et surtout une <b>fourchette de valorisation / prix</b>.</td><td>Centré sur le <b>prix</b> (« ok, mais combien ? »). Plus informel que la LOI. Sert à vérifier s\'il existe un terrain d\'entente (recouvrement des fourchettes acheteur/vendeur).</td></tr>
<tr><td><b>MOU</b><br>(Memorandum of Understanding)</td><td>Accord (bilatéral ou multilatéral) sur une ligne d\'action commune.</td><td><b>Plus formel</b> qu\'un gentlemen\'s agreement, <b>moins</b> qu\'une LOI. Non contraignant. Peut être signé entre <b>États</b> ou entre une entreprise et un État.</td></tr>
<tr><td><b>LOI</b><br>(Letter of Intent)</td><td>« Agreement to agree » : fixe les <b>termes principaux</b> du futur contrat.</td><td>Souvent <b>sous forme de tableau</b>, <b>signée par les deux parties</b>. Contenu : contexte, objectif, termes clés (gouvernance, % acquis, principes de valorisation, personnes clés, plan stratégique). Non contraignante dans l\'ensemble.</td></tr>
<tr><td><b>Term Sheet (TS / HOT / HOA)</b></td><td>Résumé des termes et conditions de base (valorisation, montant investi, % détenu, droits de vote, liquidation preference, anti-dilution).</td><td>Le TS est <b>généralement non signé</b> → plus difficile d\'attaquer en justice un acheteur qui se retire. La LOI inclut les mêmes termes mais est <b>signée</b>.</td></tr>
<tr><td><b>Management Presentation (MP)</b></td><td>Première <b>rencontre physique</b> management / acheteur potentiel (quelques heures à une journée).</td><td>Support PowerPoint proche du CIM mais plus axé <b>opérations, production, supply chain</b>. Moment décisif : l\'acheteur devient plus intéressé… ou abandonne.</td></tr>
<tr><td><b>Non-Binding Offer (NBO)</b></td><td>L\'acheteur annonce un <b>prix indicatif</b> sous réserve des résultats de la DD.</td><td>Sous forme de <b>lettre</b> (chapitres), signée surtout par <b>l\'acheteur</b>. <b>Plus détaillée</b> que la LOI. Toujours envoyée <b>après</b> la LOI quand il y en a une. Plus courante que la LOI.</td></tr>
</table></div>

<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Les 7 composantes d\'une NBO</b> : ① prix indicatif ② conditionnalité (approbations…) ③ calendrier ④ accord définitif (documents à signer) ⑤ statut (non contraignant) ⑥ confidentialité ⑦ coûts / modalités de paiement.</div>

<div class="diagram"><div class="flow">
 <div class="n"><b>EOI / IOI</b>prix et intérêt</div><div class="ar">→</div>
 <div class="n"><b>LOI</b>termes principaux (tableau, signée)</div><div class="ar">→</div>
 <div class="n"><b>NBO</b>lettre détaillée (signée par l\'acheteur)</div><div class="ar">→</div>
 <div class="n red"><b>BO</b>offre contraignante après DD</div>
</div><div class="cap">Du plus informel au plus engageant. Le MOU et le Term Sheet sont des documents « parallèles » non signés/non contraignants.</div></div>` },

    { t: '4. Phase deal – documents confirmatoires', h: `
<div class="tblwrap"><table>
<tr><th>Document</th><th>Ce que c\'est</th></tr>
<tr><td><b>Due Diligence Report (DD)</b></td><td>Résultat de l\'examen approfondi (juridique, comptable, fiscal, environnemental, IT, cyber) de la cible. Dure en général <b>4 à 6 semaines</b> ou plus. Elle rend les transactions plus susceptibles d\'aboutir et mieux informées.</td></tr>
<tr><td><b>Binding Offer (BO)</b></td><td>Offre faite <b>après la DD</b> : contractuellement engageante dès que le vendeur l\'accepte. Contrairement à la NBO (sous réserve de la DD), la BO <b>ne devrait pas avoir de condition</b> (des « BO conditionnelles » existent). Peut différer de la NBO si la DD a révélé des problèmes.</td></tr>
<tr><td><b>Fairness Opinion (FO)</b></td><td>Avis d'un conseil/banque <b>indépendant</b> disant si les termes de la transaction sont <b>équitables financièrement pour les actionnaires</b>. Aide le conseil à remplir ses devoirs fiduciaires et <b>réduit le risque de litige</b>. Parfois obligatoire pour les sociétés cotées.</td></tr>
</table></div>
<div class="box tip"><b>Conflit d\'intérêts :</b> la fairness opinion est souvent critiquée comme un <b>« rubber stamp »</b> : la banque est payée par honoraires de succès (liés à la réalisation du deal) et son mandat vient du management. Elle a donc intérêt à déclarer le deal équitable.</div>` },

    { t: '5. Phase deal – finalisation : SPA, SHA, CM, TSA', h: `
<div class="tblwrap"><table>
<tr><th>Document</th><th>Contraignant ?</th><th>L\'essentiel</th></tr>
<tr><td><b>SPA</b> (Sale &amp; Purchase Agreement)</td><td><b>Oui</b></td><td>Contrat final : prix, paiement, conditions, garanties… Transformé en acte public devant <b>notaire</b> à l\'<b>execution date</b>. Gère le risque et définit ce qui se passe si une partie manque à ses obligations.</td></tr>
<tr><td><b>SHA</b> (Shareholders\' Agreement)</td><td>Oui, mais <b>entre signataires seulement</b></td><td>Règles entre actionnaires : transferts de titres, droits de vote, dividendes, administrateurs, préemption, non-concurrence. Très utilisé quand on vend <b>une partie</b> de l\'entreprise. Facultatif et confidentiel.</td></tr>
<tr><td><b>CM</b> (Closing Memorandum)</td><td><b>Non</b></td><td>Checklist des documents et actions de closing. Y noter <b>tout ce qui s\'est passé différemment du SPA</b>. Rédigé par les avocats de l\'acquéreur ; sert à interpréter le SPA plus tard.</td></tr>
<tr><td><b>TSA</b> (Transitional Services Agreement)</td><td>Oui</td><td>Après la vente, le <b>vendeur continue de fournir des services</b> (RH, IT, comptabilité…) à l\'acheteur pendant ~<b>6 à 12 mois</b> pour une transition ordonnée. Typique pour une cession de division. L\'acheteur a peu de flexibilité ; le vendeur reste lié après le closing.</td></tr>
</table></div>

<h3>Articles of Incorporation vs Bylaws vs SHA</h3>
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>Articles of Incorporation</h4><p>Acte <b>fondateur</b>, déposé auprès de l\'État. <b>Public</b>. Nom, adresse, objet, structure du capital.</p></div>
 <div class="col-box yellow"><h4>Bylaws</h4><p>Règles <b>internes</b> de fonctionnement (conseil, dirigeants, votes, réunions). <b>Non publics</b>. Lient la société et ses membres.</p></div>
 <div class="col-box green"><h4>SHA</h4><p><b>Contrat entre actionnaires</b>. <b>Facultatif</b>, lie <b>seulement les signataires</b>, <b>confidentiel</b>.</p></div>
</div><div class="cap">Image du cours : le cœur (articles), le cerveau (bylaws), la personnalité (SHA).</div></div>` },

    { t: '6. Focus sur le SPA : structure et clauses clés', h: `
<div class="diagram"><div class="flow col">
 <div class="n"><b>1. Parties &amp; recitals</b>qui et pourquoi (pas de droits/obligations)</div><div class="ar">→</div>
 <div class="n"><b>2. Defined terms</b>liste de définitions</div><div class="ar">→</div>
 <div class="n"><b>3. Commercial provisions</b>noyau : prix, paiement, escrow, earn-out, collars, ajustements</div><div class="ar">→</div>
 <div class="n"><b>4. Covenants</b>promesses (négatives / « interim », de procédure, post-closing)</div><div class="ar">→</div>
 <div class="n"><b>5. Conditions precedent</b>conditions à satisfaire avant closing</div><div class="ar">→</div>
 <div class="n red"><b>6. Representations &amp; warranties</b>« le gros morceau » (et de la négociation)</div><div class="ar">→</div>
 <div class="n red"><b>7. Indemnification</b>réparation après closing</div><div class="ar">→</div>
 <div class="n"><b>8. Termination</b>long stop date, break fees</div><div class="ar">→</div>
 <div class="n"><b>9. Miscellaneous</b>frais, loi applicable, confidentialité (~2 ans), non-concurrence</div>
</div></div>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Commercial provisions</b> : petite section mais cœur du deal, très négociée. Contient prix et modalités de paiement (cash au closing, différé, ajustements), <b>escrow</b>, <b>earn-outs</b>, collars, paiements contingents.</div>
<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Covenants</b> (2<sup>e</sup> plus grosse section) :
<ul><li><b>Négatifs / interim / operating</b> : limitent la cible pendant l\'interim (gérer en « ordinary course », pas de dividendes exceptionnels, pas de gros contrats…).</li><li><b>Processing covenants</b> : obligations de coopérer pour finaliser (« best efforts », « reasonable efforts »), importants si risque antitrust/financement.</li><li><b>Post-closing</b> : non-concurrence, lock-up, engagements sociaux.</li></ul></div>

<h3>Conditions suspensives (CP) et clause MAC</h3>
<p>Au <b>signing</b> le SPA devient contraignant, mais son exécution dépend de CP (approbations réglementaires…). Si les CP ne sont pas remplies dans le délai, les parties peuvent <b>mettre fin</b> au contrat sans conséquence. Le <b>vendeur</b> veut de la certitude de closing (résiste aux conditions hors de son contrôle) ; l\'<b>acheteur</b> veut se protéger (ex. clause MAC).</p>
<div class="box must"><span class="badge b-must">À SAVOIR</span><b>MAC / MAE (Material Adverse Change / Effect)</b> : un changement significatif qui affecte la capacité à réaliser le contrat et peut permettre de <b>sortir de l\'accord</b>. <b>3 caractéristiques</b> :
<ol><li>La circonstance est <b>grave et durable</b>.</li><li>Elle affecte la société <b>plus que ses concurrents</b> du secteur.</li><li>La partie qui l\'invoque <b>ne la connaissait pas</b>, malgré une due diligence correcte.</li></ol>
<p>Cas de <b>force majeure</b> (« acts of God ») : événement hors du contrôle du vendeur.</p></div>

<h3>Representations &amp; Warranties (R&amp;W)</h3>
<ul>
<li>Déclarations factuelles sur la cible et son activité ; le vendeur s'engage sur des faits. Détaillées en <b>Disclosure Schedule</b> (exceptions).</li>
<li><b>Fundamental reps</b> : titre de propriété des actions, capacité, absence d'insolvabilité. <b>Business reps</b> : comptes, impôts, environnement, actifs, immobilier, IT, RH.</li>
<li>Le <b>vendeur</b> veut des R&amp;W « <b>loose</b> » (avec qualificatifs de connaissance, de matérialité, MAE) ; l\'<b>acheteur</b> veut des R&amp;W « <b>tight</b> ».</li>
<li><b>3 fonctions</b> : ① confirmer la DD (disclosure schedules) ② ajustement <b>de facto</b> du prix (via indemnisation en cas de manquement) ③ certitude de closing (condition « <b>bring-down</b> » : l\'acheteur peut refuser de clôturer si les R&amp;W ne sont plus vraies au closing).</li>
</ul>

<h3>Indemnification : baskets et caps</h3>
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>True deductible basket</h4><p>Seuil à dépasser ; on n'indemnise que <b>l'excédent</b> au-dessus du seuil.</p><p><i>Seuil 100 – pertes 150 → indemnité = <b>50</b></i></p></div>
 <div class="col-box green"><h4>Tipping (first-dollar) basket</h4><p>Une fois le seuil atteint, on indemnise <b>dès le premier euro</b>. Courant pour les petits deals.</p><p><i>Seuil 100 – pertes 150 → indemnité = <b>150</b></i></p></div>
 <div class="col-box yellow"><h4>Mini-basket (de minimis)</h4><p>Seuil <b>par réclamation</b> : les petites réclamations sous ce montant ne comptent pas vers le basket principal.</p></div>
 <div class="col-box red"><h4>Cap</h4><p><b>Plafond</b> de la responsabilité du vendeur, souvent en % de la valeur de la transaction. Le vendeur veut le cap le plus bas, le basket le plus haut.</p></div>
</div></div>
<ul>
<li>L'indemnité fonctionne comme une <b>assurance</b> : objet, franchises (de minimis, baskets), caps, périodes de réclamation, procédures.</li>
<li>Si la DD identifie des risques précis, ils doivent être couverts par une <b>indemnité spécifique</b>. ~30 % des deals privés donnent lieu à des réclamations post-closing.</li>
</ul>

<h3>Termination et clauses diverses</h3>
<p><b>Long stop date</b> : date au-delà de laquelle chaque partie peut résilier si les CP ne sont pas satisfaites. Aussi : accord mutuel, manquement non réparable, et <b>break fees</b> (indemnités de rupture). Divers : frais, notifications, loi applicable, confidentialité (en général 2 ans), non-concurrence.</p>
<div class="box detail"><span class="badge b-detail">DÉTAIL</span>Rôle de l\'ESG : en Europe, -10 % de deals avec clauses ESG dans le SPA mais +14 % de deals avec due diligence ESG. Retiens seulement : <b>la DD ESG progresse plus vite que les clauses ESG du SPA</b>.</div>` },

    { t: '7. Representation vs Warranty vs Indemnity', h: `
<div class="tblwrap"><table>
<tr><th></th><th>Representation</th><th>Warranty</th><th>Indemnity</th></tr>
<tr><td><b>Nature</b></td><td>Déclaration de <b>fait</b> sur l\'état actuel</td><td><b>Promesse</b> sur certains aspects (propriété d\'actifs, conformité, exactitude des infos)</td><td>Engagement du vendeur de <b>couvrir des pertes précises</b></td></tr>
<tr><td><b>Si faux / non respecté</b></td><td><b>Misrepresentation</b> : recours élargis, parfois <b>rescission</b> (annulation du contrat)</td><td>Dommages et intérêts ; l\'acheteur doit <b>prouver la perte</b></td><td>Compensation directe, souvent euro pour euro, <b>sans prouver le dommage</b></td></tr>
<tr><td><b>Limites</b></td><td>—</td><td>Limitées dans le temps, de minimis, (tipping) basket, cap</td><td><b>Pas</b> les limites des R&amp;W</td></tr>
<tr><td><b>Origine</b></td><td>Fait connu à la signature</td><td>Risque général</td><td>Résulte de la <b>due diligence</b> : risque spécifique identifié et « renvoyé » au vendeur</td></tr>
</table></div>
<div class="box tip"><b>Mémo :</b> Representation = « c\'est vrai » · Warranty = « je te promets » · Indemnity = « si ça arrive, je paie ».</div>` },

    { t: '8. L\'assurance W&I (Warranty & Indemnity)', h: `
<p>La <b>W&amp;I</b> (aussi <b>RWI</b>, Representations &amp; Warranties Insurance) protège <b>acheteur ou vendeur</b> contre les pertes liées à une <b>violation des garanties</b> du SPA.</p>
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>Buy-side W&amp;I</h4><ul><li>Assurance <b>directe</b> : l\'<b>acheteur</b> est l\'assuré.</li><li>Il réclame <b>directement à l\'assureur</b>, sans attaquer le vendeur d\'abord.</li><li>Rassure l\'acheteur.</li></ul></div>
 <div class="col-box yellow"><h4>Sell-side W&amp;I</h4><ul><li>Assurance de <b>responsabilité</b> : le <b>vendeur</b> est l\'assuré contre les réclamations de l\'acheteur.</li><li>Idéale pour un <b>fonds PE</b> qui veut une sortie propre (« nil recourse ») ou en fin de vie.</li></ul></div>
</div></div>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Ce qui est couvert / non couvert</b>
<ul><li><b>Couvert</b> : les risques <b>inconnus</b> au moment de la transaction (faits différents de ce qui avait été communiqué).</li><li><b>Exclus</b> : risques <b>connus ou divulgués</b> (trouvés en DD ; couverts par des indemnités), matières <b>non examinées</b> en DD, et les <b>déclarations prospectives</b> (forward-looking).</li><li>Un <b>bring-down certificate</b> du vendeur garantit que les R&amp;W faites au signing restent vraies au closing.</li></ul></div>

<ul>
<li><b>Pourquoi ça se développe ?</b> Pas d'accord sur la répartition des risques ; vendeur en position forte (garanties limitées) ou en situation de détresse ; fonds PE vendeur ; l'acheteur est rassuré sans poursuivre le vendeur. Avec une W&amp;I, les <b>baskets et caps</b> sont souvent plus bas.</li>
<li><b>Durée de survie des R&amp;W</b> : générales (opérations, finances, actifs) <b>12–24 mois</b> ; fiscales, environnementales, IP <b>3–7 ans</b> ; « fundamental » (propriété des actions, pouvoir de vendre, capital) <b>indéfinie ou très longue</b>.</li>
<li>L\'assureur ne commente qu\'un contrat négocié ; il faut donc évoquer la W&amp;I <b>dès la LOI/TS</b>. La prime est souvent payée par le vendeur (selon qui est couvert).</li>
<li>La W&amp;I influence le périmètre de la due diligence (ce qui n\'est pas examiné n\'est pas assuré).</li>
</ul>
<div class="box detail"><span class="badge b-detail">DÉTAIL</span>Statistiques de sinistres (2023 : record de déclarations de sinistres, +17 % ; principales violations : <b>fiscalité</b> et <b>états financiers</b>, 20 % chacune ; puis conformité ; délai de déclaration en augmentation). Retiens juste les deux grandes catégories : tax et financial statements.</div>` }
  ],
  retenir: `<ul>
<li>Pré-deal : EL, Teaser (anonyme, 1-2 p.), NDA, IM/CIM (50+ p., nom révélé, non contraignant), VDD, PL/BIL.</li>
<li>Non contraignants : EOI/IOI (prix), MOU, LOI (tableau, signée), TS (non signé), NBO (lettre, signée par l\'acheteur, après LOI). Contraignants : BO, SPA.</li>
<li>FO = avis d\'équité (souvent « rubber stamp »). TSA = le vendeur fournit des services 6-12 mois après la vente. CM = non contraignant, note les différences par rapport au SPA.</li>
<li>SPA : parties → définitions → commercial → covenants → CP → R&amp;W → indemnification → termination → divers.</li>
<li>MAC : grave/durable + plus que le secteur + imprévisible malgré DD.</li>
<li>Baskets : <b>deductible</b> (excédent seulement) vs <b>tipping</b> (dès le 1<sup>er</sup> euro). Cap = plafond.</li>
<li>Indemnity (risque connu, euro pour euro) &gt; Warranty (preuve du préjudice) ; Representation → misrepresentation / rescission.</li>
<li>W&amp;I : couvre l\'inconnu, exclut le connu et le prospectif. Buy-side = direct ; sell-side = responsabilité du vendeur.</li></ul>`,
  qs: [
    Q('Which document is anonymous and typically one or two pages long?', ['Information Memorandum', 'Teaser', 'Letter of Intent', 'Share Purchase Agreement'], 1,
      ['L\'IM compte 50+ pages et révèle le nom de la cible.', 'Teaser : résumé court et anonyme pour attirer des acheteurs avant NDA.', 'La LOI est un document d\'intentions entre parties identifiées.', 'Le SPA est le contrat final.']),
    Q('What is the usual sequence of documents at the beginning of a sell-side process?', ['NDA → Teaser → IM', 'Teaser → NDA → IM', 'IM → Teaser → NDA', 'LOI → NDA → Teaser'], 1,
      ['Le NDA suit le teaser (intérêt manifesté) et précède l\'IM.', 'Teaser (anonyme), puis NDA (confidentialité), puis IM (infos détaillées, nom révélé).', 'L\'IM est confidentiel : il vient après le NDA.', 'La LOI arrive bien plus tard.']),
    Q('Why is the name of the target disclosed in the IM but not in the teaser?', ['Because the IM is binding', 'Because bidders have signed an NDA before receiving the IM', 'Because the IM is public', 'Because it is required by law'], 1,
      ['L\'IM n\'est pas contraignant.', 'Les acheteurs ont signé le NDA : on peut révéler l\'identité sans risque de fuite.', 'L\'IM est confidentiel.', 'Ce n\'est pas une obligation légale.']),
    Q('An Information Memorandum is best described as:', ['A legally binding offer', 'A marketing document presenting the business to maximise value, not legally binding', 'A fairness opinion', 'A tax audit'], 1,
      ['Ce n\'est pas une offre.', 'L\'IM est un outil marketing non contraignant.', 'La fairness opinion est un avis d\'équité de la transaction.', 'Aucun rapport avec un audit fiscal.']),
    Q('What is the difference between a NDA and a CA (confidentiality agreement)?', ['A NDA is binding, a CA is not', 'Virtually none: same purpose; NDA is more often used for one-way disclosure, CA for two-way exchanges', 'A NDA is signed after closing', 'A CA replaces the SPA'], 1,
      ['Les deux sont contraignants.', 'Même but ; NDA plutôt unilatéral, CA plutôt dans des partenariats avec échanges réciproques.', 'Le NDA intervient avant la DD.', 'Aucun lien avec le SPA.']),
    Q('Vendor Due Diligence (VDD) is:', ['A due diligence ordered by the buyer', 'A pre-DD report prepared on behalf of the seller to get "sale-ready" and speed up the process', 'A government investigation', 'A type of insurance'], 1,
      ['C\'est le contraire : le VDD est commandé par le vendeur.', 'Le vendeur se prépare, contrôle le process et réduit les perturbations de la vraie DD.', 'Pas une enquête publique.', 'Aucun rapport avec l\'assurance.']),
    Q('Which statement about the Process Letter and Bid Instruction Letter is correct?', ['They are signed by both parties after closing', 'They are sent to bidders in an auction to explain the process and the content of offers', 'They replace the NDA', 'They are only used in hostile takeovers'], 1,
      ['Ils interviennent avant les offres.', 'Ils encadrent l\'enchère : timeline, instructions, contenu attendu des offres.', 'Ils ne remplacent pas le NDA.', 'Ils concernent les enchères, pas les OPA hostiles.']),
    Q('The Expression of Interest (EOI/IOI) is mainly focused on:', ['Environmental risks', 'Valuation and price range', 'Post-closing integration', 'Employee benefits'], 1,
      ['Pas le sujet.', 'L\'EOI/IOI sert à voir si prix et fourchettes se rejoignent : la question « combien ? ».', 'Concerne l\'intégration, bien plus tard.', 'Hors sujet.']),
    Q('Which of these documents is typically in tabular form and signed by both parties?', ['NBO', 'LOI', 'IM', 'Fairness opinion'], 1,
      ['La NBO est une lettre, plus détaillée, signée surtout par l\'acheteur.', 'La LOI est souvent un tableau signé par les deux parties.', 'L\'IM est un document de présentation.', 'La FO est un avis de la banque.']),
    Q('Which statement about the Non-Binding Offer (NBO) is correct?', ['It is always signed by both parties', 'It is a letter, usually signed by the buyer only, sent after the LOI and more detailed than the LOI', 'It is a table in the SPA', 'It is binding once accepted'], 1,
      ['Surtout signée par l\'acheteur.', 'NBO : lettre structurée en chapitres, signée par l\'acheteur ; plus détaillée que la LOI, toujours après.', 'Aucun rapport avec une table du SPA.', 'Non contraignante par définition (sauf certaines clauses).']),
    Q('What makes the Term Sheet different from the LOI?', ['The TS is usually signed by both parties, the LOI is not', 'The TS is usually not signed by anyone, whereas the LOI is signed by both parties', 'The TS is legally binding', 'The TS is only used for asset deals'], 1,
      ['C\'est l\'inverse.', 'TS : en général non signé, donc plus difficile pour attaquer un acheteur qui se retire ; la LOI est signée.', 'Aucun des deux n\'est contraignant en principe.', 'Le TS s\'utilise dans tous types de deals.']),
    Q('A Memorandum of Understanding (MOU) is:', ['Binding and more detailed than the SPA', 'Non-binding, more formal than a gentlemen\'s agreement but less structured than a LOI, and may be signed even between countries', 'The same as a Binding Offer', 'A closing document'], 1,
      ['Non contraignant.', 'Le MOU exprime une volonté commune ; il peut même être signé entre États (ex. Ferrari et le gouvernement italien).', 'N\'est pas une BO.', 'Ce n\'est pas un document de closing.']),
    Q('What is a key difference between a Non-Binding Offer and a Binding Offer?', ['The NBO is subject to due diligence; the BO comes after DD and is legally binding once accepted', 'The NBO is binding, the BO is not', 'The BO is always identical to the NBO', 'The BO is sent before the teaser'], 0,
      ['La NBO est sous réserve de DD ; la BO intervient après DD et engage juridiquement une fois acceptée.', 'C\'est l\'inverse.', 'La BO peut différer si la DD a révélé des éléments.', 'La BO arrive après la DD.']),
    Q('A fairness opinion is criticised mainly because:', ['It is always wrong', 'It often functions as a rubber stamp as the bank has strong incentives (success fees, mandate from management)', 'It is paid by the buyer\'s employees', 'It increases the transaction taxes'], 1,
      ['Ce n\'est pas la critique citée.', 'La banque touche un honoraire de succès et son mandat vient du management : elle est incitée à déclarer le deal équitable.', 'Rien à voir : la banque est payée par honoraires de succès et mandatée par le management, c\'est ça le conflit d\'intérêts.', 'Pas le sujet.']),
    Q('What is the main purpose of a Transitional Services Agreement (TSA)?', ['To fix the purchase price', 'To have the seller provide services (HR, IT, accounting…) for a limited period after closing', 'To authorise the antitrust review', 'To list representations and warranties'], 1,
      ['Le prix est dans le SPA.', 'Le TSA assure une transition ordonnée : le vendeur continue de fournir certains services (souvent 6-12 mois).', 'Pas son rôle.', 'Elles sont dans le SPA.']),
    Q('The Closing Memorandum:', ['Is a binding contract replacing the SPA', 'Is a non-binding document used to interpret the SPA and record what differed from the plan', 'Is prepared by the seller\'s notary only', 'Contains the fairness opinion'], 1,
      ['Non contraignant.', 'Il contient la checklist de closing et consigne ce qui diffère du SPA ; il est rédigé par les avocats de l\'acquéreur.', 'Rédigé par les avocats de l\'acquéreur.', 'La FO est un autre document.']),
    Q('A Shareholders\' Agreement (SHA) is:', ['Mandatory for all companies and public', 'Optional, binding only on the shareholders who sign it, and generally confidential', 'Filed at the Chamber of Commerce as a public deed', 'Identical to the bylaws'], 1,
      ['Il est facultatif et confidentiel.', 'SHA : contrat entre actionnaires, lie ses seuls signataires.', 'Ce sont les articles of incorporation qui sont publics.', 'Les bylaws sont des règles internes non issues d\'un contrat d\'actionnaires.']),
    Q('Which of these documents becomes a public document once registered?', ['Bylaws', 'Articles of Incorporation', 'Shareholders\' Agreement', 'NDA'], 1,
      ['Les bylaws sont internes et non publics.', 'Les articles of incorporation sont déposés et deviennent publics.', 'Le SHA est confidentiel.', 'Un NDA est confidentiel.']),
    Q('Which section is described as "relatively small but containing the core deal terms" of the SPA?', ['Recitals', 'Commercial provisions', 'Miscellaneous', 'Defined terms'], 1,
      ['Les recitals expliquent le contexte, sans créer de droits.', 'Les commercial provisions contiennent prix, paiement, escrow, earn-outs.', 'Les clauses diverses sont standard.', 'Les defined terms listent des définitions.']),
    Q('Recitals in an SPA:', ['Contain the rights and obligations of the parties', 'Explain the background and intentions but do not create rights or obligations', 'Define the purchase price', 'Contain the indemnification caps'], 1,
      ['Ils n\'en contiennent pas.', 'Ils expliquent le contexte, les parties et leurs intentions.', 'Le prix est dans les commercial provisions.', 'Caps : dans l\'indemnification.']),
    Q('Negative (interim or operating) covenants:', ['Require the buyer to finance the deal', 'Limit what the target can do between signing and closing to keep it in the same condition', 'Are post-closing non-competes', 'Are only applicable to listed companies'], 1,
      ['Ce n\'est pas leur objet.', 'Ils garantissent une gestion en « ordinary course » : pas de dividendes exceptionnels, gros contrats, etc.', 'Ceux-ci sont des covenants post-closing.', 'Pas une limite aux sociétés cotées.']),
    Q('A condition precedent (CP) in an SPA is:', ['A clause that applies after closing', 'A future event (e.g. regulatory approval) on which the performance of the agreement depends', 'A purchase price adjustment', 'A type of insurance'], 1,
      ['Les post-closing covenants s\'appliquent après.', 'Si les CP ne sont pas remplies dans les délais, les parties peuvent mettre fin au contrat sans conséquence.', 'Un ajustement de prix est autre chose.', 'Pas une assurance.']),
    Q('Which is NOT one of the three characteristics of a Material Adverse Change (MAC)?', ['The circumstance is severe and enduring', 'It affects the business more significantly than its industry peers', 'The invoking party had no prior knowledge despite proper due diligence', 'It must be caused by the seller\'s deliberate fraud'], 3,
      ['Caractéristique 1 : grave et durable.', 'Caractéristique 2 : plus que les concurrents du secteur.', 'Caractéristique 3 : imprévu malgré une bonne DD.', 'La fraude du vendeur n\'est pas un critère du MAC : un MAC vise un événement grave, durable, qui touche plus la société que ses pairs et qui était imprévisible.']),
    Q('What does a "bring-down" closing condition allow the buyer to do?', ['Reduce the purchase price automatically', 'Walk away if the seller\'s representations and warranties are no longer true at closing', 'Lower the interest rate', 'Extend the long stop date'], 1,
      ['Pas automatique.', 'La condition bring-down permet de ne pas clôturer si les R&W ne sont plus vraies au closing.', 'Rien à voir avec les taux.', 'Pas son rôle.']),
    Q('Sellers generally prefer representations and warranties that are:', ['Tight, with no qualifiers', 'Loose, with knowledge, materiality and MAE qualifiers', 'Broader than the SPA', 'Unlimited in time'], 1,
      ['C\'est ce que préfère l\'acheteur.', 'Le vendeur veut limiter sa responsabilité par des qualificatifs de connaissance, matérialité et MAE.', 'Aucun intérêt pour le vendeur.', 'Le vendeur veut limiter la durée.']),
    Q('Which of the following are "fundamental representations"?', ['Annual accounts and environmental compliance', 'Title to shares, capacity to sell, no insolvency', 'Details of IT contracts', 'HR policies'], 1,
      ['Ce sont des business representations.', 'Fundamentals : ce qui assure le contrôle des actifs attendus (titre, capacité, solvabilité).', 'Business reps.', 'Business reps.']),
    Q('A tipping (first-dollar) basket works as follows:', ['The seller pays only the amount above the threshold', 'Once the threshold is exceeded, the seller is liable for all losses from the first dollar', 'No claim can ever be made', 'The buyer pays the first losses'], 1,
      ['Ça décrit le true deductible basket.', 'Tipping basket : une fois le seuil franchi, tout est indemnisé dès le premier dollar.', 'Un basket sert de seuil de déclenchement : une fois franchi, des réclamations sont possibles ; il n\'interdit pas toute réclamation.', 'C\'est l\'inverse : une fois le seuil franchi, c\'est le vendeur qui indemnise, y compris les premiers dollars.']),
    Q('A deductible basket of 100 and proven losses of 130. What is the indemnification amount under a TRUE DEDUCTIBLE basket?', ['0', '30', '100', '130'], 1,
      ['Le seuil est dépassé : 130 > 100.', 'Seul l\'excédent est indemnisé : 130 − 100 = 30.', '100 est le seuil, pas l\'indemnité.', '130 serait l\'indemnité d\'un tipping basket.']),
    Q('The same losses of 130 with a TIPPING basket of 100: what is the indemnification amount?', ['0', '30', '100', '130'], 3,
      ['Le seuil est dépassé.', '30 serait avec un true deductible basket.', '100 est le seuil.', 'Tipping : une fois dépassé, tout est indemnisé dès le premier dollar : 130.']),
    Q('What is a "cap" in an indemnification clause?', ['The minimum claim size', 'The maximum liability of the seller for indemnification claims', 'The price paid at signing', 'The duration of the interim period'], 1,
      ['Ça, c\'est le mini-basket / de minimis.', 'Cap : plafond de responsabilité, souvent un % du prix.', 'Pas le prix.', 'Pas une durée.']),
    Q('Which is correct about indemnities compared with warranties?', ['Indemnities require the buyer to prove a loss and are subject to caps and baskets', 'Indemnities typically provide compensation for specific known risks, without proving damage and without R&W limitations', 'They are the same', 'Indemnities cover only unknown risks'], 1,
      ['Ça décrit les warranties.', 'Indemnités : risques précis identifiés en DD, compensation euro pour euro, sans les limites des R&W.', 'Ils diffèrent.', 'Les risques inconnus relèvent des garanties/W&I ; l\'indemnité couvre un risque identifié.']),
    Q('A false statement of fact in a representation can lead to:', ['No consequence', 'A misrepresentation claim, possibly rescission of the contract', 'An increase in the cap', 'An automatic MAC'], 1,
      ['Une fausse déclaration a des conséquences : réclamation pour misrepresentation, voire annulation du contrat (rescission).', 'Misrepresentation, avec possible rescission (annulation du contrat).', 'Le cap est un plafond négocié à l\'avance dans le SPA ; une fausse déclaration ne le relève pas.', 'Un MAC est un événement grave et durable survenu entre signing et closing, ce n\'est pas la conséquence d\'une fausse déclaration.']),
    Q('Long stop date means:', ['The date of signing', 'The date after which a party may terminate if conditions precedent have not been fulfilled', 'The expiry of the NDA', 'The date of the first offer'], 1,
      ['La date de signature est le « signing date ». La long stop date est une date butoir pour que les conditions suspensives soient remplies.', 'Date butoir : après elle, une partie peut mettre fin au contrat.', 'Sans rapport.', 'Sans rapport.']),
    Q('What does W&I insurance primarily cover?', ['Known and disclosed risks', 'Unknown risks at the time of the deal, i.e. breaches of warranties not known to the buyer', 'Forward-looking statements', 'Risks not examined during due diligence'], 1,
      ['Les risques connus sont exclus.', 'Elle couvre les risques inconnus (pertes issues de manquements aux garanties).', 'Les déclarations prospectives sont exclues.', 'Ce qui n\'a pas été examiné en DD est exclu.']),
    Q('Why is W&I insurance attractive for a private-equity seller?', ['It lets the PE fund limit its liability after sale and achieve a "clean exit"', 'It increases its recourse', 'It cancels taxes', 'It avoids due diligence'], 0,
      ['La couverture assurance limite la responsabilité du fonds après la vente (nil recourse).', 'Au contraire.', 'Aucun effet fiscal.', 'La DD reste indispensable.']),
    Q('In buy-side W&I insurance:', ['The seller is the policyholder', 'The buyer is the policyholder and can claim directly against the insurer', 'The notary is the policyholder', 'The insurer pays only if the seller is bankrupt'], 1,
      ['C\'est le sell-side.', 'Assurance directe : l\'acheteur réclame à l\'assureur sans devoir poursuivre d\'abord le vendeur.', 'Le notaire authentifie les actes ; il n\'est pas partie à l\'assurance. L\'assuré est l\'acheteur.', 'Faux : l\'acheteur peut réclamer directement à l\'assureur, sans attendre une faillite du vendeur.']),
    Q('Typical survival of general representations and warranties after closing is:', ['1–3 months', '12 to 24 months', '10 years for all', 'Forever for all'], 1,
      ['Trop court.', 'Généralement 12-24 mois ; 3-7 ans pour fiscalité, environnement, IP ; très long ou indéfini pour les fondamentales.', 'Pas pour toutes.', 'Seules les fondamentales peuvent être indéfinies.']),
    Q('Which of the following is NOT covered by a W&I policy?', ['An unknown breach of the financial statements warranty', 'Forward-looking statements (e.g. business plan forecasts)', 'An unknown tax liability from before closing', 'An unknown compliance-with-laws breach'], 1,
      ['Couvert : c\'est une des catégories principales de sinistres (états financiers).', 'Non couvert : les déclarations prospectives sont trop difficiles à chiffrer pour l\'assureur ; il couvre le « look back », pas le « look forward ».', 'Couvert : la fiscalité est avec les états financiers la première cause de sinistres.', 'Couvert : la conformité est la 3e catégorie de sinistres.'])
  ]
});
