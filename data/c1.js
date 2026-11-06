MNA.add('c1', {
  titre: 'Cours 1 – Introduction au M&A',
  sous: 'Définitions, types de deals, pourquoi on fait du M&A, vagues, acteurs',
  resume: 'Ce qu\'est le M&A, les types de fusions, les montages (spin-off, carve-out…), les 5 raisons d\'acheter, les 5 vagues historiques, les acteurs (banques, avocats, PE/VC).',
  sections: [
    { t: '1. Qu\'est-ce que le M&A ? Les mots à ne pas confondre', h: `
<p>Le <b>M&amp;A</b> (Mergers &amp; Acquisitions) regroupe toutes les opérations qui <b>combinent des entreprises</b> ou <b>transfèrent la propriété</b> d\'une entreprise (ou d\'une partie d\'entreprise) à une autre.</p>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Les 7 opérations de base</b>
<div class="tblwrap"><table>
<tr><th>Opération</th><th>En clair</th></tr>
<tr><td><b>Merger</b> (fusion)</td><td>Deux sociétés de taille <b>à peu près égale</b> se rejoignent volontairement (<b>toujours amicale</b>) pour former <b>une nouvelle entité</b> juridique.</td></tr>
<tr><td><b>Acquisition</b></td><td>Une société <b>achète</b> une autre. La cible (souvent la plus petite) est absorbée : elle perd son identité, ses actifs et dettes passent à l\'acquéreur. Peut être <b>amicale ou hostile</b>.</td></tr>
<tr><td><b>Asset deal</b></td><td>On n\'achète que <b>certains actifs</b> (une machine, un brevet, une division), pas la société en tant qu\'entité juridique.</td></tr>
<tr><td><b>Consolidation</b></td><td>Plusieurs sociétés se combinent en une <b>nouvelle</b> entité ; les anciennes <b>disparaissent</b>. Les actionnaires reçoivent cash ou actions de la nouvelle.</td></tr>
<tr><td><b>Tender offer</b> (OPA)</td><td>Offre faite <b>directement aux actionnaires</b> pour racheter leurs actions, à un prix <b>supérieur au cours</b>. Peut contourner le conseil d\'administration (= prise de contrôle hostile).</td></tr>
<tr><td><b>MBO</b> (Management Buy-Out)</td><td>Le <b>management rachète</b> l\'entreprise qu\'il dirige, souvent avec un financement externe, souvent pour la sortir de la bourse (take private).</td></tr>
<tr><td><b>Divestiture</b> (cession)</td><td>Une société <b>vend une division</b> pour se recentrer sur son cœur de métier.</td></tr>
</table></div></div>

<h3>Stock sale vs Asset sale : qui préfère quoi ?</h3>
<div class="cols">
 <div class="col-box"><h4>Stock sale (vente des actions)</h4><ul><li>L\'acheteur achète <b>toute la société</b> : actifs <b>et</b> dettes/passifs.</li><li>Légalement, la société garde ses actifs et passifs ; seul le propriétaire change.</li><li><b>Préféré par le vendeur</b> : il « tourne la page » et se débarrasse de tous les passifs.</li></ul></div>
 <div class="col-box green"><h4>Asset sale (vente d\'actifs)</h4><ul><li>L\'acheteur choisit <b>uniquement ce qui l\'intéresse</b> (« cherry picking »).</li><li>Il évite les passifs indésirables (retraites, garanties…).</li><li><b>Préféré par l\'acheteur</b>.</li></ul></div>
</div>
<div class="box tip"><b>Mnémotechnique</b> : le <b>Vendeur</b> veut vendre les <b>actions</b> (V = « je me débarrasse de tout »), l\'<b>Acheteur</b> veut acheter les <b>actifs</b> (A = « je choisis »). On y reviendra au cours 3 (impôts et complexité).</div>

<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Merger vs Acquisition</b>
<p>Dans une <b>fusion</b> : négociation entre égaux, nouvelle entité, gouvernance partagée, toujours amicale. Dans une <b>acquisition</b> : l\'acquéreur domine, la cible est absorbée, la négociation n\'est pas forcément nécessaire, et elle peut être hostile. En pratique, beaucoup de « fusions » finissent par utiliser le nom d\'une seule société et ressemblent donc à une acquisition.</p></div>` },

    { t: '2. Les types de deals selon la relation entre les sociétés', h: `
<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Les 6 structures de deal</b>
<div class="tblwrap"><table>
<tr><th>Type</th><th>Définition</th><th>Exemple du cours</th></tr>
<tr><td><b>Horizontal</b></td><td>Deux <b>concurrents directs</b> (mêmes produits, mêmes marchés)</td><td>Disney – 21st Century Fox</td></tr>
<tr><td><b>Vertical</b></td><td>Un <b>client et son fournisseur</b> (amont/aval)</td><td>Fabricant de glaces + fabricant de cônes ; AT&amp;T – Time Warner (distribution + contenu)</td></tr>
<tr><td><b>Congénérique</b> (congeneric)</td><td>Deux entreprises qui servent <b>la même clientèle de façons différentes</b></td><td>Fabricant de TV + câblo-opérateur</td></tr>
<tr><td><b>Market-extension</b></td><td><b>Mêmes produits, marchés différents</b> (géographie)</td><td>Entrer dans une nouvelle région</td></tr>
<tr><td><b>Product-extension</b></td><td><b>Produits différents mais liés, même marché</b></td><td>Apple – Beats (casques)</td></tr>
<tr><td><b>Conglomérat</b></td><td>Aucun point commun entre les activités</td><td>Vague des années 60-70</td></tr>
</table></div></div>

<h3>L\'intégration verticale (important)</h3>
<div class="diagram">
 <div class="flow">
  <div class="n gray"><b>Fournisseurs</b>matières premières</div><div class="ar">→</div>
  <div class="n"><b>L\'acquéreur</b>fabricant</div><div class="ar">→</div>
  <div class="n gray"><b>Clients</b>distribution / retail</div>
 </div>
 <div class="flow" style="margin-top:6px">
  <div class="n red"><b>Backward integration</b>vers l\'amont = vers les <b>fournisseurs</b></div>
  <div style="width:30px"></div>
  <div class="n green"><b>Forward integration</b>vers l\'aval = vers les <b>clients</b></div>
 </div>
 <div class="cap">Backward = on remonte la chaîne vers les fournisseurs. Forward = on descend vers le client final.</div>
</div>
<p><b>Pourquoi ?</b> Surtout pour <b>réduire le risque lié aux fournisseurs</b> (hausse brutale des prix, retards, livraisons défectueuses). Avantages : fonctions support mutualisées (RH, IT), meilleure gestion du risque, gestion qualité sur toute la chaîne.</p>` },

    { t: '3. Spin-off, split-off, split-up, carve-out', h: `
<p>Quatre façons de <b>séparer une activité</b> d\'une société. Les noms se ressemblent : c\'est un classique de QCM. Exemple du cours : trois amis possèdent <i>Lemonade Stand Inc.</i> (20 %, 35 %, 45 %) et veulent séparer l\'activité <i>Lemon Granita</i>.</p>

<div class="diagram"><div class="cols">
 <div class="col-box"><h4>Spin-off</h4><ul><li>Les actionnaires reçoivent <b>gratuitement et au prorata</b> des actions de la nouvelle société.</li><li>Ils détiennent <b>les deux</b> sociétés (mêmes % : 20/35/45).</li><li>Sans impôt (<b>tax-free</b>). La valeur de la mère <b>baisse</b> de la valeur de la fille.</li></ul></div>
 <div class="col-box yellow"><h4>Split-off</h4><ul><li>Les actionnaires <b>choisissent d\'échanger</b> leurs actions de la mère contre des actions de la fille.</li><li>Ceux qui échangent <b>sortent</b> de la mère ; ceux qui ne veulent pas restent.</li><li>Les actions échangées sont annulées.</li></ul></div>
 <div class="col-box red"><h4>Split-up</h4><ul><li>La <b>société mère disparaît</b> : ses actions sont annulées.</li><li>Tous les actionnaires deviennent actionnaires des nouvelles sociétés.</li><li>Typique quand la mère se scinde en <b>plus d\'une</b> filiale.</li></ul></div>
 <div class="col-box green"><h4>Carve-out</h4><ul><li>La mère <b>vend</b> des actions de la filiale au public (IPO) ou à un investisseur stratégique (placement privé).</li><li>La mère <b>encaisse du cash</b> (proceeds).</li><li>Souvent une étape <b>avant</b> un split-off.</li></ul></div>
</div><div class="cap">Astuce : Spin-off = on <b>reçoit</b> · Split-off = on <b>échange</b> · Split-up = la mère <b>meurt</b> · Carve-out = la mère <b>encaisse</b>.</div></div>` },

    { t: '4. Ce qui n\'est PAS du M&A', h: `
<div class="box know"><span class="badge b-know">À COMPRENDRE</span>Le M&amp;A concerne des <b>transferts de propriété</b> entre sociétés. Ne sont <b>pas</b> du M&amp;A (même si ce sont des opérations « extraordinaires ») :
<ul>
<li><b>Alliances stratégiques / partenariats / licences</b> : on travaille ensemble en restant indépendants.</li>
<li><b>Joint venture</b> : deux sociétés créent une <b>nouvelle entité</b> pour un projet précis, mais <b>continuent d\'exister séparément</b>.</li>
<li><b>Levée de fonds</b> (business angels, seed, série A/B/C…) : investir du cash contre des actions n\'est pas du M&amp;A.</li>
<li><b>IPO</b> (introduction en bourse) : lever des capitaux auprès du public.</li>
<li><b>Buyback</b> (rachat d\'actions par la société elle-même) : réduit le nombre d\'actions, vu comme un signal positif.</li>
<li><b>Restructuring / turnaround financing</b> (société en difficulté, Chapter 11).</li>
</ul></div>` },

    { t: '5. Pourquoi les entreprises font du M&A : les 5 raisons', h: `
<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Les 5 raisons classiques</b>
<ol>
<li><b>Synergies</b> : « 1 + 1 = 3 ». L\'acheteur gagne plus de revenus (<b>revenue synergies</b>) ou réduit ses coûts (<b>cost synergies</b>).</li>
<li><b>Part de marché / avantage concurrentiel</b> : ex. Apple rachète <b>Beats</b> (2014) : produit nouveau + clientèle.</li>
<li><b>Expansion géographique</b> : entrer dans une région (normes, culture, réglementation) en rachetant un acteur local déjà installé.</li>
<li><b>Tactique défensive</b> : racheter un concurrent émergent pour l\'éliminer. Ex. <b>Facebook – WhatsApp</b> (2014).</li>
<li><b>Acquérir du savoir-faire</b> (technologie, talents) qu\'on ne peut pas construire assez vite soi-même. Ex. <b>Nike – RTFKT</b> (NFT, métavers) : « digital shift ».</li>
</ol></div>

<div class="box ex"><b>Cas Disney – 21st Century Fox (71,3 Md$)</b> : un deal qui coche presque toutes les cases : <b>acquisition horizontale</b>, expansion géographique (streaming en Europe/Asie pour concurrencer Netflix), accès à un énorme catalogue de contenu (propriété intellectuelle), et un vendeur (famille Murdoch) qui ne voulait plus se battre dans le streaming. Le reste de Fox (Fox News, Fox Sports…) a été <b>spun-off</b> dans « Fox Corporation ».</div>

<div class="box detail"><span class="badge b-detail">DÉTAIL</span>Nike (DTC, abandon du wholesale, perte de valeur sous J. Donahoe), Microsoft – Nokia (7,2 Md$ : échec, quasi tout amorti), Woodward – Hexcel (fusion 100 % actions dans l\'aérospatial), Paramount – Warner Bros. Discovery (clos le 6 oct. 2026, offres hostile Paramount vs Netflix). Ces cas servent d\'illustrations : retiens surtout <b>le type de deal et la raison</b>, pas les chiffres.</div>` },

    { t: '6. Les 5 vagues de fusions', h: `
<div class="diagram"><div class="tl">
 <div class="s"><b>1895–1905</b>Acier &amp; chemins de fer<br>Fusions <b>horizontales</b>, monopoles (US)</div>
 <div class="s"><b>1916–1930</b>Automobile<br>Marchés régionaux → nationaux ; camions (alimentaire, chimie)</div>
 <div class="s"><b>1955–1973</b>Conglomérats<br>Antitrust strict en horizontal/vertical → on diversifie ; <b>problèmes de gestion</b></div>
 <div class="s"><b>1980–1990</b>Méga-fusions<br><b>Junk bonds</b>, LBO, OPA hostiles, déréglementation</div>
 <div class="s"><b>1994–2009</b>Globalisation<br>Dette bon marché, PE/VC, privatisations ; fin = <b>crise financière</b></div>
</div><div class="cap">Depuis 2011 : nouvelle vague (ESG, incertitude géopolitique, droits de douane, IA).</div></div>

<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Ce qui déclenche une vague</b> : des <b>taux bas</b> (financement facile), un marché boursier haussier, une <b>dérégulation</b> ou des innovations (rail, automobile, internet). Une vague finit par un choc (krach, crise). Retiens le <b>« mot-clé »</b> de chaque vague :
<ul><li>Vague 1 → <b>monopoles</b> / horizontal</li><li>Vague 3 → <b>conglomérats</b> (diversification, mauvaise gestion)</li><li>Vague 4 → <b>hostile takeovers, LBO, junk bonds</b></li><li>Vague 5 → <b>globalisation</b>, privatisations</li></ul></div>

<h3>Tendances récentes</h3>
<ul>
<li><b>Transformation digitale / IA</b> : les entreprises traditionnelles rachètent des sociétés tech.</li>
<li><b>Private Equity</b> très actif : « <b>dry powder</b> » (capital non investi) record, <b>secondary buyouts</b> (rachat à un autre fonds), stratégie <b>buy-and-build</b> (une plateforme + des add-ons).</li>
<li><b>ESG</b> : rachats d\'acteurs verts pour réorienter la stratégie.</li>
<li><b>SPAC</b> : véhicules pour entrer en bourse par fusion (ralentis par la régulation).</li>
<li><b>Incertitude économique</b> : en 2023, le M&amp;A mondial a baissé de 16 % (3,1 Tn$) ; taux hauts → plus de petites opérations ciblées. <b>Taux bas = financement moins cher = plus de M&amp;A</b>.</li>
</ul>
<div class="box detail"><span class="badge b-detail">DÉTAIL</span>Record de 2021 : 5,9 Tn$ de valeur. 2024 : 82 % des deals menés par des corporates. Top deals 2025/2026 cités (SpaceX/xAI, etc.) : culture générale uniquement.</div>` },

    { t: '7. Qui participe à un deal ?', h: `
<div class="tblwrap"><table>
<tr><th>Acteur</th><th>Rôle</th></tr>
<tr><td><b>Acheteur</b></td><td>Le <b>conseil d\'administration</b> (BOD) approuve (devoirs fiduciaires : care, loyalty, obedience). Pour les petits deals, le CEO peut suffire. Le management est le « <b>process owner</b> ».</td></tr>
<tr><td><b>Vendeur</b></td><td>Négocie, communique l\'info. Pour une <b>vente de toute la société</b>, ce sont les <b>actionnaires</b> qui ont le dernier mot. En <b>OPA hostile</b>, le conseil du vendeur est <b>court-circuité</b>.</td></tr>
<tr><td><b>Société cible</b></td><td>Subit la <b>due diligence</b> (Q&amp;A, visites, présentations, documents).</td></tr>
<tr><td><b>Banques d\'investissement</b></td><td>Conseillent <b>acheteur et/ou vendeur</b> : valorisation, modèle financier, <b>fairness opinion</b>, recherche de cibles/acheteurs, négociation, financement. Petits deals : boutiques locales.</td></tr>
<tr><td><b>Cabinets de conseil</b></td><td>Experts du secteur : challengent le <b>business plan</b> sous l\'angle <b>stratégique</b> (les banquiers regardent l\'angle financier).</td></tr>
<tr><td><b>Équipes de due diligence</b></td><td>FDD (financière), TDD (fiscale), LDD (juridique), HSE, IT, RH… produisent des <b>rapports</b> qui peuvent <b>changer le prix</b>.</td></tr>
<tr><td><b>Avocats</b></td><td>Rédigent et révisent <b>tous les contrats</b> (du NDA au SPA), conformité réglementaire, litiges après closing.</td></tr>
<tr><td><b>Notaire</b></td><td>Officier public, témoin <b>impartial</b> : authentifie les actes, vérifie les identités, enregistre. Exécute l\'échange <b>actions contre prix</b>.</td></tr>
<tr><td><b>Assureurs / courtiers</b></td><td>Assurances de transaction : <b>W&amp;I / RWI</b> (warranty &amp; indemnity). Le courtier cherche la meilleure police.</td></tr>
<tr><td><b>Autorités</b></td><td>Antitrust (ex. Commission européenne), gouvernements, ministères, syndicats.</td></tr>
</table></div>` },

    { t: '8. Private Equity vs Venture Capital', h: `
<p>Les deux investissent dans des sociétés <b>non cotées</b>. Le <b>VC investit tôt</b> (petits chèques, risque élevé, rendement visé énorme), le <b>PE investit tard</b> et prend le <b>contrôle</b> (gros chèques, dette, rendement visé plus faible mais plus sûr).</p>
<div class="diagram"><div class="flow">
 <div class="n"><b>Angel</b>particuliers · 10–250 k$ · 8–10 ans · &gt;75 % TRI</div><div class="ar">→</div>
 <div class="n"><b>Seed</b>1er chèque institutionnel · 250 k–2 M$ · 6–8 ans</div><div class="ar">→</div>
 <div class="n"><b>Growth</b>série A–C · 10–50 M$ · 5–7 ans · &gt;40 %</div><div class="ar">→</div>
 <div class="n yellow"><b>Crossover</b>jusqu\'à l\'IPO · 50–150 M$ · &lt;5 ans · 25–35 %</div><div class="ar">→</div>
 <div class="n red"><b>Buyout (PE)</b>contrôle majoritaire + <b>dette</b> · 3–5 ans · &gt;18 % TRI (3×)</div>
</div><div class="cap">De gauche à droite : l\'entreprise est de plus en plus mature. Plus on est tôt, plus le risque, le rendement visé et la durée de détention sont élevés.</div></div>
<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Buyout / LBO</b> : on achète (presque) toute l\'entreprise, souvent avec beaucoup de <b>dette</b>, pour la rendre plus efficace et la <b>revendre</b> ensuite. Il faut du <b>free cash flow</b> pour rembourser la dette. Variantes : LBO, take-private, roll-up, platform, HoldCo.</div>
<div class="box detail"><span class="badge b-detail">DÉTAIL</span>Les chiffres exacts de chèques et de TRI ne sont pas à apprendre ; retiens la <b>logique</b> : tôt = petit chèque / long / rendement visé très élevé ; tard = gros chèque / court / rendement plus bas, avec de la dette.</div>` }
  ],
  retenir: `<ul>
<li><b>Merger</b> = égaux, nouvelle entité, toujours amicale. <b>Acquisition</b> = l\'un absorbe l\'autre, amicale ou hostile.</li>
<li><b>Vendeur → stock sale</b>, <b>Acheteur → asset sale</b> (cherry picking).</li>
<li>Horizontal = concurrents · Vertical = client/fournisseur (forward = vers clients, backward = vers fournisseurs) · Congénérique = même clientèle · Conglomérat = rien en commun.</li>
<li><b>Spin-off</b> (on reçoit, tax-free) · <b>Split-off</b> (on échange) · <b>Split-up</b> (la mère disparaît) · <b>Carve-out</b> (la mère vend au public et encaisse).</li>
<li>JV, alliance, IPO, levée de fonds, buyback ≠ M&amp;A.</li>
<li>5 raisons : synergies, part de marché, géographie, défense, savoir-faire.</li>
<li>5 vagues : rail/monopoles → auto → conglomérats → méga-fusions/LBO/junk bonds → globalisation (fin = crise 2008).</li>
<li>VC = tôt, petits chèques, rendement visé énorme · PE = tard, contrôle, dette.</li></ul>`,
  qs: [
    Q('Which statement best describes a MERGER, as opposed to an acquisition?', ['One company buys the shares of a smaller company, which then disappears', 'Two companies of broadly equal size voluntarily combine into one new entity', 'A company makes an offer directly to the target\'s shareholders against the board\'s will', 'A company sells one of its divisions to refocus on its core business'], 1,
      ['Ça, c\'est une acquisition (la cible est absorbée), pas une fusion entre égaux.', 'Une fusion est volontaire (toujours amicale), entre sociétés de taille comparable, et crée une nouvelle entité juridique commune.', 'C\'est une tender offer (OPA) potentiellement hostile : la fusion est toujours amicale.', 'C\'est une divestiture (cession), pas une fusion.']),
    Q('In an asset sale versus a stock sale, which statement is correct?', ['Sellers usually prefer asset sales because they keep control of liabilities', 'Buyers usually prefer stock sales because they inherit only the good assets', 'Sellers usually prefer to sell shares, buyers usually prefer to buy assets', 'Both parties are indifferent because the legal consequences are identical'], 2,
      ['Faux : le vendeur préfère vendre les actions pour se débarrasser de tous les passifs (« close the chapter »).', 'Inversé : c\'est dans l\'asset deal que l\'acheteur ne prend que ce qu\'il veut (cherry picking).', 'Exact : le vendeur sort de tout en vendant les actions ; l\'acheteur choisit les actifs et évite les passifs indésirables.', 'Faux : les conséquences sur les passifs, les impôts et la complexité diffèrent beaucoup.']),
    Q('A TV manufacturer merges with a cable company serving the same customers. This is a:', ['Horizontal merger', 'Vertical merger', 'Congeneric merger', 'Conglomerate'], 2,
      ['Horizontal = concurrents directs avec les mêmes produits ; ici les produits sont différents.', 'Vertical = relation client/fournisseur ; un fabricant de TV et un câblo-opérateur ne sont pas dans la même chaîne d\'approvisionnement.', 'Congénérique : deux activités différentes qui servent la même base de clients (exemple exact du cours).', 'Conglomérat = aucun point commun, or ici la clientèle est la même.']),
    Q('An ice-cream maker acquires its cone supplier. This is best described as:', ['A horizontal merger with forward integration', 'A vertical merger with backward integration', 'A vertical merger with forward integration', 'A market-extension merger'], 1,
      ['Fournisseur et fabricant ne sont pas concurrents : ce n\'est pas horizontal.', 'Vertical (relation fournisseur) et backward : on remonte vers l\'amont, les fournisseurs.', 'Forward = vers les clients/distribution ; le fournisseur de cônes est en amont, pas en aval.', 'Market-extension = mêmes produits sur de nouveaux marchés, ce qui n\'est pas le cas.']),
    Q('Joe, Sam and Mat each receive, pro rata and for free, shares of a newly created company holding the Granita activity. They still own the original company. This operation is a:', ['Split-off', 'Spin-off', 'Carve-out', 'Split-up'], 1,
      ['Dans un split-off, les actionnaires doivent ÉCHANGER leurs actions de la mère contre celles de la fille.', 'Spin-off : distribution gratuite, au prorata, des actions de la nouvelle société ; les actionnaires détiennent les deux sociétés, sans impôt.', 'Un carve-out suppose une vente au public ou à un investisseur, avec encaissement de cash par la mère.', 'Dans un split-up, la société mère disparaît ; ici elle continue d\'exister.']),
    Q('Lemonade Stand Inc. sells 100% of the shares of its Granita subsidiary through an IPO and receives the cash proceeds. This is a:', ['Spin-off', 'Split-up', 'Carve-out', 'Management buy-out'], 2,
      ['Dans un spin-off il n\'y a pas de vente ni de cash : on distribue les actions aux actionnaires.', 'Un split-up supprime la mère et ses actionnaires deviennent actionnaires des filles.', 'Carve-out : la mère vend la filiale au public (IPO) ou en placement privé et encaisse le produit.', 'Un MBO est un rachat par l\'équipe dirigeante, pas une introduction en bourse.']),
    Q('Why did Facebook acquire WhatsApp in 2014, according to the course?', ['To obtain cost synergies by merging back offices', 'As a defensive tactic to remove an emerging competitor', 'To enter a new geographic region', 'To acquire a manufacturing capability'], 1,
      ['Aucune synergie de coûts n\'est mise en avant ; WhatsApp restait indépendante.', 'WhatsApp était une menace émergente pouvant détrôner Facebook sur certains marchés : racheter = éliminer la concurrence (tactique défensive).', 'Pas la raison citée : c\'est le cas de Disney/Fox pour l\'expansion géographique.', 'Facebook n\'achète pas de capacité industrielle ici.']),
    Q('Which of the following is NOT considered an M&A transaction?', ['A tender offer for 60% of a listed company', 'A joint venture where the two partners remain independent companies', 'The divestiture of a business unit', 'A management buy-out financed by external debt'], 1,
      ['Une tender offer est du M&A : transfert de contrôle.', 'Dans une joint venture (ou alliance), chacun garde son existence propre ; la nouvelle entité sert un projet. Ce n\'est pas un transfert de propriété entre sociétés.', 'La divestiture est une des opérations de base du M&A.', 'Un MBO transfère la propriété de l\'entreprise : c\'est du M&A.']),
    Q('The 3rd merger wave (1955–1973) was characterised mainly by:', ['Horizontal mergers aiming at monopolies', 'Conglomerates, with many management problems for acquirers', 'Junk-bond financed hostile takeovers', 'Globalisation and privatisations'], 1,
      ['C\'est la 1re vague (rail et acier).', 'Une législation limitant les fusions horizontales/verticales a poussé vers des acquisitions hors du métier de base (conglomérats), avec de gros problèmes de gestion.', 'Ça, c\'est la 4e vague (1980-1990).', 'C\'est la 5e vague (1994-2009).']),
    Q('Which wave is associated with junk bonds, LBOs and hostile takeovers?', ['The railroad wave (1895–1905)', 'The automobile wave (1916–1930)', 'The mega-merger wave (1980–1990)', 'The globalisation wave (1994–2009)'], 2,
      ['Cette vague est liée aux monopoles et à la complétion du réseau ferré.', 'Cette vague est liée à la démocratisation de l\'automobile et des camions.', 'Taux bas, marché haussier, financement par junk bonds, dérégulation US/UK : OPA hostiles et LBO.', 'La globalisation se caractérise par la dette bon marché, le PE/VC et les privatisations.']),
    Q('What is "dry powder" in the context of private equity?', ['Debt used to finance an LBO', 'Uninvested capital that funds have raised and can deploy', 'The fee paid to investment banks', 'The premium paid on a tender offer'], 1,
      ['La dette d\'un LBO est du « leverage », pas du dry powder.', 'Dry powder = capital levé mais non encore investi : un moteur du M&A récent.', 'Les honoraires ne s\'appellent pas ainsi.', 'La prime d\'une OPA est le « premium ».']),
    Q('Which actor is typically responsible for authenticating the final deal documents and exchanging the shares against the price?', ['The investment bank', 'The consulting firm', 'The notary', 'The insurance broker'], 2,
      ['La banque conseille sur valorisation/structure mais n\'authentifie pas les actes.', 'Le consultant analyse la stratégie et le business plan.', 'Le notaire est un officier public impartial : vérifie les identités, authentifie et exécute l\'échange actions/prix.', 'Le courtier cherche la meilleure assurance de transaction.']),
    Q('In a sale of the whole company, who has the final say on the seller side?', ['The investment bank', 'The seller\'s shareholders', 'The buyer\'s board', 'The notary'], 1,
      ['La banque conseille mais ne décide pas.', 'Pour la vente de toute la société ou d\'une part substantielle, ce sont les actionnaires du vendeur qui ont le dernier mot (le conseil est même contourné en cas d\'OPA hostile).', 'Le conseil de l\'acheteur approuve l\'achat, pas la vente.', 'Le notaire officialise, il ne décide pas.']),
    Q('Compared with private equity, venture capital generally:', ['Invests later in the company\'s life cycle with larger cheques', 'Invests earlier with smaller cheques, longer holding periods and higher target returns', 'Always takes majority control using leverage', 'Targets only listed companies'], 1,
      ['C\'est le profil du PE/buyout.', 'Exact : le VC intervient tôt (seed, série A…), petits chèques, détention longue, rendement visé élevé (>40 à 75 % de TRI).', 'La prise de contrôle majoritaire avec dette est typique du buyout (PE).', 'Le PE/VC investit dans des sociétés non cotées.']),
    Q('A buy-and-build strategy in private equity means:', ['Buying a company and immediately delisting it', 'Acquiring a platform company and then making add-on acquisitions', 'Building a factory next to an acquired company', 'Selling a company in several pieces'], 1,
      ['Ça décrit un take-private.', 'Buy-and-build : on achète une plateforme puis on enchaîne les acquisitions complémentaires pour élargir part de marché ou géographie.', 'Aucun rapport avec la construction industrielle.', 'Ça évoque un break-up / sum-of-the-parts.']),
    Q('A company buys a promising start-up mainly so that it can never become a threat in the future. Which acquisition rationale is this?', ['Synergy motive', 'Defensive tactic', 'Knowledge acquisition', 'Geographic expansion'], 1,
      ['La synergie vise un gain de revenus ou une baisse de coûts, pas l\'élimination d\'un rival.', 'Racheter pour éliminer une menace future = tactique défensive.', 'L\'acquisition de savoir-faire vise une technologie ou des talents.', 'L\'expansion géographique vise l\'entrée sur de nouveaux marchés.']),
    Q('Cost synergies and revenue synergies are both part of which acquisition rationale?', ['Defensive tactic', 'Synergies ("1+1=3")', 'Divestiture', 'Geographic expansion only'], 1,
      ['La tactique défensive vise à éliminer un concurrent.', 'Les synergies se divisent en synergies de coûts (économies) et de revenus (ventes en plus) : 1+1=3.', 'La divestiture est une cession, pas une motivation d\'acquisition.', 'L\'expansion géographique est une autre raison indépendante.']),
    Q('The "growth" stage in the PE/VC spectrum (Series A–C) is mainly about:', ['Buying the whole firm with debt and cutting costs', 'Financing the scaling of a business once product-market fit is established', 'Funding an idea that is still on PowerPoint', 'Preparing the sale to a strategic buyer'], 1,
      ['C\'est le buyout.', 'Growth = on « verse du carburant sur le feu » une fois le product-market fit établi, pour une croissance exponentielle.', 'C\'est le stade angel (« from PowerPoint to reality »).', 'Ce n\'est pas l\'objet des séries A-C.']),
    Q('What is the typical role of investment banks in an M&A transaction?', ['To draft the SPA clauses', 'To provide valuation analysis, modelling, identify targets/buyers and help negotiations', 'To authenticate documents publicly', 'To lift antitrust objections'], 1,
      ['La rédaction juridique relève des avocats.', 'Les banques d\'investissement conseillent sur valorisation, modèle financier, fairness opinion, identification de cibles/acheteurs, négociation et financement.', 'L\'authentification est le rôle du notaire.', 'Les autorités antitrust décident elles-mêmes.']),
    Q('In which case is the "Disney – Fox" deal best classified?', ['Vertical merger', 'Conglomerate', 'Horizontal acquisition with geographic expansion', 'Joint venture'], 2,
      ['Disney et Fox sont des concurrents/pairs dans le contenu, pas une chaîne fournisseur-client.', 'Ils sont dans le même secteur (média) : pas un conglomérat.', 'Disney (acquéreur) a racheté un concurrent du même métier, avec en plus un gain en contenu et une expansion en Europe/Asie.', 'C\'est une acquisition, pas une JV.']),
    Q('Which is an example of "Forward integration"?', ['A car maker buys a tyre supplier', 'A car maker buys a chain of dealerships', 'Two car makers merge', 'A car maker buys a bank unrelated to cars'], 1,
      ['Le fournisseur de pneus est en amont : c\'est du backward.', 'Forward = vers les clients/distribution : acheter ses concessionnaires.', 'Fusion de deux constructeurs = horizontal.', 'Aucun lien avec l\'activité = conglomérat.']),
    Q('Which of the following does the course identify as a benefit of vertical integration?', ['Complete elimination of antitrust risk', 'Reduced exposure to supplier risk (price hikes, late or defective deliveries)', 'Automatic growth in new geographic markets', 'Tax-free status of the operation'], 1,
      ['Faux : une intégration verticale peut au contraire attirer le régulateur (ex. AT&T–Time Warner contesté par le DOJ).', 'Principal bénéfice : réduire le risque fournisseur et mieux maîtriser la qualité et les coûts support.', 'Pas un effet automatique.', 'Aucun statut fiscal particulier ne s\'y attache.']),
    Q('Which one is a "tax-free" distribution of shares of a subsidiary to the parent\'s shareholders, causing the parent\'s market value to decline by the value of the subsidiary?', ['Carve-out', 'Spin-off', 'Tender offer', 'Buyback'], 1,
      ['Le carve-out produit du cash pour la mère, via une vente.', 'Spin-off : distribution gratuite ; la valeur de marché de la mère baisse de celle de la filiale distribuée.', 'La tender offer est une offre d\'achat aux actionnaires.', 'Le buyback est le rachat de ses propres actions par la société.']),
    Q('What distinguishes a split-off from a spin-off?', ['In a split-off the parent company is liquidated', 'In a split-off shareholders choose to exchange parent shares for subsidiary shares', 'In a split-off the subsidiary is sold to the public for cash', 'There is no difference'], 1,
      ['C\'est la description d\'un split-up.', 'Split-off = offre d\'échange : les actionnaires qui acceptent échangent leurs titres de la mère contre ceux de la fille (rapport d\'échange).', 'C\'est un carve-out.', 'Il existe bien une différence : échange volontaire (split-off) vs distribution gratuite (spin-off).']),
    Q('Which statement about the 2023 M&A market (course 1) is correct?', ['M&A activity rose by 16%', 'M&A activity fell by about 16% to 3.1 trillion USD, with higher rates pushing smaller, targeted deals', 'M&A was unaffected by interest rates', 'SPAC mergers reached all-time highs'], 1,
      ['Inverse : l\'activité a baissé.', 'Incertitude, taux en hausse et inflation : -16 % à 3,1 Tn$ ; priorité aux opérations plus petites et stratégiques.', 'Faux : quand les taux sont bas, financer une acquisition est moins cher, donc les taux comptent beaucoup.', 'Les SPAC avaient au contraire refroidi à cause de la régulation et de la performance.']),
    Q('Who is the "process owner" of a deal on the buyer side?', ['The notary', 'The antitrust authority', 'The management / CEO, who carries the deal forward (board approves)', 'The insurance broker'], 2,
      ['Le notaire intervient à la fin pour authentifier.', 'L\'autorité antitrust est un régulateur externe.', 'Le management (ou CEO) est responsable de faire avancer le deal ; le conseil approuve.', 'Le courtier n\'a pas ce rôle.']),
    Q('Which of the following correctly describes a consolidation?', ['A company buys specific assets of another', 'Several companies combine into a NEW entity and the original companies cease to exist', 'The management buys out the company', 'A company sells a division'], 1,
      ['C\'est un asset deal.', 'Consolidation : nouvelle entité qui contrôle toutes les sociétés d\'origine, lesquelles disparaissent ; les actionnaires reçoivent cash ou actions.', 'C\'est un MBO.', 'C\'est une divestiture.'])
  ]
});
