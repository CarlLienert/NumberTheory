var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Section_1_1",
  "level": "1",
  "url": "Section_1_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 1.1",
  "body": " Section 1.1   Problem 1    nothing yet    nothing yet           Problem 6   For : and so the inequality holds. Assume and consider: The second inequality requires that we prove for . The following inequalities are equivalent: The last inequality is true if or . So, for . We have shown that implies , and we have shown the inequality is true for . By induction, is true for all integers .      Problem 8  For : Assume the identity is true for and consider: Thus, if the identity is true for , then it is true for . By induction the identity is true for all integers . The inequality is equivalent to so from part (a), we need to show that The right hand side is: Clearly since there are factors in both products and all but the first factor are greater in the right hand side. For example, if : Multiply both sides of by to obtain the desired result.    Problem 9  For , . Assume and consider : The first inequality follows from the inductive hypothesis. This first inequality is also where we need to use the assumption that . If , the direction of the inequality would change. The second inequality is true since .    Problem 10  (a) The following is not a complete proof or explanation. It is only the algebra part. Make sure you can identify where the induction hypothesis is used. Make sure you can justify both of the inequalities. (b) Again, the following is only the algebra. It does not constitute a complete proof.     "
},
{
  "id": "Section_1_2",
  "level": "1",
  "url": "Section_1_2.html",
  "type": "Section",
  "number": "",
  "title": "Section 1.2",
  "body": " Section 1.2    Problem 3       Similar idea: let and in the binomial theorem.     Use the expansion of with .  Follow the hint. Make sure to justify both equalities.         Problem 7  Use induction:     Problem 8       Problem 9  Using #8, this is equivalent to: Consider the fraction as: Each of these fractions is less than one, so the product is less than one, which gives the right hand inequality. With the exception of , each of these fractions is greater than . There are factors so the product is greater than .   "
},
{
  "id": "Section_2_1",
  "level": "1",
  "url": "Section_2_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.1",
  "body": " Section 2.1   Problem 1                 Problem 3  The hint follows from question 1(a). If is even, let : where we have used the result from section 1.1 concerning the sum of the first squares. If is odd:      Problem 7        Problem 10  Use induction. The key algebraic step is:     Problem 11              "
},
{
  "id": "Section_2_2",
  "level": "1",
  "url": "Section_2_2.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.2",
  "body": " Section 2.2     Problem 3       Any integer, can be written in the form where Then It remains to show that is of the desired form:        Problem 6  Let by the division algorithm. There are 6 cases. Below the results are shown for some . For example on the first line .       Problem 11  If is odd, then where is 1, 3, 5, 7, 9, 11, 13, or 15. Then It remains to check that is of the form for each of the possible values of . (You should do this.)   "
},
{
  "id": "Section_2_3",
  "level": "1",
  "url": "Section_2_3.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.3",
  "body": " Section 2.3   Problem 2    If , there exists such that . Then so .    If and then there exist integers such that and . Multiply these two equations: , so .    If then for some integer . Then so . Conversely, if then for some integer . Divide by to obtain , so .    similar      Problem 3  This is false. For example: .    Problem 5  By the division algorithm, , , or .   If , then .    If , then , and .    If , then , and .       Problem 7       Problem 12  Let We'll use Theorem 2.2(g): and so , that is . With we have so it must be that     Problem 14    We want to find integers and such that . Rearrange to obtain: and solve the system of equations: A solution is , : . By Theorem 2.4         Let . Since and , then . That is, . So, either or . But, since and ( is odd). So, .       Problem 15  Let . Then and . By Theorem 2.2(g) . That is, . Let to obtain the result.    Problem 20    The hint is basically the solution.    There exist integers such that . Since , there exists an integer such that . Then , so .    If , then by part (a) and we are finished.  Suppose . Since , . Also , so .  Let . Since and since , . Now, and since . So, by Euclid's lemma. Hence . That is and , so .    see hint    There exist integers such that . Multiply by to obtain . Now if and , then by Theorem 2.2(g). This gives since .     "
},
{
  "id": "Section_2_4",
  "level": "1",
  "url": "Section_2_4.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.4",
  "body": " Section 2.4   Problem 2  This is section 2.4   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
