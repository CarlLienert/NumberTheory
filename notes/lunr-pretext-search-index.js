var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Section_1_1",
  "level": "1",
  "url": "Section_1_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 1.1",
  "body": " Section 1.1   Problem 1    nothing yet    nothing yet           Problem 6   For : and so the inequality holds. Assume and consider: The second inequality requires that we prove for . The following inequalities are equivalent: The last inequality is true if or . So, for . We have shown that implies , and we have shown the inequality is true for . By induction, is true for all integers .     Problem 7 - quiz solutions  For : Consider:     Problem 8  For : Assume the identity is true for and consider: Thus, if the identity is true for , then it is true for . By induction the identity is true for all integers . The inequality is equivalent to so from part (a), we need to show that The right hand side is: Clearly since there are factors in both products and all but the first factor are greater in the right hand side. For example, if : Multiply both sides of by to obtain the desired result.    Problem 9  For , . Assume and consider : The first inequality follows from the inductive hypothesis. This first inequality is also where we need to use the assumption that . If , the direction of the inequality would change. The second inequality is true since .    Problem 10  (a) The following is not a complete proof or explanation. It is only the algebra part. Make sure you can identify where the induction hypothesis is used. Make sure you can justify both of the inequalities. (b) Again, the following is only the algebra. It does not constitute a complete proof.     "
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
  "body": " Section 2.2     Problem 3       Any integer, can be written in the form where Then It remains to show that is of the desired form:     Let where  for some integer . Consider each of the 5 cases for the value of :        Problem 6  Let by the division algorithm. There are 6 cases. Below the results are shown for some . For example on the first line .       Problem 11  If is odd, then where is 1, 3, 5, 7, 9, 11, 13, or 15. Then It remains to check that is of the form for each of the possible values of . (You should do this.)   "
},
{
  "id": "Section_2_3",
  "level": "1",
  "url": "Section_2_3.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.3",
  "body": " Section 2.3   Problem 2    If , there exists such that . Then so .    If and then there exist integers such that and . Multiply these two equations: , so .       Problem 3  This is false. For example: .      Problem 12  Let We'll use Theorem 2.2(g): and so , that is . With we have so it must be that       Problem 20       There exist integers such that . Since , there exists an integer such that . Then , so .          There exist integers such that . Multiply by to obtain . Now if and , then by Theorem 2.2(g). This gives since .     "
},
{
  "id": "Section_2_4",
  "level": "1",
  "url": "Section_2_4.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.4",
  "body": " Section 2.4   Problem 2     So, Working backwards: which is the desired linear combination of and .   The other parts follow the same process.   Problem 4          From the hint we have Let . Then , and . Since , . It follows that   We claim . Suppose not, and there is a prime that divides and . Then which implies that . But that contradicts the assumption that   If , then so too . Euclid's Lemmas then gives that since and If then or .          Problem 6  Suppose . Then there is some prime such that . We claim must divide at least one of or . Suppose , then and by Euclid's lemmas we'd have . Similarly if we'd have . Suppose, without loss of generality, that . Since also, we have . This contradicts the assumption that . Thus, it must be that    "
},
{
  "id": "Section_2_5",
  "level": "1",
  "url": "Section_2_5.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.5",
  "body": " Section 2.5   Problem 2     Use the Euclidean Algorith to find: This gives one solution to the Diophantine equation: The general solution is then of the form     Start with: , . Follow the process.      Problem 3     , , The general solution is: If we want or So, only gives a positive solution:       Problem 6  From the total number of livestock: From the cost information: Solve for : Combine the two equations and simplify: Find one solution to the Diophantine equation: The general solution for and is: or These are both postive if . If you compute the resulting number of calves for each of these cases you'll find that also give a positive number of calves. So, there are 3 possible answers to the question.   "
},
{
  "id": "Section_3_1",
  "level": "1",
  "url": "Section_3_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 3.1",
  "body": " Section 3.1   Problem 1   "
},
{
  "id": "Section_3_2",
  "level": "1",
  "url": "Section_3_2.html",
  "type": "Section",
  "number": "",
  "title": "Section 3.2",
  "body": " Section 3.2   Problem 1   "
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
