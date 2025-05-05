 CRM Dashboard (Frontend Only) 

 Tech Stack

- **Next.js** – React framework for building the frontend
- **CSS Modules** – For scoped and organized styling
- **Custom Components** – Built for a clean and responsive UI

Components 
## Sidebar Component
### Breakdown of the Code:

1. **React & Image Import**:
   - The component uses **React** to create the structure.
   - **Image** from `next/image` is used to optimize the avatars and images for better performance.

2. **Structure**:
   - The sidebar is divided into different sections, such as the logo, navigation items, projects, and team members.
   
3. **Logo**:
   - At the top, there’s a section for the logo with the text **BizLink**.

4. **Navigation Menu**:
   - The **nav-section** contains links to different pages like **Dashboard**, **Tasks**, **Activity**, **Customers**, and **Settings**. 
   - The **Customers** link is marked as **active** to show the current page the user is on.

5. **Projects Section**:
   - Below the navigation, there's a list of projects, like **BizConnect**, **Growth Hub**, and others.
   - Each project has a badge that shows the number of items or tasks related to that project.

6. **Members Section**:
   - This part lists all the team members, their avatars, names, and roles.
   - The avatars are small profile pictures that use the **Image** component for better loading and performance.
   - A green dot next to each avatar shows whether the member is online.

7. **Add Member Button**:
   - A button is provided to add new team members (this is just a visual feature, not functional in this code).

8. **CSS Modules**:
   - **Sidebar.css** is used to style the sidebar, and **CSS Modules** ensure that the styles are scoped only to this component.
  
## Header Component 

The **Header** component is part of the **BizLink CRM Dashboard**. It provides a user-friendly interface for searching, sorting, filtering, and managing customer data, as well as accessing user-specific settings.

### Breakdown of the Code:

1. **React & Icons Import**:
   - The component uses **React** to build the structure.
   - Icons from **react-icons** are used to represent actions like search, sort, filter, and user settings. Specifically, the icons used are `FaSearch`, `FaSort`, `FaFilter`, and `FaUser`.

2. **Search Bar**:
   - The **searchContainer** contains a search icon (`FaSearch`) and an input field where users can search for a specific customer. The input field has a placeholder text: *"Search customer..."*.

3. **Header Actions**:
   - The **headerActions** section contains four buttons:
     - **Sort by** button (with the `FaSort` icon) allows users to sort customer data.
     - **Filters** button (with the `FaFilter` icon) allows users to apply filters to the displayed data.
     - **Me** button (with the `FaUser` icon) is likely used to access user-specific settings or profile.
     - **+ Add customer** button is a simple call-to-action button for adding a new customer.

4. **CSS Modules**:
   - **Header.module.css** is used to style the header. **CSS Modules** ensure that these styles are scoped specifically to this component, preventing any global styling conflicts.

5. **Layout and Structure**:
   - The layout is responsive and clean. The search bar is placed on the left side, while the action buttons (like sort, filters, and add) are aligned to the right for easy access.

## Stats Component Explanation

The **Stats** component provides a visual representation of the customer and financial data, including bar charts, gauges, and key metrics. It displays insights on new and previous customers, successful deals, tasks in progress, and prepayments.

### Breakdown of the Code:

1. **Data Initialization**:
   - The component starts by defining data arrays for the **days of the week**, **new customers**, and **previous customers** for each day.
   - The `maxCustomers` variable represents the maximum number of customers for scaling purposes, and `percent` represents the percentage of successful deals.

2. **Bar Chart Visualization**:
   - The bar chart displays the number of new and previous customers for each day. 
   - The **y-axis** is labeled with values (10, 5, and 0).
   - The bars represent customer data, with solid bars for **new customers** and striped bars for **previous customers**.
   - The heights of the bars are dynamically calculated based on the data for each day, ensuring the chart scales correctly.

3. **Beautiful Arc Gauge**:
   - The arc gauge is an SVG-based component that visually represents the percentage of successful deals.
   - The gauge is styled as a circular progress ring, with the percentage shown in the center. The `strokeDashoffset` is used to calculate the progress based on the `percent` value (68%).

4. **Metrics Section**:
   - Two metrics are displayed: 
     - **Tasks in progress**: Shows the number of tasks currently being worked on.
     - **Prepayments from customers**: Displays the total amount of prepayments made by customers.

### Key Features:
- **Bar Chart**: Visualizes daily customer data with a dual bar system for new and previous customers.
- **Gauge**: A circular progress ring that shows the percentage of successful deals.
- **Metrics**: Key performance indicators like tasks in progress and prepayments are displayed with arrow indicators.

## CRMPipelineBoard Component
Displaying leads at various stages, such as "Contacted", "Negotiation", "Offer Sent", and "Deal Closed". Each stage shows key information like company details, activity (messages and calls), and contact info.

### Features
- Displays leads in stages of the sales pipeline.
- Shows company details, messages, calls, dates, and manager info.
- Highlights specific leads with different styles (e.g., dark theme for "Prime Estate").
- Fully responsive design.


### Output Image
![image](https://github.com/user-attachments/assets/695e4e10-3b74-4726-8eb3-9e0133e7800f)




## INSTRUCTIONS TO CLONE AND RUN
 ### Clone the repository :
     git clone https://github.com/VibhooshanaKannan/CRM.git
 ### Navigate to the Project Directory :
     cd crm
 ### Install Dependencies :
     npm install
 ### Run :
    npm run dev

 
