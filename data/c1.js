MNA.add('c1', {
  titre: 'Class 1 – Introduction to M&A',
  sous: 'Definitions, deal types, M&A rationale, merger waves, key players',
  resume: 'Ce qu\'est le M&A, les types de deals (horizontal, vertical…), les structures (spin-off, carve-out…), les 5 rationales, les 5 merger waves, les key players (investment banks, lawyers, PE/VC).',
  sections: [
    { t: '1. What is M&A? Les key terms à ne pas confondre', h: `
<p>Le <b>M&amp;A</b> (Mergers &amp; Acquisitions) regroupe toutes les opérations qui <b>combinent des companies</b> ou <b>transfèrent l\'ownership</b> d\'une company (ou d\'une partie de company) à une autre.</p>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Les 7 basic transactions</b>
<div class="tblwrap"><table>
<tr><th>Transaction</th><th>En clair (plain words)</th></tr>
<tr><td><b>Merger</b></td><td>Deux companies de taille <b>à peu près égale</b> (<b>merger of equals</b>) se rejoignent volontairement (<b>toujours friendly</b>) pour former une <b>new legal entity</b>.</td></tr>
<tr><td><b>Acquisition</b></td><td>Une company <b>achète</b> une autre. La target (souvent la plus petite) est <b>absorbée</b> : elle perd son identité, ses assets et sa debt passent à l\'acquirer. Peut être <b>friendly ou hostile</b>.</td></tr>
<tr><td><b>Asset deal</b></td><td>On n\'achète que <b>certains assets</b> (une machine, un patent, une division), pas la company en tant que <b>legal entity</b>.</td></tr>
<tr><td><b>Consolidation</b></td><td>Plusieurs companies se combinent en une <b>new entity</b> ; les anciennes <b>disparaissent</b>. Les shareholders reçoivent cash ou shares de la nouvelle.</td></tr>
<tr><td><b>Tender offer</b></td><td>Offer faite <b>directement aux shareholders</b> pour racheter leurs shares, à un price <b>supérieur au market price</b> (avec un <b>premium</b>). Peut contourner le <b>board</b> (= <b>hostile takeover</b>).</td></tr>
<tr><td><b>MBO</b> (Management Buy-Out)</td><td>Le <b>management rachète</b> la company qu\'il dirige, souvent avec un <b>external financing</b>, souvent pour la sortir de la bourse (<b>take private</b>).</td></tr>
<tr><td><b>Divestiture</b></td><td>Une company <b>vend une division</b> pour se recentrer sur son <b>core business</b>.</td></tr>
</table></div></div>

<h3>Stock sale vs Asset sale : qui préfère quoi ?</h3>
<div class="cols">
 <div class="col-box"><h4>Stock sale (vente des shares)</h4><ul><li>Le buyer achète <b>toute la company</b> : assets <b>et</b> debt/liabilities.</li><li>Légalement, la company garde ses assets et liabilities ; seul le propriétaire change.</li><li><b>Préféré par le seller</b> : il « tourne la page » (<b>close the chapter</b>) et se débarrasse de toutes les liabilities.</li></ul></div>
 <div class="col-box green"><h4>Asset sale (vente d\'assets)</h4><ul><li>Le buyer choisit <b>uniquement ce qui l\'intéresse</b> (« cherry picking »).</li><li>Il évite les liabilities indésirables (pensions, guarantees…).</li><li><b>Préféré par le buyer</b>.</li></ul></div>
</div>
<div class="box tip"><b>Mnemonic</b> : le <b>Seller</b> veut vendre les <b>Shares</b> (S–S : « je me débarrasse de tout »), le <b>Buyer</b> veut acheter les <b>Assets</b> (« je choisis »). On y reviendra au cours 3 (taxes et complexité).</div>

<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Merger vs Acquisition</b>
<p>Dans un <b>merger</b> : négociation entre égaux, new entity, shared governance, toujours friendly. Dans une <b>acquisition</b> : l\'acquirer domine, la target est absorbée, la négociation n\'est pas forcément nécessaire, et elle peut être <b>hostile</b> (hostile takeover). En pratique, beaucoup de « mergers » finissent par utiliser le nom d\'une seule company et ressemblent donc à une acquisition.</p></div>` },

    { t: '2. Deal types : selon la relation entre les companies', h: `
<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Les 6 structures de deal</b>
<div class="tblwrap"><table>
<tr><th>Type</th><th>Definition</th><th>Example (du cours)</th></tr>
<tr><td><b>Horizontal</b></td><td>Deux <b>direct competitors</b> (mêmes products, mêmes markets)</td><td>Disney – 21st Century Fox</td></tr>
<tr><td><b>Vertical</b></td><td>Un <b>customer et son supplier</b> (upstream / downstream)</td><td>Ice-cream maker + cone maker ; AT&amp;T – Time Warner (distribution + content)</td></tr>
<tr><td><b>Congeneric</b></td><td>Deux companies qui servent <b>la même customer base de façons différentes</b></td><td>TV maker + cable operator</td></tr>
<tr><td><b>Market-extension</b></td><td><b>Same products, different markets</b> (geography)</td><td>Entrer dans une new region</td></tr>
<tr><td><b>Product-extension</b></td><td><b>Different but related products, same market</b></td><td>Apple – Beats (headphones)</td></tr>
<tr><td><b>Conglomerate</b></td><td><b>Aucun lien</b> entre les activités</td><td>Wave des années 60-70</td></tr>
</table></div></div>

<h3>La vertical integration (important)</h3>
<div class="diagram">
 <div class="flow">
  <div class="n gray"><b>Suppliers</b>raw materials</div><div class="ar">→</div>
  <div class="n"><b>The acquirer</b>manufacturer</div><div class="ar">→</div>
  <div class="n gray"><b>Customers</b>distribution / retail</div>
 </div>
 <div class="flow" style="margin-top:6px">
  <div class="n red"><b>Backward integration</b>vers l\'amont (upstream) = vers les <b>suppliers</b></div>
  <div style="width:30px"></div>
  <div class="n green"><b>Forward integration</b>vers l\'aval (downstream) = vers les <b>customers</b></div>
 </div>
 <div class="cap">Backward = on remonte la supply chain vers les suppliers. Forward = on descend vers le end customer.</div>
</div>
<p><b>Pourquoi ?</b> Surtout pour <b>réduire le supplier risk</b> (hausse brutale des prices, retards, défauts de livraison). Avantages : shared support functions (HR, IT), meilleur risk management, quality control sur toute la supply chain.</p>` },

    { t: '3. Spin-off, split-off, split-up, carve-out', h: `
<p>Quatre façons de <b>séparer une business unit</b> d\'une company. Les noms se ressemblent : c\'est un classique de QCM. Exemple du cours : trois amis possèdent <i>Lemonade Stand Inc.</i> (20 %, 35 %, 45 %) et veulent séparer l\'activité <i>Lemon Granita</i>.</p>

<div class="diagram"><div class="cols">
 <div class="col-box"><h4>Spin-off</h4><ul><li>Les shareholders reçoivent <b>gratuitement et au prorata</b> des shares de la nouvelle company.</li><li>Ils détiennent <b>les deux</b> companies (mêmes % : 20/35/45).</li><li>Sans taxes (<b>tax-free</b>). La valeur du <b>parent</b> <b>baisse</b> de la valeur de la subsidiary.</li></ul></div>
 <div class="col-box yellow"><h4>Split-off</h4><ul><li>Les shareholders <b>choisissent d\'échanger</b> (exchange offer) leurs shares du parent contre des shares de la subsidiary.</li><li>Ceux qui échangent <b>sortent</b> du parent ; ceux qui ne veulent pas restent.</li><li>Les shares échangées sont <b>cancelled</b>.</li></ul></div>
 <div class="col-box red"><h4>Split-up</h4><ul><li>La <b>parent company disparaît</b> : ses shares sont annulées.</li><li>Tous les shareholders deviennent shareholders des nouvelles companies.</li><li>Typique quand le parent se scinde en <b>plus d\'une</b> subsidiary.</li></ul></div>
 <div class="col-box green"><h4>Carve-out</h4><ul><li>Le parent <b>vend</b> des shares de la subsidiary au public (<b>IPO</b>) ou à un <b>strategic investor</b> (<b>private placement</b>).</li><li>Le parent <b>encaisse du cash</b> (proceeds).</li><li>Souvent une étape <b>avant</b> un split-off.</li></ul></div>
</div><div class="cap">Astuce : Spin-off = on <b>reçoit</b> · Split-off = on <b>échange</b> (exchange) · Split-up = le parent <b>meurt</b> · Carve-out = le parent <b>encaisse</b> (cash proceeds).</div></div>` },

    { t: '4. What is NOT M&A', h: `
<div class="box know"><span class="badge b-know">UNDERSTAND</span>Le M&amp;A concerne des <b>ownership transfers</b> entre companies. Ne sont <b>pas</b> du M&amp;A (même si ce sont des opérations « extraordinaires ») :
<ul>
<li><b>Strategic alliances / partnerships / licensing</b> : on travaille ensemble en restant indépendants.</li>
<li><b>Joint venture</b> : deux companies créent une <b>nouvelle entité</b> pour un projet précis, mais <b>continuent d\'exister séparément</b>.</li>
<li><b>Fundraising</b> (business angels, seed, Series A/B/C…) : investir du cash contre des shares n\'est pas du M&amp;A.</li>
<li><b>IPO</b> (Initial Public Offering : introduction en bourse) : lever des capitaux auprès du public.</li>
<li><b>Buyback</b> (rachat de ses propres shares par la company) : réduit le nombre de shares, vu comme un signal positif.</li>
<li><b>Restructuring / turnaround financing</b> (distressed company, Chapter 11).</li>
</ul></div>` },

    { t: '5. Why companies do M&A : les 5 rationales', h: `
<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Les 5 classic rationales</b>
<ol>
<li><b>Synergies</b> : « 1 + 1 = 3 ». Le buyer gagne plus de revenus (<b>revenue synergies</b>) ou réduit ses costs (<b>cost synergies</b>).</li>
<li><b>Market share / competitive advantage</b> : ex. Apple rachète <b>Beats</b> (2014) : new product + customer base.</li>
<li><b>Geographic expansion</b> : entrer dans une région (standards, culture, regulation) en rachetant un <b>local player</b> déjà installé.</li>
<li><b>Defensive tactic</b> : racheter un <b>emerging competitor</b> pour l\'éliminer. Ex. <b>Facebook – WhatsApp</b> (2014).</li>
<li><b>Knowledge acquisition</b> : acquérir un savoir-faire (technology, talents) qu\'on ne peut pas construire assez vite soi-même. Ex. <b>Nike – RTFKT</b> (NFT, métavers) : « digital shift ».</li>
</ol></div>

<div class="box ex"><b>Case : Disney – 21st Century Fox ($71.3bn)</b> : un deal qui coche presque toutes les cases : <b>horizontal acquisition</b>, <b>geographic expansion</b> (streaming en Europe/Asie pour concurrencer Netflix), accès à une énorme <b>content library</b> (IP : intellectual property), et un seller (famille Murdoch) qui ne voulait plus se battre dans le streaming. Le reste de Fox (Fox News, Fox Sports…) a été <b>spun-off</b> dans « Fox Corporation ».</div>

<div class="box detail"><span class="badge b-detail">DETAIL</span>Nike (DTC, abandon du wholesale, perte de valeur sous J. Donahoe), Microsoft – Nokia (7,2 Md$ : échec, quasi tout amorti), Woodward – Hexcel (merger 100 % shares dans l\'aérospatial), Paramount – Warner Bros. Discovery (clos le 6 oct. 2026, hostile offer Paramount vs Netflix). Ces cas servent d\'illustrations : retiens surtout <b>le type de deal et la raison</b>, pas les chiffres.</div>` },

    { t: '6. The 5 merger waves', h: `
<div class="diagram"><div class="tl">
 <div class="s"><b>1895–1905</b>Steel &amp; railroads<br><b>Horizontal</b> mergers, monopolies (US)</div>
 <div class="s"><b>1916–1930</b>Automobile<br>Regional → national markets ; trucks (food, chemicals)</div>
 <div class="s"><b>1955–1973</b>Conglomerates<br>Strict antitrust (horizontal/vertical) → diversification ; <b>management problems</b></div>
 <div class="s"><b>1980–1990</b>Mega-mergers<br><b>Junk bonds</b>, LBO, hostile tender offers, deregulation</div>
 <div class="s"><b>1994–2009</b>Globalisation<br>Cheap debt, PE/VC, privatisations ; end = <b>financial crisis</b></div>
</div><div class="cap">Since 2011 : new wave (ESG, geopolitical uncertainty, tariffs, AI).</div></div>

<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Ce qui déclenche une wave</b> : des <b>low interest rates</b> (easy financing), un <b>bull market</b>, une <b>deregulation</b> ou des innovations (rail, automobile, internet). Une wave finit par un choc (crash, crisis). Retiens le <b>« mot-clé »</b> de chaque wave :
<ul><li>Wave 1 → <b>monopolies</b> / horizontal</li><li>Wave 3 → <b>conglomerates</b> (diversification, bad management)</li><li>Wave 4 → <b>hostile takeovers, LBO, junk bonds</b></li><li>Wave 5 → <b>globalisation</b>, privatisations</li></ul></div>

<h3>Recent trends</h3>
<ul>
<li><b>Digital transformation / AI</b> : les companies traditionnelles rachètent des <b>tech companies</b>.</li>
<li><b>Private Equity</b> très actif : « <b>dry powder</b> » (capital non investi) record, <b>secondary buyouts</b> (buyout à un autre fonds PE), stratégie <b>buy-and-build</b> (une plateforme + des add-ons).</li>
<li><b>ESG</b> : rachats de <b>green players</b> pour réorienter la strategy.</li>
<li><b>SPAC</b> : véhicules pour <b>go public</b> par merger (ralentis par la regulation).</li>
<li><b>Economic uncertainty</b> : en 2023, le M&amp;A mondial a baissé de 16 % ($3.1tn) ; high rates → plus de petits deals ciblés. <b>Low rates = cheaper financing = plus de M&amp;A</b>.</li>
</ul>
<div class="box detail"><span class="badge b-detail">DETAIL</span>Record de 2021 : $5.9tn. 2024 : 82 % des deals menés par des corporates. Top deals 2025/2026 cités (SpaceX/xAI, etc.) : culture générale uniquement.</div>` },

    { t: '7. Who is involved in a deal? (key players)', h: `
<div class="tblwrap"><table>
<tr><th>Actor</th><th>Rôle</th></tr>
<tr><td><b>Buyer / Acquirer</b></td><td>Le <b>Board of Directors (BOD)</b> approuve (<b>fiduciary duties</b> : care, loyalty, obedience). Pour les petits deals, le CEO peut suffire. Le management est le « <b>process owner</b> ».</td></tr>
<tr><td><b>Seller</b></td><td>Négocie et communique l\'info. Pour une <b>sale of the whole company</b>, ce sont les <b>shareholders</b> qui ont le dernier mot. En <b>hostile takeover</b>, le board du seller est <b>court-circuité</b> (bypassed).</td></tr>
<tr><td><b>Target</b></td><td>Subit la <b>due diligence</b> (Q&amp;A, site visits, management presentations, data room).</td></tr>
<tr><td><b>Investment banks</b></td><td>Conseillent <b>buyer et/ou seller</b> : <b>valuation</b>, financial model, <b>fairness opinion</b>, origination (recherche de targets/buyers), négociation, <b>financing</b>. Petits deals : boutiques locales.</td></tr>
<tr><td><b>Consulting firms</b></td><td>Experts du secteur : challengent le <b>business plan</b> sous l\'angle <b>strategic</b> (les bankers regardent l\'angle financial).</td></tr>
<tr><td><b>Due diligence teams</b></td><td><b>FDD</b> (financial), <b>TDD</b> (tax), <b>LDD</b> (legal), <b>HSE</b>, <b>IT</b>, <b>HR</b>… produisent des <b>reports</b> qui peuvent <b>changer le price</b>.</td></tr>
<tr><td><b>Lawyers</b></td><td>Rédigent et révisent <b>tous les contrats</b> (du <b>NDA</b> au <b>SPA</b>), <b>regulatory compliance</b>, <b>post-closing disputes</b>.</td></tr>
<tr><td><b>Notary</b></td><td>Public officer, témoin <b>impartial</b> : authentifie les actes, vérifie les identités, enregistre (<b>registration</b>). Exécute l\'échange <b>shares against price</b>.</td></tr>
<tr><td><b>Insurers / Brokers</b></td><td><b>Transaction insurance</b> : <b>W&amp;I / RWI</b> (warranty &amp; indemnity). Le broker cherche la meilleure <b>policy</b>.</td></tr>
<tr><td><b>Authorities</b></td><td><b>Antitrust</b> (ex. European Commission), governments, ministries, <b>unions</b>.</td></tr>
</table></div>` },

    { t: '8. Private Equity vs Venture Capital', h: `
<p>Les deux investissent dans des <b>unlisted companies</b>. Le <b>VC investit early-stage</b> (small cheques, high risk, très haut target return), le <b>PE investit late-stage</b> et prend le <b>control</b> (big cheques, debt, target return plus faible mais plus sûr).</p>
<div class="diagram"><div class="flow">
 <div class="n"><b>Angel</b>individuals · $10–250k · 8–10 yrs · &gt;75 % IRR</div><div class="ar">→</div>
 <div class="n"><b>Seed</b>1st institutional cheque · $250k–2M · 6–8 yrs</div><div class="ar">→</div>
 <div class="n"><b>Growth</b>Series A–C · $10–50M · 5–7 yrs · &gt;40 %</div><div class="ar">→</div>
 <div class="n yellow"><b>Crossover</b>up to the IPO · $50–150M · &lt;5 yrs · 25–35 %</div><div class="ar">→</div>
 <div class="n red"><b>Buyout (PE)</b>majority control + <b>debt</b> · 3–5 yrs · &gt;18 % IRR (3×)</div>
</div><div class="cap">De gauche à droite : la company est de plus en plus <b>mature</b>. Plus on est early, plus le risk, le <b>target return</b> et le <b>holding period</b> sont élevés.</div></div>
<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Buyout / LBO</b> : on achète (presque) toute la company, souvent avec beaucoup de <b>debt</b>, pour la rendre plus efficace et la <b>revendre (exit)</b> ensuite. Il faut du <b>free cash flow</b> pour repay la debt. Variantes : LBO, take-private, roll-up, platform, HoldCo.</div>
<div class="box detail"><span class="badge b-detail">DETAIL</span>Les chiffres exacts de cheques et d\'IRR ne sont pas à apprendre ; retiens la <b>logique</b> : early = small cheque / long / very high target return ; late = big cheque / short / lower return, avec de la debt.</div>` }
  ],
  retenir: `<ul>
<li><b>Merger</b> = égaux, new entity, toujours friendly. <b>Acquisition</b> = l\'un absorbe l\'autre, friendly ou hostile.</li>
<li><b>Seller → stock sale</b>, <b>Buyer → asset sale</b> (cherry picking).</li>
<li><b>Horizontal</b> = competitors · <b>Vertical</b> = customer/supplier (forward = vers customers, backward = vers suppliers) · <b>Congeneric</b> = même customer base · <b>Conglomerate</b> = rien en commun.</li>
<li><b>Spin-off</b> (on reçoit, tax-free) · <b>Split-off</b> (on échange) · <b>Split-up</b> (le parent disparaît) · <b>Carve-out</b> (le parent vend au public et encaisse).</li>
<li>JV, alliance, IPO, fundraising, buyback ≠ M&amp;A.</li>
<li>5 rationales : synergies, market share, geographic expansion, defensive tactic, knowledge acquisition.</li>
<li>5 waves : rail/monopolies → auto → conglomerates → mega-mergers/LBO/junk bonds → globalisation (end = 2008 crisis).</li>
<li>VC = early-stage, small cheques, very high target return · PE = late-stage, control, debt.</li></ul>`,
  qs: [
    Q('Which statement best describes a MERGER, as opposed to an acquisition?', ['One company buys the shares of a smaller company, which then disappears', 'Two companies of broadly equal size voluntarily combine into one new entity', 'A company makes an offer directly to the target\'s shareholders against the board\'s will', 'A company sells one of its divisions to refocus on its core business'], 1,
      ['Ça, c\'est une acquisition (la target est absorbée), pas une merger entre égaux.', 'Une merger est volontaire (toujours amicale), entre companies de taille comparable, et crée une nouvelle entité juridique commune.', 'C\'est une tender offer (Tender offer) potentiellement hostile : la merger est toujours amicale.', 'C\'est une divestiture (divestiture), pas une merger.']),
    Q('In an asset sale versus a stock sale, which statement is correct?', ['Sellers usually prefer asset sales because they keep control of liabilities', 'Buyers usually prefer stock sales because they inherit only the good assets', 'Sellers usually prefer to sell shares, buyers usually prefer to buy assets', 'Both parties are indifferent because the legal consequences are identical'], 2,
      ['Faux : le seller préfère vendre les shares pour se débarrasser de tous les liabilities (« close the chapter »).', 'Inversé : c\'est dans l\'asset deal que le buyer ne prend que ce qu\'il veut (cherry picking).', 'Exact : le seller sort de tout en vendant les shares ; le buyer choisit les assets et évite les liabilities indésirables.', 'Faux : les conséquences sur les liabilities, les taxes et la complexité diffèrent beaucoup.']),
    Q('A TV manufacturer merges with a cable company serving the same customers. This is a:', ['Horizontal merger', 'Vertical merger', 'Congeneric merger', 'Conglomerate'], 2,
      ['Horizontal = concurrents directs avec les mêmes produits ; ici les produits sont différents.', 'Vertical = relation client/fournisseur ; un fabricant de TV et un câblo-opérateur ne sont pas dans la même chaîne d\'approvisionnement.', 'Congénérique : deux activités différentes qui servent la même base de clients (exemple exact du cours).', 'Conglomérat = aucun point commun, or ici la clientèle est la même.']),
    Q('An ice-cream maker acquires its cone supplier. This is best described as:', ['A horizontal merger with forward integration', 'A vertical merger with backward integration', 'A vertical merger with forward integration', 'A market-extension merger'], 1,
      ['Fournisseur et fabricant ne sont pas concurrents : ce n\'est pas horizontal.', 'Vertical (relation fournisseur) et backward : on remonte vers l\'amont, les fournisseurs.', 'Forward = vers les clients/distribution ; le fournisseur de cônes est en amont, pas en aval.', 'Market-extension = mêmes produits sur de nouveaux markets, ce qui n\'est pas le cas.']),
    Q('Joe, Sam and Mat each receive, pro rata and for free, shares of a newly created company holding the Granita activity. They still own the original company. This operation is a:', ['Split-off', 'Spin-off', 'Carve-out', 'Split-up'], 1,
      ['Dans un split-off, les shareholders doivent ÉCHANGER leurs shares de la mère contre celles de la fille.', 'Spin-off : distribution gratuite, au prorata, des shares de la nouvelle company ; les shareholders détiennent les deux companies, sans tax.', 'Un carve-out suppose une vente au public ou à un investisseur, avec encaissement de cash par la mère.', 'Dans un split-up, la parent company disparaît ; ici elle continue d\'exister.']),
    Q('Lemonade Stand Inc. sells 100% of the shares of its Granita subsidiary through an IPO and receives the cash proceeds. This is a:', ['Spin-off', 'Split-up', 'Carve-out', 'Management buy-out'], 2,
      ['Dans un spin-off il n\'y a pas de vente ni de cash : on distribue les shares aux shareholders.', 'Un split-up supprime la mère et ses shareholders deviennent shareholders des filles.', 'Carve-out : la mère vend la subsidiary au public (IPO) ou en placement privé et encaisse le produit.', 'Un MBO est un rachat par l\'équipe dirigeante, pas une introduction en bourse.']),
    Q('Why did Facebook acquire WhatsApp in 2014, according to the course?', ['To obtain cost synergies by merging back offices', 'As a defensive tactic to remove an emerging competitor', 'To enter a new geographic region', 'To acquire a manufacturing capability'], 1,
      ['Aucune synergie de costs n\'est mise en avant ; WhatsApp restait indépendante.', 'WhatsApp était une menace émergente pouvant détrôner Facebook sur certains markets : racheter = éliminer la concurrence (tactique défensive).', 'Pas la raison citée : c\'est le cas de Disney/Fox pour l\'expansion géographique.', 'Facebook n\'achète pas de capacité industrielle ici.']),
    Q('Which of the following is NOT considered an M&A transaction?', ['A tender offer for 60% of a listed company', 'A joint venture where the two partners remain independent companies', 'The divestiture of a business unit', 'A management buy-out financed by external debt'], 1,
      ['Une tender offer est du M&A : transfert de control.', 'Dans une joint venture (ou alliance), chacun garde son existence propre ; la nouvelle entité sert un projet. Ce n\'est pas un transfert de propriété entre companies.', 'La divestiture est une des opérations de base du M&A.', 'Un MBO transfère la propriété de la company : c\'est du M&A.']),
    Q('The 3rd merger wave (1955–1973) was characterised mainly by:', ['Horizontal mergers aiming at monopolies', 'Conglomerates, with many management problems for acquirers', 'Junk-bond financed hostile takeovers', 'Globalisation and privatisations'], 1,
      ['C\'est la 1re wave (rail et acier).', 'Une législation limitant les horizontal merger/verticales a poussé vers des acquisitions hors du métier de base (conglomérats), avec de gros problèmes de gestion.', 'Ça, c\'est la 4e wave (1980-1990).', 'C\'est la 5e wave (1994-2009).']),
    Q('Which wave is associated with junk bonds, LBOs and hostile takeovers?', ['The railroad wave (1895–1905)', 'The automobile wave (1916–1930)', 'The mega-merger wave (1980–1990)', 'The globalisation wave (1994–2009)'], 2,
      ['Cette wave est liée aux monopoles et à la complétion du réseau ferré.', 'Cette wave est liée à la démocratisation de l\'automobile et des camions.', 'Rate bas, market haussier, financement par junk bonds, dérégulation US/UK : Tender offer hostiles et LBO.', 'La globalisation se caractérise par la debt bon market, le PE/VC et les privatisations.']),
    Q('What is "dry powder" in the context of private equity?', ['Debt used to finance an LBO', 'Uninvested capital that funds have raised and can deploy', 'The fee paid to investment banks', 'The premium paid on a tender offer'], 1,
      ['La debt d\'un LBO est du « leverage », pas du dry powder.', 'Dry powder = capital levé mais non encore investi : un moteur du M&A récent.', 'Les honoraires ne s\'appellent pas ainsi.', 'La premium d\'une Tender offer est le « premium ».']),
    Q('Which actor is typically responsible for authenticating the final deal documents and exchanging the shares against the price?', ['The investment bank', 'The consulting firm', 'The notary', 'The insurance broker'], 2,
      ['La banque conseille sur valuation/structure mais n\'authentifie pas les actes.', 'Le consultant analyse la stratégie et le business plan.', 'Le notary est un officier public impartial : vérifie les identités, authentifie et exécute l\'échange shares/price.', 'Le broker cherche la meilleure assurance de transaction.']),
    Q('In a sale of the whole company, who has the final say on the seller side?', ['The investment bank', 'The seller\'s shareholders', 'The buyer\'s board', 'The notary'], 1,
      ['La banque conseille mais ne décide pas.', 'Pour la vente de toute la company ou d\'une part substantielle, ce sont les shareholders du seller qui ont le dernier mot (le conseil est même contourné en cas d\'Hostile tender offer).', 'Le conseil de le buyer approuve l\'achat, pas la vente.', 'Le notary officialise, il ne décide pas.']),
    Q('Compared with private equity, venture capital generally:', ['Invests later in the company\'s life cycle with larger cheques', 'Invests earlier with smaller cheques, longer holding periods and higher target returns', 'Always takes majority control using leverage', 'Targets only listed companies'], 1,
      ['C\'est le profil du PE/buyout.', 'Exact : le VC intervient tôt (seed, série A…), petits chèques, détention longue, return visé élevé (>40 à 75 % de TRI).', 'La prise de control majoritaire avec debt est typique du buyout (PE).', 'Le PE/VC investit dans des companies unlisted.']),
    Q('A buy-and-build strategy in private equity means:', ['Buying a company and immediately delisting it', 'Acquiring a platform company and then making add-on acquisitions', 'Building a factory next to an acquired company', 'Selling a company in several pieces'], 1,
      ['Ça décrit un take-private.', 'Buy-and-build : on achète une plateforme puis on enchaîne les acquisitions complémentaires pour élargir market share ou géographie.', 'Aucun rapport avec la construction industrielle.', 'Ça évoque un break-up / sum-of-the-parts.']),
    Q('A company buys a promising start-up mainly so that it can never become a threat in the future. Which acquisition rationale is this?', ['Synergy motive', 'Defensive tactic', 'Knowledge acquisition', 'Geographic expansion'], 1,
      ['La synergie vise un gain de revenus ou une baisse de costs, pas l\'élimination d\'un rival.', 'Racheter pour éliminer une menace future = tactique défensive.', 'L\'acquisition de savoir-faire vise une technologie ou des talents.', 'L\'expansion géographique vise l\'entrée sur de nouveaux markets.']),
    Q('Cost synergies and revenue synergies are both part of which acquisition rationale?', ['Defensive tactic', 'Synergies ("1+1=3")', 'Divestiture', 'Geographic expansion only'], 1,
      ['La tactique défensive vise à éliminer un concurrent.', 'Les synergies se divisent en synergies de costs (économies) et de revenus (ventes en plus) : 1+1=3.', 'La divestiture est une divestiture, pas une motivation d\'acquisition.', 'L\'expansion géographique est une autre raison indépendante.']),
    Q('The "growth" stage in the PE/VC spectrum (Series A–C) is mainly about:', ['Buying the whole firm with debt and cutting costs', 'Financing the scaling of a business once product-market fit is established', 'Funding an idea that is still on PowerPoint', 'Preparing the sale to a strategic buyer'], 1,
      ['C\'est le buyout.', 'Growth = on « verse du carburant sur le feu » une fois le product-market fit établi, pour une growth exponentielle.', 'C\'est le stade angel (« from PowerPoint to reality »).', 'Ce n\'est pas l\'objet des séries A-C.']),
    Q('What is the typical role of investment banks in an M&A transaction?', ['To draft the SPA clauses', 'To provide valuation analysis, modelling, identify targets/buyers and help negotiations', 'To authenticate documents publicly', 'To lift antitrust objections'], 1,
      ['La rédaction juridique relève des lawyers.', 'Les banques d\'investissement conseillent sur valuation, modèle financier, fairness opinion, identification de targets/buyers, négociation et financement.', 'L\'authentification est le rôle du notary.', 'Les autorités antitrust décident elles-mêmes.']),
    Q('In which case is the "Disney – Fox" deal best classified?', ['Vertical merger', 'Conglomerate', 'Horizontal acquisition with geographic expansion', 'Joint venture'], 2,
      ['Disney et Fox sont des concurrents/pairs dans le contenu, pas une chaîne fournisseur-client.', 'Ils sont dans le même secteur (média) : pas un conglomérat.', 'Disney (acquirer) a racheté un concurrent du même métier, avec en plus un gain en contenu et une expansion en Europe/Asie.', 'C\'est une acquisition, pas une JV.']),
    Q('Which is an example of "Forward integration"?', ['A car maker buys a tyre supplier', 'A car maker buys a chain of dealerships', 'Two car makers merge', 'A car maker buys a bank unrelated to cars'], 1,
      ['Le fournisseur de pneus est en amont : c\'est du backward.', 'Forward = vers les clients/distribution : acheter ses concessionnaires.', 'Merger de deux constructeurs = horizontal.', 'Aucun lien avec l\'activité = conglomérat.']),
    Q('Which of the following does the course identify as a benefit of vertical integration?', ['Complete elimination of antitrust risk', 'Reduced exposure to supplier risk (price hikes, late or defective deliveries)', 'Automatic growth in new geographic markets', 'Tax-free status of the operation'], 1,
      ['Faux : une vertical integration peut au contraire attirer le régulateur (ex. AT&T–Time Warner contesté par le DOJ).', 'Principal profit : réduire le risk fournisseur et mieux maîtriser la qualité et les costs support.', 'Pas un effet automatique.', 'Aucun statut fiscal particulier ne s\'y attache.']),
    Q('Which one is a "tax-free" distribution of shares of a subsidiary to the parent\'s shareholders, causing the parent\'s market value to decline by the value of the subsidiary?', ['Carve-out', 'Spin-off', 'Tender offer', 'Buyback'], 1,
      ['Le carve-out produit du cash pour la mère, via une vente.', 'Spin-off : distribution gratuite ; la valeur de market de la mère baisse de celle de la subsidiary distribuée.', 'La tender offer est une offer d\'achat aux shareholders.', 'Le buyback est le rachat de ses propres shares par la company.']),
    Q('What distinguishes a split-off from a spin-off?', ['In a split-off the parent company is liquidated', 'In a split-off shareholders choose to exchange parent shares for subsidiary shares', 'In a split-off the subsidiary is sold to the public for cash', 'There is no difference'], 1,
      ['C\'est la description d\'un split-up.', 'Split-off = offer d\'échange : les shareholders qui acceptent échangent leurs titres de la mère contre ceux de la fille (rapport d\'échange).', 'C\'est un carve-out.', 'Il existe bien une différence : échange volontaire (split-off) vs distribution gratuite (spin-off).']),
    Q('Which statement about the 2023 M&A market (course 1) is correct?', ['M&A activity rose by 16%', 'M&A activity fell by about 16% to 3.1 trillion USD, with higher rates pushing smaller, targeted deals', 'M&A was unaffected by interest rates', 'SPAC mergers reached all-time highs'], 1,
      ['Inverse : l\'activité a baissé.', 'Incertitude, rate en hausse et inflation : -16 % à 3,1 Tn$ ; priorité aux opérations plus petites et stratégiques.', 'Faux : quand les rate sont bas, financer une acquisition est moins cher, donc les rate comptent beaucoup.', 'Les SPAC avaient au contraire refroidi à cause de la régulation et de la performance.']),
    Q('Who is the "process owner" of a deal on the buyer side?', ['The notary', 'The antitrust authority', 'The management / CEO, who carries the deal forward (board approves)', 'The insurance broker'], 2,
      ['Le notary intervient à la fin pour authentifier.', 'L\'autorité antitrust est un régulateur externe.', 'Le management (ou CEO) est responsable de faire avancer le deal ; le conseil approuve.', 'Le broker n\'a pas ce rôle.']),
    Q('Which of the following correctly describes a consolidation?', ['A company buys specific assets of another', 'Several companies combine into a NEW entity and the original companies cease to exist', 'The management buys out the company', 'A company sells a division'], 1,
      ['C\'est un asset deal.', 'Consolidation : nouvelle entité qui control toutes les companies d\'origine, lesquelles disparaissent ; les shareholders reçoivent cash ou shares.', 'C\'est un MBO.', 'C\'est une divestiture.'])
  ]
});
