# 🏆 Honor List PDF Setup Guide

## 📁 File Organization

Place your Dean's Honor List PDF files in the following structure:

```
assets/documents/honors/
├── winter-2023-honor-list.pdf
├── spring-2023-honor-list.pdf
├── fall-2023-honor-list.pdf
├── winter-2024-honor-list.pdf
├── fall-2024-honor-list.pdf
└── winter-2025-honor-list.pdf
```

## 📋 File Naming Convention

Use this exact naming pattern:
- `fall-2023-honor-list.pdf`
- `winter-2024-honor-list.pdf`
- `summer-2024-honor-list.pdf`
- etc.

## ✨ Features

### 🎯 Interactive Honor Cards
- **Hover Effect**: Actions appear on hover
- **View Button**: Opens PDF in modal viewer
- **Download Button**: Direct download with custom filename

### 📱 PDF Viewer Modal
- **Full-screen viewing** with embedded PDF
- **Download option** from within the modal
- **Close with**: X button, clicking outside, or ESC key
- **Mobile responsive** design
- **Error handling** for missing PDFs

### 📲 Mobile Experience
- **Stacked buttons** on small screens
- **Optimized modal** for mobile viewing
- **Touch-friendly** interface

## 🔧 Technical Details

### File Paths
The system expects PDFs at:
`assets/documents/honors/[semester]-honor-list.pdf`

### Download Names
Auto-generated as:
`Pegah_[Semester]_[Year]_Honors.pdf`

Example: `Pegah_Fall_2023_Honors.pdf`

## 🚀 Setup Steps

1. **Create the folder structure** (already done)
2. **Add your PDF files** with correct names
3. **Test the functionality**:
   - Hover over honor cards
   - Click "View" to open modal
   - Click "Download" to save file
   - Test on mobile devices

## 📊 File Size Recommendations

- **Optimal size**: Under 2MB per PDF
- **Maximum recommended**: 5MB per PDF
- **Format**: PDF only

## 🎨 Customization

### Colors
Honor cards use your portfolio's pink theme:
- View button: Light pink background
- Download button: Pink gradient
- Current semester: Special star icon

### Animation
- **Hover effects**: Scale and shadow
- **Modal entrance**: Fade in with scale
- **Button interactions**: Lift effect

## 🔍 Error Handling

If a PDF is missing:
- View button shows error message in modal
- Download button will show 404 error
- No app crashes or broken functionality

## 📱 Browser Compatibility

Works on:
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Tablets and desktops

## 🎯 User Experience

Visitors can:
1. **See your achievements** at a glance
2. **View certificates** in high quality
3. **Download copies** for reference
4. **Navigate easily** on any device

Perfect for employers, recruiters, and anyone wanting to verify your academic excellence! 🌟
