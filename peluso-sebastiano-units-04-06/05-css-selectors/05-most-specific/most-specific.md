
# For each selector, calculate the specificity explain

---

The specificity of a CSS selector is calculated by assigning a value to each selector type:

ID: 100 punti

Classi, pseudo-classi e attributi: 10 punti

Elementi e pseudo-elementi: 1 punto

Di seguito il calcolo della specificità per ogni selettore elencato.

1. ul li {}

Calcolo:

* ul (elemento) = 1

* li (elemento) = 1

Totale: (0,0,2) = 2

Explanation: A descending selector that applies to all li within ul. It has low specificity.

2. ul > li {}

Calcolo:

* ul (elemento) = 1

* li (elemento) = 1

Totale: (0,0,2) = 2

Explanation: Similar to the previous one, but with the > combinator. The specificity remains unchanged.

3. body > #main.mobile a:hover {}

Calcolo:

* body (elemento) = 1

* #main (ID) = 100

* .mobile (classe) = 10

* a (elemento) = 1

* :hover (pseudo-classe) = 10

Totale: (0, 120, 2) = 122

Explanation: The #main ID contributes most to specificity.

4. div p > span {}

Calcolo:

* div (elemento) = 1

* p (elemento) = 1

* span (elemento) = 1

Totale: (0,0,3) = 3

Explanation: Only elements, so low specificity.

5. .users .name {}

Calcolo:

* .users (classe) = 10

* .name (classe) = 10

Totale: (0,20,0) = 20

Explanation: Two classes increase specificity.

6. [href$='.pdf'] {}

Calcolo:

* [href$='.pdf'] (attributo) = 10

Totale: (0,10,0) = 10

Explanation: An attribute selector has medium specificity.

7. :hover {}

Calcolo:

* :hover (pseudo-classe) = 10

Totale: (0,10,0) = 10

Explanation: Same specificity as an attribute selector.

8. div .name {}

Calcolo:

* div (elemento) = 1

* .name (classe) = 10

Totale: (0,10,1) = 11

Explanation: The class increases specificity over a purely element-based selector.

9. a[href$='.pdf'] {}

Calcolo:

* a (elemento) = 1

* [href$='.pdf'] (attributo) = 10

Totale: (0,10,1) = 11

Explanation: The combination of element and attribute improves specificity.

10. .pictures img:hover {}

Calcolo:

* .pictures (classe) = 10

* img (elemento) = 1

* :hover (pseudo-classe) = 10

Totale: (0,20,1) = 21

Explanation: Pseudo-class and class increase specificity.

11. .news.breaking.featured {}

Calcolo:

* .news (classe) = 10

* .breaking (classe) = 10

* .featured (classe) = 10

Totale: (0,30,0) = 30

Explanation: Three classes add specificity.

12. .user #name {}

Calcolo:

* .user (classe) = 10

* #name (ID) = 100

Totale: (0,110,0) = 110

Explanation: ID weighs heavily on specificity.

13. #name span {}

Calcolo:

* #name (ID) = 100

* span (elemento) = 1

Totale: (0,100,1) = 101

Explanation: The ID takes precedence over other selectors.

14. nav#nav > li:hover {}

Calcolo:

* nav (elemento) = 1

* #nav (ID) = 100

* li (elemento) = 1

* :hover (pseudo-classe) = 10

Totale: (0,110,2) = 112

Explanation: The ID and pseudo-class give high specificity.

15. li:nth-child(2n+1):hover {}

Calcolo:

* li (elemento) = 1

* :nth-child(2n+1) (pseudo-classe) = 10

* :hover (pseudo-classe) = 10

Totale: (0,20,1) = 21

Explanation: Two pseudo-classes increase specificity.