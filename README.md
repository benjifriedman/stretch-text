# stretch-text

A lightweight React component that automatically adjusts text size to fit container width.

## Features

- 📏 Automatically fits text to container width
- 📱 Responsive to window resizing
- ↔️ Maintains single-line text
- 🪶 Lightweight with zero dependencies
- ⚛️ React 16.8+ (Hooks) compatible

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes | The text content to be displayed and stretched |

## How it Works

The component uses a reference-based approach to dynamically calculate and adjust the font size, ensuring that the text always fits within its container while maintaining a single line. It starts with a large font size and progressively reduces it until the text fits perfectly within the container width.

## Installation

```bash
npm install stretch-text
```

## Usage

```jsx
import Stretch from 'stretch-text';

const App = () => {
  return <Stretch text="Hello, world!" />;
};
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you find this package helpful, please consider giving it a star on GitHub! For issues and feature requests, please use the [GitHub issue tracker](https://github.com/yourusername/react-text-stretch/issues).

## License

MIT © Benji Friedman

