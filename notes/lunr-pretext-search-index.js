var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Section_1_1",
  "level": "1",
  "url": "Section_1_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 1.1",
  "body": " Section 1.1   Problem 6  For : and so the inequality holds. Assume and consider: The second inequality requires that we prove for . The following inequalities are equivalent: The last inequality is true if or . So, for . We have shown that implies , and we have shown the inequality is true for . By induction, is true for all integers .    Problem 7  (quiz or exam) For : Consider:     Problem 8  For : Assume the identity is true for and consider: which shows the identity is true for . By induction the identity is true for all integers . The inequality is equivalent to so from part (a), we need to show that The right hand side is: Clearly since there are $n$ factors in both products and all but the first factor are greater in the right hand side. For example, if : Multiply both sides of by to obtain the desired result.    "
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
