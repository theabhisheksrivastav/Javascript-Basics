/*
1. we can select the element by using the querySelector/all this returns node collection method or getElementById/className method this return HTMLcollection

node COlllection has forEach method
HTMLcollection has for loop method
both can be converted to array by using Array.from() method

2. innerText vs innerHTML vs textContent vs outerText vs outerHTML


innerText: returns only the visible text 
innerHTML: returns the text with the HTML tags and it will render the HTML tags
textContent: returns the text with the HTML tags but it will not render the HTML tags
outerText: returns the text with the HTML tags and it will render the HTML tags
outerHTML: returns the text with the HTML tags and it will render the HTML tags

3. getAttribute vs setAttribute vs removeAttribute vs hasAttribute vs removeAttributeNode vs setAttributeNode vs getAttributeNode vs hasAttributeNode


getAttribute: get the attribute value
setAttribute: set the attribute value
removeAttribute: remove the attribute value
hasAttribute: check the attribute is present or not
removeAttributeNode: remove the attribute node
setAttributeNode: set the attribute node
getAttributeNode: get the attribute node
hasAttributeNode: check the attribute node is present or not

4. classList.add vs classList.remove vs classList.toggle vs classList.contains vs classList.replace vs classList.item vs classList.value vs classList.length vs classList.entries vs classList.forEach vs classList.keys vs classList.values vs classList.toString vs classList[Symbol.iterator] vs classList[Symbol.toStringTag] vs classList[Symbol.unscopables] vs classList[Symbol.isConcatSpreadable] vs classList[Symbol.match] vs classList[Symbol.replace] vs classList[Symbol.search] vs classList[Symbol.split] 


classList.add: add the class to the element 
classList.remove: remove the class from the element
classList.toggle: toggle the class from the element
classList.contains: check the class is present or not
classList.replace: replace the class with the new class
classList.item: get the class at the index
classList.value: get the class value
classList.length: get the class length
classList.entries: get the class entries
classList.forEach: get the class forEach
classList.keys: get the class keys
classList.values: get the class values
classList.toString: get the class string
classList[Symbol.iterator]: get the class iterator
classList[Symbol.toStringTag]: get the class toStringTag
classList[Symbol.unscopables]: get the class unscopables
classList[Symbol.isConcatSpreadable]: get the class isConcatSpreadable
classList[Symbol.match]: get the class match
classList[Symbol.replace]: get the class replace
classList[Symbol.search]: get the class search
classList[Symbol.split]: get the class split

5. createElement vs createTextNode vs createAttribute vs createComment vs createDocumentFragment vs createDocumentType vs createEvent vs createEventObject vs createRange vs createTreeWalker vs createCDATASection vs createProcessingInstruction vs createEntityReference vs createEntityReferenceNode vs createEntityReferenceNode vs createNodeIterator vs createNodeIterator

createElement: create the element
createTextNode: create the text node
createAttribute: create the attribute
createComment: create the comment
createDocumentFragment: create the document fragment
createDocumentType: create the document type
createEvent: create the event
createEventObject: create the event object
createRange: create the range
createTreeWalker: create the tree walker
createCDATASection: create the CDATA section
createProcessingInstruction: create the processing instruction
createEntityReference: create the entity reference
createEntityReferenceNode: create the entity reference node
createEntityReferenceNode: create the entity reference node
createNodeIterator: create the node iterator

6. appendChild vs insertBefore vs removeChild vs replaceChild vs cloneNode vs hasChildNodes vs compareDocumentPosition vs contains vs isEqualNode vs isSameNode vs normalize vs lookupNamespaceURI vs lookupPrefix vs isDefaultNamespace vs getFeature vs setUserData vs getUserData vs setUserData vs getUserData 


appendChild: append the child to the parent
insertBefore: insert the child before the parent
removeChild: remove the child from the parent
replaceChild: replace the child with the new child
cloneNode: clone the node
hasChildNodes: check the child nodes are present or not
compareDocumentPosition: compare the document position
contains: check the child is present or not
isEqualNode: check the node is equal or not
isSameNode: check the node is same or not
normalize: normalize the node
lookupNamespaceURI: lookup the namespace URI
lookupPrefix: lookup the prefix
isDefaultNamespace: check the default namespace
getFeature: get the feature
setUserData: set the user data
getUserData: get the user data


7. getElementsByTagName vs getElementsByClassName vs getElementsByName vs getElementsByTagNameNS vs querySelector vs querySelectorAll vs getElementById


getElementsByTagName: get the elements by tag name
getElementsByClassName: get the elements by class name
getElementsByName: get the elements by name
getElementsByTagNameNS: get the elements by tag name space
querySelector: query the element by selector
querySelectorAll: query the elements by selector
getElementById: get the element by id

*/

// document.querySelector('h1').textContent = 'Hello World';
// document.querySelector('h1').innerHTML = 'Hello World';
// document.querySelector('h1').innerText = 'Hello World';
// document.querySelector('h1').outerText = 'Hello World';
// document.querySelector('h1').outerHTML = 'Hello World';

// document.querySelector('h1').setAttribute('class', 'heading');
// document.querySelector('h1').removeAttribute('class');
// document.querySelector('h1').hasAttribute('class');
// document.querySelector('h1').removeAttributeNode('class');
// document.querySelector('h1').setAttributeNode('class');
// document.querySelector('h1').getAttributeNode('class');

document.getElementById('body').style.backgroundColor = '#050C9C'
document.getElementById('heading').style.color = '#A7E6FF'
document.getElementsByClassName('firstQuestion')[0].style.color = '#A7E6FF'
document.getElementsByClassName('secondQuestion')[0].style.color = '#A7E6FF'
document.getElementsByClassName('thirdQuestion')[0].style.color = '#A7E6FF'

document.getElementsByClassName('firstAnswer')[0].style.color = '#3572EF'
document.getElementsByClassName('secondAnswer')[0].style.color = '#3572EF'
document.getElementsByClassName('thirdAnswer')[0].style.color = '#3572EF'
const body = document.getElementById('body')
const newDiv = document.createElement('div')
const h1 = document.createElement('h1')
h1.style.color = 'green'
h1.textContent = 'Appended Question Header'
const p = document.createElement('p')
p.textContent = 'loremipsum';
p.style.color = 'red'
newDiv.appendChild(h1)
newDiv.appendChild(p)
body.appendChild(newDiv)