# MediaElement.js Plugins

Using [MediaElement.js](http://mediaelementjs.com/) is really nice and easy but some things we needed just weren't there, so we wrote these plugins to fix that. Everything is provided under the [MIT License](http://opensource.org/licenses/mit-license.php).


## Logo Image

Sometimes you need to setup logo onto video. That's it. All it does it drop a logo onto the player window (position right-top by defalt). The CSS will need to be customized to match yout theme, most likely.

```js
{
    features: ['playpause', 'logo'],
    logo: { image: '/path/to/logo/image.png', link: 'http://www.ya.ru/' }
}
```

```css
/* Logo */
  .mejs-layer-logo {
    position: relative;
  }

  .mejs-layer-logo .mejs-overlay-logo {
    position: absolute;
    cursor: pointer;
    opacity: 0.8;
    filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0.8); /* Opacity for MSIE */
    width: 75px;
    height: 75px;
    /* Position right-top */
    top: 15px;
    right: 15px;
  }
```
