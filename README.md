# 👟 Shoe Store - React E-commerce App

A modern, clean e-commerce application for browsing and filtering shoes built with React. Features a sophisticated multi-filter system and intuitive user interface.

![Shoe Store App](https://via.placeholder.com/800x400/f8f9fa/333333?text=Shoe+Store+App)

## ✨ Features

### 🔍 Advanced Filtering System

- **Multi-filter support**: Combine category, color, price, and brand filters
- **Smart filter detection**: Automatically detects filter type and updates appropriate state
- **Real-time search**: Search products by name with instant results
- **Filter persistence**: Multiple filters work together (AND logic) instead of overwriting

### 🎨 Clean UI/UX

- **Fixed sidebar**: Easy access to all filters
- **Product grid**: Responsive grid layout with hover effects
- **Recommended filters**: Quick access to popular brands
- **Professional design**: Clean cards with product images, ratings, and pricing

### 🛠️ Technical Features

- **Component-based architecture**: Modular and maintainable code
- **State management**: Separate state for each filter type
- **Responsive design**: Works on desktop and tablet devices
- **Performance optimized**: Efficient filtering and rendering

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/shoe-store-react.git
   cd shoe-store-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── Component/
│   └── Cards.jsx              # Product card component
├── Navigation/
│   ├── Navbar.jsx            # Navigation bar with search
│   └── Navbar.css
├── Products/
│   ├── Products.jsx          # Products grid container
│   └── Products.css
├── Recommended/
│   ├── Recommended.jsx       # Brand filter buttons
│   └── Recommended.css
├── Sidebar/
│   ├── Sidebar.jsx           # Main sidebar container
│   ├── Sidebar.css
│   ├── Category/
│   │   ├── Category.jsx      # Category filters
│   │   └── Category.css
│   ├── Color/
│   │   └── Colors.jsx        # Color filters
│   └── Price/
│       └── Price.jsx         # Price range filters
├── db/
│   └── data.jsx              # Product data
├── input/
│   └── input.jsx             # Reusable input component
├── App.jsx                   # Main app component
├── index.css                 # Global styles
└── index.js                  # App entry point
```

## 🎯 How It Works

### Filter System Architecture

The app uses a sophisticated multi-state filtering system:

```javascript
// Separate state for each filter type
const [selectedCategory, setSelectedCategory] = useState("");
const [selectedColor, setSelectedColor] = useState("");
const [selectedPrice, setSelectedPrice] = useState("");
const [selectedCompany, setSelectedCompany] = useState("");
```

### Smart Filter Detection

The `handleCategory` function automatically detects the filter type:

```javascript
const handleCategory = (e) => {
  const value = e.target.value;

  if (["sneakers", "flats", "sandals", "heels"].includes(value.toLowerCase())) {
    setSelectedCategory(value.toLowerCase());
  } else if (
    ["blue", "red", "green", "white", "black"].includes(value.toLowerCase())
  ) {
    setSelectedColor(value.toLowerCase());
  } else if (value.includes("$")) {
    setSelectedPrice(value);
  } else if (["Nike", "Adidas", "Puma", "Vans"].includes(value)) {
    setSelectedCompany(value);
  }
};
```

### Filter Logic

Filters work together using AND logic:

```javascript
const filterdata = (products, query, category, color, price, company) => {
  let data = products;

  // Apply each filter sequentially
  if (query) data = data.filter(product => /* search logic */);
  if (category) data = data.filter(product => product.category === category);
  if (color) data = data.filter(product => product.color === color);
  if (company) data = data.filter(product => product.company === company);
  if (price) data = data.filter(product => /* price range logic */);

  return data;
};
```

## 🛍️ Available Filters

### Categories

- Sneakers
- Flats
- Sandals
- Heels

### Colors

- Black
- Blue
- Red
- Green
- White

### Price Ranges

- $0 - $50
- $50 - $100
- $100 - $150
- $150 - $200

### Brands

- Nike
- Adidas
- Puma
- Vans

## 🎨 Styling

The app uses modern CSS with:

- **CSS Grid** for product layout
- **Flexbox** for component alignment
- **CSS Variables** for consistent theming
- **Hover effects** for better interactivity
- **Box shadows** for depth and modern look

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Product images from various shoe retailers
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Inspiration from modern e-commerce platforms

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/shoe-store-react](https://github.com/yourusername/shoe-store-react)

---

⭐ **Star this repo if you found it helpful!**
