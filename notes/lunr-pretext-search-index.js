var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Section_1_1",
  "level": "1",
  "url": "Section_1_1.html",
  "type": "Section",
  "number": "",
  "title": "Section 1.1",
  "body": " Section 1.1  Question 1. For : and so the inequality holds. Assume and consider: The second inequality requires that we prove for . The following inequalities are equivalent: The last inequality is true if or . So, for . We have shown that implies , and we have shown the inequality is true for . By induction, is true for all integers .  "
},
{
  "id": "build-types",
  "level": "1",
  "url": "build-types.html",
  "type": "Section",
  "number": "",
  "title": "Building the Components of Your Course",
  "body": " Building the Components of Your Course  This covers the different ways to build each component of your PreTeXt course. The instructions here are minimal, and meant to give you an overview. Details will be best understood by going into the source for this course and seeing how things work.   Course Syllabus  The main syllabus file is syllabus.ptx . This file contains the basic structure of the syllabus with various \"include\" statements for components of syllabus that complies with FLC's syllabus policy (see ). The main components are as follows: land acknowledgement, course info, learning outcomes (GTPathways outcomes for Math 113, 121, 221, and 222 are included in this template), grading scheme, course explectations, campus policies, and tentative schedule. Each of these components is a < section > (un-numbered according to the publication file) uses the < paragraphs > division, which is like a subsection but with a smaller font for the heading.  Build types are the following:    Web: To build the html version of the syllabus, use pretext build syllabus-web . To view this, use pretext view syllabus-web . Deployment is then done using pretext deploy , which also deploys course notes and activities. You can then embed these pages in Canvas pages\/assignments using the < > button at the top of the syllabus webpage (this applies to all pages generated with this course template).     Print: If you would like to print your syllabus to hand out in class, you can use pretext build syllabus-print . This will generate a pdf in the output folder, which can be downloaded by opening the codespace in VScode desktop.     SCORM: Finally, you can use pretext build syllabus-canvas to generate a SCORM of the syllabus for inclusion in Canvas without publishing your course to the web.       Activities and Notes  Activities (worksheets) are small documents that can include workspace. Several examples are included in this template to show how they work. Notes largely work the same way as Activities, they are just structures as sections rather than worksheets.  Build types for activities are as follows:    Web: This works the same way as the syllabus, just using activities-web or notes-web in place of syllabus-web .     Print (all at once): To generate a pdf version of all of your activities or notes at once, do it like the syllabus, but replace the appropriate word like you did for web output.     Print (one at a time): Generating a pdf for a single activity requires two steps:   First, you must un-comment < pretext > and < article > tags at the beginning and end of the activity\/notes source file. This way it will be treated as a standalone document rather than something that is included in a larger document.    Now run the command pretext build pdf -i .\/source\/activities\/worksheet-name.ptx (edit worksheet-name to whatever it is). For notes, change \"activities\" to \"notes\" in the path.        SCORM (one at a time, also do this for exams): This works similarly to printing, but using pretext build scorm -i before the path of the file being built.      "
},
{
  "id": "syllabus-structure-3",
  "level": "2",
  "url": "build-types.html#syllabus-structure-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Web: Print: SCORM: "
},
{
  "id": "activities-notes-builds-3",
  "level": "2",
  "url": "build-types.html#activities-notes-builds-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Web: Print (all at once): Print (one at a time): SCORM (one at a time, also do this for exams): "
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
