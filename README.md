# React + Vite

First you have to Logout 😅. Then sign in with your credentials. 
## ✨ Features

✅ **User-Friendly Interface** - Intuitive dashboard with clean UI components
✅ **Role-Based Access Control** - Admin and user-specific functionalities
✅ **Inventory Management** - Add, edit, and delete product categories and items
✅ **Order Processing** - Complete order workflow with payment integration
✅ **Real-Time Analytics** - Dashboard with sales statistics and order history
✅ **Payment Gateway Integration** - Secure Razorpay payment processing
✅ **Search & Filter** - Efficient search functionality across all components
✅ **Receipt Generation** - Professional order receipts with print functionality

---

## 🛠️ Tech Stack

**Core Technologies:**
- JavaScript (ES6+)
- React 18
- Vite (for fast development and build)
- Bootstrap 5 (for responsive UI components)

**State Management:**
- React Context API

**Styling:**
- Custom CSS with Bootstrap integration
- Responsive design principles

**API & Services:**
- Axios for HTTP requests
- Razorpay for payment processing

**Development Tools:**
- ESLint for code quality
- React Router for navigation
- React Hot Toast for notifications

**Backend Integration:**
- REST API with JWT authentication
- Railway-hosted backend service

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A modern web browser (Chrome, Firefox, Edge, or Safari)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/billing-software-frontend.git
   cd billing-software-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following content:
   ```
   VITE_API_BASE_URL=https://billingsoftwarebackend-production.up.railway.app/api/v1.0
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in your browser:**
   Navigate to `http://localhost:5173` to see your application in action.

### Alternative Installation Methods

**Using Docker (if available):**
```bash
docker-compose up --build
```

**Development Setup:**
```bash
# Install all dependencies with dev tools
npm install --save-dev

# Run with hot-reload
npm run dev
```
---

## 📁 Project Structure

```
billing-software-frontend/
├── public/                  # Static files
│   ├── index.html           # Main HTML file
│   └── vite.svg             # Vite logo
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable UI components
│   │   ├── CartItems/       # Cart item display
│   │   ├── CartSummary/     # Cart summary
│   │   ├── Category/        # Category display
│   │   ├── CategoryForm/    # Category creation form
│   │   ├── CustomerForm/    # Customer information form
│   │   ├── DisplayCategory/ # Category display grid
│   │   ├── DisplayItems/    # Items display grid
│   │   ├── Item/            # Individual item card
│   │   ├── ItemForm/        # Item creation form
│   │   ├── ItemList/        # Item list display
│   │   ├── MenuBar/         # Navigation menu
│   │   ├── ReceiptPopup/    # Order receipt popup
│   │   ├── SearchBox/       # Search functionality
│   │   ├── UserForm/        # User creation form
│   │   └── UserList/        # User list display
│   ├── context/             # React context providers
│   │   └── AppContext.jsx   # Main application context
│   ├── pages/               # Page components
│   │   ├── Dashboard/       # Admin dashboard
│   │   ├── Explore/         # Product exploration
│   │   ├── Login/           # Login page
│   │   ├── ManageCategory/  # Category management
│   │   ├── ManageItems/     # Item management
│   │   ├── ManageUsers/     # User management
│   │   ├── NotFound/        # 404 page
│   │   └── OrderHistory/    # Order history
│   ├── service/             # API service functions
│   │   ├── AuthService.js   # Authentication
│   │   ├── CategoryService.js # Category operations
│   │   ├── Dashboard.js     # Dashboard data
│   │   ├── ItemService.js   # Item operations
│   │   ├── OrderService.js  # Order operations
│   │   ├── PaymentService.js # Payment processing
│   │   └── UserService.js   # User operations
│   ├── util/                # Utility functions
│   │   └── constant.js      # Application constants
│   ├── index.css            # Global styles
│   ├── App.css              # App-level styles
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Entry point
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies
├── package-lock.json       # Lock file for dependencies
├── README.md               # Project documentation
└── vite.config.js          # Vite configuration
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_BASE_URL=https://billingsoftwarebackend-production.up.railway.app/api/v1.0
```

### Customization Options

1. **Theme Customization:**
   - Modify the `src/index.css` file to change the default theme
   - Update the `Outfit` font family or add new fonts

2. **API Endpoints:**
   - Change the base URL in `.env` to point to your backend service
   - Update service files in `src/service/` to match your API endpoints

3. **Payment Gateway:**
   - Update `PaymentService.js` to integrate with your preferred payment provider
   - Configure Razorpay keys in your backend service

4. **Localization:**
   - Add language support by modifying the `i18n` configuration in your service files

---

**Maintainers:**
- [Your Name](https://github.com/yourusername) - Initial work and ongoing maintenance

**Contributors:**
- [Contributor Name](https://github.com/contributor) - Feature X
- [Contributor Name](https://github.com/contributor) - Bugfix Y

---

### Reporting Issues

If you encounter any problems or have feature requests, please:

1. Check if an issue already exists
2. Open a new issue with:
   - A clear title describing the problem
   - Steps to reproduce the issue
   - Expected behavior
   - Actual behavior
   - Any relevant screenshots or code snippets

### FAQ

**Q: How do I deploy this application?**
A: You can deploy the built files to any static hosting service like Netlify, Vercel, or Firebase Hosting. First, build your application with `npm run build`, then deploy the contents of the `dist` directory.

**Q: Can I customize the UI?**
A: Yes! The application uses Bootstrap 5 for styling. You can override styles in your CSS files or extend the Bootstrap theme.

---

## 🗺️ Roadmap

### Planned Features

- [ ] **User Authentication Improvements**
  - Social login (Google, Facebook)
  - Two-factor authentication
  - Password recovery flow

- [ ] **Enhanced Reporting**
  - Sales reports by category
  - Monthly/yearly summaries
  - Export to PDF/Excel

- [ ] **Inventory Management**
  - Low stock alerts
  - Bulk item updates
  - Barcode scanning support

- [ ] **Multi-Currency Support**
  - Currency conversion
  - Tax calculation by region

- [ ] **Advanced Analytics**
  - Customer purchase history
  - Sales trends visualization
  - Predictive analytics

### Known Issues

- [#12] Mobile view for order history could be improved
- [#23] Payment gateway integration needs error handling improvements
- [#35] Some unit tests need to be added for service functions

### Future Improvements

- Implement a **real-time dashboard** with live updates
- Add **user roles and permissions** system
- Create a **mobile app version** using React Native
- Implement **offline mode** for data synchronization

---

## 🚀 Getting Started

Ready to get started? Follow these steps:

1. **Clone the repository**
2. **Install dependencies**
3. **Set up your environment**
4. **Start the development server**
5. **Begin coding!**

We're excited to see what you'll build with this billing software frontend. Whether you're adding new features, fixing bugs, or improving the user experience, your contributions will help make this project even better.

Let's build the future of billing software together! 🚀
