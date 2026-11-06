MNA.add('c5', {
  titre: 'Cours 5 – Valorisation intrinsèque',
  sous: 'DCF, WACC, CAPM, bêta, valeur terminale, flux de trésorerie, passage de l\'EV à l\'equity value',
  resume: 'Comment valoriser une entreprise par ses flux futurs actualisés : Gordon, DCF, WACC, coût des fonds propres (CAPM), bêta, valeur terminale, FCFF/FCFE et pont EV → fonds propres.',
  sections: [
    { t: '1. Valorisation : à quoi ça sert, quelles familles de méthodes ?', h: `
<p>Valoriser, c\'est estimer ce que vaut une entreprise. Trois approches « acceptables » : <b>income approach</b> (flux futurs), <b>market approach</b> (comparables) et <b>asset approach</b> (actifs). Ce cours porte sur la première, dite <b>intrinsèque</b>.</p>
<div class="diagram"><div class="cols">
 <div class="col-box green"><h4>Income-based (intrinsèque)</h4><ul><li><b>DCF</b> (discounted free cash flow)</li><li><b>Capitalization of earnings / EPV</b></li></ul></div>
 <div class="col-box"><h4>Market-based</h4><ul><li>Multiples de sociétés comparables</li><li>Multiples de transactions comparables</li><li>Valeur de marché (cotées)</li><li>Prix d\'un investissement récent, rule of thumb</li></ul></div>
 <div class="col-box yellow"><h4>Asset-based</h4><ul><li>Valeur comptable (tangible)</li><li>Valeur de liquidation</li><li>Valeur de remplacement</li><li>Sum-of-the-parts (SOTP)</li></ul></div>
</div></div>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Objectif de la valorisation selon le contexte</b>
<ul><li><b>M&amp;A</b> : outil de négociation ; le prix réel inclut la <b>valeur stratégique</b> pour un acheteur et la concurrence entre acheteurs.</li><li><b>IPO</b> : <b>sans prime de contrôle ni synergies</b>, mais avec une <b>décote d\'introduction (IPO discount)</b> (greenshoe pour le syndicat).</li><li><b>PE &amp; VC</b> : on part de la <b>valeur de sortie (exit value)</b> pour atteindre un <b>TRI/IRR</b> cible (selon ce que veulent les LPs).</li><li><b>Auto-diagnostic</b> : planification stratégique, mesure de la valeur créée.</li></ul></div>

<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Les mythes</b> (à connaître pour l\'examen) : toute valorisation est <b>biaisée</b> (la direction et l\'ampleur du biais dépendent de qui paie le valorisateur) ; il n\'y a <b>pas de valorisation précise</b> ; les modèles plus simples marchent souvent mieux que les complexes. La valorisation est « un art », pas une science exacte.</div>

<h3>Value vs Price</h3>
<div class="tblwrap"><table>
<tr><th>Value (valeur)</th><th>Price (prix)</th></tr>
<tr><td>Estimation de la valeur <b>intrinsèque</b> (actifs, cash-flows, croissance, risque). <b>Subjective</b> : diffère selon l\'acheteur (synergies, stratégie).</td><td>Montant <b>effectivement convenu</b> entre acheteur et vendeur, après négociation. Influencé par le marché, la concurrence, l\'urgence.</td></tr>
</table></div>
<p><i>« Price is what you pay, value is what you get. »</i> Le prix peut dépasser la valeur dans un marché chaud (forte demande) et lui être inférieur en période de crise.</p>

<div class="box ex"><b>Pourquoi un acheteur et un vendeur ne s\'accordent pas ?</b> Cash flow = 100 ; taux 10 %.
<ul><li>Acheteur : croissance 4 % → valeur = 100 / (10 % − 4 %) = <b>1 667</b>.</li><li>Vendeur : croissance 5 % → valeur = 100 / (10 % − 5 %) = <b>2 000</b>.</li></ul>
La plupart des écarts de valorisation viennent de <b>désaccords sur la croissance future</b>.</div>` },

    { t: '2. Les méthodes à base de revenus : Zero / Constant / Variable growth', h: `
<p>Principe : une entreprise vaut la <b>valeur actuelle de ses flux futurs</b>. Un euro aujourd\'hui vaut plus qu\'un euro demain (valeur temps de l\'argent), donc on <b>actualise</b>.</p>
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>Zero growth (Capitalization of earnings)</h4>
  <div class="formula">Value = CF / r<small>flux constants à perpétuité</small></div>
  <p>Simple mais <b>rigide</b> : suppose une croissance stable, ne tient pas compte de la volatilité. Convient à une entreprise <b>rentable et stable</b>. Dépend des conventions comptables.</p></div>
 <div class="col-box green"><h4>Constant growth (Gordon Growth)</h4>
  <div class="formula">P₀ = FCFF₁ / (WACC − g)<small>FCFF₁ = FCFF₀ × (1 + g)</small></div>
  <p>Pour des sociétés <b>matures</b>, à croissance prévisible (agro, cosmétique…). <b>Condition : WACC &gt; g</b>.</p></div>
 <div class="col-box yellow"><h4>Variable growth = DCF</h4>
  <p>Période de <b>forte croissance</b> (explicite) puis période de <b>croissance stable</b> (valeur terminale). Utile quand la croissance est irrégulière.</p>
  <div class="formula" style="font-size:16px">P₀ = Σ FCFFₜ/(1+WACC)ᵗ + Pₙ/(1+WACC)ⁿ</div></div>
</div></div>
<div class="box ex"><b>Exemple Gordon</b> : FCFF₁ = 50 ; WACC = 10 % ; g = 2 % → Valeur = 50 / (0,10 − 0,02) = <b>625</b>.</div>
<div class="box tip"><b>Astuce :</b> plus g se rapproche du taux d\'actualisation, plus la valeur explose. Si g ≥ r, la formule n\'a plus de sens.</div>` },

    { t: '3. Le DCF (Discounted Cash Flow) : le principe', h: `
<div class="diagram"><div class="flow">
 <div class="n"><b>Année 1</b>FCF₁</div><div class="ar">→</div>
 <div class="n"><b>Année 2</b>FCF₂</div><div class="ar">→</div>
 <div class="n"><b>…</b></div><div class="ar">→</div>
 <div class="n"><b>Année N</b>FCFₙ</div><div class="ar">→</div>
 <div class="n yellow"><b>Terminal Value</b>TV (au-delà de N)</div>
</div>
<div class="flow" style="margin-top:8px"><div class="n green" style="max-width:none;width:90%"><b>Valeur</b> = Σ FCFₜ/(1+r)ᵗ + TV/(1+r)ᴺ &nbsp;→ on actualise tout au taux r (WACC si on actualise le FCFF)</div></div></div>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Il faut estimer 3 choses</b> : la <b>durée de vie</b> de l\'actif, les <b>flux de trésorerie</b> sur cette durée, et le <b>taux d\'actualisation</b>.
<ul><li><b>Proposition 1</b> : pour qu\'un actif ait de la valeur, ses flux attendus doivent être positifs à un moment.</li><li><b>Proposition 2</b> : les actifs qui génèrent des flux <b>tôt</b> valent plus que ceux qui en génèrent tard (qui compensent éventuellement par plus de croissance).</li></ul></div>

<div class="tblwrap"><table>
<tr><th>Avantages</th><th>Inconvénients</th></tr>
<tr><td>Valorisation <b>intrinsèque</b>, indépendante des modes du marché · applicable à de nombreux projets dès qu\'on peut estimer les flux</td><td>Repose sur des <b>estimations</b> (pas de chiffres réels), facilement <b>manipulables</b> · sensible aux changements économiques imprévus · à ne pas utiliser <b>seule</b> (compléter par des méthodes relatives)</td></tr>
</table></div>` },

    { t: '4. Le taux d\'actualisation : WACC', h: `
<div class="formula">WACC = Ke × E/(D+E) + Kd × (1 − t) × D/(D+E)<small>E = valeur de marché des fonds propres · D = valeur de marché de la dette · t = taux d\'impôt marginal</small></div>
<ul>
<li>Le WACC = rendement <b>minimum exigé par l\'ensemble des investisseurs</b> (actionnaires + prêteurs).</li>
<li>Les poids utilisent les <b>valeurs de marché</b> (pas comptables) : on émet des titres au prix du marché. Cela crée une certaine circularité.</li>
<li>La dette est <b>déductible fiscalement</b> → on utilise Kd × (1 − t) (<b>tax shield</b>). Les dividendes préférentiels, eux, ne sont <b>pas déductibles</b>.</li>
</ul>
<div class="box ex"><b>Exemple</b> : E = 600, D = 400, Ke = 10 %, Kd = 5 %, t = 25 %.<br>WACC = 0,6 × 10 % + 0,4 × 5 % × (1 − 0,25) = 6 % + 1,5 % = <b>7,5 %</b>.</div>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Règles de pouce sur le WACC</b> (toutes choses égales par ailleurs)
<div class="tblwrap"><table>
<tr><th>Si…</th><th>WACC</th><th>Pourquoi</th></tr>
<tr><td>Plus de <b>dette</b></td><td>↓ (puis ↑ au-delà d\'un seuil)</td><td>Dette moins chère que les fonds propres ; mais trop de dette = risque de faillite qui renchérit tout</td></tr>
<tr><td>Plus d\'<b>actions préférentielles</b></td><td>↓ en général</td><td>Moins chères que les actions ordinaires</td></tr>
<tr><td>Taux d\'intérêt de la dette ↑</td><td>↑</td><td>Kd augmente</td></tr>
<tr><td><b>Impôt</b> plus élevé</td><td>↓</td><td>Bouclier fiscal de la dette plus grand</td></tr>
<tr><td>Société <b>plus petite</b> ou secteur plus risqué (tech, start-up)</td><td>↑</td><td>Bêta et risque de crédit plus élevés</td></tr>
<tr><td><b>Marché émergent</b></td><td>↑</td><td>Risque pays, politique, devise</td></tr>
<tr><td>Marchés de capitaux efficients</td><td>↓</td><td>Financement moins cher</td></tr>
</table></div></div>
<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Plus de dette → Ke monte, WACC baisse.</b> Les actionnaires sont plus exposés au risque de défaut donc exigent plus (Ke ↑) ; mais la dette (moins chère, déductible) prend plus de poids et fait baisser le WACC global.</div>` },

    { t: '5. Le coût des fonds propres (Ke) : CAPM, taux sans risque, prime, bêta', h: `
<div class="formula">Ke = Rf + β × (Rm − Rf)<small>Rf = taux sans risque · β = bêta · (Rm − Rf) = prime de risque de marché (MRP)</small></div>
<div class="box ex"><b>Exemple</b> : Rf = 3 % ; β = 1,2 ; MRP = 5 % → Ke = 3 % + 1,2 × 5 % = <b>9 %</b>.</div>

<h3>Le taux sans risque (Rf)</h3>
<div class="diagram"><div class="flow">
 <div class="n"><b>Long terme</b>obligation d\'État à <b>10 ans</b></div><div class="ar">+</div>
 <div class="n"><b>Sans défaut</b>pays développé bien noté</div><div class="ar">+</div>
 <div class="n"><b>Même devise</b>que les flux (USD pour une société US) et même nature (réel/nominal)</div>
</div></div>
<ul>
<li>Un taux d\'État n\'est pas toujours sans risque : <b>Inde 2010 : taux 8 % − spread de défaut 3 % = Rf de 5 %</b> en roupies. Pour un pays émergent, on prend un pays développé proche et on ajoute une prime de risque pays.</li>
<li><b>Rf ↑ → Ke ↑</b> (les investisseurs exigent plus des actifs risqués).</li>
</ul>

<h3>La prime de risque de marché (MRP) et l\'ERP</h3>
<ul>
<li><b>MRP</b> = rendement attendu du marché − Rf. Valeurs usuelles : de 3 % à 10 % ; ~<b>5,5 %</b> aux États-Unis sur la dernière décennie. Estimée en historique (moyenne <b>géométrique</b>) ou en <b>implicite</b> (iMRP, prospective).</li>
<li><b>ERP</b> (prime d\'un titre) = <b>β × MRP</b>. Donc Ke = Rf + ERP.</li>
</ul>

<h3>Le bêta (β) : le risque systématique</h3>
<div class="tblwrap"><table>
<tr><th>β</th><th>Signification</th></tr>
<tr><td><b>1</b></td><td>Évolue comme le marché (marché +10 % → action +10 %)</td></tr>
<tr><td><b>2</b></td><td>Deux fois plus volatile (marché +10 % → action +20 % ; marché −10 % → −20 %)</td></tr>
<tr><td><b>0</b></td><td>Non corrélé au marché</td></tr>
<tr><td><b>−1</b></td><td>Évolue à l\'inverse du marché (très rare en pratique)</td></tr>
</table></div>
<p>Le bêta ne mesure que le <b>risque systématique</b> (non diversifiable : macro, taux, inflation, change). Le risque <b>spécifique</b> à l\'entreprise se diversifie : le marché ne le rémunère pas. Le bêta dépend de la <b>cyclicité du secteur</b>, du <b>levier opérationnel</b> (coûts fixes) et du <b>levier financier</b> (dette).</p>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Levered vs Unlevered beta</b>
<div class="formula">β<sub>L</sub> = β<sub>U</sub> × [1 + (1 − t) × D/E]<small>β<sub>U</sub> = β<sub>L</sub> / [1 + (1 − t) × D/E]</small></div>
<ul><li><b>β<sub>U</sub></b> (sans dette) = risque d\'<b>activité</b> seul. <b>β<sub>L</sub></b> = activité + risque lié à la dette (donc β<sub>L</sub> &gt; β<sub>U</sub> dès qu\'il y a de la dette).</li><li><b>Méthode bottom-up</b> : ① choisir des comparables ② <b>désendetter</b> (unlever) leurs bêtas, faire la moyenne/médiane ③ <b>réendetter</b> (relever) avec le D/E et le taux d\'impôt de la cible.</li><li>Méthode <b>régression</b> : bêta = pente de la droite reliant les rendements du titre à ceux du marché sur 3-5 ans (inconvénient : historique, forte erreur standard).</li></ul></div>
<div class="box ex"><b>Exemples</b> : β<sub>U</sub> = 0,8 ; D/E = 1 ; t = 25 % → β<sub>L</sub> = 0,8 × (1 + 0,75 × 1) = <b>1,4</b>.<br>β<sub>L</sub> = 1,4 ; D/E = 0,5 ; t = 20 % → β<sub>U</sub> = 1,4 / (1 + 0,8 × 0,5) = 1,4 / 1,4 = <b>1,0</b>.</div>

<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Critiques du CAPM/bêta</b> : (1) calculé sur le passé, (2) structure financière qui change dans le temps, (3) ne capte que le risque systématique, (4) d\'autres facteurs expliquent les rendements → <b>modèles multifactoriels</b> (Fama-French : taille, value, momentum, qualité…).<br><b>Size premium</b> : on ajoute une prime pour les petites sociétés : <b>Ke = Rf + β(Rm − Rf) + FSP</b> (FSP : 0 % pour les très grosses capitalisations, jusqu\'à ~7 % pour les très petites).</div>

<h3>Règles de pouce sur le Ke</h3>
<ul>
<li>↑ si : société petite à forte croissance, marché émergent, <b>fort levier</b>, bêta élevé, mauvaise gouvernance, marchés baissiers, société non cotée, pas de dividendes.</li>
<li>Plus de dette → <b>Ke ↑</b> ; plus de fonds propres → Ke ↓. Toujours <b>Ke &gt; Kd</b> (les actionnaires sont derniers servis en cas de faillite).</li>
</ul>` },

    { t: '6. Le coût de la dette (Kd) et le taux d\'impôt', h: `
<p><b>Dette</b> = toute dette portant intérêt (court et long terme) + toutes les obligations de <b>leasing</b> (opérationnel ou financier). Caractéristiques : paiements fixes, <b>déductibles fiscalement</b>, défaut en cas de non-paiement.</p>
<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Comment estimer Kd (3 cas)</b>
<ol><li>La société a des obligations cotées : utiliser leur <b>yield to maturity</b> (long terme, « straight bond »). Si privée : rendement d\'obligations de sociétés comparables.</li><li>La société est <b>notée</b> : taux sans risque + <b>spread de défaut</b> correspondant à la note.</li><li>Non notée : emprunt bancaire récent, ou <b>note synthétique</b> estimée à partir de l\'<b>Interest Coverage Ratio</b> :
<div class="formula">ICR = EBIT / Charges d\'intérêts<small>plus l\'ICR est élevé → meilleure note → spread plus faible</small></div></li></ol>
Kd doit être dans la <b>même devise</b> que Ke et que les flux.</div>
<div class="box ex">ICR : EBIT = 200 et intérêts = 50 → ICR = <b>4</b> (note A- environ, spread ~1,2 %). ICR = 1,5 → note B (spread ~3,6 % ou plus).</div>

<h3>Quel taux d\'impôt pour le WACC ?</h3>
<div class="tblwrap"><table>
<tr><th>Taux</th><th>Définition</th></tr>
<tr><td><b>Effective</b></td><td>Impôt payé / résultat : moyenne <b>historique</b></td></tr>
<tr><td><b>Marginal</b></td><td>Taux sur le <b>dernier euro</b> de bénéfice</td></tr>
<tr><td><b>Normalised</b></td><td>Taux lissé des éléments exceptionnels</td></tr>
</table></div>
<div class="box must"><span class="badge b-must">À SAVOIR</span>Pour le WACC on utilise le taux d\'impôt <b>marginal futur</b> : il reflète l\'économie d\'impôt sur la dette supplémentaire (le WACC est tourné vers l\'avenir). Pour une société internationale : moyenne pondérée par la répartition géographique du chiffre d\'affaires.</div>` },

    { t: '7. La valeur terminale (Terminal Value)', h: `
<p>Une entreprise ne s\'arrête pas au bout de 5-10 ans. On projette précisément les flux sur une <b>période explicite</b>, puis on résume tout le reste par une <b>valeur terminale (TV)</b>, qui est <b>la plus grosse composante du DCF</b>.</p>
<div class="formula">TV = FCF<sub>N</sub> × (1 + g) / (r − g)<small>modèle de Gordon · puis on actualise : TV / (1 + r)ᴺ</small></div>
<div class="box ex"><b>Exemple</b> : FCF de la dernière année = 200 ; g = 3 % ; r = 10 % → TV = 200 × 1,03 / 0,07 = <b>≈ 2 943</b> (à actualiser sur N années).</div>
<div class="tblwrap"><table>
<tr><th>Méthode de TV</th><th>Idée</th></tr>
<tr><td><b>Multiple approach</b></td><td>On suppose une revente à un multiple (ex. de l\'EBITDA). Plus simple, mais le multiple futur est incertain → on montre une <b>fourchette</b> (table de sensibilité).</td></tr>
<tr><td><b>Stable growth (Gordon)</b></td><td>Techniquement la plus solide : suppose une croissance éternelle stable.</td></tr>
<tr><td><b>Liquidation value</b></td><td>Utile si les actifs sont séparables et revendables un à un.</td></tr>
</table></div>
<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Le taux de croissance stable (g)</b>
<ul><li><b>Ne peut pas dépasser la croissance de l\'économie</b> dans laquelle opère la société (pour une multinationale : celle de l\'économie mondiale). Souvent entre la croissance du PIB et l\'inflation.</li><li>Peut être <b>négatif</b> (société qui disparaît progressivement).</li><li>En flux nominaux, g est nominal. Proxy : inflation attendue + taux réel attendu.</li><li>En croissance stable : bêta → <b>1</b>, coût de la dette = société solide (BBB ou mieux), endettement vers la moyenne du secteur, rendement du capital soutenable.</li></ul></div>
<div class="box know"><span class="badge b-know">À COMPRENDRE</span><b>Ce qui pèse le plus dans un DCF</b> : le <b>taux d\'actualisation</b> et la <b>valeur terminale</b>. 1 % de plus ou de moins sur le taux a bien plus d\'impact que 1 % sur la croissance du CA ou sur les marges, car il affecte tous les flux. Plus la croissance actuelle est élevée par rapport à g, plus la période de forte croissance sera longue (taille, barrières à l\'entrée).</div>` },

    { t: '8. Quels flux de trésorerie ? EBITDA, OCF, FCF, FCFE, FCFF', h: `
<div class="tblwrap"><table>
<tr><th>Mesure</th><th>Définition</th><th>À savoir</th></tr>
<tr><td><b>EBITDA</b></td><td>Résultat net + impôts + intérêts + D&amp;A</td><td>Approximation du cash, comparaison entre sociétés d\'un même secteur. <b>Mais</b> ignore CapEx et variation du fonds de roulement. Buffett : « ce n\'est pas du cash ».</td></tr>
<tr><td><b>OCF</b> (cash flow d\'exploitation)</td><td>Résultat net + D&amp;A + autres éléments non cash − variation du BFR</td><td>Part du résultat net (intérêts déjà pris en compte).</td></tr>
<tr><td><b>FCF</b></td><td><span class="f">FCF = OCF − CapEx</span></td><td>Cash « libre » pour le management. Diffère du cash flow d\'investissement (qui inclut cessions, acquisitions…).</td></tr>
<tr><td><b>FCFE</b> (levered)</td><td>FCF + dette émise − remboursements de principal</td><td>Cash disponible pour les <b>actionnaires</b> (après service de la dette). On l\'actualise au <b>Ke</b> → donne directement l\'<b>equity value</b>.</td></tr>
<tr><td><b>FCFF</b> (unlevered)</td><td>Cash disponible pour <b>tous</b> les apporteurs de capitaux (actionnaires + prêteurs), avant dette. Formule usuelle : EBIT × (1 − t) + D&amp;A − CapEx − Δ BFR</td><td>Ignore la structure du capital (rend les sociétés comparables). On l\'actualise au <b>WACC</b> → donne l\'<b>Enterprise Value</b>.</td></tr>
</table></div>
<div class="diagram"><div class="cols">
 <div class="col-box green"><h4>FCFF + WACC</h4><p>→ <b>Enterprise Value</b></p><p>Puis on soustrait la dette nette etc. pour obtenir l\'equity value.</p></div>
 <div class="col-box yellow"><h4>FCFE + Ke</h4><p>→ <b>Equity Value</b> directement</p><p>Nécessite de suivre dette et cash année par année.</p></div>
</div><div class="cap">Règle de cohérence : le taux d\'actualisation doit correspondre aux investisseurs qui perçoivent le flux.</div></div>` },

    { t: '9. Du DCF à l\'equity value : le pont (bridge)', h: `
<div class="diagram"><div class="flow col">
 <div class="n green"><b>Enterprise Value (EV)</b>valeur actuelle des FCFF + valeur terminale = valeur des opérations</div><div class="ar">→</div>
 <div class="n"><b>(+) Actifs non opérationnels</b>cash, cash-like (surplus de pension, créances d\'assurance, actifs non utilisés), participations (associés / JV), NOL (déficits reportables), autres actifs non stratégiques</div><div class="ar">→</div>
 <div class="n red"><b>(−) Dettes et assimilés</b>dette totale (+ leasing), debt-like (pensions sous-financées, convertibles, provisions…), actions préférentielles, <b>intérêts minoritaires (NCI)</b>, autres passifs</div><div class="ar">→</div>
 <div class="n yellow"><b>= Equity Value</b></div><div class="ar">→</div>
 <div class="n"><b>÷ nombre d\'actions DILUÉ</b> = valeur par action</div>
</div></div>

<div class="box must"><span class="badge b-must">À SAVOIR</span><b>Pourquoi ces ajustements ?</b>
<ul><li><b>Dette</b> : soustraite car l\'acquéreur doit en général la rembourser au closing.</li><li><b>Cash</b> : ajouté (en théorie seulement l\'excédent par rapport au minimum opérationnel).</li><li><b>Actions préférentielles</b> : hybrides, dividendes fixes prioritaires → traitées comme de la dette.</li><li><b>Pensions sous-financées</b> (unfunded) : engagement à payer plus tard → soustrait (important pour l\'automobile…).</li><li><b>Participations minoritaires (equity investments, &lt; 50 %)</b> : actifs non opérationnels (hors DCF) → <b>ajoutées</b>.</li><li><b>Non-controlling interests (NCI)</b> : quand on détient &gt; 50 %, on <b>consolide 100 %</b> de la filiale ; or l\'equity value ne revient qu\'à la part détenue → on <b>soustrait</b> la part des minoritaires.</li><li><b>NOL</b> : économies d\'impôt futures → ajoutées.</li></ul></div>

<h3>Participations : 3 traitements comptables</h3>
<div class="tblwrap"><table>
<tr><th></th><th>Minoritaire passif</th><th>Minoritaire actif (influence notable)</th><th>Majoritaire (contrôle)</th></tr>
<tr><td><b>Méthode</b></td><td>Cost method</td><td>Equity method</td><td>Consolidation</td></tr>
<tr><td><b>Compte de résultat</b></td><td>Seulement les dividendes reçus</td><td>% × résultat net, ligne « income from associates »</td><td>On consolide 100 %, puis on soustrait la part des minoritaires</td></tr>
<tr><td><b>Bilan</b></td><td>Trading / AFS / HTM</td><td>% × valeur, en « investissements en actions »</td><td>100 % + NCI dans les capitaux propres</td></tr>
</table></div>
<div class="box detail"><span class="badge b-detail">DÉTAIL</span>En pratique on ajoute la valeur comptable des participations minoritaires et on retranche les minoritaires (en valeur comptable). Compromis : <b>market value solution</b> (si la filiale est cotée) ou <b>relative value solution</b> (multiplier la valeur comptable par le P/B moyen du secteur).</div>

<h3>Actions diluées : Treasury Stock Method</h3>
<p>Market cap = <b>cours × nombre d\'actions</b>. Mais options, warrants, convertibles… peuvent créer de nouvelles actions → il faut utiliser l\'<b>equity value diluée</b>, sinon on sous-estime le coût de l\'acquisition.</p>
<ul>
<li><b>Options et warrants</b> : <b>Treasury Stock Method</b> – on suppose que les options in-the-money sont exercées et que la société rachète des actions avec l\'argent reçu.</li>
<li><b>Convertibles</b> : soit <b>dette</b>, soit 100 % en actions supplémentaires (pas de TSM).</li>
<li><b>RSU</b> : ajout direct. <b>Performance shares</b> : comptées seulement si l\'objectif de cours est atteint.</li>
</ul>
<div class="box ex"><b>Exemple TSM</b> : 1 000 actions ; 200 options à 5 $ ; cours 10 $. Nouvelles actions : 200. Argent reçu : 200 × 5 = 1 000 $ → rachat de 1 000 / 10 = 100 actions. Actions supplémentaires nettes = 100 → <b>1 100 actions diluées</b>.</div>

<h3>Structure financière : l\'EV bouge peu, l\'equity value beaucoup</h3>
<div class="tblwrap"><table>
<tr><th></th><th>Société A</th><th>Société B</th><th>Société C</th></tr>
<tr><td>Cours × actions → Equity Value</td><td>10 × 1 000 = 10 000</td><td>10 × 900 = 9 000</td><td>10 × 1 100 = 11 000</td></tr>
<tr><td>+ Dette</td><td>1 600</td><td>2 600</td><td>600</td></tr>
<tr><td>+ Préférentielles</td><td>200</td><td>200</td><td>200</td></tr>
<tr><td>− Cash</td><td>(300)</td><td>(300)</td><td>(300)</td></tr>
<tr><td><b>= Enterprise Value</b></td><td><b>11 500</b></td><td><b>11 500</b></td><td><b>11 500</b></td></tr>
</table></div>
<ul>
<li>Les opérations de <b>financement n'affectent pas l'EV</b> : émettre de la dette (cash et dette montent), rembourser, émettre des actions, racheter des actions, payer des dividendes (cash et equity bougent en sens inverse). Idée de <b>Modigliani-Miller</b> : dans un marché parfait, la valeur ne dépend pas de la structure du capital.</li>
<li>L'EV ne change que si les <b>actifs opérationnels nets (NOA)</b> changent : PP&amp;E ↑, stocks ↑ → EV ↑ ; créances ↓ (encaissées) ou revenus différés ↑ (passif opérationnel) → EV ↓.</li>
<li>En réalité, le WACC change avec la structure du capital, donc l\'EV bouge <b>un peu</b>.</li>
</ul>
<div class="box tip"><b>Analogie de la maison :</b> le prix affiché (equity value) n\'est pas le coût réel : il y a le prêt à rembourser (dette), des meubles laissés (cash), des réparations (passifs). L\'EV est le « prix de la maison » quel que soit le montage financier.</div>` }
  ],
  retenir: `<ul>
<li><b>Valeur ≠ prix.</b> Les écarts viennent surtout des hypothèses de <b>croissance</b>.</li>
<li>Zero growth : V = CF/r · Gordon : V = FCF₁/(r − g), avec r &gt; g · DCF = flux explicites + valeur terminale actualisée.</li>
<li><b>WACC</b> = Ke·E/(D+E) + Kd(1 − t)·D/(D+E) (poids en valeurs de marché, taux d\'impôt marginal).</li>
<li><b>CAPM</b> : Ke = Rf + β(Rm − Rf) (+ prime de taille). Rf = obligation d\'État 10 ans, même devise, sans défaut.</li>
<li>β<sub>L</sub> = β<sub>U</sub>[1 + (1 − t)D/E]. Bottom-up : unlever les comparables, relever avec la structure de la cible.</li>
<li>Kd : yield des obligations, ou notation, ou note synthétique via l\'ICR = EBIT / intérêts.</li>
<li>TV = FCF<sub>N</sub>(1 + g)/(r − g) ; g ≤ croissance de l\'économie ; TV + taux = ce qui pèse le plus.</li>
<li>FCF = OCF − CapEx · <b>FCFF + WACC → EV</b> · <b>FCFE + Ke → equity value</b>.</li>
<li>EV → Equity : + cash, + participations minoritaires, + NOL ; − dette, − debt-like (pensions, leasing), − préférentielles, − NCI ; puis ÷ actions diluées (TSM).</li>
<li>Le financement ne change pas l\'EV (seuls les actifs opérationnels le font).</li></ul>`,
  qs: [
    Q('Which valuation approach is considered "intrinsic"?', ['Comparable company multiples', 'Discounted cash flow (income-based)', 'Precedent transaction multiples', 'Book value'], 1,
      ['Les multiples comparables sont une approche de marché.', 'Le DCF fonde la valeur sur les flux futurs actualisés, indépendamment du marché.', 'Approche de marché également.', 'La valeur comptable est une approche par les actifs.']),
    Q('In an IPO valuation, compared with an M&A valuation:', ['A control premium and synergies are added', 'There is no control premium or synergies, but an IPO discount is applied', 'Synergies are doubled', 'The valuation is always higher'], 1,
      ['C\'est le cas d\'une valorisation M&A.', 'En IPO on valorise sans prime de contrôle ni synergies, et on applique une décote d\'introduction.', 'Aucun fondement.', 'Pas systématique : il y a une décote.']),
    Q('In PE/VC valuation, the focus is mainly on:', ['The book value of equity', 'The exit value that allows a target IRR', 'The dividend yield', 'The control premium'], 1,
      ['Pas le centre de l\'analyse.', 'Le fonds part de la valeur de sortie qui permet d\'atteindre le TRI cible exigé par les LPs.', 'Le rendement en dividendes n\'est pas le sujet : un fonds raisonne sur la valeur de revente (exit) et le TRI.', 'La prime de contrôle relève du M&A.']),
    Q('Which of the following is a TRUE statement about valuation, according to the course?', ['A good valuation is precise', 'All valuations are biased; only the size and direction of the bias vary', 'The more complex the model, the better', 'There is one objective "true" value'], 1,
      ['Faux : il n\'existe pas de valorisation précise.', 'Toute valorisation est biaisée, proportionnellement à qui paie et combien.', 'Faux : les modèles simples font souvent mieux.', 'Faux : le mythe de la valeur « vraie » est contredit.']),
    Q('A company\'s cash flow is 100 and the discount rate is 10%. The buyer expects growth of 4%, the seller 5%. The values implied (Gordon) for buyer and seller are approximately:', ['1,000 and 1,000', '1,667 and 2,000', '2,000 and 1,667', '1,100 and 1,050'], 1,
      ['Cela ignorerait la croissance.', '100/(10% − 4%) = 1 667 pour l\'acheteur ; 100/(10% − 5%) = 2 000 pour le vendeur.', 'Inversé : plus de croissance = plus de valeur.', 'Calcul incorrect.']),
    Q('Why is the market price often different from an investor\'s intrinsic value?', ['Because the discount rate is always different', 'Because of disagreements on future growth, mainly', 'Because of accounting standards only', 'Because of random errors in the DCF'], 1,
      ['Possible, mais pas la raison principale.', 'La plupart des écarts de valorisation viennent de désaccords sur la croissance future.', 'Pas la raison principale.', 'Pas la raison citée.']),
    Q('The Gordon Growth Model requires that:', ['g is greater than the discount rate', 'g is lower than the discount rate', 'g equals the discount rate', 'g is negative'], 1,
      ['Si g > r, la formule donne une valeur négative et n\'a pas de sens.', 'Il faut r > g : le dénominateur (r − g) doit être positif.', 'Si g = r, division par zéro.', 'g peut être négatif, ce n\'est pas une condition.']),
    Q('FCFF₁ = 50, WACC = 10%, g = 2%. Using the constant growth model, the value of the firm is:', ['500', '625', '417', '6.25'], 1,
      ['500 = 50/0,10 : on a oublié g.', '50 / (0,10 − 0,02) = 625.', '417 = 50/0,12 : on a additionné g au lieu de le soustraire.', 'Mauvais ordre de grandeur.']),
    Q('The capitalization of earnings (zero growth) model is most appropriate for:', ['Fast-growing start-ups with erratic cash flows', 'Profitable businesses with stable, level earnings', 'Companies with negative cash flows', 'Companies that will be liquidated next year'], 1,
      ['Pour eux, le DCF est plus adapté.', 'Il suppose des flux constants (ou à croissance régulière).', 'Value = CF/r nécessite des flux positifs.', 'Pas le cas typique.']),
    Q('Why is the DCF method often recommended when growth rates are erratic?', ['Because it uses book values', 'Because it can account for significant variation in growth over several years', 'Because it ignores discounting', 'Because it relies on market multiples'], 1,
      ['Le DCF repose sur des flux futurs actualisés, pas sur la valeur comptable.', 'Le DCF modélise année par année les flux et peut donc refléter des taux de croissance variables.', 'Faux : il actualise.', 'Les multiples relèvent des méthodes de marché ; le DCF est intrinsèque.']),
    Q('Which is a typical disadvantage of the DCF method?', ['It depends on market sentiment', 'It relies on estimates that can be manipulated and should not be used in isolation', 'It cannot be used for projects', 'It ignores cash flows'], 1,
      ['Au contraire, il est indépendant du marché.', 'Les projections sont modifiables et incertaines ; il faut le compléter avec des méthodes relatives.', 'Au contraire, le DCF s\'applique à une grande variété de projets dès qu\'on peut estimer les flux futurs.', 'Faux : ce sont les flux qui sont au centre.']),
    Q('E = 700, D = 300, Ke = 12%, Kd = 6%, tax rate 25%. The WACC is approximately:', ['9.75%', '8.40%', '10.2%', '12%'], 0,
      ['0,7 × 12 % + 0,3 × 6 % × 0,75 = 8,4 % + 1,35 % = 9,75 %.', '8,4 % est seulement la part fonds propres.', 'Calcul incorrect (impôt oublié).', 'C\'est le Ke : on ne tient pas compte de la dette.']),
    Q('Why is the cost of debt multiplied by (1 − t) in the WACC?', ['Because debt is riskier', 'Because interest is tax deductible (tax shield)', 'Because debt is issued at book value', 'Because t is the inflation rate'], 1,
      ['Le risque plus élevé de la dette est reflété dans Kd lui-même, pas dans le facteur (1 − t) qui concerne l\'impôt.', 'Les intérêts sont déductibles : le coût net de la dette est Kd × (1 − t).', 'Faux : on utilise les valeurs de marché.', 'Faux : t est le taux d\'impôt.']),
    Q('The weights E/(D+E) and D/(D+E) in the WACC should be based on:', ['Book values', 'Market values', 'Historical averages of 10 years', 'Nominal values of debt'], 1,
      ['Les titres sont émis au prix de marché.', 'On utilise les valeurs de marché (avec une circularité).', 'Une moyenne historique ne reflète pas le coût actuel d\'émission des titres : on utilise les valeurs de marché.', 'Les valeurs nominales ne correspondent pas aux prix auxquels les titres s\'échangent ; il faut la valeur de marché.']),
    Q('All else equal, which factor leads to a LOWER WACC?', ['A higher interest rate on debt', 'A higher corporate tax rate', 'A move to a riskier industry', 'Operating in an emerging market'], 1,
      ['Un taux de la dette plus élevé relève le Kd donc le WACC.', 'Plus d\'impôt = bouclier fiscal plus grand = coût net de la dette plus bas = WACC plus bas.', 'Plus de risque = WACC plus élevé.', 'Risque pays = WACC plus élevé.']),
    Q('What happens to the cost of equity when a company increases its debt?', ['It decreases', 'It increases because equity becomes riskier', 'It stays the same', 'It becomes lower than the cost of debt'], 1,
      ['Faux : plus de dette rend l\'action plus risquée, donc Ke augmente et non l\'inverse.', 'Plus de dette = risque de défaut plus grand pour les actionnaires = Ke plus élevé.', 'Pas dans la théorie du cours.', 'Ke est toujours supérieur à Kd.']),
    Q('Rf = 3%, β = 1.5, market risk premium = 6%. The cost of equity (CAPM) is:', ['9%', '12%', '10.5%', '18%'], 1,
      ['9 % = 3 % + 6 % : on a oublié le bêta.', 'Ke = 3 % + 1,5 × 6 % = 12 %.', 'Calcul incorrect.', '18 % = 3 % + 1,5 × 10 % : erreur.']),
    Q('Which of the following is NOT a requirement for a risk-free rate?', ['Long-term', 'Default-free', 'In the same currency as the cash flows', 'Issued by a company with a high credit rating'], 3,
      ['Requis : long terme (10 ans).', 'Requis : sans risque de défaut.', 'Requis : même devise et même nature (réel/nominal).', 'Le taux sans risque vient d\'une obligation d\'État bien notée, pas d\'une entreprise.']),
    Q('Indian government bond yield is 8% and the default spread is 3%. The risk-free rate in rupees is:', ['11%', '8%', '5%', '3%'], 2,
      ['On a additionné le spread au lieu de le soustraire.', 'Ce taux contient une prime de défaut : il n\'est pas sans risque.', 'Rf = 8 % − 3 % = 5 %.', '3 % est le spread, pas le taux.']),
    Q('A stock has a beta of 2. If the market rises by 10%, the stock is expected to:', ['Rise by 5%', 'Rise by 10%', 'Rise by 20%', 'Fall by 20%'], 2,
      ['Ce serait un bêta de 0,5.', 'Ce serait un bêta de 1.', 'Bêta 2 : deux fois plus volatile que le marché.', 'Ce serait un bêta de −2.']),
    Q('Beta measures:', ['Total risk of a company', 'Systematic (non-diversifiable) risk relative to the market', 'Company-specific risk only', 'Default risk'], 1,
      ['Le risque total inclut le risque spécifique.', 'Le bêta mesure la sensibilité au marché, le risque systématique.', 'Le risque spécifique est diversifiable : non rémunéré.', 'Le risque de défaut relève du Kd.']),
    Q('Unlevered beta βU = 0.8, D/E = 1, tax rate 25%. The levered beta is:', ['0.80', '1.40', '1.00', '0.60'], 1,
      ['Ce serait βU : on a oublié le levier.', 'βL = 0,8 × [1 + 0,75 × 1] = 1,4.', 'Calcul incorrect.', 'Le bêta endetté est supérieur au bêta désendetté.']),
    Q('Levered beta = 1.4, D/E = 0.5, tax rate 20%. The unlevered beta is:', ['1.00', '1.40', '1.96', '0.70'], 0,
      ['βU = 1,4 / [1 + 0,8 × 0,5] = 1,4 / 1,4 = 1,0.', 'Ce serait sans désendettement.', 'On a multiplié au lieu de diviser.', 'Erreur de calcul.']),
    Q('In the "bottom-up" beta approach, the steps are:', ['Regress stock returns on market returns for 3–5 years', 'Select comparables, unlever their betas, average them, and relever with the target\'s D/E and tax rate', 'Use the beta of the S&P 500', 'Use only book values'], 1,
      ['Cette méthode est la régression historique.', 'Bottom-up : comparables → désendetter → moyenne/médiane → réendetter avec la structure de la cible.', 'Le bêta du marché est 1 par définition.', 'Les valeurs comptables ne sont pas utilisées : on part de bêtas de comparables cotés, et on utilise les D/E de marché.']),
    Q('What is a main criticism of regression-based betas?', ['They are forward-looking', 'They are backward-looking and reflect past leverage and business mix, with a high standard error', 'They ignore the market', 'They are always negative'], 1,
      ['C\'est l\'inverse.', 'Le bêta de régression est historique et peut ne plus refléter la société actuelle.', 'Le bêta est justement calculé par rapport au marché : il en est la pente.', 'Un bêta négatif est très rare ; ce n\'est pas une critique de la méthode.']),
    Q('A size premium (FSP) is added to the CAPM cost of equity for:', ['Large companies', 'Small companies, because they are riskier and less liquid', 'Companies with negative beta', 'Companies without debt'], 1,
      ['Les grosses capitalisations ont une prime de 0 %.', 'Les petites sociétés ont plus de risque de défaut et moins de liquidité.', 'Sans rapport.', 'Sans rapport.']),
    Q('How can the cost of debt be estimated for an unrated company with no traded bonds?', ['Using the CAPM', 'Using a recent bank loan or a synthetic rating based on the interest coverage ratio', 'Using the dividend yield', 'Using the beta'], 1,
      ['Le CAPM sert au coût des fonds propres.', 'Emprunt bancaire récent, ou note synthétique à partir de l\'ICR (EBIT / charges d\'intérêts).', 'Pas le cas.', 'Pas le cas.']),
    Q('The interest coverage ratio (ICR) is:', ['Net income / interest', 'EBIT / interest expenses', 'Debt / equity', 'Interest / revenue'], 1,
      ['Ce n\'est pas la définition utilisée.', 'ICR = EBIT / charges d\'intérêts ; plus il est élevé, meilleure est la note.', 'Ça, c\'est le D/E.', 'Ce n\'est pas la définition.']),
    Q('Which tax rate is recommended for the WACC?', ['Effective (historical) tax rate', 'Marginal tax rate (forward-looking)', 'Zero', 'Average world tax rate'], 1,
      ['Rétrospectif et peut contenir des éléments non récurrents.', 'Le taux marginal reflète l\'économie d\'impôt réelle sur la dette supplémentaire.', 'Un taux nul supprimerait le bouclier fiscal de la dette, qui existe bel et bien.', 'Un taux mondial moyen n\'a pas de sens ; pour une société internationale on pondère les taux selon la répartition géographique du CA.']),
    Q('FCF = 200 in the final explicit year, g = 3%, r = 10%. The Gordon terminal value is approximately:', ['2,943', '2,857', '2,000', '3,000'], 0,
      ['TV = 200 × 1,03 / (0,10 − 0,03) = 206 / 0,07 ≈ 2 943.', '2 857 = 200 / 0,07 : on a oublié de multiplier par (1 + g).', '2 000 = 200 / 0,10 : sans croissance.', 'Calcul incorrect.']),
    Q('The stable (terminal) growth rate:', ['Can exceed the growth rate of the economy', 'Cannot exceed the growth rate of the economy in which the firm operates, and can be negative', 'Must be at least 10%', 'Must equal inflation exactly'], 1,
      ['Une société ne peut pas croître plus vite que l\'économie éternellement.', 'Plafonné par la croissance de l\'économie ; peut être négatif si la société décline.', 'Un taux de 10 % éternel dépasserait la croissance de toute économie ; il est plafonné par la croissance de l\'économie.', 'Faux : c\'est un proxy, pas une obligation.']),
    Q('In a DCF, which two elements usually have the largest impact on value?', ['Tax rate and working capital', 'The discount rate and the terminal value', 'Revenue in year 1 and headcount', 'Depreciation and amortization'], 1,
      ['Moins sensibles.', 'Le taux d\'actualisation affecte tous les flux ; la TV est la plus grosse composante.', 'Faible impact.', 'Faible impact.']),
    Q('Which terminal value approach assumes the company is sold at a multiple at the end of the explicit period?', ['Stable growth model', 'Multiple approach', 'Liquidation value', 'Zero growth model'], 1,
      ['Ça utilise Gordon.', 'Multiple approach : plus simple mais le multiple futur est incertain → table de sensibilité.', 'Ça suppose la vente des actifs un à un.', 'Hors sujet.']),
    Q('Free cash flow (FCF) is computed as:', ['Operating cash flow + CapEx', 'Operating cash flow − CapEx', 'EBITDA − interest', 'Net income + depreciation only'], 1,
      ['On soustrait les investissements, on ne les ajoute pas.', 'FCF = OCF − CapEx.', 'Ce n\'est pas la formule.', 'Il manque les variations de BFR et les CapEx.']),
    Q('Which combination of cash flow and discount rate is consistent?', ['FCFF with cost of equity', 'FCFF with WACC → enterprise value', 'FCFE with WACC', 'FCFE with the risk-free rate'], 1,
      ['FCFF appartient à tous les apporteurs de capitaux : on utilise le WACC.', 'FCFF actualisé au WACC donne l\'EV.', 'FCFE s\'actualise au Ke.', 'Le taux sans risque ne reflète pas le risque des actionnaires ; FCFE s\'actualise au coût des fonds propres (Ke).']),
    Q('FCFE discounted at Ke gives directly:', ['Enterprise value', 'Equity value', 'Net debt', 'WACC'], 1,
      ['Cela vient du FCFF + WACC.', 'FCFE concerne les actionnaires : on obtient la valeur des fonds propres.', 'La dette nette est un élément du pont EV → equity value, pas un résultat d\'actualisation.', 'Le WACC est un taux d\'actualisation, pas une valeur obtenue par actualisation.']),
    Q('Which of the following is a reason why capital structure is ignored when estimating FCFF?', ['Because debt does not exist', 'It makes firms comparable and the capital structure is somewhat discretionary', 'Because taxes are zero', 'Because FCFE is always higher'], 1,
      ['La dette existe bel et bien ; on l\'ignore dans le FCFF pour comparer les sociétés, pas parce qu\'elle n\'existe pas.', 'Cela rend les sociétés comparables et la structure peut être choisie différemment par les propriétaires.', 'Les impôts sont pris en compte (EBIT × (1 − t)) ; ce n\'est pas la raison.', 'FCFE n\'est pas toujours plus élevé que FCFF ; ce n\'est pas lié à la raison d\'ignorer la structure du capital.']),
    Q('EV = 1,000; cash = 100; debt = 300; preferred stock = 50; non-controlling interests = 50. The equity value is:', ['700', '800', '600', '1,500'], 0,
      ['EQV = 1 000 + 100 − 300 − 50 − 50 = 700.', 'On a oublié préférentielles ou NCI.', 'Cash non ajouté.', 'Erreur de signes.']),
    Q('Why are non-controlling interests subtracted in the bridge from EV to equity value?', ['Because they are debt', 'Because the parent consolidates 100% of the subsidiary while shareholders own only part of it', 'Because they are tax assets', 'Because they are non-operating assets'], 1,
      ['Pas de la dette.', 'Consolidation à 100 % : il faut retirer la part qui appartient aux minoritaires.', 'Pas des actifs fiscaux.', 'Ce sont plutôt les participations dans des tiers qui sont des actifs non opérationnels.']),
    Q('Equity investments in associates (<50%) are in the bridge:', ['Subtracted', 'Added, as non-operating assets', 'Ignored', 'Treated as debt'], 1,
      ['On les ajoute, on ne les soustrait pas : ce sont des actifs qui ne sont pas dans les flux opérationnels du DCF.', 'Ces participations ne figurent pas dans les flux opérationnels du DCF : on les ajoute.', 'Les ignorer sous-évaluerait la société : ces actifs ont une valeur.', 'Ce sont des actifs détenus, pas des engagements ; ils ne sont pas assimilés à de la dette.']),
    Q('Unfunded pension obligations are treated as:', ['Cash-like items (added)', 'Debt-like items (subtracted)', 'Equity investments', 'Ignored'], 1,
      ['Un surplus de pension serait cash-like ; ici l\'engagement est sous-financé.', 'La société devra trouver du cash pour les payer : traité comme de la dette.', 'Les engagements de retraite sont des obligations de payer, pas des participations dans d\'autres sociétés.', 'Faux, c\'est important pour certains secteurs (automobile).']),
    Q('A company has 1,000 shares and 200 in-the-money options with an exercise price of $5. The share price is $10. Using the Treasury Stock Method, the diluted share count is:', ['1,200', '1,100', '1,000', '1,050'], 1,
      ['On a ignoré le rachat avec les fonds reçus.', '200 nouvelles actions − 100 rachetées (200 × 5 / 10) = 100 net : 1 100 actions.', 'Ignore les options.', 'Calcul incorrect.']),
    Q('Convertible bonds in the diluted share count are treated as:', ['Treasury Stock Method like options', 'Either debt or 100% as additional shares', 'Preferred stock', 'Ignored'], 1,
      ['Le TSM ne s\'applique pas aux convertibles.', 'Traitement « either-or » : dette, ou 100 % en actions supplémentaires.', 'Une obligation convertible n\'est pas une action préférentielle ; elle est traitée comme dette ou comme des actions.', 'On ne les ignore pas : si elles sont convertibles, elles peuvent créer des actions et diluer.']),
    Q('Which of the following events changes the Enterprise Value (in theory)?', ['Issuing new debt and keeping the cash', 'Repurchasing shares with cash', 'An increase in PP&E funded by cash', 'Paying a dividend'], 2,
      ['Cash et dette augmentent ensemble : l\'EV ne change pas.', 'Cash et equity baissent ensemble : EV inchangée.', 'PP&E est un actif opérationnel : les actifs opérationnels nets augmentent, donc l\'EV augmente.', 'Cash et equity baissent : EV inchangée.']),
    Q('Companies A, B and C have the same enterprise value of 11,500 but different debt levels. What does this illustrate?', ['Equity value is independent of capital structure', 'Enterprise value is largely independent of capital structure, while equity value depends on it', 'Debt is irrelevant', 'WACC is constant'], 1,
      ['C\'est l\'inverse : l\'equity value varie avec la dette.', 'L\'EV reste (presque) identique ; l\'equity value change avec le mix dette/fonds propres.', 'La dette compte dans le calcul de l\'equity value.', 'Dans la réalité le WACC varie un peu avec la structure.']),
    Q('Why is it more accurate to use the diluted equity value in an acquisition?', ['Because dilutive in-the-money securities are cashed out or converted at the buyer\'s cost', 'Because it lowers the price', 'Because options have no value', 'Because it ignores share count'], 0,
      ['Les titres dilutifs in-the-money sont réglés en cash ou convertis : l\'acheteur doit en supporter le coût.', 'L\'equity value diluée est plus élevée, pas plus basse.', 'Elles ont une valeur si elles sont in-the-money.', 'Au contraire, on corrige le nombre d\'actions.']),
    Q('Which of the following is NOT a limitation of CAPM mentioned in the course?', ['It is backward-looking', 'It captures only systematic risk', 'Other risk factors (size, value, momentum) also explain returns', 'It always gives a negative cost of equity'], 3,
      ['C\'est une limite citée.', 'Limite citée : ignore le risque spécifique.', 'Limite citée : modèles multifactoriels.', 'Le CAPM ne donne pas systématiquement un coût négatif : cette affirmation est fausse.'])
  ]
});
