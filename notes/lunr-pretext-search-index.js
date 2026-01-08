var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Section_1_1",
  "level": "1",
  "url": "Section_1_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 1.1",
  "body": " Section 1.1   Problem 6   For : and so the inequality holds. Assume and consider: The second inequality requires that we prove for . The following inequalities are equivalent: The last inequality is true if or . So, for . We have shown that implies , and we have shown the inequality is true for . By induction, is true for all integers .     Problem 7   (quiz or exam) For : Consider:      Problem 8  For : Assume the identity is true for and consider: which shows the identity is true for . By induction the identity is true for all integers . The inequality is equivalent to so from part (a), we need to show that The right hand side is: Clearly since there are factors in both products and all but the first factor are greater in the right hand side. For example, if : Multiply both sides of by to obtain the desired result.    Problem 9  For , . Assume and consider : The first inequality follows from the inductive hypothesis. This first inequality is also where we need to use the assumption that . If , the direction of the inequality would change. The second inequality is true since .    Problem 10  (a) The following is not a complete proof or explanation. It is only the algebra part. Make sure you can identify where the induction hypothesis is used. Make sure you can justify both of the inequalities. (b) Again, the following is only the algebra. It does not constitute a complete proof.     Problem 11  (save for exam) So, if is an integer, then so is If the expression equals , an integer.   "
},
{
  "id": "Section_1_2",
  "level": "1",
  "url": "Section_1_2.html",
  "type": "Section",
  "number": "",
  "title": "Section 1.2",
  "body": " Section 1.2   Problem 1   Let in the identity:     Problem 3    If the binomial theorem is precisely the desired identity.  Similar idea: let and in the binomial theorem.   Differentiating with respect to gives: Setting gives the desired result.  Use the expansion of with .  Follow the hint. Make sure to justify both equalities.   First: Each of the binomial terms is of the form Apply this to each term above on the right except the first:        Problem 4    So Of course, we need . The other parts are similar.    Problem 6   Let’s prove the hint: and since we're done.    Problem 7  Use induction:     Problem 8       Problem 9  Using #8, this is equivalent to: Consider the fraction as: Each of these fractions is less than one, so the product is less than one, which gives the right hand inequality. With the exception of , each of these fractions is greater than . There are factors so the product is greater than .   "
},
{
  "id": "Section_2_1",
  "level": "1",
  "url": "Section_2_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.1",
  "body": " Section 2.1   Problem 1    The triangular number is of the form You can prove this equals using induction.                where . So, if is the triangular number, then is the triangular number.      Problem 2       Problem 3  The hint follows from question 1(a). If is even, let : where we have used the result from section 1.1 concerning the sum of the first squares. If is odd:     Problem 6   The first triangular number that is also a square is 1. Use this to find another: And use to find another example:     Problem 7       Problem 8   since .    Problem 10  Use induction. The key algebraic step is:     Problem 11                "
},
{
  "id": "Section_2_2",
  "level": "1",
  "url": "Section_2_2.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.2",
  "body": " Section 2.2   Problem 1  From the division algorithm, can be written uniquely as where . We'll add and subtract : For the inequality we have:     Problem 2  Suppose . Then, and so is of the form where . Conversely, for example, is not of the form since has no integer solutions.    Problem 3  By the division algorithm, any integer, , is of the form , , or . Square each of these cases: So the square of any integer is of the form or     Problem 4  If is an integer then is of the form or by problem 3a. If then: which is neither of the form or . (It is of the form .) If then: Again, this is neither of the form or . Since is never of the form or it cannot be a square.    Problem 6  Let by the division algorithm. There are 6 cases. Below the results are shown for some . For example on the first line .     Problem 9  Let and write where . Consider the squares in each of the cases: ( represents some integer below. For example would be in the first line.) And, similarly, the cubes: So, squares of integers are of the form , , , or . Cubes are of the form , , or . If an integer is both a square and a cube it must be of the form or .    Problem 10  There are 6 cases. We'll illustrate here with one case: say . Rather than deal with the entire expression let's try to build one piece at a time: This proves the result. It's a bit tedious to find each of the integers but not computationally difficult. For this problem we are only concerned that such integers exist, not what they are.   "
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
