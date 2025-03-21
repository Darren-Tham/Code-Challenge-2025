# Introduction

This file outlines the changes made to the original repository by Darren Thammavong. The modifications were made to improve functionality, fix bugs, enhance user experience, and align the design with the Figma design. Below is a summary of the key changes:

# Changes

## File Rename

I renamed the `scripts.js` file to `script.js`. Additionally, I organize the `script.js` file by writing functions. For example, I have a `handleMenuBtnClick` to handle menu button click, a `handleFormSubmit` to handle submitting a form, and a `handleHeroImageResize` to change the hero image based on the screen's width.

## Format

I am using the Prettier extension to format the `index.html`, `styles.css` and `script.js` files.

## Color

All the default colors are replaced with the variable colors. For example, the default color of the header is `orange`, and this is replaced with `var(--orange-hex)`.

For each of the SVG icons in the `assets` folder, I added a `fill` property to color the icons. For example `arrow-up.svg` has a fill color of white. This is because in the Figma, the icons have a specific color, and the default color for the SVG icons is black.

## Units

Throughout the CSS, I consistently used `rem` and `em` units rather than `px`. This is because these units are better for scalability, responsiveness, and accessibility. Users can adjust their font size in the browser settings for better readability, and these units ensure that the design respects the user's preferences, making it more accessible.

## Letter Spacing

According to the Figma, most of the text has a letter spacing, specifically 0.5 pixels. The only exception is the section subtitle, which has a letter spacing of 0.15 pixels. Therefore, each element that has a text has a specified letter spacing to match the Figma design.

## Body Element

According to the Figma desktop design page, there is a top and bottom margin of 10 pixels and a left and right margin of 20 pixels. Additionally, in the Figma mobile design page, the margins are updated; there is a top and bottom margin of 9 pixels and a left and right margin of 16 pixels. I made sure this is accounted for in the `styles.css` file.

There is a known issue that the scrolling is jumpy and laggy. To fix this, I added a property on the body called `scroll-behavior` with a value of `smooth` to make the scrolling smoother.

## Box Shadow

The initial value for the `box-shadow` is `0 0 1em rgba(0, 0, 0, 0.25)`, but in the Figma, there is a `y` offset of 4 pixels, so I changed the `box-shadow` to `0 0.25em 1em rgba(0, 0, 0, 0.25)` to match the Figma design.

## CSS Organization

In the `styles.css` file, I organize the CSS classes in relation to the flow of the document. At the top, I have the `:root` and `body`. Then, I have general styling which for element selectors and shared CSS classes. Afterward, in order, we have classes related to:

1. Header
2. Section
3. Form
4. Footer

## Aria Attributes

Throughout the `index.html` page, I added ARIA attributes to improve web accessibility, particularly for users who rely on assistive technologies like screen readers. ARIA attributes provide additional context and semantics to HTML elements, which makes it easier for assistive technologies to interpret and convey information to users with disabilities. For example, `aria-label` can be used to provide a text description for an element that might not have visible text. I also added roles (e.g. `role="button"`, `role="navigation"`) to define the purpose of an element. There are also ARIA attributes relating to states and properties, such as `aria-expanded` and `aria-checked`, that describe an element's current condition. These help users understand the functionality and state of interactive elements, such as when the menu is open.

I made sure to update the ARIA attributes in the `script.js` when the state of an element is updated.

## Header

### Menu Button

I styled the menu button to include the bars and x-mark icons. By default, the menu button will show the bars icon, and when the menu button is clicked, it will show the x-mark icon.

Additionally, when the menu button is clicked, it will show the navigation anchor elements. In the `script.js`, it initially set the `nav` element to have a `display` of `none`. However, this does not show the `nav` animation. Instead of using `display`,
I used `opacity` and `visibility` to show the animation and hide the `nav` correctly.
Furthermore, the menu `nav` had the event listener when it should have been the menu button, so this is changed in `script.js`.

### Navigation

I created a new CSS class called `navigation-list-a` that styles the navigation anchor elements. In addition, I removed the `ul` selector styling in case another `ul` element is needed in the page.

I changed the design of the navigation based on the desktop and the mobile Figma design. On the desktop Figma design, the navigation anchors are displayed in the navigation bar, and on the mobile Figma design, the navigation anchors are displayed as a menu list.

### Logo

The logo on the left side of the header is wrapped in a `picture` element. For some reason, the `picture` element has a height of 21 pixels that overlaps with the logo. This resulted in an additional 5 pixels added to the wrapper logo's dimensions. This misalignment caused the logo to appear off-center. Therefore, I applied a `flex` display property to the `picture` element, so the `picture` element perfectly overlaps with the logo, ensuring no pixels extend beyond the intended boundaries and maintaining proper alignment.

Additionally, the logo had a default height of 64 pixels, but in the SVG, it has a height of 54 pixels. I updated height from 64 pixels to 54 pixels in the HTML.

I also removed some unneeded classes that are not used, such as `logo-wrapper` and `logo`.

## Spacing

In the desktop Figma design, the header has a horizontal padding of 48 pixels, but in the mobile Figma design, the header has a horizontal padding of 16 pixels. I made sure this is accounted for in the `styles.css`.

## Hero Section

### Titles and Content

The styling of the headings and paragraphs in the hero content is different between the desktop design and the mobile design. For example, the `font-size` and the `line-height` changes between each design. Initially, I saw that the design of the page changes when the screen size is at most 950 pixels, so I decided I will make the headings and paragraphs styling reflect the mobile design at that breakpoint. However, this lead to the font sizes being significantly smaller than the hero image, so I did two changes:

1. I made another breakpoint at 564 pixels, which made the headings and paragraphs styling the same as the mobile design.

2. At the 950 pixels breakpoint, I changed the headings and paragraphs styling, so the size of the headings and paragraphs is smaller than the desktop design but bigger than the mobile design. This makes the hero image not overly large than the hero content and looks cleaner when the window screen shrinks.

### Hero Image

In the mobile design, it is using the `image@2x.jpg` hero image, which is not optimized. To fix this, I added a `resize` event listener where:

1. If the screen's width is less than 564 pixels, it will use the `image-mobile.jpg` hero image.
2. Otherwise, if the screen's width is less than 960 pixels, it will use the `image.jpg` to optimize the image for devices like tablets.
3. Otherwise, it will use the `image@2x.jpg`, which is specifically for desktop devices.

### Call-to-Action Button

I removed the `div` with the class `btn-wrapper` as it was unneeded. Additionally, I styled the `anchor` element with a shared class called `outline` (which is mentioned later in this file). This is because parts of the call-to-action button styling is similar to the form inputs and submit button.

### Section Selector CSS

There are two `section` elements in `index.html`: one for the hero section and one for the form. According to both the desktop and mobile Figma design, the distance between the hero section and the form is 64 pixels. There is a `section` selector CSS that sets the `padding-block` to `4em`. However, this made the distance between the two sections 128 pixels. To fix this, I removed the `section` selector CSS styling and I only added the padding to the hero section. This makes the hero section 64 pixels away from the header and the form, which aligns with the Figma design.

## Form

### New Element

In the form, I added a new `div` with a class of `heading-container`. Initially, the `div` with a class of `header-wrapper` extended the full width of the `div` with the class `width-container`. This meant the paragraph text with the class `content-container` extended the full width as well. In the Figma design, we can see that the `header-wrapper` does not extend the full width of the `div` with the class `width-container`; instead, it has a fixed with of 612 pixels. Therefore, I set the width of the div with the class `header-wrapper` to be 612 pixels.

The problem with this is now the div with the class `header-wrapper` is justify to the left instead of the center. This is because the parent element (the `div` with a class of `width-container`) does not center it. I would modify the class `width-container`, but this class is used in the hero section, so I did not want to modify it. Therefore, a new `div` with a class of `heading-container` is created to center the form headers and paragraphs correctly.

### Shared Class

After observing the styling of the `input` elements and the submit button, they share a lot of similar styling. For example, the `padding`, `border`, `border-radius`, `font-size`, `color`, `line-height`, and `line-spacing` are the same. Instead of copy-pasting these styles to each element, I created a CSS class called `outline` that is shared. Additionally, this class is used in the call-to-action button in the hero section.

### Spacing

In the desktop and mobile Figma design, the spacing between the name and email `input` elements are 29 pixels, and the spacing between the email `input` element and the submit button is 18 pixels. I made sure this is accounted for in the `styles.css`.

### Submit Button

I updated the styling of the submit button. In the desktop Figma design, the submit button is centered with the form, but in the mobile Figma design, it is justified to the left of the form. I made sure this is accounted for in the `styles.css`.

The submit button has a submit event listener. Initially, the event listener is added before the DOM content is loaded. This leads to an error, saying that the function `addEventListener` is not defined. Therefore, I moved the submit event listener inside the `DOMContentLoaded` event listener so the function `addEventListener` is defined.

For the logic of the submit button, it initially accepts any name and email, even empty fields. To fix this, I got the value of the name and email from their respective `input` elements and first trimmed them using the `trim` function. For example, if the user enters their name as ` Darren`, the whitespaces from the front and back of the string will be trimmed, so in the form validation, the name value will be `Darren`. After trimming the `input` values, I check if the name and email are valid.

1. For the name, I simply check if the name is empty or not. If it is empty, an error message will be displayed under the name input.
2. For the email, there are four errors that I check:
    1. The email is empty.
    2. The email does not contain an '@'.
    3. The email does not have a part before the '@'.
    4. The email does not have a part after the '@'.

The email input already has a `type` of `email`, so in most browsers, a form would not submit if the email does not contain an '@'; the email does not have a part before the '@', or the email does not have part after the '@'. However, if a browser does not have email validation, then this fallback that I created will be used.

If there are no errors in the name or email, then an alert will be displayed, saying `Form submitted!`. Please read the next section about how the error messages are displayed.

### Error Messages

If there are errors in the form, a small, red message will appear under the `input` element saying an error has occurred. The error message will have a `display` of `block` if an error occurs, but if there is no error, then the error message will have a `display` of `none`.

There are one error message for the name `input`: `Name cannot be empty`. There are four error messages for the email `input`:

1. `Email cannot be empty`
2. `Email must include an '@'`
3. `A part must come before the '@'`
4. `A part must follow the '@'`

Since there is only one error message for the name `input`, we can write the error message below the `input` element and change the `display` property based on if there is a name error or not. Since there is four error messages for the email `input`, we have to manually change the `textContent` of the email error element.

## Footer

### Design

The initial footer did not resemble the Figma page. For example, the copyright text was not the same; the background color and text color are different, and the back-to-top button was not styled. I made sure that the footer in the page resembles the Figma design.

### Back-to-Top Button

I styled the back-to-top button to resemble the button in the Figma design. I used a `position` of `absolute`. According to the Figma, it is 25 pixels higher than the `footer` element. In the desktop page, the back-to-top button is `48` pixels to the left of the right edge of the `footer` element, and on the mobile page, the horizontal location of the back-to-top button is in the middle of the `footer` element. I made sure this is accounted for in the `styles.css`.

Initially, the back-to-top button was an `anchor` element that links to the top of the current page. This was very jumpy, so I replaced the `anchor` element with a `button` element and used the `window.scrollTo({ top: 0, behavior: 'smooth' });` on the button. This smoothly scrolls the window to the top of the page rather than jump.

A known error was the back-to-top button is always shown in the page. This is because the initial logic is incorrect. In the `script.js` file, if the `window.scrollY` is greater than 500 pixels, it will set the back-to-top button `display` to `block`, but if it is less than 500 pixels, it does not set the back-to-top button `display` to `none`. To fix this, I use the `visibility` property instead of the `display` property because I needed to use the `flex` display on the back-to-top button to center the arrow icon. So, if the `window.scrollY` is greater than 500 pixels, it will set the back-to-top button `visibility` to `visible`; otherwise, it will set the `visibility` to `hidden`.

### Distance Between Form and Footer

In the Desktop page Figma design, we can see that the distance between the form and the footer (not the back-to-top button) is 89 pixels. In the Mobile page Figma design, the distance changes to 114 pixels. I made sure this is accounted for in the `styles.css`.
