MNA.add('c2', {
  titre: 'Class 2 – The Corporate Takeover Market',
  sous: 'Takeovers, attack tactics, anti-takeover defences, shareholder activism',
  resume: 'Hostile vs friendly, le processus de takeover, les 8 attack tactics, les defences (poison pill, white knight, greenmail…) et les activist shareholders (Icahn, Ackman).',
  sections: [
    { t: '1. What is a corporate takeover?', h: `
<p>Un <b>takeover</b> est une acquisition du <b>control</b> (majorité) d\'une target par un <b>strategic or financial buyer</b>. On le classe selon la réaction du <b>Board of Directors (BOD)</b> et du management de la target.</p>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Les 3 conditions d\'un takeover</b>
<ol><li><b>Majority</b> : le buyer vise au moins <b>50 %</b> des shares (une <b>minority stake</b> n\'est pas un takeover). Souvent l\'offer est <b>conditional</b> à l\'obtention d\'un minimum de shares (<b>conditional offer</b>).</li>
<li><b>Premium</b> payée aux selling shareholders, pour rendre l\'offer attractive (et, en hostile, diviser les shareholders).</li>
<li><b>Quick process</b> : on démarre directement par une <b>tender offer</b>, alors que le M&amp;A classique commence par NDA → NBO → DD…</li></ol></div>

<div class="tblwrap"><table>
<tr><th>Type</th><th>Definition</th></tr>
<tr><td><b>Friendly</b></td><td>Le board et le management sont d\'accord. Un <b>shareholder vote</b> reste nécessaire.</td></tr>
<tr><td><b>Hostile</b></td><td>Le board <b>refuse</b>. Le buyer persiste en passant par les shareholders (tender offer) ou par un proxy fight.</td></tr>
<tr><td><b>Reverse takeover</b></td><td>Une <b>private</b> company rachète une <b>listed</b> company pour devenir listed <b>sans IPO</b> (costly, beaucoup de paperwork).</td></tr>
<tr><td><b>Back-flip takeover</b></td><td>L\'<b>acquirer devient la subsidiary</b> de la target, qui survit (pour profiter de sa brand ou de son avantage).</td></tr>
</table></div>

<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Pourquoi les hostile takeovers sont surtout aux US et au UK ?</b>
<ul><li>Financial markets très <b>liquid</b> et deep ; regulation favorable aux tactiques de takeover.</li><li><b>Shareholder-centric governance</b> (shareholders puissants) ; <b>dispersed ownership</b> (nombreux institutional et retail investors).</li><li>US : règles de la SEC + 50 states (beaucoup de companies incorporées au <b>Delaware</b>). UK : <b>Takeover Code</b> + antitrust.</li></ul></div>` },

    { t: '2. The hostile takeover process (6 steps)', h: `
<div class="diagram"><div class="flow col">
 <div class="n"><b>1. Target identification</b>undervalued target, mal gérée ou avec des strategic assets ; on s\'attend à de la résistance</div><div class="ar">→</div>
 <div class="n"><b>2. Building a toehold</b>on achète discrètement une small stake (sans déclarer ses intentions)</div><div class="ar">→</div>
 <div class="n"><b>3. The offer</b>public offer avec premium, qui contourne le BOD ; le share price de la target grimpe</div><div class="ar">→</div>
 <div class="n red"><b>4. Target defensive actions</b>le BOD juge le price unfair et active des defences (poison pill…)</div><div class="ar">→</div>
 <div class="n"><b>5. Regulatory approval</b>antitrust (ex. European Commission)</div><div class="ar">→</div>
 <div class="n green"><b>6. Integration</b>board remplacé, layoffs, asset divestitures…</div>
</div></div>

<h3>Quelles targets attirent les buyers ? (target profiles)</h3>
<div class="tblwrap"><table>
<tr><th>Target profile</th><th>Associated takeover type</th></tr>
<tr><td>Listed company <b>underperforming</b> (poorly managed, undervalued)</td><td><b>Opportunistic takeover</b> (on parie sur un redressement)</td></tr>
<tr><td>Nearby competitor / complementary business</td><td><b>Strategic takeover</b> (enter a market, eliminate a competitor)</td></tr>
<tr><td>Company qui paie sa debt <b>trop cher</b> et pourrait être refinancée par un stronger group</td><td><b>Bailout takeover</b> (avoid bankruptcy / liquidation)</td></tr>
<tr><td>Good potential mais <b>management issues</b></td><td><b>Activist takeover</b> (replace the management team)</td></tr>
<tr><td>Unique niche ; small underfunded company</td><td>Targets classiques</td></tr>
</table></div>` },

    { t: '3. Attack tactics', h: `
<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Les 8 attack tactics (une phrase chacune)</b>
<div class="tblwrap"><table>
<tr><th>Tactic</th><th>The idea</th></tr>
<tr><td><b>Tender offer</b></td><td>Offer directe aux shareholders à un price supérieur au market, <b>sans passer par le management</b> (bypass). (Les shareholders, nombreux et rarement réunis, s\'alignent difficilement.)</td></tr>
<tr><td><b>Proxy vote / fight</b></td><td>On devient shareholder, on <b>collecte des proxies</b> (procurations) et on fait voter pour <b>remplacer le board</b> par des directors favorables.</td></tr>
<tr><td><b>Dawn raid</b></td><td>Acheter une <b>large stake</b> <b>dès l\'ouverture</b> (market open), vite et discrètement, avant que la target réagisse.</td></tr>
<tr><td><b>Creeping takeover</b></td><td>Acheter <b>gradually</b> sur le market, en évitant d\'attirer l\'attention.</td></tr>
<tr><td><b>Bear hug</b></td><td>Rendre <b>public</b> une <b>unsolicited offer</b>, sans accord du board, avec une premium importante. Le refuser est risqué pour le board (<b>fiduciary duty</b>). C\'est l\'<b>approach</b>, la tender offer est le <b>moyen</b> (means).</td></tr>
<tr><td><b>Toehold acquisition</b></td><td>Prendre une <b>small initial stake</b> (typiquement &lt; 5 % pour éviter la <b>regulatory disclosure</b>).</td></tr>
<tr><td><b>Saturday night special</b></td><td>Offer soudaine <b>pendant le week-end</b> : la target a très peu de temps pour réagir avant la réouverture des markets.</td></tr>
<tr><td><b>Third-party bid</b></td><td>S\'appuyer sur un tiers (activists, institutional investors) pour soutenir l\'offer et mettre la pression. Souvent des PE funds sur de très grosses listed companies.</td></tr>
</table></div></div>
<div class="box tip"><b>Classic trap :</b> « <b>Dawn raid</b> » = rapide, à l\'ouverture. « <b>Creeping</b> » = lent, progressif. « <b>Toehold</b> » = small initial stake. « <b>Bear hug</b> » = public unsolicited offer.</div>` },

    { t: '4. Anti-takeover defences (le gros morceau)', h: `
<p>La target utilise des <b>countermeasures</b> pour dissuader ou bloquer (deter or block) l\'attaque. À connaître : <b>le nom + le mécanisme</b>.</p>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Poison pill (Shareholder Rights Plan)</b> : si un shareholder dépasse un <b>threshold</b>, les <i>autres</i> shareholders peuvent acheter des shares <b>avec une forte discount</b> → la stake du bidder est <b>diluted</b>.
<ul><li><b>Flip-in</b> : les existing shareholders (bidder excluded) achètent des shares de <b>la target</b> à deep discount.</li><li><b>Flip-over</b> : si le takeover réussit, les shareholders de la target peuvent acheter des shares de <b>l\'acquirer</b> à deep discount.</li><li><b>People pill</b> : les key executives s\'engagent à <b>démissionner</b> (resign) en cas de hostile takeover.</li></ul></div>
<div class="diagram"><div class="flow">
 <div class="n"><b>Flip-IN</b>Threshold crossed → les shareholders achètent des shares <b>de la target</b> à deep discount<br>→ le bidder est <b>dilué</b></div>
 <div style="width:20px"></div>
 <div class="n red"><b>Flip-OVER</b>Takeover réussi → les shareholders de la target achètent des shares <b>de l\'acquirer</b> à deep discount</div>
</div><div class="cap">Flip-IN = on dilue le bidder dans la target. Flip-OVER = on dilue l\'acquirer après la merger.</div></div>

<div class="tblwrap"><table>
<tr><th>Defence</th><th>How it works</th></tr>
<tr><td><b>Crown jewel defence</b></td><td>La target peut <b>vendre ses meilleurs assets</b> en cas d\'attaque → elle devient moins attractive. <b>Last line of defence</b>.</td></tr>
<tr><td><b>Supermajority amendment</b> (« shark repellent »)</td><td>Les <b>bylaws</b> exigent une <b>supermajority</b> (67–90 %) pour approuver une merger.</td></tr>
<tr><td><b>Golden parachute</b></td><td>Contrats garantissant de très gros <b>severance packages</b> aux executives révoqués après un takeover → rend l\'opération chère.</td></tr>
<tr><td><b>Greenmail</b></td><td>La target <b>rachète à premium</b> les shares déjà acquises par le raider (ex. il a payé $15, la target les rachète $20). Il part avec un gain. Souvent accompagné d\'un <b>standstill</b>.</td></tr>
<tr><td><b>Pac-Man defence</b></td><td>La target <b>contre-attaque</b> (counter-bid) en tentant d\'acheter le bidder. Nécessite beaucoup de liquidity.</td></tr>
<tr><td><b>White knight</b></td><td>La target cherche un <b>acquirer ami</b> (plus favorable) qui fait une friendly offer concurrente.</td></tr>
<tr><td><b>Staggered board</b></td><td><b>Staggered</b> : seul ~1/3 des directors est élu chaque année → impossible de changer le board vite.</td></tr>
<tr><td><b>Dual-class shares</b> (DVR)</td><td>Deux classes de shares, une avec <b>plus de voting rights</b> : les founders gardent le control même s\'ils sont minoritaires en capital.</td></tr>
<tr><td><b>Macaroni defence</b></td><td>Émission de <b>bonds redeemable at a higher price</b> en cas de takeover → rend l\'opération plus costly.</td></tr>
<tr><td><b>Leveraged recapitalization</b></td><td>La target <b>s\'endette fortement</b> (dividends, buybacks) → moins attractive, financement plus difficile.</td></tr>
<tr><td><b>Litigation</b></td><td><b>Lawsuits</b> (antitrust, breach of fiduciary duty) pour <b>retarder ou bloquer</b>.</td></tr>
<tr><td><b>Stock repurchase</b> (self tender-offer)</td><td>La target rachète ses propres shares (nécessite beaucoup de cash).</td></tr>
<tr><td><b>Standstill agreement</b></td><td>L\'attaquant s\'engage à <b>ne pas acheter plus de shares</b> pendant une période. Accompagne souvent le greenmail.</td></tr>
<tr><td><b>Restructuring</b></td><td>Spin-offs, ventes de divisions… pour devenir moins attractive.</td></tr>
<tr><td><b>ESOP</b></td><td><b>Employee Stock Ownership Plan</b> qui « vest » lors d\'une merger : les employees votent avec le management. Les tribunaux ont parfois invalidé des ESOP défensifs faits dans l\'intérêt du management.</td></tr>
</table></div>

<div class="box tip"><b>Pour ne pas se tromper :</b> defences qui <b>rendent la target moins attractive</b> = crown jewel, leveraged recap, restructuring. Qui <b>rendent le deal plus cher</b> = golden parachute, macaroni, poison pill. Qui <b>compliquent le control</b> = staggered board, supermajority, dual-class. Qui <b>bloquent l\'attaquant</b> = greenmail, standstill, litigation, Pac-Man. Qui <b>changent de camp</b> = white knight.</div>` },

    { t: '5. Case studies (du cours)', h: `
<div class="box ex"><b>Xerox – HP (2020)</b> : Xerox lance une hostile offer (cash + shares, jusqu\'à $35bn) ; HP répond par une <b>poison pill</b> et refuse à plusieurs reprises. Xerox a fini par <b>abandonner</b> (en pleine pandémie de Covid-19). Exemple type : <i>bear hug + tender offer + proxy fight prévu</i> contre <i>poison pill</i>.</div>

<div class="box ex"><b>Intesa Sanpaolo – UBI Banca (2020)</b> : <b>tender offer 100 % en shares</b> (1.7 Intesa share pour 1 UBI share), premium &gt; 28 %. Le board d\'UBI a <b>rejeté</b> l\'offer (« inadequate »). Intesa a ajouté <b>€0.57 en cash</b> par share. Résultat : <b>91 %</b> des shareholders ont apporté leurs titres <b>sans que le board ne l\'ait jamais approuvé</b> → squeeze-out des 9 % restants, délisting puis merger par incorporation.
<ul><li>Pourquoi ce deal ? P/TBV d\'Intesa ≈ 1 vs UBI &lt; 0,5 → <b>badwill</b> (négative goodwill) utilisable pour couvrir les <b>integration costs</b>.</li><li>Thresholds : 50 % + 1 pour contrôler ; <b>66.7 %</b> pour la <b>supermajority</b> en shareholder meeting.</li></ul></div>

<div class="box ex"><b>UniCredit – Commerzbank (2024–2026)</b> : <b>progressive stake building</b> (via achat au German government lors d\'un <i>accelerated bookbuilding</i>, puis <b>derivatives</b>), jusqu\'à plus de 26 % en direct ; ECB approval pour franchir 30 % ; <b>unsolicited exchange offer</b> en 2026. Political resistance (German government) et unions inquiets (jobs). Exemple de <b>creeping/toehold</b> puis offer publique.</div>

<div class="box ex"><b>Teva – Cephalon ($6.8bn)</b> : Teva bat Valeant dans un hostile takeover. Le cours en fait une case study à lire (le texte n\'est pas dans les slides) avec 6 questions : buyers\' motivations, tactics, alternatives, Cephalon\'s defences, investor reaction, et <b>pourquoi les acquirers performent mieux quand ils paient en cash plutôt qu\'en shares</b> (émettre des shares = signal que le buyer pense que ses titres sont surévalués + dilution).</div>

<div class="box detail"><span class="badge b-detail">DETAIL</span>Dates précises, montants, noms des advisory banks, les 3 enjeux de 2026 (valuation, control, value creation) : ne pas apprendre par cœur. Pourquoi les banks sont plus faciles à racheter : due diligence plus simple (asset = deposits) et secteur très regulated donc plus transparent.</div>` },

    { t: '6. Shareholder activism', h: `
<p>Un <b>activist shareholder</b> achète une stake (hedge funds, PE, high-net-worth individuals) pour <b>influencer le board et le management</b> et faire pression publiquement (public pressure). But : financial (unlock value) ou non-financial (ESG, employee rights…).</p>
<div class="diagram"><div class="flow">
 <div class="n"><b>1. Engagement</b>meeting request avec le management/BOD</div><div class="ar">→</div>
 <div class="n"><b>2. Shareholder proposal</b>résolution <b>non-binding</b> soumise au vote</div><div class="ar">→</div>
 <div class="n yellow"><b>3. Vote "no" campaign</b>vote against directors / say-on-pay</div><div class="ar">→</div>
 <div class="n red"><b>4. Proxy contest</b>replace all or part of the board</div>
</div><div class="cap">De la moins (gauche) à la plus aggressive (droite).</div></div>

<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Une campagne « vote no » peut réussir même si le vote est perdu</b> : le support aux directors dépasse normalement 90 % ; s\'il tombe à 60-70 %, c\'est un signal fort, une media pressure et un reputational risk pour le director.</div>

<div class="tblwrap"><table>
<tr><th>Person</th><th>À retenir (key takeaway)</th></tr>
<tr><td><b>Carl Icahn</b></td><td>« Corporate raider » : hostile takeover de <b>TWA</b> (1985), revente d\'assets pour rembourser la debt (<b>asset stripping</b>). A tenté <b>U.S. Steel</b> (refused), <b>Yahoo</b> (proxy fight, failed : il n\'obtient qu\'un board seat).</td></tr>
<tr><td><b>Bill Ackman</b> (Pershing Square)</td><td>Success : <b>Canadian Pacific</b>. Failures : <b>J.C. Penney</b>, <b>Valeant</b>, short contre <b>Herbalife</b> (face à Icahn qui a pris la position inverse).</td></tr>
<tr><td><b>Michael Milken</b> (Drexel)</td><td>« <b>Junk bond king</b> » : finançait les raiders des années 80 ; condamné en 1990 pour <b>securities fraud</b>.</td></tr>
</table></div>
<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Le rôle du board face aux activists</b> : il a un <b>fiduciary duty</b>. Refuser une belle premium l\'expose à des lawsuits, proxy contests… Même un bear hug rejeté force le management à <b>expliquer pourquoi l\'offer undervalues</b> la company. Le board doit anticiper les thèmes d\'activism et dialoguer avec les shareholders.</div>` }
  ],
  retenir: `<ul>
<li>Takeover = <b>majority (≥ 50 %) + premium + quick process</b> (tender offer).</li>
<li>Hostile = le BOD refuse. Reverse takeover = private rachète listed (pour être listed sans IPO). Back-flip = l\'acquirer devient la subsidiary.</li>
<li>Attaques : tender offer, proxy fight, dawn raid, creeping, bear hug, toehold (&lt; 5 %), Saturday night special, third-party bid.</li>
<li>Poison pill : <b>flip-in</b> (dilue l\'attaquant dans la target), <b>flip-over</b> (dilue l\'acquirer après deal), <b>people pill</b> (démissions).</li>
<li><b>Greenmail</b> = la target rachète à premium les shares de l\'attaquant ; <b>Pac-Man</b> = la target attaque l\'attaquant ; <b>White knight</b> = acquirer ami ; <b>Crown jewel</b> = vente des meilleurs assets.</li>
<li>Activist escalation : engagement → proposal → vote no → proxy contest.</li></ul>`,
  qs: [
    Q('Which three conditions must be met for an operation to be considered a corporate takeover?', ['Minority stake, discount, long process', 'Majority stake, premium for target shareholders, quick process starting with a tender offer', 'Board approval, NDA, and due diligence', 'Cash payment, fairness opinion, and escrow'], 1,
      ['Un takeover vise le control (majorité) et se paie avec une premium, pas une discount.', 'Ce sont les 3 conditions : acquérir une majorité (≥ 50 %), payer une premium et aller vite (tender offer directe).', 'NDA et due diligence caractérisent un processus M&A classique, pas un takeover.', 'Ce sont des éléments de deal, pas les conditions d\'un takeover.']),
    Q('A private company buys a listed company in order to become listed without an IPO. This is a:', ['Back-flip takeover', 'Reverse takeover', 'Dawn raid', 'Bailout takeover'], 1,
      ['Dans un back-flip, l\'acquirer devient la subsidiary de la target survivante.', 'Reverse takeover : une company privée rachète une listed pour obtenir le statut coté sans IPO.', 'Dawn raid = achat massif à l\'ouverture du market.', 'Bailout = sauvetage d\'une target en difficulté.']),
    Q('In a back-flip takeover:', ['The target is absorbed and disappears', 'The acquirer becomes a subsidiary of the target, which is the surviving entity', 'The board of the target is replaced immediately', 'The acquirer buys only assets'], 1,
      ['C\'est le cas classique d\'acquisition.', 'Back-flip : la target survit (souvent plus grande marque ou avantage) et l\'acquirer devient sa subsidiary.', 'Cela concerne l\'intégration, pas le back-flip.', 'Rien à voir avec un asset deal.']),
    Q('Why are hostile takeovers most common in the US and the UK?', ['Because boards have no fiduciary duties there', 'Because of liquid markets, favourable takeover regulation, shareholder-centric governance and dispersed ownership', 'Because banks own most listed companies', 'Because antitrust rules do not apply'], 1,
      ['Les conseils ont bien des fiduciary duties.', 'Markets liquides et sécurisés, governance centrée sur les shareholders et actionnariat dispersé : terrain favorable aux Tender offer hostiles.', 'C\'est plutôt un trait d\'autres modèles ; l\'actionnariat y est dispersé.', 'L\'antitrust s\'applique (UK : Takeover Code + antitrust).']),
    Q('A toehold acquisition is:', ['A sudden offer made over the weekend', 'A small initial stake, typically below 5%, bought to avoid disclosure', 'The purchase of control at the market opening', 'A defensive tactic of the target'], 1,
      ['C\'est le « Saturday night special ».', 'Toehold : petite participation de départ (< 5 %) pour rester sous le seuil de déclaration et préparer la suite.', 'C\'est le « dawn raid ».', 'C\'est une tactique d\'attaque, pas de défense.']),
    Q('A bidder buys a large stake in the very first minutes of the trading day, before the target can react. This is a:', ['Creeping takeover', 'Dawn raid', 'Bear hug', 'Proxy fight'], 1,
      ['Le creeping est progressif et dure longtemps.', 'Dawn raid : achat massif rapide dès l\'ouverture.', 'Le bear hug est une offer publique non sollicitée.', 'Le proxy fight vise à faire voter les shareholders.']),
    Q('Which tactic consists of making an unsolicited offer public, without the board\'s prior consent, at a significant premium?', ['Bear hug', 'Greenmail', 'Pac-Man', 'Macaroni'], 0,
      ['Bear hug : l\'offer est rendue publique pour mettre la pression sur le conseil, qui risque des poursuites s\'il refuse une belle premium.', 'Le greenmail est une défense : la target rachète à premium les titres de l\'attaquant.', 'Le Pac-Man est une défense : la target attaque l\'attaquant.', 'Le macaroni est une défense par obligations à remboursement plus cher.']),
    Q('What is the main objective of a proxy fight?', ['To buy shares secretly', 'To gather proxies from shareholders and vote to replace the target\'s board', 'To force the target to repurchase the bidder\'s shares', 'To obtain antitrust clearance'], 1,
      ['Acheter discrètement, c\'est le creeping/toehold.', 'Proxy fight : on collecte des procurations pour remplacer le conseil par des administrateurs favorables à l\'opération.', 'C\'est le greenmail.', 'Rien à voir avec l\'antitrust.']),
    Q('In a "flip-in" poison pill:', ['Target shareholders may buy the acquirer\'s shares at a deep discount after the merger', 'Existing shareholders, except the bidder, may buy new target shares at a discount once a threshold is crossed', 'Key managers agree to resign', 'The target sells its crown jewels'], 1,
      ['C\'est le flip-over (après la merger, titres de l\'acquirer).', 'Flip-in : l\'attaquant est exclu et se retrouve dilué dans la target.', 'C\'est la people pill.', 'C\'est la crown jewel defence.']),
    Q('In a "flip-over" poison pill:', ['Existing shareholders buy target shares at a discount before the bid', 'Target shareholders may buy the acquirer\'s stock at a deeply discounted price if the takeover goes through', 'The board is replaced', 'The bidder is forced to stop buying shares'], 1,
      ['Ça, c\'est le flip-in (avant le succès du deal).', 'Flip-over : si la prise de control réussit, les shareholders de la target achètent des shares de l\'acquirer à price cassé, ce qui dilue l\'acquirer.', 'Rien à voir avec le renouvellement du conseil.', 'C\'est un standstill agreement.']),
    Q('The target buys back the shares that the raider acquired, at a price above what the raider paid, to get rid of him. This is called:', ['White knight', 'Greenmail', 'Pac-Man defence', 'Crown jewel defence'], 1,
      ['Le white knight est un acquirer ami venant à la rescousse.', 'Greenmail : rachat à premium des titres de l\'attaquant pour le faire partir (souvent avec un standstill).', 'Le Pac-Man est une contre-Tender offer sur l\'attaquant.', 'Le crown jewel est la vente de ses meilleurs assets.']),
    Q('Which defence involves the target attempting to take over the bidder?', ['Pac-Man defence', 'Golden parachute', 'Staggered board', 'Standstill agreement'], 0,
      ['Pac-Man : la target retourne la situation en rachetant des shares de l\'attaquant. Il faut beaucoup de capitaux.', 'Le golden parachute indemnise les executives.', 'Le staggered board échelonne le renouvellement du conseil.', 'Le standstill est un engagement de l\'attaquant de ne plus acheter.']),
    Q('A staggered board makes a hostile takeover harder because:', ['Directors can sell the company\'s assets', 'Only a fraction (typically 1/3) of the directors is up for election each year', 'It requires a 90% vote', 'It gives some shareholders more votes'], 1,
      ['Rien à voir : c\'est le crown jewel.', 'Conseil échelonné : l\'attaquant ne peut pas remplacer rapidement tout le conseil.', 'Ça, c\'est la supermajority amendment.', 'Ça, c\'est le dual-class share structure.']),
    Q('Which defence allows founders to keep control even if they hold a minority of the capital?', ['Dual-class share structure', 'Macaroni defence', 'Litigation', 'Stock repurchase'], 0,
      ['Les shares à droits de vote différenciés donnent plus de voix à certaines shares, donc le control aux fondateurs.', 'Le macaroni renchérit le cost d\'un takeover via des obligations.', 'La litigation attaque en justice.', 'Le rachat de shares réduit le flottant, ne donne pas de droits de vote supplémentaires.']),
    Q('A supermajority amendment (shark repellent) typically requires:', ['A simple majority of directors', '67% to 90% of the shares to approve a merger', 'Approval from the antitrust authority', 'Unanimous consent of employees'], 1,
      ['Il s\'agit d\'une majorité des shares, qualifiée.', 'Les statuts exigent une majorité qualifiée (67-90 %) pour approuver une merger.', 'L\'antitrust est une autre procédure.', 'Les employees ne votent pas ici.']),
    Q('Which defence consists of issuing bonds that must be redeemed at a higher price if a takeover occurs?', ['Macaroni defence', 'Leveraged recapitalization', 'ESOP', 'White knight'], 0,
      ['Macaroni : remboursement anticipé à un price plus élevé en cas de takeover, ce qui renchérit l\'opération.', 'La leveraged recap fait emprunter pour verser dividends/rachats.', 'L\'ESOP vise les employees shareholders.', 'Le white knight est un acquirer ami.']),
    Q('Why would a target adopt a leveraged recapitalization?', ['To attract an additional bidder', 'To increase its debt (dividends / buybacks) and become less attractive or less financeable for the acquirer', 'To obtain more voting rights for insiders', 'To eliminate its tax shield'], 1,
      ['Non : le but est de décourager.', 'Debt massive : l\'acquirer hérite d\'un bilan lourd et d\'un financement plus difficile.', 'Ça, c\'est le dual-class.', 'Au contraire, la debt augmente le bouclier fiscal des interest.']),
    Q('A standstill agreement:', ['Obliges the bidder not to acquire any more target shares for a given period', 'Forces the target to sell assets', 'Is a type of poison pill', 'Prevents the target from issuing shares'], 0,
      ['Le bidder s\'engage à ne plus acheter de shares pendant une durée donnée (souvent avec le greenmail).', 'Aucun rapport avec les ventes d\'assets.', 'Ce n\'est pas une poison pill.', 'Elle concerne l\'attaquant, pas les émissions de la target.']),
    Q('The "crown jewel defence" is:', ['Selling the target\'s most valuable assets in case of a hostile attempt, to make it less attractive', 'Issuing shares to employees', 'Asking a friendly buyer to bid', 'Giving managers large severance'], 0,
      ['Crown jewel : on vend ses meilleurs assets, donc la target perd son intérêt stratégique. Dernière ligne de défense.', 'C\'est un ESOP.', 'C\'est le white knight.', 'C\'est le golden parachute.']),
    Q('Which defence involves finding a friendly third party to make a competing offer?', ['White knight', 'Greenmail', 'Dawn raid', 'People pill'], 0,
      ['White knight : acquirer plus favorable qui évite le control de l\'attaquant hostile.', 'Greenmail = rachat à premium de ses titres.', 'Dawn raid est une attaque.', 'La people pill est la démission des executives.']),
    Q('A golden parachute is intended to:', ['Dilute the acquirer', 'Make the takeover prohibitively expensive via large payments to removed executives', 'Block the vote of shareholders', 'Increase the target\'s dividends'], 1,
      ['La dilution est le rôle de la poison pill.', 'Gros bonus/indemnités/stock options aux executives révoqués après un takeover, ce qui renchérit l\'opération.', 'Cela ne bloque pas le vote.', 'Aucun lien avec les dividends.']),
    Q('What happened in the Intesa Sanpaolo – UBI Banca takeover?', ['The UBI board approved the offer, then shareholders voted', 'Despite the UBI board rejecting the offer, 91% of shareholders tendered their shares, leading to a squeeze-out of the rest', 'Intesa abandoned the bid after a poison pill', 'The deal was cash-only'], 1,
      ['Le conseil d\'UBI n\'a jamais approuvé l\'offer.', 'Le conseil a rejeté l\'offer, mais 91 % des shareholders ont apporté ; Intesa a dû racheter les 9 % restants (squeeze out).', 'C\'est le dénouement de Xerox/HP, pas d\'Intesa/UBI.', 'L\'offer initiale était en shares (puis complétée de 0,57 € en cash).']),
    Q('What was the outcome of Xerox\'s hostile bid for HP?', ['HP accepted a higher offer', 'HP adopted a poison pill and Xerox eventually abandoned the bid (citing Covid-19)', 'Xerox obtained control through a proxy fight', 'The deal closed in 2021'], 1,
      ['HP a refusé plusieurs offers.', 'HP a répondu par une poison pill ; Xerox a abandonné son hostile offer après l\'épidémie de coronavirus.', 'Le proxy fight n\'a jamais eu lieu (assemblée de mai 2020).', 'Pas de closing.']),
    Q('Which of the following is the LEAST aggressive tactic used by activist shareholders?', ['Proxy contest', 'Vote "no" campaign', 'Shareholder engagement (a request to meet management)', 'Hostile tender offer'], 2,
      ['Le proxy contest est la tactique la plus agressive.', 'La campagne « vote no » est plus agressive que l\'engagement.', 'L\'engagement (rencontre avec le management et le conseil) est la plus douce.', 'L\'hostile offer est très agressive.']),
    Q('Why can a "vote no" campaign be considered a success even if the vote does not fail?', ['It automatically replaces the board', 'Support is normally above 90%; a drop to 60–70% sends a strong message and creates media and reputational pressure', 'It is legally binding', 'It cancels the director\'s mandate'], 1,
      ['Non, ce n\'est pas un remplacement automatique.', 'Les directeurs sont normalement réélus à plus de 90 % ; un score bien plus bas est un signal de défiance.', 'Le vote est consultatif/électoral, pas une sanction automatique.', 'Le mandat n\'est pas annulé tant que le vote n\'échoue pas.']),
    Q('A shareholder proposal is:', ['A binding order to the board', 'A non-binding resolution submitted to the shareholders\' vote', 'A tender offer', 'A proxy contest'], 1,
      ['Ce n\'est pas contraignant.', 'Proposal : résolution non-binding sur la procuration, souvent un premier pas pour ouvrir le dialogue.', 'Une tender offer est une offer d\'achat.', 'Le proxy contest vise à remplacer les administrateurs.']),
    Q('Carl Icahn\'s takeover of TWA is mainly known as an example of:', ['A friendly merger', 'A corporate raider selling assets (asset stripping) to repay the debt used for the purchase', 'A reverse takeover', 'A leveraged recap'], 1,
      ['Pas amical.', 'Icahn a revendu des assets pour rembourser la debt de l\'achat : « asset stripping ».', 'Pas un reverse takeover.', 'La leveraged recap est une défense, pas une attaque.']),
    Q('Michael Milken is associated with:', ['The Pac-Man defence', 'High-yield (junk) bond financing of 1980s raiders and a conviction for securities fraud', 'The creation of the poison pill', 'The activist campaign at Canadian Pacific'], 1,
      ['Ce n\'est pas lui qui l\'a inventée.', 'Milken, via Drexel, finançait les raiders par des junk bonds ; condamné en 1990.', 'La poison pill n\'est pas son invention.', 'Canadian Pacific : Bill Ackman.']),
    Q('The board of a target refuses a high-premium bear hug without engaging. What risk does it face?', ['None, since boards decide freely', 'Lawsuits, proxy contests and other shareholder activism, given its fiduciary duty to shareholders', 'Automatic loss of listing', 'A mandatory squeeze-out'], 1,
      ['Faux : le conseil a des fiduciary duties.', 'Refuser une belle premium sans explication expose à poursuites et proxy contests ; il doit au moins expliquer pourquoi l\'offer sous-évalue la company.', 'Pas de perte automatique de cotation.', 'Un squeeze-out dépend des seuils d\'acceptation, pas du refus.']),
    Q('Why do acquirers tend to perform better when they pay in cash rather than equity (Teva – Cephalon case question)?', ['Because cash is cheaper than debt', 'Because issuing equity can signal that the acquirer thinks its shares are overvalued and dilutes existing holders', 'Because cash deals avoid antitrust review', 'Because cash is tax-free for the target'], 1,
      ['Non, le cash peut venir de la debt.', 'Émettre des shares signale souvent que l\'acquirer juge ses titres chers, et dilue les shareholders ; le cash est plutôt un signal de confiance.', 'L\'antitrust s\'applique aux deux.', 'Le cash n\'est pas exonéré de tax pour la target.']),
    Q('Which target profile corresponds to a "bailout takeover"?', ['A well-run niche company', 'A company struggling to repay costly debt that a stronger company can refinance, preventing bankruptcy', 'A company with a strong brand', 'A company with a dual-class structure'], 1,
      ['Une niche saine ne relève pas du bailout.', 'Bailout takeover : le groupe plus solide refinance la debt et évite la faillite/liquidation.', 'La marque forte évoque plutôt un back-flip.', 'Le dual-class est une défense.'])
  ]
});
