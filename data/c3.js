MNA.add('c3', {
  titre: 'Cours 3 – Le processus M&A',
  sous: 'Asset vs share deal, processus acheteur (10 étapes) et vendeur (10 étapes), signing/closing, prix, enchères',
  resume: 'Les 10 étapes côté acheteur et côté vendeur, signing vs closing, completion accounts vs locked box, cash-free debt-free, types d\'enchères.',
  sections: [
    { t: '1. Asset deal vs share deal : lequel est le plus simple ?', h: `
<p>On a vu au cours 1 que <b>le vendeur préfère vendre les actions</b> et <b>l\'acheteur préfère acheter les actifs</b>. Voici pourquoi.</p>
<div class="tblwrap"><table>
<tr><th></th><th>Share deal (actions)</th><th>Asset deal (actifs)</th></tr>
<tr><td><b>Passifs</b></td><td>L\'acheteur reprend <b>tout</b> (actifs + dettes + risques cachés : retraites, garanties, litiges…)</td><td>L\'acheteur <b>choisit</b> (cherry picking) → moins de risques. Mais pas de protection totale (ex. risque environnemental d\'un terrain).</td></tr>
<tr><td><b>Impôts</b></td><td>Pas de réévaluation fiscale : les actifs restent à leur <b>valeur comptable</b> (souvent très amortis, donc peu d\'amortissements futurs)</td><td>Les actifs sont <b>réévalués à leur juste valeur (PPA)</b>, l\'excédent est du <b>goodwill</b> → amortissements plus élevés → <b>impôts plus bas</b> pour l\'acheteur</td></tr>
<tr><td><b>Processus</b></td><td><b>Plus simple</b> : on négocie avec le vendeur (l\'actionnaire)</td><td><b>Plus complexe</b> : contrats, permis, licences liés à l\'entité juridique ne sont pas transférés automatiquement ; clauses <b>de cession</b> ou de <b>changement de contrôle</b> ; actifs en garantie ; on négocie avec la cible elle-même, parfois concurrente</td></tr>
</table></div>
<div class="box know"><span class="badge b-know">À COMPRENDRE</span>Le chiffre à retenir : <b>vendeur = actions, acheteur = actifs ; mais le processus est plus simple en share deal</b>. Le gain fiscal de l\'asset deal (base d\'amortissement relevée → impôts plus faibles) est l\'argument de l\'acheteur.</div>` },

    { t: '2. Le processus côté acheteur (buy-side) : 10 étapes', h: `
<div class="diagram"><div class="flow">
 <div class="n"><b>1</b>Strategy development</div><div class="ar">→</div>
 <div class="n"><b>2</b>Target identification</div><div class="ar">→</div>
 <div class="n"><b>3</b>Information exchange</div><div class="ar">→</div>
 <div class="n"><b>4</b>Valuation &amp; synergies</div><div class="ar">→</div>
 <div class="n"><b>5</b>Offer &amp; negotiation</div>
</div>
<div class="flow">
 <div class="n"><b>6</b>Due diligence</div><div class="ar">→</div>
 <div class="n red"><b>7</b>Purchase agreement (SPA)<br><i>= SIGNING</i></div><div class="ar">→</div>
 <div class="n yellow"><b>—</b>Interim period</div><div class="ar">→</div>
 <div class="n"><b>8</b>Financing &amp; restructuring</div><div class="ar">→</div>
 <div class="n green"><b>9</b>Deal closure<br><i>= CLOSING</i></div><div class="ar">→</div>
 <div class="n"><b>10</b>Post-merger integration</div>
</div><div class="cap">Les étapes 7 à 9 sont reliées au signing, à la période intérimaire et au closing.</div></div>

<div class="tblwrap"><table>
<tr><th>#</th><th>Étape</th><th>L\'essentiel</th></tr>
<tr><td>1</td><td><b>Strategy</b></td><td>Pourquoi acheter ? Combien dépenser ? Comment financer ? Quel modèle opérationnel final ? Long terme = mission/vision ; moyen terme = business plan (5–7 ans) ; court terme = tactiques (dont le M&amp;A).</td></tr>
<tr><td>2</td><td><b>Target identification</b></td><td>Critères de recherche ; screening par l\'acheteur <b>ou</b> approche passive (teasers reçus de banques ayant un mandat de vente). Identifier aussi l\'entité acheteuse (filiale, SPV). Outils : NPV, IRR, SWOT, Porter.</td></tr>
<tr><td>3</td><td><b>Information exchange</b></td><td>Premier contact, <b>LOI</b> + <b>NDA</b>, échange d\'informations. Le vendeur crée une data room (VDR). Garder un seul canal d\'information centralisé (confidentialité).</td></tr>
<tr><td>4</td><td><b>Valuation &amp; synergies</b></td><td>Évaluer la cible et estimer les synergies. Aboutit à la première offre <b>non contraignante (NBO)</b>.</td></tr>
<tr><td>5</td><td><b>Offer &amp; negotiation</b></td><td>Offre en cash ou actions. <b>NBO</b> (après DD préliminaire) puis <b>BO</b> (après DD confirmatoire). Concurrence éventuelle d\'autres acheteurs.</td></tr>
<tr><td>6</td><td><b>Due diligence</b></td><td>Étape la plus <b>longue et critique</b> : vérifier que l\'info donnée est exacte. Des écarts peuvent entraîner une <b>révision du prix</b>.</td></tr>
<tr><td>7</td><td><b>Purchase agreement</b></td><td>Rédaction et signature du <b>SPA</b> (share) ou <b>APA</b> (asset). Contrat contraignant.</td></tr>
<tr><td>8</td><td><b>Financing</b></td><td>Banque prêteuse, date économique, escrow… (dette, actions ou mix).</td></tr>
<tr><td>9</td><td><b>Closing</b></td><td>Paiement du prix, nomination de nouveaux administrateurs, démissions, transfert des documents ; <b>closing memorandum</b>.</td></tr>
<tr><td>10</td><td><b>Post-merger integration</b></td><td>Souvent négligée mais <b>déterminante</b> pour le succès : cultures, systèmes, processus, communication, leadership.</td></tr>
</table></div>

<h3>Les types de due diligence</h3>
<p><b>FDD</b> (financière), <b>TDD</b> (fiscale), <b>LDD</b> (juridique), <b>Operational</b>, <b>IT</b>, <b>ESG</b>. Il faut une bonne coordination pour ne pas poser deux fois la même question.</p>
<div class="cols">
 <div class="col-box"><h4>FDD – Financial</h4><ul><li>Santé et <b>performance</b> financière</li><li><b>Quality of Earnings</b> (QoE)</li><li>Fonds de roulement, dette, cash-flow normalisés</li><li>Contrôles financiers, contingences</li></ul></div>
 <div class="col-box yellow"><h4>TDD – Tax</h4><ul><li><b>Risques fiscaux</b> et conformité passée</li><li>Litiges avec l\'administration, déclarations déposées et taxes payées</li><li>TVA, charges sociales, retenues à la source</li><li>Déficits reportables, <b>transfer pricing</b></li></ul></div>
</div>
<div class="box tip"><b>Règle de bon sens :</b> une due diligence qui dépasse <b>3-4 mois</b> est un mauvais signe (le vendeur cache quelque chose, ou l\'acheteur n\'obtient pas l\'information).</div>` },

    { t: '3. Signing, interim period, closing', h: `
<div class="diagram"><div class="tl">
 <div class="s"><b>Economic date</b>date de référence financière (souvent la clôture des comptes)</div>
 <div class="s"><b>Signing / Effective date</b>signature du SPA : engagement ferme de vendre et d\'acheter <i>sous conditions</i></div>
 <div class="s" style="background:#fff6df"><b>Interim period</b>semaines/mois : on remplit les <b>conditions suspensives</b></div>
 <div class="s"><b>Closing / Execution date</b>transfert de propriété, paiement du prix</div>
</div></div>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Signing ≠ Closing</b>
<ul><li><b>Signing</b> : on signe le SPA. Les parties s\'engagent à transférer la propriété.</li><li><b>Closing</b> : le transfert effectif des actions (ou actifs) et le paiement.</li><li><b>Interim period</b> : la période entre les deux (durée généralement <b>inconnue</b> au signing). Pour les petits deals, signing et closing peuvent être <b>simultanés</b>.</li></ul></div>

<h3>Conditions suspensives (closing conditions / conditions precedent)</h3>
<p>Exemples : documents à fournir, renonciation à des droits de préemption, <b>approbations</b> (actionnaires, gouvernements – « <b>golden power</b> »), levée des réserves de l\'<b>antitrust</b>, permis/licences, clauses de <b>changement de contrôle</b> (partenaires pouvant résilier), obtention du <b>financement</b>.</p>
<ul>
<li><b>Vendeur</b> : veut peu de conditions, courtes et sous son contrôle.</li>
<li><b>Acheteur</b> : veut davantage de conditions pour sécuriser ; souvent seul à pouvoir <b>renoncer</b> à une condition.</li>
<li>Pendant l\'interim : <b>covenants</b> (interdictions faites au vendeur), droits de retrait, indemnisations et clauses <b>MAC</b> (Material Adverse Change).</li>
</ul>

<h3>Le prix : Cash-Free Debt-Free, EV et Equity Value</h3>
<div class="formula">Equity Value (prix payé) = Enterprise Value − Net Debt<small>Net Debt = dette court terme + dette long terme − cash &amp; équivalents</small></div>
<ul>
<li><b>Cash-free debt-free (CFDF)</b> : l\'acheteur ne reprend <b>ni la dette ni l\'excédent de cash</b> du vendeur. Il paie donc la valeur des <b>opérations</b> = l\'<b>Enterprise Value</b>. Cohérent avec une valorisation par multiple d\'<b>EBITDA</b> (indépendant du cash et de la dette).</li>
<li>Sans CFDF, quand l\'acheteur reprend tout le bilan : <b>PP = EQV = EV − dette nette</b>.</li>
<li>Principe : l\'acheteur ne veut pas payer la <b>mauvaise gestion</b> du financement de la cible.</li>
</ul>
<div class="box ex"><b>Exemple chiffré</b> : EV = 100 ; dette court terme 10, dette long terme 30, cash 15 → Net debt = 10 + 30 − 15 = 25 → <b>Equity Value (prix) = 100 − 25 = 75</b>.</div>` },

    { t: '4. Completion accounts vs Locked box', h: `
<p><b>Problème :</b> entre la date de référence (economic date) et le closing, l\'entreprise continue de tourner sous contrôle du vendeur ; <b>cash, dette et fonds de roulement</b> peuvent changer, donc la valeur de l\'equity aussi. Deux mécanismes pour régler ça.</p>

<div class="diagram"><div class="cols">
 <div class="col-box red"><h4>Completion accounts</h4>
  <p><i>« Buyer-friendly » (usage US)</i></p>
  <ul><li>Comptes établis <b>après</b> le closing (30/60/90 jours) par l\'acheteur.</li><li>On compare le <b>fonds de roulement réel</b> à la cible négociée → <b>ajustement du prix</b> euro pour euro (au-delà d\'un seuil <i>de minimis</i>).</li><li>Une partie du prix reste en <b>escrow</b>.</li></ul>
  <p><b>+</b> pas besoin de clause de fuite (leakage) · le vendeur profite des profits jusqu\'au closing</p>
  <p><b>−</b> incertitude · estimation du vendeur imprécise · seul l\'EV est fixé · SPA plus complexe</p></div>
 <div class="col-box green"><h4>Locked box</h4>
  <p><i>« Seller-friendly » (usage Europe)</i></p>
  <ul><li><b>Prix fixe</b> basé sur un bilan « verrouillé » à une date passée.</li><li>Aucune <b>fuite de valeur</b> (leakage) vers le vendeur ou ses affiliés autorisée (dividendes, primes…) : sinon remboursement euro pour euro.</li><li>Le vendeur ne fait que du « ordinary course of business ».</li></ul>
  <p><b>+</b> certitude du prix · simplicité et coût réduit · le management se concentre sur l\'intégration</p>
  <p><b>−</b> le vendeur <b>ne reçoit pas</b> les profits de la période intérimaire (ils restent dans la société pour l\'acheteur) · exige une planification financière détaillée et précoce</p></div>
</div></div>

<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Le fonds de roulement (Working Capital)</b> : WC = actifs courants − passifs courants (cash + créances clients + stocks − dettes fournisseurs). Comme les valorisations reposent sur l\'EBITDA des 12 derniers mois, la <b>cible de WC</b> est la <b>moyenne mensuelle des 12 derniers mois</b>. Si le WC réel < cible → baisse de prix (l\'acheteur veut « une voiture avec le plein d\'essence »).</div>
<div class="box tip"><b>Astuces d\'un vendeur pour gonfler le cash avant le closing</b> : accélérer l\'encaissement des créances, retarder le paiement des fournisseurs, différer les achats de stocks. Résultat : un WC artificiellement bas, que l\'acheteur détecte et pénalise. Ça ne fonctionne donc pas vraiment pour obtenir un meilleur prix.</div>` },

    { t: '5. Le processus côté vendeur (sell-side) : 10 étapes', h: `
<div class="diagram"><div class="flow">
 <div class="n"><b>1</b>Reasons for the sale</div><div class="ar">→</div>
 <div class="n"><b>2</b>Make the firm sale-ready</div><div class="ar">→</div>
 <div class="n"><b>3</b>Marketing docs (teaser, CIM, IOI)</div><div class="ar">→</div>
 <div class="n"><b>4</b>NDA with buyers</div><div class="ar">→</div>
 <div class="n"><b>5</b>Data room (VDR)</div>
</div>
<div class="flow">
 <div class="n"><b>6</b>Q&amp;A, management presentation, site visit</div><div class="ar">→</div>
 <div class="n"><b>7</b>Market the offering</div><div class="ar">→</div>
 <div class="n"><b>8</b>Negotiate with buyers</div><div class="ar">→</div>
 <div class="n"><b>9</b>Agree terms (SPA) &amp; closing</div><div class="ar">→</div>
 <div class="n"><b>10</b>Comply with terms</div>
</div></div>
<div class="tblwrap"><table>
<tr><th>#</th><th>Étape</th><th>L\'essentiel</th></tr>
<tr><td>1</td><td>Raisons de la vente</td><td>Pourquoi, à qui, pour combien ? Une raison crédible (pas « les ventes baissent »). Un fonds de PE a déjà une <b>stratégie de sortie</b> ; un industriel est long terme.</td></tr>
<tr><td>2</td><td><b>Sale-ready</b></td><td>Bilan sain (peu de dette), management stable, contrats clients… Souvent via une <b>Vendor Due Diligence</b>. Étape <b>la plus importante</b> de la vente.</td></tr>
<tr><td>3</td><td>Documents marketing</td><td><b>Teaser</b> (2 pages, anonyme) puis <b>CIM</b> (mémorandum confidentiel) si intérêt. Univers d\'acheteurs construit via CapIQ, PitchBook, Bloomberg, FactSet. Ensuite <b>IOI</b> (indication d\'intérêt : fourchette de valorisation) → <b>LOI</b>.</td></tr>
<tr><td>4</td><td><b>NDA</b></td><td>On commence par un <b>blind teaser</b> (nom de code), puis NDA avant toute information détaillée.</td></tr>
<tr><td>5</td><td><b>Data room (VDR)</b></td><td>Salle de données virtuelle (anciennement physique). Critères : sécurité, interface, outil de Q&amp;A, personnalisation, prix, support. La DD peut durer jusqu\'à 120 jours.</td></tr>
<tr><td>6</td><td>Q&amp;A, MP, visite</td><td>Visite de site au passage IOI → LOI. Après la LOI, l\'acheteur demande souvent une <b>exclusivité (« no-shop »)</b>. Présentation du management : CEO, CFO, COO ; souvent dîner informel la veille.</td></tr>
<tr><td>7</td><td>Market the offering</td><td>Collecter les offres finales ; la banque élargit la visibilité auprès des acheteurs. Pour les cotées, la publicité sert aussi de signal au marché.</td></tr>
<tr><td>8</td><td>Négociation</td><td>Un deal avec le tout premier acheteur est plutôt le signe d\'un prix sous-estimé. Critères de choix : <b>prix, structure de la contrepartie, mark-up du SPA, plan stratégique</b>.</td></tr>
<tr><td>9</td><td>Termes &amp; closing</td><td>LOI non contraignante (éventuel dépôt non remboursable), puis <b>SPA</b> contraignant après DD. Exclusivité avec un soumissionnaire, <b>fairness opinion</b> présentée au conseil du vendeur.</td></tr>
<tr><td>10</td><td>Respect des termes</td><td><b>Gardening leave</b>, non-sollicitation, maintien du management (jusqu\'à ~3 ans : « handover period »).</td></tr>
</table></div>

<h3>Les 4 sources de levier du vendeur</h3>
<div class="cols">
 <div class="col-box"><h4>Necessity</h4><p>Êtes-vous un vendeur <b>forcé</b> ? Si oui, position faible.</p></div>
 <div class="col-box"><h4>Desire</h4><p>Qui veut le plus ? Un déséquilibre de désir donne l\'avantage à l\'autre.</p></div>
 <div class="col-box green"><h4>Competition ★</h4><p><b>Le plus important</b> : plus il y a d\'acheteurs, plus le prix monte. D\'où les enchères.</p></div>
 <div class="col-box yellow"><h4>Deadlines</h4><p>Une <b>date limite claire</b> : la majorité des concessions se font à la fin (comme le sprint final d\'un marathon).</p></div>
</div>` },

    { t: '6. Les enchères (auctions)', h: `
<div class="diagram"><div class="tblwrap"><table>
<tr><th>Type</th><th>Nombre d\'acheteurs</th><th>Valorisation</th><th>Confidentialité</th><th>Vitesse</th></tr>
<tr><td><b>Broad auction</b></td><td>&gt; 50</td><td>Très haute</td><td>Faible</td><td>Lent</td></tr>
<tr><td><b>Limited auction</b></td><td>10–50</td><td>Intermédiaire</td><td>Moyenne</td><td>Moyenne</td></tr>
<tr><td><b>Targeted auction</b> (« fireside chats »)</td><td>2–5</td><td>Plus basse</td><td>Élevée</td><td>Rapide</td></tr>
<tr><td><b>Exclusive negotiation</b></td><td>1</td><td>La plus basse (pas de concurrence)</td><td>Maximale</td><td>La plus rapide</td></tr>
</table></div><div class="cap">Plus on invite d\'acheteurs, plus le prix monte… mais moins c\'est confidentiel et plus c\'est long. Un limited auction convient aux grandes sociétés avec un univers d\'acheteurs restreint.</div></div>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Les documents d\'une enchère</b>
<div class="flow">
 <div class="n"><b>Teaser</b>anonyme</div><div class="ar">→</div>
 <div class="n"><b>NDA</b></div><div class="ar">→</div>
 <div class="n"><b>CIM</b></div><div class="ar">→</div>
 <div class="n yellow"><b>Process Letter (PL)</b>calendrier, durée d\'examen de la VDR, nombre de Q&amp;A / semaine, date limite de la NBO</div><div class="ar">→</div>
 <div class="n yellow"><b>Bid Instruction Letter (BIL)</b>consignes de l\'offre : plan stratégique, financement (D/E, banque), format</div><div class="ar">→</div>
 <div class="n"><b>NBO</b></div><div class="ar">→</div>
 <div class="n green"><b>BO</b>→ 1 gagnant</div>
</div></div>
<ul>
<li>La <b>NBO</b> réduit le nombre de candidats ; la <b>BO</b> désigne un gagnant unique. <b>Risque</b> : tous les candidats se retirent après la NBO → il faut rappeler ceux qu\'on avait écartés.</li>
<li>Dans une enchère, le <b>vendeur prépare le contrat</b> que les acheteurs <b>annotent (mark-up)</b> : le mark-up compte dans le choix du gagnant.</li>
<li>L\'enchère sert à maximiser le prix, mais ce n\'est <b>pas toujours le point le plus important</b> : les émotions des décideurs jouent un grand rôle.</li>
</ul>

<div class="box ex"><b>AT&amp;T – Time Warner</b> (85,4 Md$, 2016) : AT&amp;T a contrôlé le <b>processus</b> (règles, calendrier, deadlines) ; le DOJ a contesté la <b>fusion verticale</b> ; AT&amp;T a anticipé le risque réglementaire. Plus tard, les médias ont été <b>spun-off</b> puis fusionnés avec Discovery → <b>Warner Bros. Discovery</b>. Leçons : <b>contrôler le processus</b>, gérer le risque réglementaire par le processus, penser à l\'<b>intégration</b> dès le départ.</div>
<div class="box detail"><span class="badge b-detail">DÉTAIL</span>La chronologie Paramount–Warner Bros. Discovery (offre Netflix, offre hostile à 30 $/action, accord à 31 $, clôture le 6 oct. 2026, approbations DOJ/CMA) illustre une <b>tender offer hostile</b>, la <b>concurrence entre acheteurs</b>, et l\'importance de la <b>crédibilité du financement</b>. Dates exactes : non essentielles.</div>` }
  ],
  retenir: `<ul>
<li>Share deal = plus simple ; asset deal = fiscalement avantageux pour l\'acheteur (PPA, goodwill) mais plus complexe (contrats/permis non transférés).</li>
<li>Buy-side : Strategy → Target → Info exchange → Valuation → Offer → DD → SPA → Financing → Closing → Integration.</li>
<li>Sell-side : Raisons → Sale-ready → Marketing docs → NDA → VDR → Q&amp;A/MP → Market → Négo → Terms → Compliance.</li>
<li><b>Signing</b> (SPA signé) → <b>interim period</b> (conditions suspensives, covenants, MAC) → <b>closing</b> (transfert + paiement).</li>
<li><b>Equity value = EV − net debt</b> ; CFDF = on paie l\'EV (cash et dette restent côté vendeur).</li>
<li><b>Completion accounts</b> = ajustement après closing (buyer-friendly, US) ; <b>locked box</b> = prix fixe + zéro fuite (seller-friendly, Europe).</li>
<li>Levier vendeur : necessity, desire, <b>competition</b>, deadlines.</li>
<li>Enchères : broad &gt; limited &gt; targeted &gt; exclusive : le prix baisse, la confidentialité et la vitesse augmentent. PL = règles de la procédure ; BIL = consignes d\'offre.</li></ul>`,
  qs: [
    Q('Why does a buyer generally prefer an asset deal?', ['It is always faster to complete', 'It allows cherry-picking of assets and liabilities and a step-up of asset values (higher depreciation, lower taxes)', 'It automatically transfers all permits and contracts', 'It avoids negotiating with the seller'], 1,
      ['Faux : l\'asset deal est souvent plus complexe.', 'L\'acheteur choisit ses actifs et passifs, et peut les réévaluer à leur juste valeur (PPA) → plus d\'amortissements, moins d\'impôts.', 'Au contraire : permis, certificats et contrats ne sont pas automatiquement transférés.', 'Il faut négocier avec la cible elle-même, souvent plus dur.']),
    Q('Which statement about the process of a share deal vs an asset deal is correct?', ['A share deal is generally easier because contracts and permits stay in the legal entity', 'An asset deal is easier because no consent is needed from counterparties', 'Both are identical', 'An asset deal avoids all environmental risks'], 0,
      ['Dans un share deal, la société et ses contrats restent en place : le processus est plus simple.', 'Faux : les contrats avec clauses d\'anti-cession ou de changement de contrôle nécessitent le consentement des tiers.', 'Faux : les processus diffèrent beaucoup.', 'Faux : un acheteur d\'actifs ne se protège pas totalement (ex. terrain pollué).']),
    Q('In which order do the following buy-side steps take place?', ['Due diligence → Offer → Valuation → SPA', 'Valuation & synergies → Offer & negotiation → Due diligence → SPA', 'SPA → Due diligence → Offer → Valuation', 'Offer → SPA → Valuation → Due diligence'], 1,
      ['La due diligence vient après l\'offre (NBO acceptée).', 'Ordre correct : valorisation, offre/négociation, due diligence, puis rédaction du SPA.', 'Le SPA est l\'avant-dernière étape.', 'Valorisation avant l\'offre.']),
    Q('What is the typical objective of the first non-binding offer (NBO)?', ['To create a legal obligation to buy', 'To indicate price and main terms, subject to due diligence, to keep negotiations moving', 'To replace the SPA', 'To obtain antitrust approval'], 1,
      ['Une NBO n\'est pas contraignante.', 'NBO : prix indicatif et conditions principales, sous réserve de DD.', 'Le SPA est le contrat final contraignant.', 'L\'antitrust est une autre procédure.']),
    Q('Which of these is the longest and most critical phase of the buy-side process?', ['Strategy development', 'Due diligence', 'Target identification', 'Post-merger compliance'], 1,
      ['La stratégie est essentielle mais plus courte.', 'La due diligence est décrite comme l\'étape la plus longue et critique.', 'L\'identification de cibles peut être rapide.', 'L\'intégration est importante mais n\'est pas citée comme la plus longue.']),
    Q('What is the "interim period" in an M&A transaction?', ['The period between the NDA and the teaser', 'The period between signing and closing, during which closing conditions are fulfilled', 'The period of the due diligence', 'The period after closing'], 1,
      ['Le teaser et le NDA appartiennent à la phase de pré-deal.', 'Interim period = entre signing et closing : on remplit les conditions suspensives (antitrust, autorisations, financement…).', 'La DD précède le signing.', 'Après le closing, c\'est le post-deal.']),
    Q('Who typically has the right to waive a condition precedent?', ['The seller only', 'The buyer only, in practice', 'The notary', 'The target\'s employees'], 1,
      ['Les conditions protègent surtout l\'acheteur.', 'En pratique, l\'acheteur est souvent seul à pouvoir renoncer à une condition.', 'Le notaire ne décide pas.', 'Les salariés n\'ont pas ce droit.']),
    Q('What does a cash-free debt-free (CFDF) deal imply?', ['The buyer assumes the seller\'s debt and keeps its cash', 'The buyer pays the Enterprise Value; neither debt nor excess cash is transferred', 'The buyer pays only in cash', 'The seller pays the buyer\'s debt'], 1,
      ['Inverse : dans le CFDF, ni la dette ni le cash ne sont repris.', 'CFDF : l\'acheteur paie les opérations (EV) ; la dette est remboursée et le cash conservé par le vendeur.', 'CFDF ne concerne pas la forme de paiement.', 'N\'a rien à voir.']),
    Q('A target has an Enterprise Value of 200, short-term debt of 20, long-term debt of 60 and cash of 30. What is the equity value (price paid to shareholders when the buyer takes over the whole balance sheet)?', ['150', '170', '110', '200'], 0,
      ['Net debt = 20 + 60 − 30 = 50. Equity value = EV − net debt = 200 − 50 = 150.', '170 = 200 − 30 : on a retiré le cash au lieu de la dette nette.', '110 = 200 − 80 − 10 ; calcul incorrect : la dette nette est 80 − 30 = 50.', '200 est l\'EV : il faut retirer la dette nette pour obtenir la valeur des fonds propres.']),
    Q('Why do buyers not want to pay for the target\'s "bad management of its financing" (excess debt, idle cash)?', ['Because EBITDA includes interest', 'Because EV values the core operations independently of the capital structure', 'Because debt is always bad', 'Because cash is taxed'], 1,
      ['L\'EBITDA est avant intérêts.', 'L\'EV mesure la valeur des opérations ; dette et cash sont ajustés pour que le prix reflète seulement l\'activité.', 'La dette n\'est pas toujours mauvaise.', 'Pas la raison citée.']),
    Q('In a locked-box mechanism:', ['The price is adjusted after closing based on completion accounts', 'The price is fixed on a past balance sheet and the seller guarantees no leakage of value until closing', 'The buyer pays an escrow for 3 years', 'The seller keeps the right to distribute dividends freely'], 1,
      ['Ça, c\'est le principe des completion accounts.', 'Locked box : prix fixe, bilan « verrouillé » à une date de référence ; toute fuite de valeur vers le vendeur est remboursée euro pour euro.', 'Pas le principe central.', 'C\'est une fuite (leakage) interdite.']),
    Q('Which is an advantage of completion accounts?', ['Price certainty at signing', 'No need to include leakage provisions and the seller benefits from profits until completion', 'Lower cost and simplicity', 'No post-closing price adjustment'], 1,
      ['La certitude du prix est l\'avantage du locked box.', 'Avec les completion accounts, le vendeur profite des profits jusqu\'au closing et on n\'a pas besoin de clause de fuite.', 'La simplicité est l\'avantage du locked box.', 'Il y a un ajustement après closing.']),
    Q('Which is a typical drawback of the locked-box mechanism for the seller?', ['Uncertainty of the final price', 'The profits generated during the interim period stay in the company for the buyer\'s benefit', 'It requires completion accounts', 'It requires a detailed leakage clause in addition to the escrow of 90% of the price'], 1,
      ['L\'incertitude du prix est un défaut des completion accounts : le locked box donne au contraire un prix certain.', 'Dans le locked box, les profits de la période intermédiaire ne reviennent pas au vendeur ; il faut aussi une planification financière précoce.', 'Ce sont deux mécanismes alternatifs : le locked box évite justement les completion accounts.', 'Inventé : le locked box n\'exige pas un escrow de 90 % du prix.']),
    Q('Which tactic could a seller use to artificially increase cash before closing?', ['Accelerating the collection of receivables and delaying payables', 'Paying suppliers earlier', 'Building inventory', 'Increasing capex'], 0,
      ['Accélérer les encaissements et retarder les paiements augmente temporairement le cash, mais baisse le WC.', 'Payer plus tôt réduit le cash.', 'Constituer du stock consomme du cash.', 'Le capex consomme du cash.']),
    Q('How is a net working capital target typically set?', ['Last day of the year balance', 'Average monthly NWC over the 12 months before the valuation date', 'The highest NWC of the last 5 years', 'It is set by the notary'], 1,
      ['Une seule date peut être biaisée.', 'La méthode courante : moyenne mensuelle sur les 12 mois précédents, cohérente avec l\'EBITDA des 12 derniers mois.', 'Pas une méthode courante.', 'Le notaire n\'intervient pas.']),
    Q('Which of the following is the FIRST step of the sell-side process?', ['Create the data room', 'Establish the reasons for the sale', 'Sign the SPA', 'Negotiate with buyers'], 1,
      ['La VDR vient en 5e position.', 'Avant tout, définir pourquoi, à qui, pour combien et quel type de process.', 'Le SPA est une étape tardive.', 'La négociation arrive en 8e position.']),
    Q('What is the purpose of a "blind teaser"?', ['To reveal the full financials', 'To present the opportunity anonymously (code name) to protect confidentiality', 'To bind the buyer to a price', 'To replace the NDA'], 1,
      ['Les détails viennent après le NDA.', 'Le teaser anonyme (nom de code) protège l\'identité de la société.', 'Il n\'engage pas au prix.', 'Il précède le NDA.']),
    Q('A "no-shop clause" in an LOI means:', ['The seller cannot sell shops', 'The seller cannot conduct sale-related discussions with other parties during the exclusivity period', 'The buyer cannot negotiate', 'The auction is cancelled'], 1,
      ['Interprétation littérale à éviter.', 'No-shop = exclusivité : le vendeur ne peut pas parler à d\'autres acheteurs.', 'La clause lie le vendeur.', 'Elle ne supprime pas l\'enchère, elle intervient plus tard avec un acheteur retenu.']),
    Q('According to the course, which is the MOST important source of leverage for a seller?', ['Necessity', 'Desire', 'Competition among buyers', 'Deadlines'], 2,
      ['Si on est forcé de vendre, on est en position faible.', 'La différence de désir joue, mais n\'est pas la plus importante.', 'La concurrence (augmenter le nombre d\'acheteurs) fait monter le prix : c\'est le levier majeur.', 'Les deadlines sont utiles, mais moins importantes que la concurrence.']),
    Q('Which auction type typically gives the highest valuation but the lowest confidentiality and the slowest process?', ['Exclusive negotiation', 'Targeted auction', 'Broad auction', 'Limited auction with 10 buyers'], 2,
      ['Exclusive : la plus rapide et confidentielle, mais valorisation la plus faible.', 'Targeted : 2-5 acheteurs, valorisation plus basse.', 'Broad (> 50 acheteurs) : concurrence maximale, donc prix le plus haut, mais le moins confidentiel et le plus lent.', 'Limited : niveau intermédiaire.']),
    Q('A limited auction with 10-50 bidders is generally best for:', ['Small local firms', 'Larger companies with a smaller buyer universe, preserving confidentiality', 'Distressed sales only', 'Hostile takeovers'], 1,
      ['Les petites sociétés vont plutôt vers des enchères larges.', 'Pour de grandes sociétés avec peu d\'acheteurs potentiels, on limite le nombre de participants pour garder la confidentialité.', 'Pas exclusif aux situations de détresse.', 'Les enchères ne sont pas des OPA hostiles.']),
    Q('What is the Process Letter (PL) in an auction?', ['A letter confirming the SPA', 'A document sent at the opening of the data room describing the process, timelines and rules for bidders', 'A confidentiality agreement', 'A tax opinion'], 1,
      ['Le SPA est un autre contrat.', 'Le PL indique la structure du process : délais d\'examen de la VDR, nombre de Q&A par semaine, date limite de la NBO.', 'Le NDA est l\'accord de confidentialité.', 'Pas un avis fiscal.']),
    Q('What does the Bid Instruction Letter (BIL) typically include?', ['Instructions about the offer: bidder\'s plan, financing structure, bank, and offer format', 'The final SPA', 'The list of employees', 'The tax returns'], 0,
      ['Le BIL précise ce que doit contenir l\'offre (NBO et BO) : plan stratégique, financement D/E, banque, format.', 'Le SPA est postérieur.', 'Information de DD, pas du BIL.', 'Idem : pas dans le BIL.']),
    Q('A major risk in an auction after the NBO phase is:', ['The seller receives too many offers', 'All the shortlisted bidders withdraw, forcing the seller to go back to those previously excluded', 'The buyer pays too much', 'The notary refuses to sign'], 1,
      ['Ce n\'est pas un risque.', 'Risque cité : tous les retenus se retirent et il faut revenir vers les écartés.', 'Risque côté acheteur, pas spécifique à ce moment.', 'Hors sujet.']),
    Q('Which criteria are used to select the winning bid?', ['Price only', 'Purchase price, consideration structure, SPA mark-up and strategic plan', 'Alphabetical order', 'Size of the bidder\'s headquarters'], 1,
      ['Le prix n\'est pas le seul critère.', 'Critères cités : prix, structure du paiement, mark-up du SPA, plan stratégique.', 'Hors sujet.', 'Hors sujet.']),
    Q('A due diligence process lasting well beyond 3–4 months is considered:', ['A sign of a very good deal', 'A warning sign: either the seller hides something or the buyer struggles to get information', 'Normal and recommended', 'Mandatory for antitrust'], 1,
      ['Au contraire : une DD qui s\'éternise est un drapeau rouge (le vendeur cache peut-être quelque chose, ou l\'acheteur n\'arrive pas à obtenir l\'information).', 'Les experts voient une DD trop longue comme un drapeau rouge.', 'Les deux parties veulent la garder courte.', 'Pas une obligation antitrust.']),
    Q('Which of the following is part of a Financial Due Diligence (FDD)?', ['Transfer pricing policies and VAT testing', 'Quality of Earnings, working capital and debt analysis', 'Environmental permits', 'Review of trademarks'], 1,
      ['Ce sont des éléments de TDD.', 'FDD : Quality of Earnings, fonds de roulement, dette, cash-flow, contrôles financiers.', 'Relève de la HSE/LDD.', 'Relève de la DD juridique/IP.']),
    Q('Which topic belongs to Tax Due Diligence (TDD)?', ['Normalised earnings', 'Tax loss carryforwards, transfer pricing and disputes with the tax administration', 'Management presentations', 'Warranty & indemnity insurance'], 1,
      ['La normalisation des résultats est un élément de FDD.', 'Déficits reportables, prix de transfert, litiges avec l\'administration : TDD.', 'La MP n\'est pas une DD.', 'La W&I est une assurance.']),
    Q('What is the typical role of the closing memorandum?', ['To replace the SPA', 'To document closing actions and anything that happened differently from what the SPA planned', 'To set the purchase price', 'To launch the tender offer'], 1,
      ['Il ne remplace pas le SPA.', 'Le closing memorandum récapitule les actions de closing et ce qui a différé du SPA.', 'Le prix est dans le SPA.', 'Hors sujet.']),
    Q('Which is the best summary of the AT&T – Time Warner case in the course?', ['A hostile bid defeated by a poison pill', 'A vertical deal where AT&T controlled the process and handled DOJ regulatory risk proactively', 'A failed locked-box deal', 'A reverse takeover'], 1,
      ['Pas d\'attaque hostile ici.', 'AT&T a défini règles et calendriers, géré le risque DOJ (fusion verticale) et pensé l\'intégration.', 'Pas le sujet.', 'Pas un reverse takeover.']),
    Q('What does "golden power" refer to in the interim period (closing conditions)?', ['A defensive poison pill', 'Government approval powers over transactions in strategic sectors', 'A bonus for managers', 'A type of auction'], 1,
      ['La poison pill est autre chose.', 'Le golden power est un pouvoir de l\'État d\'autoriser ou bloquer certaines opérations stratégiques : c\'est une condition suspensive possible.', 'Ne désigne pas un bonus.', 'Pas une enchère.']),
    Q('Which post-transaction term is typical for sellers\' management?', ['Gardening leave / non-solicitation and staying on for a handover period', 'Immediate retirement with no obligations', 'Permanent control of the company', 'Public listing'], 0,
      ['Typiquement : gardening leave (pas de débauchage de salariés/clients) et maintien jusqu\'à ~3 ans en période de transition.', 'Pas typique.', 'Le contrôle passe à l\'acheteur.', 'Hors sujet.']),
    Q('Which of the following statements about the LOI in the sell-side process is true?', ['It is always legally binding', 'It is generally non-binding, but buyers often ask for exclusivity after it', 'It replaces the NDA', 'It is signed after the closing'], 1,
      ['Généralement non contraignante.', 'Non contraignante, mais l\'exclusivité (no-shop) est souvent demandée juste après sa signature.', 'Le NDA est distinct.', 'La LOI précède le SPA.']),
    Q('Why is the post-merger integration phase described as critical?', ['Because it is the cheapest phase', 'Because poor integration (culture, systems, communication) can destroy the expected synergies and make the deal fail', 'Because it is required by law', 'Because the SPA ends there'], 1,
      ['Pas la raison.', 'L\'intégration détermine le succès : sans bonne exécution les synergies attendues ne sont pas réalisées.', 'Pas une exigence légale.', 'Le SPA n\'a pas pour finalité l\'intégration.']),
    Q('A Vendor Due Diligence (VDD) is used to:', ['Replace the buyer\'s DD entirely', 'Let the seller prepare itself and reduce the disruption of the buyer\'s full DD', 'Obtain a fairness opinion', 'Sign the NDA'], 1,
      ['Le VDD n\'élimine pas la DD de l\'acheteur.', 'C\'est une pré-DD faite par le vendeur : plus de contrôle sur le processus et moins de perturbations.', 'La fairness opinion est un autre document.', 'Sans rapport.'])
  ]
});
