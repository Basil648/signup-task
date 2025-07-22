# signup-task
# Form Validation using JavaScript

This is a basic form validation project built with **HTML** and **JavaScript**. It validates user input for a signup form before allowing submission.

##  Features

- **Full Name**: Must not be empty or numeric.
- **Email**: Must match a valid email format.
- **Password**:
  - Must be 8–15 characters long.
  - Must contain letters, numbers, and at least one special character.
- **Confirm Password**: Must match the password field.
- **Terms Checkbox**: Must be checked before submitting.
- **Live Error Messages**: Displayed next to invalid fields.
- **Success Message**: Shown when all validations pass.

## Files

- `index.html` – Form structure and input fields.
- `script.js` – JavaScript logic for validation.
- `style.css` (optional) – Add styling if needed.

##  Validation Logic

1. On form submission:
   - `event.preventDefault()` stops form from reloading the page.
   - Each input field is validated with conditions and regex.
   - If any validation fails, an error message is shown.
   - If all validations pass, a success message is shown.

##  Sample Regex Used

### Email Regex
```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
