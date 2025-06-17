// // import React from "react";
// // import Card from "react-bootstrap/Card";
// // import Button from "react-bootstrap/Button";
// // import { CgWebsite } from "react-icons/cg";
// // import { BsGithub } from "react-icons/bs";

// // function ProjectCards(props) {
// //   return (
// //     <Card className="project-card-view">
// //       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
// //       <Card.Body>
// //         <Card.Title>{props.title}</Card.Title>
// //         <Card.Text style={{ textAlign: "justify" }}>
// //           {props.description}
// //         </Card.Text>
// //         <Button variant="primary" href={props.ghLink} target="_blank">
// //           <BsGithub /> &nbsp;
// //           {props.isBlog ? "Blog" : "GitHub"}
// //         </Button>
// //         {"\n"}
// //         {"\n"}

// //         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

// //         {!props.isBlog && props.demoLink && (
// //           <Button
// //             variant="primary"
// //             href={props.demoLink}
// //             target="_blank"
// //             style={{ marginLeft: "10px" }}
// //           >
// //             <CgWebsite /> &nbsp;
// //             {"Demo"}
// //           </Button>
// //         )}
// //       </Card.Body>
// //     </Card>
// //   );
// // }
// // export default ProjectCards;
// import React from "react";
// import Card from "react-bootstrap/Card";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProjectCards;
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineFileText } from "react-icons/ai";

function ProjectCards(props) {
  // List of projects that should have the "View Project" button
  const projectsWithDemoLink = [
    "Scorewise - GRE Essay Practice Tool",
    "Depth and Dimension Company Website",
    "DonateNow - Blood Donation App",
    "The Wall - Twitter Clone"
  ];

  return (
    <Card className="project-card-view" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
        <Card.Title
          style={{
            fontSize: "1.4em",
            fontWeight: "600",
            color: "#c084f5",
            marginBottom: "15px",
            fontFamily: "Ubuntu"
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "justify",
            color: "#ffffff",
            fontSize: "1.05em",
            marginBottom: "10px",
            flex: '1 0 auto'
          }}
        >
          {props.description}
        </Card.Text>
        <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
          {props.demoLink && projectsWithDemoLink.includes(props.title) && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CgWebsite style={{ marginRight: '5px' }} /> View Project
            </Button>
          )}
          {props.googleDriveLink && (
            <Button
              variant="primary"
              href={props.googleDriveLink}
              target="_blank"
              style={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <AiOutlineFileText style={{ marginRight: '5px' }} /> View Paper
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
