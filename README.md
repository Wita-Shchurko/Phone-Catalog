# Phone catalog

Implementation of catalog with React and Typescript according to [design](https://www.figma.com/file/uEetgWenSRxk9jgiym6Yzp/Phone-catalog-redesign?node-id=1%3A2)
[Open the site](https://wita-shchurko.github.io/Phone-Catalog/)


I structured and implemented a web application with organized folders and styling using SCSS and BEM naming.

On the home page, I fetched and displayed products with a slider and brand new block. For phones, tablets, and accessories pages, I implemented fetching, sorting, and pagination with loaders. The product details page shows product details, related products, a back button, and breadcrumbs.

In the cart, I implemented adding, removing, and changing quantities of items, along with saving and loading the cart from local storage. The card displays the total quantity. Favorites functionality allows adding and removing items with a count displayed.

A search component filters products on appropriate pages. Search parameters are saved in the URL. For non-matching queries, a NoSearchResults component is displayed.