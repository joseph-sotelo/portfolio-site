import ScrollSectionsFormatter from "@/components/scroll-sections/scroll-sections-formatter"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    return(
        <MainLayout>
            <ScrollSectionsFormatter />
        </MainLayout>
    )
}

// In Spring 2025, I created an app called HiveFive that aims to speed up large-scale beehive inspection operations. Here I outline two ways I used generative AI to help me. 
// I often use AI to generate storyboards of user journeys, but it was particularly essential for HiveFive. The app is very niche, catering to a small set of users who have knowledge of the pollination industry. 
// This meant that presenting the concept to designers, professors, mentors, and the public would be challenging. How could I introduce them to the context and industry surrounding the app? How could I help them appreciate the app the way a beehive inspector would?
// ChatGPT helped me solve this problem by allowing me to quickly create detailed storyboard images for my presentations. Below are some examples ofthe images I created, along with their corresponding prompts. 

// In addition to imagery, also used Claude for coding. 
// For context, HiveFive is a Vite + React application. I used ArcGIS for the map components, and a customized version of shadcn for a lot of the other UI components. 
// I used Claude for:
// code completion
// bug fixes
// Why are these tailwind classnames being ignored?
// breaking up monolithic components
// Split client-details.tsx up into smaller components for better maintainability and readability. Store the components in the components/clients/client-details directory. Follow similar patterns to those of the mobile-sheet and map components.
// refactoring
// In inspection-section.tsx, there is some logic that dynamically renders the badge component. Extract the logic so that it can be reused elsewhere.
// Translate this tailwind css into normal css

// Generate an image of two male beekeepers walking away from a pickup truck in an almond orchard. They are wearing full beekeeping suits, with brimmed hats and gloves. One of them has an ipad with a durable case. They have distinct body types. 

// Create an image of the same two beekeepers walking up to a collection of beehive boxes.

// Generate a new frontal image. The one on the right has removed the lid of the hive and is examining one of the frames. The other is entering data into the ipad with a stylus.

// Create an image of a perplexed hispanic man using his laptop at a home desk space.
// Make everything a little more shabby and cluttered.

// Generate an image of a female farmer in an almond orchard, talking on the phone with a vexed expression on her face. 

// Generate an image of this man wearing a beekeeping suit with a brimmed hat and gloves. He is using an ipad with a stylus. He is in an almond orchard.




// {
//     "key": "intro",
//     "componentType": "column",
//     "columnSections": [
//         [
//             "header",
//             "How I use generative AI"
//         ],
//         [
//             "mainText",
//             "In Spring 2025, I created an app called HiveFive that aims to speed up large-scale beehive inspection operations. Here I outline two ways I used generative AI to help me."
//         ],
//         [
//             "bigText",
//             "1. Storyboards"  
//         ],
//         [
//             "mainText",
//             "I often use AI to generate storyboards of user journeys, but it was particularly essential for HiveFive. The app is very niche, catering to a small set of users who have knowledge of the pollination industry. This meant that presenting the concept to designers, professors, mentors, and the public would be challenging."
//         ],
//         [
//             "mainText",
//             "How could I introduce them to the context and industry surrounding the app? How could I help them appreciate the app the way a beehive inspector would? ChatGPT helped me solve this problem by allowing me to quickly create detailed storyboard images for my presentations. Below are some examples ofthe images I created, along with their corresponding prompts."
//         ]
//     ]
// },