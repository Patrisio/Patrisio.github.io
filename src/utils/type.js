export default function type(string, i, isTag, text, id, delay = 80, delayAnimation) {
  text = string.slice(0, ++i);
  if (text === string) return;

  document.getElementById(id).innerHTML = text;

  var char = text.slice(-1);
  if( char === '<' ) isTag = true;
  if( char === '>' ) isTag = false;

  if (isTag) return type(string, i, isTag, text, id, delay);
  setTimeout(() => type(string, i, isTag, text, id, delay), delay);
}