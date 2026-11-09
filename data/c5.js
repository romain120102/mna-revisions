MNA.add('c5', {
  titre: 'Class 5 – Intrinsic Valuation',
  sous: 'DCF, WACC, CAPM, beta, terminal value, free cash flow',
  resume: 'Comment faire la valuation d\'une company par ses future cash flows discounted : Gordon, DCF, WACC, cost of equity (CAPM), beta, terminal value et FCFF/FCFE.',
  sections: [
    { t: '1. Valuation : purpose et families of methods', h: `
<p>Faire une valuation, c\'est estimer ce que vaut une company. Trois approches : <b>income-based</b> (future cash flows), <b>market-based</b> (comparables) et <b>asset-based</b> (assets). Ce cours porte sur la première, dite <b>intrinsic</b>.</p>
<div class="diagram"><div class="cols">
 <div class="col-box green"><h4>Income-based (intrinsic)</h4><ul><li><b>DCF</b> (discounted free cash flow)</li><li><b>Capitalization of earnings / EPV</b></li></ul></div>
 <div class="col-box"><h4>Market-based</h4><ul><li>Comparable companies multiples</li><li>Comparable (precedent) transactions multiples</li><li>Market value (listed)</li><li>Price of a recent investment, rule of thumb</li></ul></div>
 <div class="col-box yellow"><h4>Asset-based</h4><ul><li>Book value (tangible)</li><li>Liquidation value</li><li>Replacement value</li><li>Sum-of-the-parts (SOTP)</li></ul></div>
</div></div>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Purpose of the valuation selon le contexte</b>
<ul><li><b>M&amp;A</b> : outil de négociation ; le price réel inclut la <b>strategic value</b> pour un buyer et la concurrence entre buyers.</li><li><b>IPO</b> : <b>sans control premium ni synergies</b>, mais avec une <b>discount d\'introduction (IPO discount)</b> (greenshoe pour le syndicate de banks).</li><li><b>PE &amp; VC</b> : on part de la <b>valeur de sortie (exit value)</b> pour atteindre un <b>IRR</b> target (selon ce que veulent les LPs).</li><li><b>Self-assessment</b> : strategic planning, measure of value created.</li></ul></div>

<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>The myths</b> (à connaître pour l\'examen) : toute valuation est <b>biased</b> (direction et size du bias dépendent de qui paie le valuer) ; il n\'y a <b>pas de precise valuation</b> ; les simple models marchent souvent mieux que les complexes. La valuation est « un art », pas une science exacte.</div>

<h3>Value vs Price</h3>
<div class="tblwrap"><table>
<tr><th>Value</th><th>Price</th></tr>
<tr><td>Estimation de la valeur <b>intrinsic</b> (assets, cash flows, growth, risk). <b>Subjective</b> : diffère selon le buyer (synergies, strategy).</td><td>Montant <b>actually agreed</b> entre buyer et seller, après negotiation. Influencé par le market, la competition, l\'urgency.</td></tr>
</table></div>
<p><i>« Price is what you pay, value is what you get. »</i> Le price peut dépasser la valeur dans un hot market (forte demande) et lui être inférieur en période de crise.</p>

<div class="box ex"><b>Pourquoi un buyer et un seller ne s\'accordent pas ?</b> Cash flow = 100 ; discount rate 10 %.
<ul><li>Buyer : growth 4 % → valeur = 100 / (10 % − 4 %) = <b>1 667</b>.</li><li>Seller : growth 5 % → valeur = 100 / (10 % − 5 %) = <b>2 000</b>.</li></ul>
La plupart des écarts de valuation viennent de <b>désaccords sur la growth future</b>.</div>` },

    { t: '2. Income-based methods : Zero / Constant / Variable growth', h: `
<p>Principe : une company vaut la <b>present value de ses future cash flows</b>. Un euro aujourd\'hui vaut plus qu\'un euro demain (<b>time value of money</b>), donc on <b>discount</b> (actualise).</p>
<div class="diagram"><div class="cols">
 <div class="col-box"><h4>Zero growth (Capitalization of earnings)</h4>
  <div class="formula">Value = CF / r<small>constant cash flows in perpetuity</small></div>
  <p>Simple mais <b>rigide</b> : suppose une growth stable, ne tient pas compte de la volatilité. Convient à une company <b>profitable et stable</b>. Dépend des accounting conventions.</p></div>
 <div class="col-box green"><h4>Constant growth (Gordon Growth)</h4>
  <div class="formula">P₀ = FCFF₁ / (WACC − g)<small>FCFF₁ = FCFF₀ × (1 + g)</small></div>
  <p>Pour des <b>mature</b> companies, à predictable growth (food, cosmetics…). <b>Condition : WACC &gt; g</b>.</p></div>
 <div class="col-box yellow"><h4>Variable growth = DCF</h4>
  <p>Période de <b>high growth</b> (explicit) puis période de <b>stable growth</b> (terminal value). Utile quand la growth est erratic.</p>
  <div class="formula" style="font-size:16px">P₀ = Σ FCFFₜ/(1+WACC)ᵗ + Pₙ/(1+WACC)ⁿ</div></div>
</div></div>
<div class="box ex"><b>Gordon example</b> : FCFF₁ = 50 ; WACC = 10 % ; g = 2 % → Valeur = 50 / (0,10 − 0,02) = <b>625</b>.</div>
<div class="box tip"><b>Tip :</b> plus g se rapproche du discount rate, plus la valeur explose. Si g ≥ r, la formule n\'a plus de sens.</div>` },

    { t: '3. The DCF (Discounted Cash Flow) : principle', h: `
<div class="diagram"><div class="flow">
 <div class="n"><b>Year 1</b>FCF₁</div><div class="ar">→</div>
 <div class="n"><b>Year 2</b>FCF₂</div><div class="ar">→</div>
 <div class="n"><b>…</b></div><div class="ar">→</div>
 <div class="n"><b>Year N</b>FCFₙ</div><div class="ar">→</div>
 <div class="n yellow"><b>Terminal Value</b>TV (beyond N)</div>
</div>
<div class="flow" style="margin-top:8px"><div class="n green" style="max-width:none;width:90%"><b>Value</b> = Σ FCFₜ/(1+r)ᵗ + TV/(1+r)ᴺ &nbsp;→ on discount tout au rate r (WACC si on discount le FCFF)</div></div></div>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Il faut estimer 3 choses</b> : la <b>life</b> de l\'actif, les <b>cash flows</b> sur cette durée, et le <b>discount rate</b>.
<ul><li><b>Proposition 1</b> : pour qu\'un actif ait de la valeur, ses cash flows attendus doivent être positifs à un moment.</li><li><b>Proposition 2</b> : les assets qui génèrent des cash flows <b>early</b> valent plus que ceux qui en génèrent tard (qui compensent éventuellement par plus de growth).</li></ul></div>

<div class="tblwrap"><table>
<tr><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td><b>Intrinsic</b> valuation, indépendante du market sentiment · applicable à de nombreux projets dès qu\'on peut estimer les cash flows</td><td>Repose sur des <b>estimates</b> (pas de chiffres réels), facilement <b>manipulables</b> · sensible aux unexpected economic changes · à ne pas utiliser <b>seule</b> (compléter par des relative methods)</td></tr>
</table></div>` },

    { t: '4. The discount rate : WACC', h: `
<div class="formula">WACC = Ke × E/(D+E) + Kd × (1 − t) × D/(D+E)<small>E = market value of equity · D = market value of debt · t = marginal tax rate</small></div>
<ul>
<li>Le WACC = <b>required return minimum de tous les investisseurs</b> (shareholders + lenders).</li>
<li>Les weights utilisent les <b>markets values</b> (pas book values) : on émet des titres au price du market. Cela crée une certaine <b>circularity</b>.</li>
<li>La debt est <b>tax-deductible</b> → on utilise Kd × (1 − t) (<b>tax shield</b>). Les preferred dividends, eux, ne sont <b>pas déductibles</b>.</li>
</ul>
<div class="box ex"><b>Example</b> : E = 600, D = 400, Ke = 10 %, Kd = 5 %, t = 25 %.<br>WACC = 0,6 × 10 % + 0,4 × 5 % × (1 − 0,25) = 6 % + 1,5 % = <b>7,5 %</b>.</div>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Rules of thumb sur le WACC</b> (toutes choses égales par ailleurs)
<div class="tblwrap"><table>
<tr><th>If…</th><th>WACC</th><th>Why</th></tr>
<tr><td>Plus de <b>debt</b></td><td>↓ (puis ↑ au-delà d\'un threshold)</td><td>Debt moins chère que les equity ; mais trop de debt = bankruptcy risk qui renchérit tout</td></tr>
<tr><td>Plus de <b>preferred shares</b></td><td>↓ en général</td><td>Moins chères que les common shares</td></tr>
<tr><td>Interest rate de la debt ↑</td><td>↑</td><td>Kd augmente</td></tr>
<tr><td>Higher <b>tax</b> rate</td><td>↓</td><td>Bigger tax shield sur la debt</td></tr>
<tr><td><b>Smaller</b> company ou riskier sector (tech, start-up)</td><td>↑</td><td>Higher beta et credit risk</td></tr>
<tr><td><b>Emerging market</b></td><td>↑</td><td>Country, political, currency risk</td></tr>
<tr><td>Efficient capital markets</td><td>↓</td><td>Cheaper financing</td></tr>
</table></div></div>
<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Plus de debt → Ke monte, WACC baisse.</b> Les shareholders sont plus exposés au default risk donc exigent plus (Ke ↑) ; mais la debt (moins chère, déductible) prend plus de poids et fait baisser le WACC global.</div>` },

    { t: '5. Le cost of equity (Ke) : CAPM, risk-free rate, premium, beta', h: `
<div class="formula">Ke = Rf + β × (Rm − Rf)<small>Rf = risk-free rate · β = beta · (Rm − Rf) = market risk premium (MRP)</small></div>
<div class="box ex"><b>Example</b> : Rf = 3 % ; β = 1,2 ; MRP = 5 % → Ke = 3 % + 1,2 × 5 % = <b>9 %</b>.</div>

<h3>The risk-free rate (Rf)</h3>
<div class="diagram"><div class="flow">
 <div class="n"><b>Long-term</b>government bond à <b>10 ans</b> (10-year)</div><div class="ar">+</div>
 <div class="n"><b>Default-free</b>developed country bien noté</div><div class="ar">+</div>
 <div class="n"><b>Same currency</b>que les cash flows (USD pour une company US) et même nature (real/nominal)</div>
</div></div>
<ul>
<li>Un government rate n\'est pas toujours risk-free : <b>India 2010 : rate 8 % − default spread 3 % = Rf de 5 %</b> en rupees. Pour un emerging country, on prend un developed country proche et on ajoute une <b>country risk premium</b>.</li>
<li><b>Rf ↑ → Ke ↑</b> (les investisseurs exigent plus des assets risqués).</li>
</ul>

<h3>The market risk premium (MRP) et l\'ERP</h3>
<ul>
<li><b>MRP</b> = expected market return − Rf. Typical values : 3 % à 10 % ; ~<b>5.5 %</b> aux US sur la dernière decade. Estimée en <b>historical</b> (<b>geometric</b> average) ou en <b>implied</b> (iMRP, forward-looking).</li>
<li><b>ERP</b> (equity risk premium d\'un titre) = <b>β × MRP</b>. Donc Ke = Rf + ERP.</li>
</ul>

<h3>The beta (β) : systematic risk</h3>
<div class="tblwrap"><table>
<tr><th>β</th><th>Meaning</th></tr>
<tr><td><b>1</b></td><td>Moves like the market (market +10 % → stock +10 %)</td></tr>
<tr><td><b>2</b></td><td>Twice as volatile (market +10 % → stock +20 % ; market −10 % → −20 %)</td></tr>
<tr><td><b>0</b></td><td>Uncorrelated with the market</td></tr>
<tr><td><b>−1</b></td><td>Moves opposite to the market (very rare)</td></tr>
</table></div>
<p>Le beta ne mesure que le <b>systematic risk</b> (non-diversifiable : macro, interest rates, inflation, FX). Le <b>specific risk</b> à la company se diversifie : le market ne le rémunère pas. Le beta dépend de la <b>cyclicality du secteur</b>, de l\'<b>operating leverage</b> (fixed costs) et du <b>financial leverage</b> (debt).</p>

<div class="box must"><span class="badge b-must">MUST KNOW</span><b>Levered vs Unlevered beta</b>
<div class="formula">β<sub>L</sub> = β<sub>U</sub> × [1 + (1 − t) × D/E]<small>β<sub>U</sub> = β<sub>L</sub> / [1 + (1 − t) × D/E]</small></div>
<ul><li><b>β<sub>U</sub></b> (sans debt) = <b>business risk</b> seul. <b>β<sub>L</sub></b> = business risk + financial risk (lié à la debt) (donc β<sub>L</sub> &gt; β<sub>U</sub> dès qu\'il y a de la debt).</li><li><b>Bottoms-up approach</b> : ① select comparables ② <b>unlever</b> leurs betas, average/median ③ <b>relever</b> avec le D/E et le tax rate de la target.</li><li><b>Regression approach</b> : beta = slope de la droite reliant les returns du titre à ceux du market sur 3-5 ans (drawback : historical, high standard error).</li></ul></div>
<div class="box ex"><b>Examples</b> : β<sub>U</sub> = 0,8 ; D/E = 1 ; t = 25 % → β<sub>L</sub> = 0,8 × (1 + 0,75 × 1) = <b>1,4</b>.<br>β<sub>L</sub> = 1,4 ; D/E = 0,5 ; t = 20 % → β<sub>U</sub> = 1,4 / (1 + 0,8 × 0,5) = 1,4 / 1,4 = <b>1,0</b>.</div>

<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>CAPM/beta criticisms</b> : (1) backward-looking, (2) capital structure qui change dans le temps, (3) ne capte que le systematic risk, (4) d\'autres factors expliquent les returns → <b>multifactor models</b> (Fama-French : size, value, momentum, quality…).<br><b>Size premium</b> : on ajoute une premium pour les small companies : <b>Ke = Rf + β(Rm − Rf) + FSP</b> (FSP : 0 % pour les très grosses market caps, jusqu\'à ~7 % pour les très petites).</div>

<h3>Rules of thumb sur le Ke</h3>
<ul>
<li>↑ si : small high-growth company, emerging market, <b>high leverage</b>, high beta, poor governance, bear markets, unlisted company, no dividends.</li>
<li>Plus de debt → <b>Ke ↑</b> ; plus d\'equity → Ke ↓. Toujours <b>Ke &gt; Kd</b> (les shareholders sont derniers servis en cas de bankruptcy).</li>
</ul>` },

    { t: '6. Cost of debt (Kd) et tax rate', h: `
<p><b>Debt</b> = toute interest-bearing debt (short et long term) + toutes les <b>leasing</b> obligations (operating ou financial). Caractéristiques : fixed payments, <b>tax-deductible</b>, default en cas de non-paiement.</p>
<div class="box must"><span class="badge b-must">MUST KNOW</span><b>How to estimate Kd (3 cases)</b>
<ol><li>La company a des <b>listed bonds</b> : utiliser leur <b>yield to maturity</b> (long terme). Si private : return de bonds de comparable companies.</li><li>La company est <b>rated</b> : risk-free rate + <b>default spread</b> correspondant au rating.</li><li><b>Unrated</b> : recent bank loan, ou <b>synthetic rating</b> estimé à partir de l\'<b>Interest Coverage Ratio</b> :
<div class="formula">ICR = EBIT / Interest expense<small>higher ICR → better rating → lower spread</small></div></li></ol>
Kd doit être dans la <b>même currency</b> que Ke et que les cash flows.</div>
<div class="box ex">ICR : EBIT = 200 et interest = 50 → ICR = <b>4</b> (rating A- environ, spread ~1,2 %). ICR = 1,5 → rating B (spread ~3,6 % ou plus).</div>

<h3>Which tax rate pour le WACC?</h3>
<div class="tblwrap"><table>
<tr><th>Rate</th><th>Definition</th></tr>
<tr><td><b>Effective</b></td><td>Taxes paid / net income : <b>historical</b> average</td></tr>
<tr><td><b>Marginal</b></td><td>Rate on the <b>last euro</b> de profit</td></tr>
<tr><td><b>Normalised</b></td><td>Rate smoothed pour les exceptional items</td></tr>
</table></div>
<div class="box must"><span class="badge b-must">MUST KNOW</span>Pour le WACC on utilise le <b>future marginal tax rate</b> : il reflète le tax saving sur la debt supplémentaire (le WACC est forward-looking). Pour une company internationale : weighted average par la répartition géographique du revenue.</div>` },

    { t: '7. Terminal Value', h: `
<p>Une company ne s\'arrête pas au bout de 5-10 ans. On projette précisément les cash flows sur une <b>explicit period</b>, puis on résume tout le reste par une <b>terminal value (TV)</b>, qui est <b>la plus grosse composante du DCF</b>.</p>
<div class="formula">TV = FCF<sub>N</sub> × (1 + g) / (r − g)<small>Gordon model · puis on discount : TV / (1 + r)ᴺ</small></div>
<div class="box ex"><b>Example</b> : FCF de la dernière year = 200 ; g = 3 % ; r = 10 % → TV = 200 × 1,03 / 0,07 = <b>≈ 2 943</b> (à discount sur N years).</div>
<div class="tblwrap"><table>
<tr><th>TV method</th><th>Idea</th></tr>
<tr><td><b>Multiple approach</b></td><td>On suppose une exit à un multiple (ex. EBITDA). Plus simple, mais le multiple futur est incertain → on montre une <b>range</b> (sensitivity table).</td></tr>
<tr><td><b>Stable growth (Gordon)</b></td><td>Techniquement la plus solide : suppose une perpetual stable growth.</td></tr>
<tr><td><b>Liquidation value</b></td><td>Utile si les assets sont séparables et revendables un à un.</td></tr>
</table></div>
<div class="box must"><span class="badge b-must">MUST KNOW</span><b>The stable growth rate (g)</b>
<ul><li><b>Ne peut pas dépasser la growth de l\'économie</b> dans laquelle opère la company (pour une multinationale : celle de la global economy). Souvent entre la GDP growth et l\'inflation.</li><li>Peut être <b>négatif</b> (company qui disparaît progressivement).</li><li>En nominal cash flows, g est nominal. Proxy : expected inflation + expected real rate.</li><li>En growth stable : beta → <b>1</b>, cost of debt = solid company (BBB ou mieux), leverage vers la sector average, sustainable return on capital.</li></ul></div>
<div class="box know"><span class="badge b-know">UNDERSTAND</span><b>Ce qui pèse le plus dans un DCF</b> : le <b>discount rate</b> et la <b>terminal value</b>. 1 % de plus ou de moins sur le rate a bien plus d\'impact que 1 % sur la revenue growth ou sur les margins, car il affecte tous les cash flows. Plus la growth actuelle est élevée par rapport à g, plus la période de high growth sera longue (size, barriers to entry).</div>` },

    { t: '8. Which cash flows? EBITDA, OCF, FCF, FCFE, FCFF', h: `
<div class="tblwrap"><table>
<tr><th>Measure</th><th>Definition</th><th>Key points</th></tr>
<tr><td><b>EBITDA</b></td><td>Net income + taxes + interest + D&amp;A</td><td>Approximation du cash, comparaison entre companies du même sector. <b>Mais</b> ignore CapEx et change in working capital. Buffett : « ce n\'est pas du cash ».</td></tr>
<tr><td><b>OCF</b> (operating cash flow)</td><td>Net income + D&amp;A + other non-cash items − change in working capital</td><td>Part du net income (interest déjà pris en compte).</td></tr>
<tr><td><b>FCF</b></td><td><span class="f">FCF = OCF − CapEx</span></td><td>« Free » cash pour le management. Diffère du investing cash flow (qui inclut divestitures, acquisitions…).</td></tr>
<tr><td><b>FCFE</b> (levered)</td><td>FCF + debt issued − principal repayments</td><td>Cash disponible pour les <b>shareholders</b> (après debt service). On le discount au <b>Ke</b> → donne directement l\'<b>equity value</b>.</td></tr>
<tr><td><b>FCFF</b> (unlevered)</td><td>Cash disponible pour <b>tous</b> les capital providers (shareholders + lenders), avant debt service. Formule usuelle : EBIT × (1 − t) + D&amp;A − CapEx − Δ working capital</td><td>Ignore la capital structure (rend les companies comparables). On le discount au <b>WACC</b> → donne l\'<b>Enterprise Value</b>.</td></tr>
</table></div>
<div class="diagram"><div class="cols">
 <div class="col-box green"><h4>FCFF + WACC</h4><p>→ <b>Enterprise Value</b></p><p>Puis on soustrait la net debt etc. pour obtenir l\'equity value.</p></div>
 <div class="col-box yellow"><h4>FCFE + Ke</h4><p>→ <b>Equity Value</b> directement</p><p>Nécessite de suivre debt et cash year by year.</p></div>
</div><div class="cap">Consistency rule : le discount rate doit correspondre aux investors qui perçoivent le cash flow.</div></div>` },

  ],
  retenir: `<ul>
<li><b>Value ≠ price.</b> Les écarts viennent surtout des <b>growth</b> assumptions.</li>
<li>Zero growth : V = CF/r · Gordon : V = FCF₁/(r − g), avec r &gt; g · DCF = cash flows explicites + terminal value actualisée.</li>
<li><b>WACC</b> = Ke·E/(D+E) + Kd(1 − t)·D/(D+E) (weights en market values, marginal tax rate).</li>
<li><b>CAPM</b> : Ke = Rf + β(Rm − Rf) (+ premium de taille). Rf = 10-year government bond, même currency, default-free.</li>
<li>β<sub>L</sub> = β<sub>U</sub>[1 + (1 − t)D/E]. Bottoms-up : unlever les comparables, relever avec la capital structure de la target.</li>
<li>Kd : bond yield, ou rating, ou synthetic rating via l\'ICR = EBIT / interest.</li>
<li>TV = FCF<sub>N</sub>(1 + g)/(r − g) ; g ≤ growth de l\'économie ; TV + rate = ce qui pèse le plus.</li>
<li>FCF = OCF − CapEx · <b>FCFF + WACC → EV</b> · <b>FCFE + Ke → equity value</b>.</li></ul>`,
  qs: [
    Q('Which valuation approach is considered "intrinsic"?', ['Comparable company multiples', 'Discounted cash flow (income-based)', 'Precedent transaction multiples', 'Book value'], 1,
      ['Les multiples comparables sont une approche de market.', 'Le DCF fonde la valeur sur les cash flows futurs actualisés, indépendamment du market.', 'Approche de market également.', 'La book value est une approche par les assets.']),
    Q('In an IPO valuation, compared with an M&A valuation:', ['A control premium and synergies are added', 'There is no control premium or synergies, but an IPO discount is applied', 'Synergies are doubled', 'The valuation is always higher'], 1,
      ['C\'est le cas d\'une valuation M&A.', 'En IPO on valorise sans control premium ni synergies, et on applique une discount d\'introduction.', 'Aucun fondement.', 'Pas systématique : il y a une discount.']),
    Q('In PE/VC valuation, the focus is mainly on:', ['The book value of equity', 'The exit value that allows a target IRR', 'The dividend yield', 'The control premium'], 1,
      ['Pas le centre de l\'analyse.', 'Le fonds part de la valeur de sortie qui permet d\'atteindre le TRI target exigé par les LPs.', 'Le return en dividends n\'est pas le sujet : un fonds raisonne sur la valeur de revente (exit) et le TRI.', 'La control premium relève du M&A.']),
    Q('Which of the following is a TRUE statement about valuation, according to the course?', ['A good valuation is precise', 'All valuations are biased; only the size and direction of the bias vary', 'The more complex the model, the better', 'There is one objective "true" value'], 1,
      ['Faux : il n\'existe pas de valuation précise.', 'Toute valuation est biaisée, proportionnellement à qui paie et combien.', 'Faux : les modèles simples font souvent mieux.', 'Faux : le mythe de la valeur « vraie » est contredit.']),
    Q('A company\'s cash flow is 100 and the discount rate is 10%. The buyer expects growth of 4%, the seller 5%. The values implied (Gordon) for buyer and seller are approximately:', ['1,000 and 1,000', '1,667 and 2,000', '2,000 and 1,667', '1,100 and 1,050'], 1,
      ['Cela ignorerait la growth.', '100/(10% − 4%) = 1 667 pour le buyer ; 100/(10% − 5%) = 2 000 pour le seller.', 'Inversé : plus de growth = plus de valeur.', 'Calcul incorrect.']),
    Q('Why is the market price often different from an investor\'s intrinsic value?', ['Because the discount rate is always different', 'Because of disagreements on future growth, mainly', 'Because of accounting standards only', 'Because of random errors in the DCF'], 1,
      ['Possible, mais pas la raison principale.', 'La plupart des écarts de valuation viennent de désaccords sur la growth future.', 'Pas la raison principale.', 'Pas la raison citée.']),
    Q('The Gordon Growth Model requires that:', ['g is greater than the discount rate', 'g is lower than the discount rate', 'g equals the discount rate', 'g is negative'], 1,
      ['Si g > r, la formule donne une valeur négative et n\'a pas de sens.', 'Il faut r > g : le dénominateur (r − g) doit être positif.', 'Si g = r, division par zéro.', 'g peut être négatif, ce n\'est pas une condition.']),
    Q('FCFF₁ = 50, WACC = 10%, g = 2%. Using the constant growth model, the value of the firm is:', ['500', '625', '417', '6.25'], 1,
      ['500 = 50/0,10 : on a oublié g.', '50 / (0,10 − 0,02) = 625.', '417 = 50/0,12 : on a additionné g au lieu de le soustraire.', 'Mauvais ordre de grandeur.']),
    Q('The capitalization of earnings (zero growth) model is most appropriate for:', ['Fast-growing start-ups with erratic cash flows', 'Profitable businesses with stable, level earnings', 'Companies with negative cash flows', 'Companies that will be liquidated next year'], 1,
      ['Pour eux, le DCF est plus adapté.', 'Il suppose des cash flows constants (ou à growth régulière).', 'Value = CF/r nécessite des cash flows positifs.', 'Pas le cas typique.']),
    Q('Why is the DCF method often recommended when growth rates are erratic?', ['Because it uses book values', 'Because it can account for significant variation in growth over several years', 'Because it ignores discounting', 'Because it relies on market multiples'], 1,
      ['Le DCF repose sur des cash flows futurs actualisés, pas sur la book value.', 'Le DCF modélise année par année les cash flows et peut donc refléter des growth rate variables.', 'Faux : il actualise.', 'Les multiples relèvent des méthodes de market ; le DCF est intrinsèque.']),
    Q('Which is a typical disadvantage of the DCF method?', ['It depends on market sentiment', 'It relies on estimates that can be manipulated and should not be used in isolation', 'It cannot be used for projects', 'It ignores cash flows'], 1,
      ['Au contraire, il est indépendant du market.', 'Les projections sont modifiables et incertaines ; il faut le compléter avec des méthodes relatives.', 'Au contraire, le DCF s\'applique à une grande variété de projets dès qu\'on peut estimer les cash flows futurs.', 'Faux : ce sont les cash flows qui sont au centre.']),
    Q('E = 700, D = 300, Ke = 12%, Kd = 6%, tax rate 25%. The WACC is approximately:', ['9.75%', '8.40%', '10.2%', '12%'], 0,
      ['0,7 × 12 % + 0,3 × 6 % × 0,75 = 8,4 % + 1,35 % = 9,75 %.', '8,4 % est seulement la part equity.', 'Calcul incorrect (tax oublié).', 'C\'est le Ke : on ne tient pas compte de la debt.']),
    Q('Why is the cost of debt multiplied by (1 − t) in the WACC?', ['Because debt is riskier', 'Because interest is tax deductible (tax shield)', 'Because debt is issued at book value', 'Because t is the inflation rate'], 1,
      ['Le risk plus élevé de la debt est reflété dans Kd lui-même, pas dans le facteur (1 − t) qui concerne la tax.', 'Les interest sont déductibles : le cost net de la debt est Kd × (1 − t).', 'Faux : on utilise les valeurs de market.', 'Faux : t est le rate de tax.']),
    Q('The weights E/(D+E) and D/(D+E) in the WACC should be based on:', ['Book values', 'Market values', 'Historical averages of 10 years', 'Nominal values of debt'], 1,
      ['Les titres sont émis au price de market.', 'On utilise les valeurs de market (avec une circularité).', 'Une moyenne historique ne reflète pas le cost actuel d\'émission des titres : on utilise les valeurs de market.', 'Les valeurs nominales ne correspondent pas aux price auxquels les titres s\'échangent ; il faut la valeur de market.']),
    Q('All else equal, which factor leads to a LOWER WACC?', ['A higher interest rate on debt', 'A higher corporate tax rate', 'A move to a riskier industry', 'Operating in an emerging market'], 1,
      ['Un rate de la debt plus élevé relève le Kd donc le WACC.', 'Plus de tax = bouclier fiscal plus grand = cost net de la debt plus bas = WACC plus bas.', 'Plus de risk = WACC plus élevé.', 'Risk pays = WACC plus élevé.']),
    Q('What happens to the cost of equity when a company increases its debt?', ['It decreases', 'It increases because equity becomes riskier', 'It stays the same', 'It becomes lower than the cost of debt'], 1,
      ['Faux : plus de debt rend l\'action plus risquée, donc Ke augmente et non l\'inverse.', 'Plus de debt = risk de défaut plus grand pour les shareholders = Ke plus élevé.', 'Pas dans la théorie du cours.', 'Ke est toujours supérieur à Kd.']),
    Q('Rf = 3%, β = 1.5, market risk premium = 6%. The cost of equity (CAPM) is:', ['9%', '12%', '10.5%', '18%'], 1,
      ['9 % = 3 % + 6 % : on a oublié le beta.', 'Ke = 3 % + 1,5 × 6 % = 12 %.', 'Calcul incorrect.', '18 % = 3 % + 1,5 × 10 % : erreur.']),
    Q('Which of the following is NOT a requirement for a risk-free rate?', ['Long-term', 'Default-free', 'In the same currency as the cash flows', 'Issued by a company with a high credit rating'], 3,
      ['Requis : long terme (10 ans).', 'Requis : sans risk de défaut.', 'Requis : même devise et même nature (réel/nominal).', 'Le risk-free rate vient d\'une obligation d\'État bien notée, pas d\'une company.']),
    Q('Indian government bond yield is 8% and the default spread is 3%. The risk-free rate in rupees is:', ['11%', '8%', '5%', '3%'], 2,
      ['On a additionné le spread au lieu de le soustraire.', 'Ce rate contient une premium de défaut : il n\'est pas sans risk.', 'Rf = 8 % − 3 % = 5 %.', '3 % est le spread, pas le rate.']),
    Q('A stock has a beta of 2. If the market rises by 10%, the stock is expected to:', ['Rise by 5%', 'Rise by 10%', 'Rise by 20%', 'Fall by 20%'], 2,
      ['Ce serait un beta de 0,5.', 'Ce serait un beta de 1.', 'Beta 2 : deux fois plus volatile que le market.', 'Ce serait un beta de −2.']),
    Q('Beta measures:', ['Total risk of a company', 'Systematic (non-diversifiable) risk relative to the market', 'Company-specific risk only', 'Default risk'], 1,
      ['Le risk total inclut le risk spécifique.', 'Le beta mesure la sensibilité au market, le risk systématique.', 'Le risk spécifique est diversifiable : non rémunéré.', 'Le risk de défaut relève du Kd.']),
    Q('Unlevered beta βU = 0.8, D/E = 1, tax rate 25%. The levered beta is:', ['0.80', '1.40', '1.00', '0.60'], 1,
      ['Ce serait βU : on a oublié le leverage.', 'βL = 0,8 × [1 + 0,75 × 1] = 1,4.', 'Calcul incorrect.', 'Le beta endetté est supérieur au beta désendetté.']),
    Q('Levered beta = 1.4, D/E = 0.5, tax rate 20%. The unlevered beta is:', ['1.00', '1.40', '1.96', '0.70'], 0,
      ['βU = 1,4 / [1 + 0,8 × 0,5] = 1,4 / 1,4 = 1,0.', 'Ce serait sans désendettement.', 'On a multiplié au lieu de diviser.', 'Erreur de calcul.']),
    Q('In the "bottoms-up" beta approach, the steps are:', ['Regress stock returns on market returns for 3–5 years', 'Select comparables, unlever their betas, average them, and relever with the target\'s D/E and tax rate', 'Use the beta of the S&P 500', 'Use only book values'], 1,
      ['Cette méthode est la régression historique.', 'Bottom-up : comparables → désendetter → moyenne/médiane → réendetter avec la structure de la target.', 'Le beta du market est 1 par définition.', 'Les valeurs comptables ne sont pas utilisées : on part de bêtas de comparables cotés, et on utilise les D/E de market.']),
    Q('What is a main criticism of regression-based betas?', ['They are forward-looking', 'They are backward-looking and reflect past leverage and business mix, with a high standard error', 'They ignore the market', 'They are always negative'], 1,
      ['C\'est l\'inverse.', 'Le beta de régression est historique et peut ne plus refléter la company actuelle.', 'Le beta est justement calculé par rapport au market : il en est la pente.', 'Un beta négatif est très rare ; ce n\'est pas une critique de la méthode.']),
    Q('A size premium (FSP) is added to the CAPM cost of equity for:', ['Large companies', 'Small companies, because they are riskier and less liquid', 'Companies with negative beta', 'Companies without debt'], 1,
      ['Les grosses capitalisations ont une premium de 0 %.', 'Les petites companies ont plus de risk de défaut et moins de liquidité.', 'Sans rapport.', 'Sans rapport.']),
    Q('How can the cost of debt be estimated for an unrated company with no traded bonds?', ['Using the CAPM', 'Using a recent bank loan or a synthetic rating based on the interest coverage ratio', 'Using the dividend yield', 'Using the beta'], 1,
      ['Le CAPM sert au cost of equity.', 'Emprunt bancaire récent, ou note synthétique à partir de l\'ICR (EBIT / charges d\'interest).', 'Pas le cas.', 'Pas le cas.']),
    Q('The interest coverage ratio (ICR) is:', ['Net income / interest', 'EBIT / interest expenses', 'Debt / equity', 'Interest / revenue'], 1,
      ['Ce n\'est pas la définition utilisée.', 'ICR = EBIT / charges d\'interest ; plus il est élevé, meilleure est la note.', 'Ça, c\'est le D/E.', 'Ce n\'est pas la définition.']),
    Q('Which tax rate is recommended for the WACC?', ['Effective (historical) tax rate', 'Marginal tax rate (forward-looking)', 'Zero', 'Average world tax rate'], 1,
      ['Rétrospectif et peut contenir des éléments non récurrents.', 'Le rate marginal reflète l\'économie de tax réelle sur la debt supplémentaire.', 'Un rate nul supprimerait le bouclier fiscal de la debt, qui existe bel et bien.', 'Un rate mondial moyen n\'a pas de sens ; pour une company internationale on pondère les rate selon la répartition géographique du CA.']),
    Q('FCF = 200 in the final explicit year, g = 3%, r = 10%. The Gordon terminal value is approximately:', ['2,943', '2,857', '2,000', '3,000'], 0,
      ['TV = 200 × 1,03 / (0,10 − 0,03) = 206 / 0,07 ≈ 2 943.', '2 857 = 200 / 0,07 : on a oublié de multiplier par (1 + g).', '2 000 = 200 / 0,10 : sans growth.', 'Calcul incorrect.']),
    Q('The stable (terminal) growth rate:', ['Can exceed the growth rate of the economy', 'Cannot exceed the growth rate of the economy in which the firm operates, and can be negative', 'Must be at least 10%', 'Must equal inflation exactly'], 1,
      ['Une company ne peut pas croître plus vite que l\'économie éternellement.', 'Plafonné par la growth de l\'économie ; peut être négatif si la company décline.', 'Un rate de 10 % éternel dépasserait la growth de toute économie ; il est plafonné par la growth de l\'économie.', 'Faux : c\'est un proxy, pas une obligation.']),
    Q('In a DCF, which two elements usually have the largest impact on value?', ['Tax rate and working capital', 'The discount rate and the terminal value', 'Revenue in year 1 and headcount', 'Depreciation and amortization'], 1,
      ['Moins sensibles.', 'Le rate d\'actualisation affecte tous les cash flows ; la TV est la plus grosse composante.', 'Faible impact.', 'Faible impact.']),
    Q('Which terminal value approach assumes the company is sold at a multiple at the end of the explicit period?', ['Stable growth model', 'Multiple approach', 'Liquidation value', 'Zero growth model'], 1,
      ['Ça utilise Gordon.', 'Multiple approach : plus simple mais le multiple futur est incertain → table de sensibilité.', 'Ça suppose la vente des assets un à un.', 'Hors sujet.']),
    Q('Free cash flow (FCF) is computed as:', ['Operating cash flow + CapEx', 'Operating cash flow − CapEx', 'EBITDA − interest', 'Net income + depreciation only'], 1,
      ['On soustrait les investissements, on ne les ajoute pas.', 'FCF = OCF − CapEx.', 'Ce n\'est pas la formule.', 'Il manque les variations de BFR et les CapEx.']),
    Q('Which combination of cash flow and discount rate is consistent?', ['FCFF with cost of equity', 'FCFF with WACC → enterprise value', 'FCFE with WACC', 'FCFE with the risk-free rate'], 1,
      ['FCFF appartient à tous les apporteurs de capitaux : on utilise le WACC.', 'FCFF actualisé au WACC donne l\'EV.', 'FCFE s\'actualise au Ke.', 'Le risk-free rate ne reflète pas le risk des shareholders ; FCFE s\'actualise au cost of equity (Ke).']),
    Q('FCFE discounted at Ke gives directly:', ['Enterprise value', 'Equity value', 'Net debt', 'WACC'], 1,
      ['Cela vient du FCFF + WACC.', 'FCFE concerne les shareholders : on obtient la equity value.', 'La net debt est un élément du bilan, pas un résultat d\'actualisation.', 'Le WACC est un rate d\'actualisation, pas une valeur obtenue par actualisation.']),
    Q('Which of the following is a reason why capital structure is ignored when estimating FCFF?', ['Because debt does not exist', 'It makes firms comparable and the capital structure is somewhat discretionary', 'Because taxes are zero', 'Because FCFE is always higher'], 1,
      ['La debt existe bel et bien ; on l\'ignore dans le FCFF pour comparer les companies, pas parce qu\'elle n\'existe pas.', 'Cela rend les companies comparables et la structure peut être choisie différemment par les propriétaires.', 'Les taxes sont pris en compte (EBIT × (1 − t)) ; ce n\'est pas la raison.', 'FCFE n\'est pas toujours plus élevé que FCFF ; ce n\'est pas lié à la raison d\'ignorer la structure du capital.']),
    Q('Which of the following is NOT a limitation of CAPM mentioned in the course?', ['It is backward-looking', 'It captures only systematic risk', 'Other risk factors (size, value, momentum) also explain returns', 'It always gives a negative cost of equity'], 3,
      ['C\'est une limite citée.', 'Limite citée : ignore le risk spécifique.', 'Limite citée : modèles multifactoriels.', 'Le CAPM ne donne pas systématiquement un cost négatif : cette affirmation est fausse.'])
  ]
});
