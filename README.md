# React Flag Icons

A comprehensive collection of SVG flag icons as React components.

[![npm version](https://img.shields.io/npm/v/react-flag-icons.svg)](https://www.npmjs.com/package/react-flag-icons)
[![license](https://img.shields.io/npm/l/react-flag-icons.svg)](https://github.com/reda-trouki/react-flag-icons/blob/main/LICENSE)

## Features

- 🌎 **250+ country and territory flags** in SVG format
- 🔧 **Customizable size** with width, height, and size props
- 🎨 **Fully styleable** with CSS
- 🪶 **Lightweight** with tree-shaking support
- ⚛️ **React-friendly** components
- 📱 **Responsive** design

## Installation

```bash
# npm
npm install react-flag-icons

# yarn
yarn add react-flag-icons

# pnpm
pnpm add react-flag-icons
```

## Usage

### Basic Usage

```jsx
import React from 'react';
import { Us, Fr, Jp } from 'react-flag-icons';

function App() {
  return (
    <div>
      <h1>Flag Icons</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Us />
        <Fr />
        <Jp />
      </div>
    </div>
  );
}

export default App;
```

### Customizing Size

All flag components accept `size`, `width`, and `height` props:

```jsx
import React from 'react';
import { Us, Fr, Jp } from 'react-flag-icons';

function App() {
  return (
    <div>
      <h1>Flag Icons with Custom Sizes</h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Us size={24} /> {/* Default size */}
        <Fr size={32} /> {/* Larger */}
        <Jp size={48} /> {/* Even larger */}
        
        {/* You can also set width and height independently */}
        <Us width={40} height={30} />
      </div>
    </div>
  );
}

export default App;
```

### Styling

You can pass any standard SVG or HTML attributes to the components:

```jsx
import React from 'react';
import { Us } from 'react-flag-icons';

function App() {
  return (
    <div>
      <Us 
        size={32} 
        className="my-flag-class" 
        style={{ border: '1px solid #ccc', borderRadius: '4px' }}
        onClick={() => alert('Clicked on US flag!')}
      />
    </div>
  );
}

export default App;
```

## Available Flags

This package includes flags for all countries and territories using their ISO 3166-1 alpha-2 codes as component names.

Examples:
- `<Us />` - United States
- `<Gb />` - United Kingdom
- `<Fr />` - France
- `<De />` - Germany
- `<Jp />` - Japan
- `<Cn />` - China

Special regions and organizations:
- `<Eu />` - European Union
- `<Un />` - United Nations
- `<GbEng />` - England
- `<GbSct />` - Scotland
- `<GbWls />` - Wales
- `<EsCt />` - Catalonia

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Sets both width and height of the flag |
| `width` | `number` | `size` | Sets the width of the flag |
| `height` | `number` | `size` | Sets the height of the flag |
| `className` | `string` | `undefined` | CSS class to apply to the SVG element |
| `style` | `object` | `undefined` | Inline styles to apply to the SVG element |
| `...props` | `any` | - | Any other props are passed to the SVG element |

## Browser Support

This package works in all modern browsers that support SVG:
- Chrome
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Reda Trouki](https://github.com/reda-trouki)
