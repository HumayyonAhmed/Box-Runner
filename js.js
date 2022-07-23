/**
 * Created by Humayun Ahmed on 5/11/14.
 */
function c(val)
{
    document.getElementById('text').value=val;
}
function v(val)
{
    document.getElementById('text').value+=val;
}
function b()
{
    document.getElementById('text').value =  document.getElementById('text').value.substring(0,  document.getElementById('text').value.length - 1);
}
function e()
{
    try
    {

        c(eval(document.getElementById('text').value));
    }
    catch(e)
    {
        c('Error');
    }
}
function off()
{
    document.getElementById('text').value="-CASIO-";
    document.getElementById('text').style.textAlign="center";
    document.getElementById('text').style.transition="all 1s";
    document.getElementById('text').style.backgroundColor="rgba(145,160,116,0.3)";
    document.getElementById('text').disabled="true";
   document.getElementsByTagName('input').addClass="disabled";
}
function on()
{
    document.getElementById('text').value="";
    document.getElementById('text').style.backgroundColor="#bccd95";
    document.getElementById('text').style.textAlign="right";

}
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));