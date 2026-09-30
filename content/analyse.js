// Contenu séparé : Analyse — Séries numériques
// Ce fichier peut être mis à jour indépendamment du tableau de bord.
window.analysisFolders = [
{title:'1. Généralités',items:[
['def','Définition — Série et sommes partielles','À une suite numérique (u_n), on associe la série ∑u_n et ses sommes partielles S_n=∑_{k=0}^n u_k.'],
['def','Définition — Convergence, somme et reste','La série ∑u_n converge lorsque la suite (S_n) converge vers une limite S. S est la somme de la série. Le reste d’ordre n est R_n=S-S_n.'],
['method','Méthode — Calculer une somme','Identifier une série de référence ou calculer explicitement S_n, puis passer à la limite. Les sommes télescopiques sont à repérer en priorité.'],
['exo','Exercice 1 — Décomposition et télescopage','Pour n≥2, étudier et sommer la série de terme général a_n=n/(n²-1)².'],
['corr','Correction — Exercice 1','On décompose a_n=1/4(1/(n-1)²-1/(n+1)²). La somme partielle télescope ; en faisant tendre N vers +∞, on obtient la somme 5/16.'],
['prop','Proposition — Série géométrique','La série ∑q^n converge si et seulement si |q|<1. Dans ce cas sa somme, à partir de n=0, vaut 1/(1-q).'],
['prop','Proposition — Série télescopique','La série ∑(u_{n+1}-u_n) converge si et seulement si la suite (u_n) converge.'],
['demo','Démonstration à savoir — Série télescopique','La somme partielle vaut ∑_{k=0}^N(u_{k+1}-u_k)=u_{N+1}-u_0. Elle admet donc une limite finie si et seulement si (u_n) converge.'],
['prop','Proposition — Condition nécessaire de convergence','Si ∑u_n converge, alors u_n→0. La réciproque est fausse.'],
['demo','Démonstration à savoir — Convergence ⇒ u_n→0','Si S_n=∑_{k=0}^n u_k converge vers S, alors u_n=S_n-S_{n-1}→S-S=0.'],
['def','Définition — Grossièrement divergente','Une série dont le terme général ne tend pas vers 0 est grossièrement divergente.'],
['prop','Proposition — Linéarité','Toute combinaison linéaire de séries convergentes converge, et la somme est la même combinaison linéaire des sommes.'],
['prop','Proposition — Convergente + divergente','La somme terme à terme d’une série convergente et d’une série divergente est divergente.']
]},
{title:'2. Séries à termes positifs',items:[
['th','Théorème — Critère des sommes partielles','Pour une série à termes positifs, (S_n) est croissante. La série converge si et seulement si la suite des sommes partielles est majorée.'],
['th','Théorème — Comparaison série–intégrale','Pour f positive, continue et décroissante sur un intervalle [n₀,+∞[, les sommes de f(k) se comparent aux intégrales de f ; en particulier la série ∑f(n) et l’intégrale impropre correspondante ont même nature.'],
['demo','Démonstration à savoir — Comparaison série–intégrale','La décroissance donne, sur [k,k+1], f(k+1)≤f(x)≤f(k). En intégrant puis en sommant ces inégalités, on encadre les sommes partielles par des intégrales. Le caractère borné ou non de ces quantités donne le résultat.'],
['prop','Corollaire — Séries de Riemann','La série ∑1/n^α converge si et seulement si α>1.'],
['demo','Démonstration à savoir — Séries de Riemann','On applique la comparaison série–intégrale à f(x)=x^{-α}. L’intégrale impropre ∫_1^{+∞}x^{-α}dx converge exactement lorsque α>1.'],
['th','Théorème — Domination','Pour deux suites positives à partir d’un certain rang, si 0≤u_n≤v_n et si ∑v_n converge, alors ∑u_n converge. Si 0≤v_n≤u_n et ∑v_n diverge, alors ∑u_n diverge.'],
['th','Théorème — Équivalence','Pour u_n,v_n>0 à partir d’un certain rang et u_n~v_n, les séries ∑u_n et ∑v_n ont même nature.'],
['prop','Règle pratique — Puissances','Si u_n~C/n^α avec C>0, la série a la nature de la série de Riemann correspondante.'],
['prop','Proposition — Règle de d’Alembert','Pour u_n>0 à partir d’un certain rang, si u_{n+1}/u_n→ℓ : si ℓ<1, ∑u_n converge ; si ℓ>1, elle diverge grossièrement. Le cas ℓ=1 ne permet pas de conclure.'],
['demo','Démonstration à savoir — d’Alembert','Si ℓ<1, choisir m avec ℓ<m<1. À partir d’un certain rang, u_{n+1}≤m u_n, donc u_n est dominée par une suite géométrique convergente. Si ℓ>1, le quotient est finalement >1 : u_n est finalement croissante et positive, donc ne tend pas vers 0 ; la série diverge grossièrement.'],
['exo','Exercice 2 — Conséquences d’une série positive convergente','Soit ∑u_n convergente avec u_n≥0. Étudier ∑u_n², ∑u_n/(1+u_n), puis une série obtenue à partir de 1-cos(u_n).'],
['corr','Correction — Exercice 2','Comme u_n→0, on a finalement u_n≤1, donc u_n²≤u_n. De plus u_n/(1+u_n)≤u_n. Enfin (1-cos u_n)/u_n ~ u_n/2 ; on utilise l’équivalence et la positivité à partir d’un certain rang.'],
['exo','Exercice 3 — Reste d’une série de Riemann','Pour u_n=∑_{k=n+1}^{+∞}1/k², étudier ∑u_n.'],
['corr','Correction — Exercice 3','Par comparaison série–intégrale, u_n~1/n. Ainsi ∑u_n a la nature de la série harmonique et diverge.'],
['exo','Exercice 5 — Coefficients binomiaux','Pour x∈R⁺\\{1/4}, déterminer la nature de ∑ C(2n,n)x^n.']
]},
{title:'2.3 Séries de référence',items:[
['prop','Proposition — Géométrique','∑q^n converge ⇔ |q|<1.'],
['prop','Proposition — Exponentielle','La série exponentielle ∑x^n/n! converge pour tout x et sa somme vaut e^x.'],
['prop','Proposition — Riemann','∑1/n^α converge ⇔ α>1.'],
['prop','Proposition — Bertrand','La série ∑1/[n^α(ln n)^β] converge si et seulement si α>1, ou α=1 et β>1.'],
['demo','Démonstration à savoir — Bertrand','Si α>1, choisir b∈(1,α) et comparer à 1/n^b. Si α<1, choisir b∈(α,1) et comparer en sens divergent. Si α=1, appliquer le critère intégral à f(x)=1/[x(ln x)^β] et poser t=ln x : l’intégrale converge exactement lorsque β>1.'],
['prop','Proposition — Formule de Stirling (non exigible)','n! ~ n^n e^{-n}√(2πn).']
]},
{title:'3. Séries réelles et complexes',items:[
['def','Définition — Série complexe','Une série complexe converge si et seulement si les séries de ses parties réelle et imaginaire convergent.'],
['def','Définition — Convergence absolue','∑u_n converge absolument lorsque ∑|u_n| converge.'],
['prop','Proposition — Convergence absolue ⇒ convergence','Toute série absolument convergente est convergente. La démonstration du cours est indiquée non exigible.'],
['def','Définition — Semi-convergence','Une série est semi-convergente lorsqu’elle converge mais ne converge pas absolument.'],
['def','Définition — Série alternée','Une série alternée possède des termes dont les signes alternent, typiquement ∑(-1)^n a_n avec a_n≥0.'],
['th','Théorème — Critère des séries alternées','Si a_n≥0, (a_n) décroît et a_n→0, alors ∑(-1)^n a_n converge. Le reste a le signe du premier terme négligé et sa valeur absolue est majorée par ce terme.'],
['demo','Démonstration — Critère des séries alternées','On étudie séparément les sommes partielles d’indices pairs et impairs : l’une est monotone dans un sens, l’autre dans l’autre sens, elles sont adjacentes car leur différence vaut un terme a_n→0. Elles convergent donc vers la même limite. L’encadrement de la somme fournit le contrôle du reste.'],
['exo','Exercice 6 — Développements asymptotiques','1) Étudier ∑ ln(1+(-1)^n/√n). 2) Étudier ∑(1/√n-√n sin(1/n)).'],
['corr','Méthode — Exercice 6','Développer suffisamment loin pour faire apparaître le premier terme qui décide de la nature de la série. Dans la première question, le terme alterné en 1/√n ne suffit pas : le terme suivant en 1/n intervient. Dans la seconde, il faut exploiter la compensation des premiers termes.']
]},
{title:'3.3 Développement asymptotique',items:[
['method','Méthode — Développement asymptotique d’un terme général','Lorsqu’une équivalence donne un terme de série critique ou qu’il y a compensation, effectuer un développement limité assez loin pour isoler un terme de référence dont la nature est connue.'],
['method','Réflexe — Harmoniques','∑_{k=1}^N 1/k ~ ln N. Plus précisément, ∑_{k=1}^N1/k=ln N+γ+o(1), où γ est la constante d’Euler.']
]},
{title:'4. Opérations sur les séries — Produit de Cauchy',items:[
['def','Définition — Produit de Cauchy','Pour ∑u_n et ∑v_n, le produit de Cauchy est ∑c_n avec c_n=∑_{k=0}^n u_k v_{n-k}. Ce n’est pas le produit terme à terme.'],
['th','Théorème — Produit de Cauchy','Si ∑u_n et ∑v_n sont absolument convergentes, leur produit de Cauchy est absolument convergent et sa somme vaut (∑u_n)(∑v_n).'],
['exo','Exercice 7 — Produit de deux séries semi-convergentes','On pose a_n=(-1)^n/√n et on considère le produit de Cauchy de ∑a_n par elle-même : étudier la convergence absolue de ∑a_n, exprimer c_n, obtenir un contrôle de ses termes et conclure sur ∑c_n.'],
['exo','Exercice 8 — Application du produit de Cauchy','En utilisant le produit de Cauchy de la série géométrique ∑1/2^n par elle-même, montrer que ∑(n+1)/2^n converge et calculer sa somme.'],
['corr','Correction — Exercice 8','Le coefficient d’indice n du produit vaut ∑_{k=0}^n(1/2^k)(1/2^{n-k})=(n+1)/2^n. La somme du produit vaut (∑1/2^n)^2=2²=4.']
]},
{title:'5. Feuille d’exercices pour les TD',items:[
['exo','Exercice 19 — Produit de Cauchy','Pour a_n=(-1)^n/n, étudier la série, son produit de Cauchy avec elle-même, obtenir |c_n|=(2/n)∑_{k=1}^{n-1}1/k, étudier |c_n| puis conclure.'],
['exo','Exercice 20 — Même nature','Soit ∑u_n à termes positifs. Montrer que ∑u_n et ∑u_n/(1+u_n) ont même nature.'],
['exo','Exercice 21 — max/min','Soient ∑a_n et ∑b_n positives. Étudier ∑max(a_n,b_n) lorsque les deux convergent, puis ∑min(a_n,b_n) lorsque les deux divergent.'],
['exo','Exercice 22 — Règle de Duhamel','Soit u_n>0 telle que u_{n+1}/u_n=1-a/n+O(1/n²). Poser x_n=ln(n^a u_n), étudier ∑(x_{n+1}-x_n), puis en déduire la nature de ∑u_n.'],
['exo','Exercice 23 — Comparaison de quotients','Pour deux séries strictement positives, supposer u_{n+1}/u_n≤v_{n+1}/v_n à partir d’un certain rang. Montrer que la convergence de ∑v_n entraîne celle de ∑u_n.'],
['exo','Exercice 24 — Condensation de Cauchy','Pour u_n positive décroissante, poser v_n=2^n u_{2^n} et montrer que ∑u_n et ∑v_n ont même nature.'],
['exo','Exercice 25 — Série définie par récurrence','Soit u_1∈R et u_{n+1}=e^{-u_n}/2. Justifier l’existence de la suite puis étudier la nature de ∑u_n.']
]},
{title:'Synthèse — arbre de fin de chapitre',items:[['image','Arbre original — Séries numériques',window.seriesTreeImage]]}
];