// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import gmail from '../../assets/Image/mail.svg'
// import drive from '../../assets/Image/drive.svg'
// import meet from '../../assets/Image/meet.svg'
// import calender from '../../assets/Image/calender.svg'
// import chat from '../../assets/Image/chat.svg'
// import docs from '../../assets/Image/docs.svg'
// import sheet from '../../assets/Image/sheet.svg'
// import slide from '../../assets/Image/slide.svg'
// import forms from '../../assets/Image/forms.svg'
// import notebook from '../../assets/Image/notebook.svg'
// import keep from '../../assets/Image/keep.svg'
// import appsheet from '../../assets/Image/appsheet.svg'




// // 👉 Replace with your actual image paths
// const workspaceApps = [
//   { name: "Gmail", img: gmail },
//   { name: "Drive", img: drive },
//   { name: "Meet", img: meet },
//   { name: "Calendar", img:calender },
//   { name: "Chat", img: chat },
//   { name: "Docs", img:docs},
//   { name: "Sheets", img:sheet },
//   { name: "Slides", img: slide },
//   { name: "Forms", img: forms },
//   { name: "NoteBook", img: notebook },
//   { name: "Keep", img: keep },
//   { name: "AppSheet", img: appsheet },
// ];

// const WorkspaceApp = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <section className="relative py-20 bg-gray-100 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <div data-aos="fade-up">
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
//             Empower Your Team to Innovate,
//             <br className="hidden md:block" />
//             Collaborate & Grow
//           </h2>

//           <p className="mt-6 text-gray-600 md:text-lg max-w-3xl mx-auto leading-relaxed">
//             Ramesh Corp brings powerful Google Workspace solutions to businesses 
//             across Nepal. From secure communication to real-time collaboration, 
//             we help your team work smarter — anytime, anywhere.
//           </p>

//           <p className="mt-4 text-gray-600 md:text-lg max-w-3xl mx-auto leading-relaxed">
//             As a trusted Google Partner, we ensure smooth onboarding, reliable 
//             support, and scalable tools designed for modern teams.
//           </p>

//           <h3 className="mt-10 text-xl md:text-2xl font-semibold text-gray-800">
//             Google Workspace Includes:
//           </h3>
//         </div>

//         {/* Icons Grid */}
//         <div
//           className="mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 items-center"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           {workspaceApps.map((app, index) => (
//             <div
//               key={index}
//               className="flex justify-center group transition duration-300"
//             >
//               <img
//                 src={app.img}
//                 alt={app.name}
//                 className="h-14 md:h-16 object-contain transition duration-300 group-hover:scale-110"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkspaceApp;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gmail from '../../assets/Image/mail.svg'
import drive from '../../assets/Image/drive.svg'
import meet from '../../assets/Image/meet.svg'
import calender from '../../assets/Image/calender.svg'
import chat from '../../assets/Image/chat.svg'
import docs from '../../assets/Image/docs.svg'
import sheet from '../../assets/Image/sheet.svg'
import slide from '../../assets/Image/slide.svg'
import forms from '../../assets/Image/forms.svg'
import notebook from '../../assets/Image/notebook.svg'
import keep from '../../assets/Image/keep.svg'
import appsheet from '../../assets/Image/appsheet.svg'

const workspaceApps = [
    { name: "Gmail", img: gmail },
    { name: "Drive", img: drive },
    { name: "Meet", img: meet },
    { name: "Calendar", img: calender },
    { name: "Chat", img: chat },
    { name: "Docs", img: docs },
    { name: "Sheets", img: sheet },
    { name: "Slides", img: slide },
    { name: "Forms", img: forms },
    { name: "Notebook", img: notebook },
    { name: "Keep", img: keep },
    { name: "AppSheet", img: appsheet },
];

const WorkspaceApp = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

            {/* Background Glow Effects */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl"></div>

            <div className="relative max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Empower Your Team to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Collaborate & Grow</span>
                    </h2>

                    <p className="mt-6 text-gray-600 md:text-lg max-w-3xl mx-auto leading-relaxed">
                        Trusted Google Workspace Partner in Nepal delivers modern Google Workspace solutions to help
                        your business communicate smarter, collaborate faster, and scale confidently.
                    </p>

                    <h3 className="mt-12 text-xl md:text-2xl font-semibold text-gray-800">
                        Everything You Need in One Powerful Suite
                    </h3>
                </div>

                {/* Stylish Grid */}
                <div
                    className="mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 items-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {workspaceApps.map((app, index) => (
                        <div
                            key={index}
                            className="flex justify-center group transition duration-300"
                        >
                            <img
                                src={app.img}
                                alt={app.name}
                                className="h-14 md:h-16 object-contain transition duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WorkspaceApp;