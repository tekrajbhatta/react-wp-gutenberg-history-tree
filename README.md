# React WP Gutenberg History Tree

This repository contains a custom Gutenberg block called **History Tree**, built for WordPress using React. The **History Tree** block outputs a tree-like structure with text paragraphs and images displayed side by side.

## Features

- **Custom Gutenberg Block**: Allows the creation of tree-like structures in the WordPress editor.
- **Flexible Content**: Includes a predefined template with `core/paragraph`, `core/image`, and `core/heading` blocks.
- **Styling**: Custom styles for a visually appealing layout.
- **Responsive Design**: Optimized for different screen sizes.

## Installation

1. **Place in WordPress Plugins Directory:**  
   Copy the repository folder into the `/wp-content/plugins/` directory of your WordPress installation.

2. **Activate the Plugin:**  
   Go to the WordPress admin dashboard, navigate to **Plugins**, and activate the **History Tree** plugin.

## Usage

### Add Block:
- In the WordPress block editor, search for **"History Tree"** and add the block to your page or post.

### Edit Content:
- Use the predefined template to add headings, paragraphs, and images.  
- Customize the content using the WordPress block editor.

### Style Customization:
- The block includes default styles.  
- Modify the `style.css` file if additional customization is required.

## Development

This block is built using React and WordPress Gutenberg APIs. Below is a brief description of the main files:

- **`block.json`:** Defines the block metadata, including attributes, title, category, and scripts.  
- **`edit.js`:** Implements the block editing interface.  
- **`save.js`:** Outputs the block structure for the frontend.  
- **`index.js`:** Handles block registration.  
- **`style.css`:** Contains the block-specific CSS for both the editor and the frontend.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

