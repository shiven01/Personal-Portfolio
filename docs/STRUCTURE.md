# Project Structure

This document outlines the organized file structure for the Personal Portfolio website.

## Directory Structure

```
Personal-Portfolio/
├── src/                    # Source files
│   ├── pages/             # HTML pages
│   │   ├── books.html     # Books reading list
│   │   ├── education.html # Education background
│   │   ├── experience.html # Work experience
│   │   ├── projects.html  # Project showcase
│   │   └── theBoys.html   # Personal section
│   ├── styles/            # CSS stylesheets
│   │   └── style.css      # Main stylesheet
│   ├── scripts/           # JavaScript files
│   │   └── slider.js      # Image slider functionality
│   └── images/            # Image assets
│       ├── amras-image.png
│       ├── f2023.jpeg
│       ├── image1.jpg
│       ├── image2.jpg
│       ├── image3.jpg
│       ├── media-image.jpeg
│       ├── s2023.jpeg
│       └── sms-image.jpeg
├── dist/                   # Build output (future use)
├── docs/                   # Documentation
│   └── STRUCTURE.md        # This file
├── .github/                # GitHub Actions
│   └── workflows/
│       └── ci.yml         # CI/CD testing workflow
├── index.html              # Main entry point
└── README.md               # Project overview
```

## File Organization Principles

### 1. **Separation of Concerns**
- **HTML**: Content structure in `src/pages/`
- **CSS**: Styling in `src/styles/`
- **JavaScript**: Functionality in `src/scripts/`
- **Images**: Media assets in `src/images/`

### 2. **Scalability**
- Easy to add new pages in `src/pages/`
- Centralized styling in `src/styles/`
- Modular JavaScript in `src/scripts/`

### 3. **Maintainability**
- Clear file naming conventions
- Logical grouping of related files
- Easy to locate and update specific components

### 4. **Future-Proofing**
- `dist/` directory ready for build tools
- `docs/` directory for project documentation
- `.github/` for CI/CD automation

## Benefits of This Structure

✅ **Professional Organization**: Follows industry standards  
✅ **Easy Navigation**: Developers can quickly find files  
✅ **Scalable**: Easy to add new features and pages  
✅ **Maintainable**: Clear separation of concerns  
✅ **CI/CD Ready**: Automated testing and validation  

## File Path References

- **CSS**: `../styles/style.css` (from pages)
- **Images**: `../images/` (from pages)
- **Scripts**: `../scripts/` (from pages)
- **Home**: `../index.html` (from pages)
