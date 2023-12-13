/**
 * Checks if the attribute is in the ignore list
 * @param  { String } attribute name
 * @param  { Array | RegExp } array of attributes to ignore or regex
 * @return { Boolean }
 */
function isIgnored( attributeName, attributesToIgnore )
{
  if ( Array.isArray( attributesToIgnore ) )
  {
    return attributesToIgnore.indexOf( attributeName ) > -1;
  }

  return attributeName.test( attributesToIgnore );
}

/**
 * Returns the Attribute selectors of the element
 * @param  { DOM Element } element
 * @param  { Array | RegExp } array of attributes to ignore or regex
 * @return { Array }
 */
export function getAttributes( el, attributesToIgnore = ['id', 'class', 'length'] )
{
  const { attributes } = el;
  const attrs = [ ...attributes ];

  return attrs.reduce( ( sum, next ) =>
  {
    if ( ! isIgnored( next.nodeName ) )
    {
      sum.push( `[${next.nodeName}="${next.value}"]` );
    }
    return sum;
  }, [] );
}
