# Vanilla fontFlex
> VanillaJS extension (based on [jQuery.fontFlex](https://github.com/nathco/jQuery.fontFlex)) for dynamically changing font sizes according to container / browser width. Intended for use with responsive or adaptive CSS layouts.

## Installation
Include the `fontFlex.min.js` before the `</body>` of your HTML document:
```html
<script src="fontFlex.min.js"></script>
```

## How to Use
Define a default `CSS` font base by setting `font-size: 1em` and `line-height: 150%` on the `body` or intended element. Declaring the `font-size` is optional, but highly recommended in case javascript is disabled. Finally, call the plugin on said element.

**Syntax Example**
```javascript
FontFlex({
    min: 20,
    max: 60,
    mid: 40,
    target: 'h1'
});
```

**Custom Parameters**
`min` Minimum font-size in pixels
`max` Maximum font-size in pixels
`mid` Mid-range buffer. Values ranging from 60 to 70 produce the best results. Lower values produce a larger initial font-size, while higher values produce the opposite. Adjust accordingly to fit your requirements.

## Browser support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/fontFlex/releases) for detailed changelog.

## License

[MIT](LICENSE)