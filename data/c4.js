MNA.add('c4', {
  titre: 'Class 4 – The M&A Documents',
  sous: 'Teaser, NDA, IM, LOI, NBO, SPA, SHA, TSA… et la W&I insurance',
  resume: 'Quel document à quel moment (document map), lequel est binding, ce que contient le SPA (conditions, MAC, warranties, indemnification, baskets, caps) et comment fonctionne la W&I.',
  sections: [
    { t: '1. The document map (à connaître par phase)', h: `
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>① Pre-deal</h4><ul><li><b>EL</b> – Engagement Letter</li><li><b>Teaser</b></li><li><b>NDA</b> (ou CA)</li><li><b>IM / CIM</b></li><li><b>VDD report</b></li><li><b>PL / BIL</b></li></ul></div>
 <div class="col-box yellow"><h4>② Deal – preliminary</h4><ul><li><b>EOI / IOI</b></li><li><b>MOU</b></li><li><b>LOI</b></li><li><b>MP</b> – Management Presentation</li><li><b>TS / HOT / HOA</b> – Term Sheet</li><li><b>NBO</b></li></ul></div>
 <div class="col-box red"><h4>③ Deal – confirmatory</h4><ul><li><b>DD Report</b></li><li><b>BO</b> – Binding Offer</li><li><b>FO</b> – Fairness Opinion</li></ul></div>
 <div class="col-box green"><h4>④ Deal – finalisation</h4><ul><li><b>SPA</b></li><li><b>SHA</b></li><li><b>CM</b> – Closing Memorandum</li><li><b>TSA</b></li></ul></div>
</div><div class="cap">Après le closing (post-deal) : price adjustments, earn-out, put/call options prévues dans le SPA. Pas de nouveau document spécifique.</div></div>
<div class="box tip"><b>Pour retenir la logique :</b> on <b>trouve</b> (teaser, NDA, IM) → on <b>manifeste son intérêt</b> (EOI, LOI, NBO) → on <b>vérifie</b> (DD, MP) → on <b>s\'engage</b> (BO, SPA) → on <b>boucle et accompagne</b> (CM, TSA, SHA).</div>` },

    { t: '2. Pre-deal phase', h: `
<div class="tblwrap"><table>
<tr><th>Document</th><th>Purpose (à quoi ça sert)</th><th>Key points</th></tr>
<tr><td><b>Engagement Letter (EL)</b></td><td>Contrat entre le <b>client</b> (la company qui veut vendre/acheter) et la <b>bank / advisor</b> : mission, conditions, costs, timing.</td><td>Moins formel qu\'un contrat mais <b>legally binding</b>. Contenu : parties, type of service, details, responsibilities, disclaimer, duration/termination.</td></tr>
<tr><td><b>Teaser</b></td><td>Résumé de <b>1-2 pages</b> pour <b>attirer</b> des buyers.</td><td><b>Anonymous</b> (pas de nom de la target). Highlights des points forts. Steps : Teaser → NDA → IM.</td></tr>
<tr><td><b>NDA / CA</b></td><td>Garder <b>confidential</b> les informations échangées, utilisables <i>only</i> pour évaluer la transaction.</td><td>NDA = plutôt <b>unilateral</b> (une partie divulgue) ; CA = plutôt <b>bilateral</b> (partenariats). En pratique quasi synonymes.</td></tr>
<tr><td><b>Information Memorandum (IM / CIM)</b></td><td>Document de <b>50+ pages</b> : business, financials, management, market.</td><td>Le nom de la target est <b>revealed</b> (après NDA). <b>Non-binding</b>, document <b>marketing</b> (« make-up »). Objectif : vendre à la valeur maximale.</td></tr>
<tr><td><b>Vendor Due Diligence (VDD)</b></td><td><b>Pre-DD</b> réalisée par le <b>seller</b> sur lui-même (« sale-ready »).</td><td>Donne le control du process et du timing, valide le business plan, prépare l\'<b>equity story</b>. Plus il ressemble à la vraie DD, mieux c\'est.</td></tr>
<tr><td><b>Process Letter (PL) / Bid Instruction Letter (BIL)</b></td><td>Framework de l\'<b>auction</b> : timetable, instructions, contacts, conditions que les offers doivent contenir.</td><td>Accompagne le CIM. Sans clear deadline, les buyers « attendent » (analogie du marathon).</td></tr>
</table></div>` },

    { t: '3. Deal phase – preliminary documents', h: `
<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Les accords « non-binding »</b> : LOI, MOU, EOI/IOI, TS, NBO. Ils expriment une intention, pas un <b>firm commitment</b>. Mais attention : <b>certaines clauses sont souvent binding</b> (confidentiality, exclusivity…), et un US court (2019) a jugé une LOI binding quand elle contenait tous les essential elements.</div>

<div class="tblwrap"><table>
<tr><th>Document</th><th>What it is</th><th>Key difference</th></tr>
<tr><td><b>EOI / IOI</b><br>(Expression / Indication of Interest)</td><td>Le buyer indique son <b>interest</b> et surtout une <b>valuation / price range</b>.</td><td>Centré sur le <b>price</b> (« ok, mais combien ? »). Plus informel que la LOI. Sert à vérifier s\'il existe un terrain d\'entente (overlap des prices ranges buyer/seller).</td></tr>
<tr><td><b>MOU</b><br>(Memorandum of Understanding)</td><td>Accord (bilateral ou multilateral) sur une <b>common line of action</b>.</td><td><b>Plus formel</b> qu\'un gentlemen\'s agreement, <b>moins</b> qu\'une LOI. Non-binding. Peut être signé entre <b>States</b> ou entre une company et un State.</td></tr>
<tr><td><b>LOI</b><br>(Letter of Intent)</td><td>« Agreement to agree » : fixe les <b>main terms</b> du futur contrat.</td><td>Souvent <b>sous forme de table</b>, <b>signed by both parties</b>. Contenu : background, objective, key terms (governance, % acquired, valuation principles, key people, strategic plan). Non-binding dans l\'ensemble.</td></tr>
<tr><td><b>Term Sheet (TS / HOT / HOA)</b></td><td>Résumé des termes et conditions de base (valuation, amount invested, % held, voting rights, liquidation preference, anti-dilution).</td><td>Le TS est <b>generally unsigned</b> → plus difficile de sue un buyer qui se retire. La LOI inclut les mêmes termes mais est <b>signed</b>.</td></tr>
<tr><td><b>Management Presentation (MP)</b></td><td>Première <b>face-to-face meeting</b> management / potential buyer (quelques heures à une journée).</td><td>Support PowerPoint proche du CIM mais plus axé <b>operations, production, supply chain</b>. Moment décisif : le buyer devient plus intéressé… ou abandonne.</td></tr>
<tr><td><b>Non-Binding Offer (NBO)</b></td><td>Le buyer annonce un <b>indicative price</b> subject to DD results.</td><td>Sous forme de <b>letter</b> (chapters), signée surtout par <b>le buyer</b>. <b>More detailed</b> que la LOI. Toujours envoyée <b>après</b> la LOI quand il y en a une. Plus courante que la LOI.</td></tr>
</table></div>

<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Les 7 components d\'une NBO</b> : ① indicative price ② conditionality (approvals…) ③ timetable ④ definitive agreement (documents to sign) ⑤ status (non-binding) ⑥ confidentiality ⑦ costs / payment terms.</div>

<div class="diagram"><div class="flow">
 <div class="n"><b>EOI / IOI</b>price et interest</div><div class="ar">→</div>
 <div class="n"><b>LOI</b>main terms (table, signed)</div><div class="ar">→</div>
 <div class="n"><b>NBO</b>detailed letter (signed by the buyer)</div><div class="ar">→</div>
 <div class="n red"><b>BO</b>binding offer après DD</div>
</div><div class="cap">Du plus informel au plus binding. Le MOU et le Term Sheet sont des documents « parallel » unsigned/non-binding.</div></div>` },

    { t: '4. Deal phase – confirmatory documents', h: `
<div class="tblwrap"><table>
<tr><th>Document</th><th>What it is</th></tr>
<tr><td><b>Due Diligence Report (DD)</b></td><td>Résultat de l\'examen approfondi (legal, accounting, tax, environmental, IT, cyber) de la target. Dure en général <b>4 à 6 weeks</b> ou plus. Elle rend les transactions plus susceptibles d\'aboutir et mieux informées.</td></tr>
<tr><td><b>Binding Offer (BO)</b></td><td>Offer faite <b>après la DD</b> : <b>contractually binding</b> dès que le seller l\'accepte. Contrairement à la NBO (sous réserve de la DD), la BO <b>ne devrait pas avoir de condition</b> (des « conditional BO » existent). Peut différer de la NBO si la DD a révélé des issues.</td></tr>
<tr><td><b>Fairness Opinion (FO)</b></td><td>Avis d'un advisor/banque <b>independent</b> disant si les termes de la transaction sont <b>financially fair pour les shareholders</b>. Aide le board à remplir ses fiduciary duties et <b>réduit le litigation risk</b>. Parfois obligatoire pour les listed companies.</td></tr>
</table></div>
<div class="box tip"><b>Conflict of interest :</b> la fairness opinion est souvent critiquée comme un <b>« rubber stamp »</b> : la banque est payée par <b>success fees</b> (liés à la réalisation du deal) et son mandat vient du management. Elle a donc intérêt à déclarer le deal équitable.</div>` },

    { t: '5. Deal phase – finalisation : SPA, SHA, CM, TSA', h: `
<div class="tblwrap"><table>
<tr><th>Document</th><th>Binding?</th><th>Key points</th></tr>
<tr><td><b>SPA</b> (Sale &amp; Purchase Agreement)</td><td><b>Yes</b></td><td>Contrat final : price, payment, conditions, warranties… Transformé en acte public devant <b>notary</b> à l\'<b>execution date</b>. Gère le risk et définit ce qui se passe si une partie manque à ses obligations (breach).</td></tr>
<tr><td><b>SHA</b> (Shareholders\' Agreement)</td><td>Yes, mais <b>entre signatories only</b></td><td>Règles entre shareholders : transfer of shares, voting rights, dividends, directors, pre-emption, non-compete. Très utilisé quand on vend <b>une partie</b> de la company. Optional et confidential.</td></tr>
<tr><td><b>CM</b> (Closing Memorandum)</td><td><b>No</b></td><td>Checklist des documents et actions de closing. Y noter <b>tout ce qui s\'est passé différemment du SPA</b>. Rédigé par les lawyers de l\'acquirer ; sert à interpréter le SPA plus tard.</td></tr>
<tr><td><b>TSA</b> (Transitional Services Agreement)</td><td>Yes</td><td>Après la vente, le <b>seller continue de fournir des services</b> (HR, IT, accounting…) au buyer pendant ~<b>6 à 12 months</b> pour une smooth transition. Typique pour une divestiture de division. Le buyer a peu de flexibilité ; le seller reste lié après le closing.</td></tr>
</table></div>

<h3>Articles of Incorporation vs Bylaws vs SHA</h3>
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>Articles of Incorporation</h4><p>Acte <b>fondateur</b>, filed with the State. <b>Public</b>. Name, address, purpose, capital structure.</p></div>
 <div class="col-box yellow"><h4>Bylaws</h4><p>Règles <b>internal</b> de fonctionnement (board, executives, votes, meetings). <b>Not public</b>. Lient la company et ses membres.</p></div>
 <div class="col-box green"><h4>SHA</h4><p><b>Contrat entre shareholders</b>. <b>Optional</b>, lie <b>only the signatories</b>, <b>confidential</b>.</p></div>
</div><div class="cap">Image du cours : le cœur (articles), le cerveau (bylaws), la personnalité (SHA).</div></div>` },

    { t: '6. Focus on the SPA : structure et key clauses', h: `
<div class="diagram"><div class="flow col">
 <div class="n"><b>1. Parties &amp; recitals</b>who and why (no rights/obligations)</div><div class="ar">→</div>
 <div class="n"><b>2. Defined terms</b>list of definitions</div><div class="ar">→</div>
 <div class="n"><b>3. Commercial provisions</b>core : price, payment, escrow, earn-out, collars, adjustments</div><div class="ar">→</div>
 <div class="n"><b>4. Covenants</b>promises (negative / « interim », processing, post-closing)</div><div class="ar">→</div>
 <div class="n"><b>5. Conditions precedent</b>conditions to satisfy before closing</div><div class="ar">→</div>
 <div class="n red"><b>6. Representations &amp; warranties</b>« le gros morceau » (et de la négociation)</div><div class="ar">→</div>
 <div class="n red"><b>7. Indemnification</b>compensation after closing</div><div class="ar">→</div>
 <div class="n"><b>8. Termination</b>long stop date, break fees</div><div class="ar">→</div>
 <div class="n"><b>9. Miscellaneous</b>costs, governing law, confidentiality (~2 years), non-compete</div>
</div></div>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Commercial provisions</b> : petite section mais cœur du deal, très négociée. Contient price et payment terms (cash at closing, deferred, adjustments), <b>escrow</b>, <b>earn-outs</b>, collars, contingent payments.</div>
<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Covenants</b> (2<sup>nd</sup> largest section) :
<ul><li><b>Negative / interim / operating</b> : limitent la target pendant l\'interim (run in the « ordinary course », no extraordinary dividends, no big contracts…).</li><li><b>Processing covenants</b> : duty to cooperate pour finaliser (« best efforts », « reasonable efforts »), importants si antitrust/financing risk.</li><li><b>Post-closing</b> : non-compete, lock-up, social commitments.</li></ul></div>

<h3>Conditions precedent (CP) et MAC clause</h3>
<p>Au <b>signing</b> le SPA devient <b>binding</b>, mais son exécution dépend de CP (regulatory approvals…). Si les CP ne sont pas remplies dans le délai, les parties peuvent <b>terminate</b> le contrat sans conséquence. Le <b>seller</b> veut du closing certainty (résiste aux conditions hors de son control) ; le <b>buyer</b> veut se protéger (ex. MAC clause).</p>
<div class="box must"><span class="badge b-must">MUST KNOW</span><b>MAC / MAE (Material Adverse Change / Effect)</b> : un <b>significant change</b> qui affecte la capacité à réaliser le contrat et peut permettre de <b>walk away</b> de l\'accord. <b>3 caractéristiques</b> :
<ol><li>La circonstance est <b>severe et lasting</b>.</li><li>Elle affecte la company <b>plus que ses competitors</b> du secteur.</li><li>La partie qui l\'invoque <b>ne la connaissait pas</b>, malgré une proper due diligence.</li></ol>
<p>Cas de <b>force majeure</b> (« acts of God ») : event hors du control du seller.</p></div>

<h3>Representations &amp; Warranties (R&amp;W)</h3>
<ul>
<li>Factual statements sur la target et son business ; le seller s'engage sur des faits. Détaillées en <b>Disclosure Schedule</b> (exceptions).</li>
<li><b>Fundamental reps</b> : title to shares, capacity, no insolvency. <b>Business reps</b> : accounts, taxes, environment, assets, real estate, IT, HR.</li>
<li>Le <b>seller</b> veut des R&amp;W « <b>loose</b> » (avec knowledge et materiality qualifiers, MAE) ; le <b>buyer</b> veut des R&amp;W « <b>tight</b> ».</li>
<li><b>3 functions</b> : ① confirmer la DD (disclosure schedules) ② <b>de facto</b> price adjustment (via indemnification en cas de breach) ③ closing certainty (condition « <b>bring-down</b> » : le buyer peut refuser de close si les R&amp;W ne sont plus vraies au closing).</li>
</ul>

<h3>Indemnification : baskets et caps</h3>
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>True deductible basket</h4><p>Threshold à dépasser ; on n'indemnise que l'<b>excess</b> au-dessus du threshold.</p><p><i>Threshold 100 – losses 150 → indemnity = <b>50</b></i></p></div>
 <div class="col-box green"><h4>Tipping (first-dollar) basket</h4><p>Une fois le threshold atteint, on indemnise <b>from the first euro</b>. Courant pour les petits deals.</p><p><i>Threshold 100 – losses 150 → indemnity = <b>150</b></i></p></div>
 <div class="col-box yellow"><h4>Mini-basket (de minimis)</h4><p>Threshold <b>per claim</b> : les small claims sous ce montant ne comptent pas vers le basket principal.</p></div>
 <div class="col-box red"><h4>Cap</h4><p><b>Cap</b> = limit of the seller\'s liability, souvent en % de la valeur de la transaction. Le seller veut le cap le plus bas, le basket le plus haut.</p></div>
</div></div>
<ul>
<li>L'indemnity fonctionne comme une <b>insurance</b> : scope, deductibles (de minimis, baskets), caps, claim periods, procedures.</li>
<li>Si la DD identifie des risks précis, ils doivent être couverts par une <b>specific indemnity</b>. ~30 % des private deals donnent lieu à des claims post-closing.</li>
</ul>

<h3>Termination et miscellaneous</h3>
<p><b>Long stop date</b> : date au-delà de laquelle chaque partie peut <b>terminate</b> si les CP ne sont pas satisfaites. Aussi : mutual agreement, irremediable breach, et <b>break fees</b>. Miscellaneous : costs, notices, governing law, confidentiality (en général 2 years), non-compete.</p>
<div class="box detail"><span class="badge b-detail">DETAIL</span>Rôle de l\'ESG : en Europe, -10 % de deals avec clauses ESG dans le SPA mais +14 % de deals avec due diligence ESG. Retiens seulement : <b>l\'ESG DD progresse plus vite que les ESG clauses du SPA</b>.</div>` },

    { t: '7. Representation vs Warranty vs Indemnity', h: `
<div class="tblwrap"><table>
<tr><th></th><th>Representation</th><th>Warranty</th><th>Indemnity</th></tr>
<tr><td><b>Nature</b></td><td>Statement of <b>fact</b> sur l\'état actuel</td><td><b>Promise</b> sur certains aspects (ownership of assets, compliance, accuracy of information)</td><td>Commitment du seller de <b>cover specific losses</b></td></tr>
<tr><td><b>If false / breached</b></td><td><b>Misrepresentation</b> : broad remedies, parfois <b>rescission</b> (contract cancelled)</td><td>Damages ; le buyer doit <b>prove the loss</b></td><td>Compensation directe, souvent euro pour euro, <b>sans prouver le dommage</b></td></tr>
<tr><td><b>Limits</b></td><td>—</td><td>Time-limited, de minimis, (tipping) basket, cap</td><td><b>Pas</b> les limits des R&amp;W</td></tr>
<tr><td><b>Origin</b></td><td>Fact known at signing</td><td>General risk</td><td>Résulte de la <b>due diligence</b> : specific risk identifié et « passed back » au seller</td></tr>
</table></div>
<div class="box tip"><b>Memo :</b> Representation = « c\'est vrai » · Warranty = « je te promets » · Indemnity = « si ça arrive, je paie ».</div>` },

    { t: '8. W&I insurance (Warranty & Indemnity)', h: `
<p>La <b>W&amp;I</b> (aussi <b>RWI</b>, Representations &amp; Warranties Insurance) protège <b>buyer ou seller</b> contre les losses liées à un <b>breach of warranties</b> du SPA.</p>
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>Buy-side W&amp;I</h4><ul><li>Assurance <b>directe</b> : le <b>buyer</b> est l\'insured.</li><li>Il réclame <b>directement à l\'insurer</b>, sans attaquer le seller d\'abord.</li><li>Rassure le buyer.</li></ul></div>
 <div class="col-box yellow"><h4>Sell-side W&amp;I</h4><ul><li>Assurance de <b>liability</b> : le <b>seller</b> est l\'insured contre les claims du buyer.</li><li>Idéale pour un <b>PE fund</b> qui veut un clean exit (« nil recourse ») ou en fin de vie.</li></ul></div>
</div></div>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>What is covered / not covered</b>
<ul><li><b>Covered</b> : les risks <b>unknown</b> au moment de la transaction (faits différents de ce qui avait été communiqué).</li><li><b>Excluded</b> : risks <b>known or disclosed</b> (found in DD ; covered by indemnities), matières <b>not examined</b> in DD, et les <b>forward-looking</b> statements.</li><li>Un <b>bring-down certificate</b> du seller garantit que les R&amp;W faites au signing restent vraies au closing.</li></ul></div>

<ul>
<li><b>Why is it growing?</b> Pas d'accord sur la répartition des risks ; seller en position forte (limited warranties) ou distressed ; fonds PE seller ; le buyer est rassuré sans poursuivre le seller. Avec une W&amp;I, les <b>baskets et caps</b> sont souvent plus bas.</li>
<li><b>Survival period des R&amp;W</b> : general (operations, finances, assets) <b>12–24 months</b> ; tax, environmental, IP <b>3–7 years</b> ; « fundamental » (title to shares, power to sell, capital) <b>indefinite ou très longue</b>.</li>
<li>L\'insurer ne commente qu\'un negotiated contract ; il faut donc évoquer la W&amp;I <b>dès la LOI/TS</b>. La premium est souvent payée par le seller (selon qui est couvert).</li>
<li>La W&amp;I influence le scope de la due diligence (ce qui n\'est pas examiné n\'est pas assuré).</li>
</ul>
<div class="box detail"><span class="badge b-detail">DETAIL</span>Claims statistics (2023 : record de claims notifications, +17 % ; principales breaches : <b>tax</b> et <b>financial statements</b>, 20 % chacune ; puis compliance ; délai de notification en augmentation). Retiens juste les deux grandes catégories : tax et financial statements.</div>` }
  ],
  retenir: `<ul>
<li>Pre-deal : EL, Teaser (anonymous, 1-2 p.), NDA, IM/CIM (50+ p., name revealed, non-binding), VDD, PL/BIL.</li>
<li>Non-binding : EOI/IOI (price), MOU, LOI (table, signed), TS (unsigned), NBO (letter, signed by the buyer, après LOI). Binding : BO, SPA.</li>
<li>FO = fairness opinion (souvent « rubber stamp »). TSA = le seller fournit des services 6-12 months après la vente. CM = non-binding, note les différences par rapport au SPA.</li>
<li>SPA : parties → definitions → commercial → covenants → CP → R&amp;W → indemnification → termination → miscellaneous.</li>
<li>MAC : severe/lasting + plus que le secteur + unforeseeable malgré DD.</li>
<li>Baskets : <b>deductible</b> (excédent seulement) vs <b>tipping</b> (dès le 1<sup>er</sup> euro). Cap = cap.</li>
<li>Indemnity (known risk, euro pour euro) &gt; Warranty (proof of loss) ; Representation → misrepresentation / rescission.</li>
<li>W&amp;I : couvre l\'inconnu, exclut le connu et le prospectif. Buy-side = direct ; sell-side = responsabilité du seller.</li></ul>`,
  qs: [
    Q('Which document is anonymous and typically one or two pages long?', ['Information Memorandum', 'Teaser', 'Letter of Intent', 'Share Purchase Agreement'], 1,
      ['L\'IM compte 50+ pages et révèle le nom de la target.', 'Teaser : résumé court et anonyme pour attirer des buyers avant NDA.', 'La LOI est un document d\'intentions entre parties identifiées.', 'Le SPA est le contrat final.']),
    Q('What is the usual sequence of documents at the beginning of a sell-side process?', ['NDA → Teaser → IM', 'Teaser → NDA → IM', 'IM → Teaser → NDA', 'LOI → NDA → Teaser'], 1,
      ['Le NDA suit le teaser (intérêt manifesté) et précède l\'IM.', 'Teaser (anonyme), puis NDA (confidentialité), puis IM (infos détaillées, nom révélé).', 'L\'IM est confidentiel : il vient après le NDA.', 'La LOI arrive bien plus tard.']),
    Q('Why is the name of the target disclosed in the IM but not in the teaser?', ['Because the IM is binding', 'Because bidders have signed an NDA before receiving the IM', 'Because the IM is public', 'Because it is required by law'], 1,
      ['L\'IM n\'est pas contraignant.', 'Les buyers ont signé le NDA : on peut révéler l\'identité sans risk de fuite.', 'L\'IM est confidentiel.', 'Ce n\'est pas une obligation légale.']),
    Q('An Information Memorandum is best described as:', ['A legally binding offer', 'A marketing document presenting the business to maximise value, not legally binding', 'A fairness opinion', 'A tax audit'], 1,
      ['Ce n\'est pas une offer.', 'L\'IM est un outil marketing non contraignant.', 'La fairness opinion est un avis d\'équité de la transaction.', 'Aucun rapport avec un audit fiscal.']),
    Q('What is the difference between a NDA and a CA (confidentiality agreement)?', ['A NDA is binding, a CA is not', 'Virtually none: same purpose; NDA is more often used for one-way disclosure, CA for two-way exchanges', 'A NDA is signed after closing', 'A CA replaces the SPA'], 1,
      ['Les deux sont contraignants.', 'Même but ; NDA plutôt unilatéral, CA plutôt dans des partenariats avec échanges réciproques.', 'Le NDA intervient avant la DD.', 'Aucun lien avec le SPA.']),
    Q('Vendor Due Diligence (VDD) is:', ['A due diligence ordered by the buyer', 'A pre-DD report prepared on behalf of the seller to get "sale-ready" and speed up the process', 'A government investigation', 'A type of insurance'], 1,
      ['C\'est le contraire : le VDD est commandé par le seller.', 'Le seller se prépare, control le process et réduit les perturbations de la vraie DD.', 'Pas une enquête publique.', 'Aucun rapport avec l\'assurance.']),
    Q('Which statement about the Process Letter and Bid Instruction Letter is correct?', ['They are signed by both parties after closing', 'They are sent to bidders in an auction to explain the process and the content of offers', 'They replace the NDA', 'They are only used in hostile takeovers'], 1,
      ['Ils interviennent avant les offers.', 'Ils encadrent l\'auction : timeline, instructions, contenu attendu des offers.', 'Ils ne remplacent pas le NDA.', 'Ils concernent les auctions, pas les Tender offer hostiles.']),
    Q('The Expression of Interest (EOI/IOI) is mainly focused on:', ['Environmental risks', 'Valuation and price range', 'Post-closing integration', 'Employee benefits'], 1,
      ['Pas le sujet.', 'L\'EOI/IOI sert à voir si price et fourchettes se rejoignent : la question « combien ? ».', 'Concerne l\'intégration, bien plus tard.', 'Hors sujet.']),
    Q('Which of these documents is typically in tabular form and signed by both parties?', ['NBO', 'LOI', 'IM', 'Fairness opinion'], 1,
      ['La NBO est une lettre, plus détaillée, signée surtout par le buyer.', 'La LOI est souvent un tableau signé par les deux parties.', 'L\'IM est un document de présentation.', 'La FO est un avis de la banque.']),
    Q('Which statement about the Non-Binding Offer (NBO) is correct?', ['It is always signed by both parties', 'It is a letter, usually signed by the buyer only, sent after the LOI and more detailed than the LOI', 'It is a table in the SPA', 'It is binding once accepted'], 1,
      ['Surtout signée par le buyer.', 'NBO : lettre structurée en chapitres, signée par le buyer ; plus détaillée que la LOI, toujours après.', 'Aucun rapport avec une table du SPA.', 'Non-binding par définition (sauf certaines clauses).']),
    Q('What makes the Term Sheet different from the LOI?', ['The TS is usually signed by both parties, the LOI is not', 'The TS is usually not signed by anyone, whereas the LOI is signed by both parties', 'The TS is legally binding', 'The TS is only used for asset deals'], 1,
      ['C\'est l\'inverse.', 'TS : en général non signé, donc plus difficile pour attaquer un buyer qui se retire ; la LOI est signée.', 'Aucun des deux n\'est contraignant en principe.', 'Le TS s\'utilise dans tous types de deals.']),
    Q('A Memorandum of Understanding (MOU) is:', ['Binding and more detailed than the SPA', 'Non-binding, more formal than a gentlemen\'s agreement but less structured than a LOI, and may be signed even between countries', 'The same as a Binding Offer', 'A closing document'], 1,
      ['Non contraignant.', 'Le MOU exprime une volonté commune ; il peut même être signé entre États (ex. Ferrari et le gouvernement italien).', 'N\'est pas une BO.', 'Ce n\'est pas un document de closing.']),
    Q('What is a key difference between a Non-Binding Offer and a Binding Offer?', ['The NBO is subject to due diligence; the BO comes after DD and is legally binding once accepted', 'The NBO is binding, the BO is not', 'The BO is always identical to the NBO', 'The BO is sent before the teaser'], 0,
      ['La NBO est sous réserve de DD ; la BO intervient après DD et engage juridiquement une fois acceptée.', 'C\'est l\'inverse.', 'La BO peut différer si la DD a révélé des éléments.', 'La BO arrive après la DD.']),
    Q('A fairness opinion is criticised mainly because:', ['It is always wrong', 'It often functions as a rubber stamp as the bank has strong incentives (success fees, mandate from management)', 'It is paid by the buyer\'s employees', 'It increases the transaction taxes'], 1,
      ['Ce n\'est pas la critique citée.', 'La banque touche un honoraire de succès et son mandat vient du management : elle est incitée à déclarer le deal équitable.', 'Rien à voir : la banque est payée par honoraires de succès et mandatée par le management, c\'est ça le conflit d\'interest.', 'Pas le sujet.']),
    Q('What is the main purpose of a Transitional Services Agreement (TSA)?', ['To fix the purchase price', 'To have the seller provide services (HR, IT, accounting…) for a limited period after closing', 'To authorise the antitrust review', 'To list representations and warranties'], 1,
      ['Le price est dans le SPA.', 'Le TSA assure une transition ordonnée : le seller continue de fournir certains services (souvent 6-12 mois).', 'Pas son rôle.', 'Elles sont dans le SPA.']),
    Q('The Closing Memorandum:', ['Is a binding contract replacing the SPA', 'Is a non-binding document used to interpret the SPA and record what differed from the plan', 'Is prepared by the seller\'s notary only', 'Contains the fairness opinion'], 1,
      ['Non contraignant.', 'Il contient la checklist de closing et consigne ce qui diffère du SPA ; il est rédigé par les lawyers de l\'acquirer.', 'Rédigé par les lawyers de l\'acquirer.', 'La FO est un autre document.']),
    Q('A Shareholders\' Agreement (SHA) is:', ['Mandatory for all companies and public', 'Optional, binding only on the shareholders who sign it, and generally confidential', 'Filed at the Chamber of Commerce as a public deed', 'Identical to the bylaws'], 1,
      ['Il est facultatif et confidentiel.', 'SHA : contrat entre shareholders, lie ses seuls signataires.', 'Ce sont les articles of incorporation qui sont publics.', 'Les bylaws sont des règles internes non issues d\'un contrat de shareholders.']),
    Q('Which of these documents becomes a public document once registered?', ['Bylaws', 'Articles of Incorporation', 'Shareholders\' Agreement', 'NDA'], 1,
      ['Les bylaws sont internes et non publics.', 'Les articles of incorporation sont déposés et deviennent publics.', 'Le SHA est confidentiel.', 'Un NDA est confidentiel.']),
    Q('Which section is described as "relatively small but containing the core deal terms" of the SPA?', ['Recitals', 'Commercial provisions', 'Miscellaneous', 'Defined terms'], 1,
      ['Les recitals expliquent le contexte, sans créer de droits.', 'Les commercial provisions contiennent price, paiement, escrow, earn-outs.', 'Les clauses diverses sont standard.', 'Les defined terms listent des définitions.']),
    Q('Recitals in an SPA:', ['Contain the rights and obligations of the parties', 'Explain the background and intentions but do not create rights or obligations', 'Define the purchase price', 'Contain the indemnification caps'], 1,
      ['Ils n\'en contiennent pas.', 'Ils expliquent le contexte, les parties et leurs intentions.', 'Le price est dans les commercial provisions.', 'Caps : dans l\'indemnification.']),
    Q('Negative (interim or operating) covenants:', ['Require the buyer to finance the deal', 'Limit what the target can do between signing and closing to keep it in the same condition', 'Are post-closing non-competes', 'Are only applicable to listed companies'], 1,
      ['Ce n\'est pas leur objet.', 'Ils garantissent une gestion en « ordinary course » : pas de dividends exceptionnels, gros contrats, etc.', 'Ceux-ci sont des covenants post-closing.', 'Pas une limite aux listed companies.']),
    Q('A condition precedent (CP) in an SPA is:', ['A clause that applies after closing', 'A future event (e.g. regulatory approval) on which the performance of the agreement depends', 'A purchase price adjustment', 'A type of insurance'], 1,
      ['Les post-closing covenants s\'appliquent après.', 'Si les CP ne sont pas remplies dans les délais, les parties peuvent mettre fin au contrat sans conséquence.', 'Un price adjustment est autre chose.', 'Pas une assurance.']),
    Q('Which is NOT one of the three characteristics of a Material Adverse Change (MAC)?', ['The circumstance is severe and enduring', 'It affects the business more significantly than its industry peers', 'The invoking party had no prior knowledge despite proper due diligence', 'It must be caused by the seller\'s deliberate fraud'], 3,
      ['Caractéristique 1 : grave et durable.', 'Caractéristique 2 : plus que les concurrents du secteur.', 'Caractéristique 3 : imprévu malgré une bonne DD.', 'La fraude du seller n\'est pas un critère du MAC : un MAC vise un événement grave, durable, qui touche plus la company que ses pairs et qui était imprévisible.']),
    Q('What does a "bring-down" closing condition allow the buyer to do?', ['Reduce the purchase price automatically', 'Walk away if the seller\'s representations and warranties are no longer true at closing', 'Lower the interest rate', 'Extend the long stop date'], 1,
      ['Pas automatique.', 'La condition bring-down permet de ne pas clôturer si les R&W ne sont plus vraies au closing.', 'Rien à voir avec les rate.', 'Pas son rôle.']),
    Q('Sellers generally prefer representations and warranties that are:', ['Tight, with no qualifiers', 'Loose, with knowledge, materiality and MAE qualifiers', 'Broader than the SPA', 'Unlimited in time'], 1,
      ['C\'est ce que préfère le buyer.', 'Le seller veut limiter sa responsabilité par des qualificatifs de connaissance, matérialité et MAE.', 'Aucun intérêt pour le seller.', 'Le seller veut limiter la durée.']),
    Q('Which of the following are "fundamental representations"?', ['Annual accounts and environmental compliance', 'Title to shares, capacity to sell, no insolvency', 'Details of IT contracts', 'HR policies'], 1,
      ['Ce sont des business representations.', 'Fundamentals : ce qui assure le control des assets attendus (titre, capacité, solvabilité).', 'Business reps.', 'Business reps.']),
    Q('A tipping (first-dollar) basket works as follows:', ['The seller pays only the amount above the threshold', 'Once the threshold is exceeded, the seller is liable for all losses from the first dollar', 'No claim can ever be made', 'The buyer pays the first losses'], 1,
      ['Ça décrit le true deductible basket.', 'Tipping basket : une fois le seuil franchi, tout est indemnisé dès le premier dollar.', 'Un basket sert de seuil de déclenchement : une fois franchi, des réclamations sont possibles ; il n\'interdit pas toute réclamation.', 'C\'est l\'inverse : une fois le seuil franchi, c\'est le seller qui indemnise, y compris les premiers dollars.']),
    Q('A deductible basket of 100 and proven losses of 130. What is the indemnification amount under a TRUE DEDUCTIBLE basket?', ['0', '30', '100', '130'], 1,
      ['Le seuil est dépassé : 130 > 100.', 'Seul l\'excédent est indemnisé : 130 − 100 = 30.', '100 est le seuil, pas l\'indemnité.', '130 serait l\'indemnité d\'un tipping basket.']),
    Q('The same losses of 130 with a TIPPING basket of 100: what is the indemnification amount?', ['0', '30', '100', '130'], 3,
      ['Le seuil est dépassé.', '30 serait avec un true deductible basket.', '100 est le seuil.', 'Tipping : une fois dépassé, tout est indemnisé dès le premier dollar : 130.']),
    Q('What is a "cap" in an indemnification clause?', ['The minimum claim size', 'The maximum liability of the seller for indemnification claims', 'The price paid at signing', 'The duration of the interim period'], 1,
      ['Ça, c\'est le mini-basket / de minimis.', 'Cap : cap de responsabilité, souvent un % du price.', 'Pas le price.', 'Pas une durée.']),
    Q('Which is correct about indemnities compared with warranties?', ['Indemnities require the buyer to prove a loss and are subject to caps and baskets', 'Indemnities typically provide compensation for specific known risks, without proving damage and without R&W limitations', 'They are the same', 'Indemnities cover only unknown risks'], 1,
      ['Ça décrit les warranties.', 'Indemnités : risks précis identifiés en DD, compensation euro pour euro, sans les limites des R&W.', 'Ils diffèrent.', 'Les risks inconnus relèvent des garanties/W&I ; l\'indemnité couvre un risk identifié.']),
    Q('A false statement of fact in a representation can lead to:', ['No consequence', 'A misrepresentation claim, possibly rescission of the contract', 'An increase in the cap', 'An automatic MAC'], 1,
      ['Une fausse déclaration a des conséquences : réclamation pour misrepresentation, voire annulation du contrat (rescission).', 'Misrepresentation, avec possible rescission (annulation du contrat).', 'Le cap est un cap négocié à l\'avance dans le SPA ; une fausse déclaration ne le relève pas.', 'Un MAC est un événement grave et durable survenu entre signing et closing, ce n\'est pas la conséquence d\'une fausse déclaration.']),
    Q('Long stop date means:', ['The date of signing', 'The date after which a party may terminate if conditions precedent have not been fulfilled', 'The expiry of the NDA', 'The date of the first offer'], 1,
      ['La date de signing est le « signing date ». La long stop date est une date butoir pour que les conditions suspensives soient remplies.', 'Date butoir : après elle, une partie peut mettre fin au contrat.', 'Sans rapport.', 'Sans rapport.']),
    Q('What does W&I insurance primarily cover?', ['Known and disclosed risks', 'Unknown risks at the time of the deal, i.e. breaches of warranties not known to the buyer', 'Forward-looking statements', 'Risks not examined during due diligence'], 1,
      ['Les risks connus sont exclus.', 'Elle couvre les risks inconnus (pertes issues de manquements aux garanties).', 'Les déclarations prospectives sont exclues.', 'Ce qui n\'a pas été examiné en DD est exclu.']),
    Q('Why is W&I insurance attractive for a private-equity seller?', ['It lets the PE fund limit its liability after sale and achieve a "clean exit"', 'It increases its recourse', 'It cancels taxes', 'It avoids due diligence'], 0,
      ['La couverture assurance limite la responsabilité du fonds après la vente (nil recourse).', 'Au contraire.', 'Aucun effet fiscal.', 'La DD reste indispensable.']),
    Q('In buy-side W&I insurance:', ['The seller is the policyholder', 'The buyer is the policyholder and can claim directly against the insurer', 'The notary is the policyholder', 'The insurer pays only if the seller is bankrupt'], 1,
      ['C\'est le sell-side.', 'Assurance directe : le buyer réclame à l\'insurer sans devoir poursuivre d\'abord le seller.', 'Le notary authentifie les actes ; il n\'est pas partie à l\'assurance. L\'assuré est le buyer.', 'Faux : le buyer peut réclamer directement à l\'insurer, sans attendre une faillite du seller.']),
    Q('Typical survival of general representations and warranties after closing is:', ['1–3 months', '12 to 24 months', '10 years for all', 'Forever for all'], 1,
      ['Trop court.', 'Généralement 12-24 mois ; 3-7 ans pour fiscalité, environnement, IP ; très long ou indéfini pour les fondamentales.', 'Pas pour toutes.', 'Seules les fondamentales peuvent être indéfinies.']),
    Q('Which of the following is NOT covered by a W&I policy?', ['An unknown breach of the financial statements warranty', 'Forward-looking statements (e.g. business plan forecasts)', 'An unknown tax liability from before closing', 'An unknown compliance-with-laws breach'], 1,
      ['Couvert : c\'est une des catégories principales de sinistres (états financiers).', 'Non couvert : les déclarations prospectives sont trop difficiles à chiffrer pour l\'insurer ; il couvre le « look back », pas le « look forward ».', 'Couvert : la fiscalité est avec les états financiers la première cause de sinistres.', 'Couvert : la conformité est la 3e catégorie de sinistres.'])
  ]
});
