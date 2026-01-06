var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Section_1_1",
  "level": "1",
  "url": "Section_1_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 1.1",
  "body": " Section 1.1   Question 1  For : and so the inequality holds. Assume and consider: The second inequality requires that we prove for . The following inequalities are equivalent: The last inequality is true if or . So, for . We have shown that implies , and we have shown the inequality is true for . By induction, is true for all integers .   "
},
{
  "id": "Section_2_2",
  "level": "1",
  "url": "Section_2_2.html",
  "type": "Section",
  "number": "",
  "title": "Section 2.2",
  "body": " Section 2.2   Question 2  Suppose . Then, and so is of the form where . Conversely, for example, is not of the form since has no integer solutions.    Question 3  By the division algorithm, any integer, , is of the form , , or . Square each of these cases: So the square of any integer is of the form or     Question 9  Let and write where . Consider the squares in each of the cases: ( represents some integer below. For example would be in the first line.) And, similarly, the cubes: So, squares of integers are of the form , , , or . Cubes are of the form , , or . If an integer is both a square and a cube it must be of the form or .   "
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
