<!-- PSEUDO GUIDE -->
COMPONENT: Represent a Next.js component.
FILE: Represent a file within the project.
DIRECTORY: Represent a directory within the project.
IMPORT: Represent importing a module or component.
EXPORT: Represent exporting a module or component.
FUNCTION: Represent a function in a component.
STATE: Represent a state variable.
PROP: Represent a property passed to a component.
EVENT: Represent an event handler.
CONDITION: Represent a conditional rendering or statement.
LOOP: Represent a loop for rendering lists.

<!-- TEMPLATE PSEUDO -->
DIRECTORY pages
  FILE index.js
    COMPONENT Home
      IMPORT Header from '../components/Header'
      IMPORT Footer from '../components/Footer'

      STATE posts
      FUNCTION fetchPosts
      FUNCTION handleClick

      RENDER
        Header
        CONDITION if posts.length > 0
          LOOP for post in posts
            COMPONENT PostCard
              PROP post
              EVENT onClick=handleClick
        Footer
    EXPORT Home


<!-- TopBanner Pseudo -->
COMPONENT TopBanner
  IMPORT profilePicture from '../assets/profile-picture.png'
  IMPORT profilePictureMask from '../assets/profile-picture-mask.png'

  RENDER
    div.container
      div.left-section
        div.diamond-background
          img.profilePicture
            - src: profilePicture
          img.profilePictureMask
            - src: profilePictureMask
      div.right-section
        h1.lawyerName
          - text: Jane Doe
        h2.slogan
          - text: Lorem ipsum dolor sit amet

EXPORT TopBanner